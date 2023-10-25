/* @ts-ignore */
import { hash } from 'bcrypt';
import { cookies } from 'next/headers';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import { SECRET } from '@/constants';
import { login } from '@/services/AuthService';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // day * hours * minutes * seconds
  },
  secret: SECRET,
  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'Login',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const creds = credentials;
        if (!creds) return null;
        const hashedPassword = await hash(creds.password, 10);
        try {
          const { data } = await login(creds.email, creds.password);
          if (!data?.apiToken) return null;

          cookies().set('apiToken', data?.apiToken);
          return { ...data, password: hashedPassword } as any;
        } catch (e) {
          console.log(e);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return !!user;
    },
    async session({ token }) {
      const sanitizedToken = Object.keys(token).reduce((p, c) => {
        // strip unnecessary properties
        if (c !== 'iat' && c !== 'exp' && c !== 'jti' && c !== 'apiToken') {
          return { ...p, [c]: token[c] };
        } else {
          return p;
        }
      }, {});
      return { ...sanitizedToken, apiToken: token.apiToken } as any;
    },
    async jwt({ token, user }) {
      if (typeof user !== 'undefined') {
        return user as unknown as JWT;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
