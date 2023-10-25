import { FC } from 'react';
import { Accordion, Container } from 'react-bootstrap';

import s from './styles.module.scss';

const FAQ_ITEMS = [
  {
    title: 'How to create an account?',
    subtitle:
      "It's easy! Go to the Sign Up section and fill in the required information. You can also sign up using your Facebook or Google account.",
  },
  {
    title: 'Is my data secure?',
    subtitle:
      'Yes, we take user privacy seriously. Please review our Privacy Policy for more information on how we protect your data.',
  },
  {
    title: 'Can I cancel my subscription?',
    subtitle: 'Yes, you can cancel your subscription anytime from your account settings.',
  },
];

const FAQ: FC = () => {
  return (
    <Container className={s.container}>
      <h3 className={s.title}>FAQ</h3>
      <Accordion>
        {FAQ_ITEMS.map((item, index) => (
          <Accordion.Item eventKey={`${index}`} key={index}>
            <Accordion.Header>
              <h3 style={{ marginBottom: 0 }}>{item.title}</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p style={{ marginBottom: 0, fontSize: '16px' }}>{item.subtitle}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQ;
