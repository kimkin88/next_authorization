export enum AuthRole {
  COMPANY = 'company',
  CANDIDATE = 'candidate',
}

export interface IRegistration {
  email: string;
  password: string;
  name: string;
  role: AuthRole;
}
