'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FC, useState } from 'react';

import { Button, Title } from '@/components/ui';
import ROUTES from '@/constants/routes';
import { registration } from '@/services/AuthService';
import { IRegistration } from '@/types/services/AuthServiceEnteties';
import { SHOW_HIDE_CONTENT } from '@/utils/animations';

import ApplicantsForm from './common/ApplicantsForm';
import BusinessForm from './common/BusinessForm';
import FormSwitcher from './common/FormSwitcher';
import s from './styles.module.scss';

type FormType = 'company' | 'candidate';

const RegistrationPage: FC = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState<FormType>(
    (searchParams.get('role') as FormType) ?? 'company',
  );

  const ifBusinessSwitched = formType === 'company' ? 'visible' : 'hidden';
  const ifApplicantsSwitched = formType === 'candidate' ? 'visible' : 'hidden';

  const onSubmitForm = async (formData: IRegistration): Promise<void> => {
    const { status } = await registration(formData);
    if (status) {
      await signIn('login', {
        ...{ email: formData.email, password: formData.password },
        redirect: false,
      }).then(() => push(ROUTES.USER));
    }
  };
  return (
    <div id="loginForm" className={s.registerContainer}>
      <FormSwitcher formType={formType} setFormType={setFormType} />
      <Title name="h2">
        <span>WELCOME!</span> LET’S GET STARTED
      </Title>
      <p className={s.freePeriodText}>Use your free period !</p>
      <div className={s.textContent}>
        <p>Don’t have an account?</p>
        <Button
          styleType="clear"
          className={s.btnEmpty}
          onClick={() => push(ROUTES.AUTH.LOGIN)}
        >
          log in
        </Button>
      </div>
      <AnimatePresence>
        <motion.div
          key="business"
          initial={ifBusinessSwitched}
          animate={ifBusinessSwitched}
          exit={ifBusinessSwitched}
          variants={SHOW_HIDE_CONTENT}
        >
          {ifBusinessSwitched === 'visible' && <BusinessForm onSubmit={onSubmitForm} />}
        </motion.div>
        <motion.div
          key="applicants"
          initial={ifApplicantsSwitched}
          animate={ifApplicantsSwitched}
          exit={ifApplicantsSwitched}
          variants={SHOW_HIDE_CONTENT}
        >
          {ifApplicantsSwitched === 'visible' && (
            <ApplicantsForm onSubmit={onSubmitForm} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RegistrationPage;
