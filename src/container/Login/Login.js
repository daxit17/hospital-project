import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';

const Login = () => {
  const [userType, setUserType] = useState('login')
  const [reset, setReset] = useState(false);

  let schema = yup.object().shape({
    email: yup.string().required("Please enter email id").email("Please enter valid email id"),
    password: yup.string().required("Please enter password."),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema : {schema},
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  let { handleChange, error, handleSubmit } = formik;

  return (
    <>
      <section id="appointment" className="appointment">
        <Container>
          <div className="section-title">
            {
              !reset ?
                userType === 'login' ?
                  <h2>Login</h2>
                  :
                  <h2>Signup</h2>
                :
                <h2>Reset Password</h2>
            }
          </div>
          <Formik values={formik}>
            <Form onSubmit={handleSubmit} className="php-email-form">
              <Row className="d-flex justify-content-center">
                {
                  userType === 'login' ?
                    null
                    :
                    <Col md={8}>
                      <FormGroup className="mt-3 mt-md-0">
                        <Input type="text" className="form-control" name="name" id="name" placeholder="Your Name" data-rule="name" data-msg="Please enter a valid name" />
                        <div className="validate" />
                      </FormGroup>
                    </Col>
                }
                <Col md={8}>
                  <FormGroup className="mt-3 mt-md-0">
                    <Input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange} />
                    <div className="validate" />
                    <p>{error}</p>
                  </FormGroup>
                </Col>
                {
                  !reset ?
                    <Col md={8}>
                      <FormGroup className="mt-3 mt-md-0">
                        <Input type="password" name="password" className="form-control" id="password" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter password" autoComplete="off" />
                        <div className="validate" onChange={handleChange}/>
                        <p>{error}</p>
                      </FormGroup>
                    </Col>
                    :
                    null
                }
              </Row>
              <div className="text-center">
                {
                  !reset ?
                    userType === 'login' ?
                      <Button type="submit" className='shadow-none' onSubmit={handleSubmit}>Login</Button> : <Button type="submit" className='shadow-none'>Signup</Button>
                    :
                    <Button type="submit" className='shadow-none'>Submit</Button>
                }
              </div>
              <div className="text-center">
                {
                  !reset ?
                    userType === 'login' ?
                      <div>
                        <p className="d-inline mt-2">Create a new account: </p>
                        <Button onClick={() => { setUserType('signup'); setReset(false) }} className='btn text-primary text-decoration-underline bg-white shadow-none border-0'>Signup</Button>
                      </div>
                      :
                      <div>
                        <p className="d-inline mt-2">Already have an account? </p>
                        <Button onClick={() => { setUserType('login'); setReset(false) }} className='btn text-primary text-decoration-underline bg-white shadow-none border-0'>Login</Button>
                      </div> : <div>
                      <p className="d-inline mt-2">Already have an account? </p>
                      <Button onClick={() => { setUserType('login'); setReset(false) }} className='btn text-primary text-decoration-underline bg-white shadow-none border-0'>Login</Button>
                    </div>
                }
              </div>
              {
                userType === 'login' ?
                  <div className="text-center">
                    {
                      !reset ?
                        <Button onClick={() => { setReset(true) }} type='button' className='btn text-primary text-decoration-underline bg-white shadow-none border-0'>Forgot Password?</Button>
                        :
                        null
                    }
                  </div>
                  :
                  null
              }
            </Form>
          </Formik>
        </Container>
      </section>
    </>
  )
}

export default Login