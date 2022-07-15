import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';

const Login = () => {
  const [userType, setUserType] = useState('login')
  const [reset, setReset] = useState(false);

  let schemaObj, intObj;

  if (reset) {

    schemaObj = {
      email: yup.string().email("Please Enter Valid Email").required("Plaese Enter Email")
    }

    intObj = {
      email: '',
    }

  } else {
    if (userType === 'login') {

      schemaObj = {
        email: yup.string().required("Please enter email id").email("Please enter valid email id"),
        password: yup.string().required("Please enter password.")
      }
  
      intObj = {
        email: '',
        password: '',
      }
  
    } else {
  
      schemaObj = {
        name: yup.string().required("Please enter name"),
        email: yup.string().required("Please enter email id").email("Please enter valid email id"),
        password: yup.string().required("Please enter password.")
      }
  
      intObj = {
        name: '',
        email: '',
        password: '',
      }
  
    }
  }


  let schema = yup.object().shape(schemaObj);

  // handleData

  const handleData = (values) => {
    let localData = JSON.parse(localStorage.getItem("user"))

    if (localData === null) {
      localStorage.setItem("user",JSON.stringify([values]))
    } else {
      localData.push(values);
      localStorage.setItem("user",JSON.stringify(localData));
    }
  }

  // handleValue

  const handleValue = () => {
    localStorage.setItem("user" , "123");
  }

  const formik = useFormik({
    initialValues: intObj,
    validationSchema: schema,
    enableReinitialize:true,
    onSubmit: values => {

      if (userType === 'login') {
        handleValue(); 
      } else {
        handleData(values);
      }

    },
  });

  let { handleChange, errors, handleSubmit, handleBlur, touched } = formik;

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
                        <Input type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <p>{errors.name && touched.name ? errors.name : ''}</p>
                      </FormGroup>
                    </Col>
                }
                <Col md={8}>
                  <FormGroup className="mt-3 mt-md-0">
                    <Input type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p>{errors.email && touched.email ? errors.email : ''}</p>
                  </FormGroup>
                </Col>
                {
                  !reset ?
                    <Col md={8}>
                      <FormGroup className="mt-3 mt-md-0">
                        <Input type="password"
                          name="password"
                          className="form-control"
                          id="password"
                          placeholder="Your Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <p>{errors.password && touched.password ? errors.password : ''}</p>
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
                      <Button type="submit" className='shadow-none'>Login</Button>
                    : <Button type="submit" className='shadow-none'>Signup</Button>
                    : <Button type="submit" className='shadow-none'>Submit</Button>
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