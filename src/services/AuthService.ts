import { IRegistration } from '@/types/services/AuthServiceEnteties';
import { IDataResponse } from '@/types/services/interface';
import generalRequest from '@/utils/axiosSetup';

const login = async (email: string, password: string) => {
  try {
    const res = await generalRequest({
      method: 'POST',
      params: { email, password },
      url: 'login',
    });
    // @ts-ignore
    const user = { email, password, apiToken: res.token };

    return { status: true, data: user };
  } catch (error) {
    console.log(error);
    return { status: false, data: null };
  }
};

const registration = async (
  registrationData: IRegistration,
): Promise<IDataResponse<null>> => {
  try {
    const res = await generalRequest({
      method: 'POST',
      params: registrationData,
      url: 'register',
    });

    console.log(res);

    return { status: true, data: null };
  } catch (error) {
    console.log(error);
    return { status: false, data: null };
  }
};

export { login, registration };
