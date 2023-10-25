'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Button, Checkbox, Input, InputPassword, Title } from '@/components/ui';
import ROUTES from '@/constants/routes';
import { EMAIL_RULE, PASSWORD_RULE } from '@/utils/formVaidations';

import { FormFooter } from '../common/FormFooter';
import s from './styles.module.scss';

interface IFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const LoginPage: FC = () => {
  const { push } = useRouter();

  const {
    handleSubmit,
    reset,
    control,
    clearErrors,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: 'onBlur',
  });

  const onSubmut: SubmitHandler<IFormValues> = async (data): Promise<void> => {
    await signIn('login', {
      ...data,
      redirect: false,
    });
    reset();
    clearErrors();
    push(ROUTES.USER);
  };

  return (
    <form id="loginForm" className={s.loginContainer} onSubmit={handleSubmit(onSubmut)}>
      <Title name="purpleH2">
        SIGN IN TO YOUR <span>ACCOUNT</span>
      </Title>
      <div className={s.textContent}>
        <p>Don’t have an account?</p>
        <Button
          styleType="clear"
          className={s.btnEmpty}
          onClick={() => push(ROUTES.AUTH.REGISTRATION)}
        >
          Sign up
        </Button>
      </div>
      <div className={s.inputBlockWrapper}>
        <Controller
          name={'email'}
          control={control}
          rules={EMAIL_RULE}
          defaultValue={''}
          render={({ field: { onChange, value } }) => (
            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              value={value}
              onChange={onChange}
              error={errors.email?.message || ''}
            />
          )}
        />
        <Controller
          name={'password'}
          control={control}
          rules={PASSWORD_RULE}
          defaultValue={''}
          render={({ field: { onChange, value } }) => (
            <InputPassword
              id="password"
              name="password"
              label="Password"
              value={value}
              onChange={onChange}
              error={errors.password?.message || ''}
            />
          )}
        />
      </div>
      <Controller
        name={'remember'}
        control={control}
        defaultValue={false}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            checked={value}
            onChange={onChange}
            error={errors.remember?.message || ''}
          >
            Remember me
          </Checkbox>
        )}
      />
      <div className={s.btnsBlockWrapper}>
        <Button type="submit" styleType="bg" className={s.btnFilled}>
          Login
        </Button>
        <Button styleType="clear" className={s.btnEmpty} onClick={() => push('/')}>
          Forgot your password?
        </Button>
      </div>
      <FormFooter />
    </form>
  );
};

export default LoginPage;
