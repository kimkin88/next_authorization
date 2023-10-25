'use client';

import Link from 'next/link';
import { FC } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';

import { Logo } from '@/components/ui';
import ROUTES from '@/constants/routes';

const RegistrationPage: FC = () => {
  return (
    <Container className="d-flex flex-column justify-content-center min-vh-100">
      <Row className="align-items-center justify-content-center g-0">
        <Col lg={5} md={8} className="py-10 py-xl-0">
          <Card>
            <Card.Body className="p-4">
              <div className="mb-4 text-center">
                <Logo />
                <h1 className="mb-1 fw-bold">Registration</h1>
                <span>
                  Do you have an account?
                  <Link className="ms-1" href={ROUTES.AUTH.LOGIN}>
                    Login
                  </Link>
                </span>
              </div>
              <Form>
                <Row>
                  <Col md={12} className={'mb-3'}>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email address here" />
                    </Form.Group>
                  </Col>
                  <Col md={12} className={'mb-3'}>
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="**************"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className={'mb-3'}>
                    <Form.Group controlId="repeatPassword">
                      <Form.Label>Repeat password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="**************"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className={'mb-3'}>
                    <Form.Group className="d-md-flex justify-content-between align-items-center">
                      <Form.Check
                        type="checkbox"
                        id="formBasicCheckbox"
                        label="Remember me"
                      />
                      <a href="/authentication/forget-password">Forgot your password?</a>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  </Col>
                </Row>
              </Form>
              <hr className="my-4" />
              <div className="mt-4 d-flex justify-content-center gap-2">
                <Button
                  variant="outline-primary"
                  className="btn-social btn-facebook d-flex align-items-center justify-content-center"
                >
                  <Facebook />
                </Button>
                <Button
                  variant="outline-primary"
                  className="btn-social btn-twitter d-flex align-items-center justify-content-center"
                >
                  <Twitter />
                </Button>
                <Button
                  variant="outline-primary"
                  className="btn-social btn-linkedin d-flex align-items-center justify-content-center"
                >
                  <Linkedin />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
