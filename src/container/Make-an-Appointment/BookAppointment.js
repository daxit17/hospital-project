import React, { useEffect, useState } from "react";
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function BookAppointment(props) {

  const history = useHistory();

  const [update, setUpdate] = useState(false);

  // handleInsert

  const handleInsert = (values) => {

    let localData = JSON.parse(localStorage.getItem("book_apt"));

    let id = Math.floor(Math.random() * 1000);

    let data = {
      id: id,
      ...values
    }

    if (localData === null) {
      localStorage.setItem("book_apt", JSON.stringify([data]));
    } else {
      localData.push(data);
      localStorage.setItem("book_apt", JSON.stringify(localData));
    }

    history.push("/ListAppointment");

  }

  // useEffect

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("book_apt"));

    if (localData && history.location.state !== null) {

      let localData = JSON.parse(localStorage.getItem("book_apt"));

      let fData = localData.filter((l) => l.id === history.location.state.id);

      formik.setValues(fData[0]);

      setUpdate(true);
    }

  }, []);

  // updateData

  const updateData = (values) => {

    let localData = JSON.parse(localStorage.getItem("book_apt"));

    let newData = localData.map( (v) => {

      if (v.id === values.id) {
        return values;
      } else {
        return v;
      }

    });

    localStorage.setItem("book_apt",JSON.stringify(newData));

    formik.resetForm();

    setUpdate(false);

    history.push("/ListAppointment");

  }


  // schema(yup)

  let schema = yup.object().shape({
    name: yup.string().required("Please enter your name."),
    email: yup.string().required("Please enter email id.").email("Please enter valid email id."),
    phone: yup.string().required("Please enter your mobile number.").min(10, "Please enter valid mobile number."),
    date: yup.string().required("Please select appointment date."),
    department: yup.string().required("Please select department"),
    doctor: yup.string().required("Please select doctor"),
    message: yup.string().required("Please enter any message")
  });

  // formik

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      doctor: '',
      message: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      if (update) {
        updateData(values);
      } else {
        handleInsert(values);
      }
    },
  });

  let { handleChange, errors, handleSubmit, handleBlur, touched, values } = formik;

  return (
    <main>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
          </div>
          <div className="row">
            <div className="col-6">
              <NavLink to="/BookAppointment" exact>
                Book-Appointment
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink to="/ListAppointment" exact>
                List-Appointment
              </NavLink>
            </div>
          </div>
          <Formik>
            <Form className="php-email-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4 form-group">
                  <input
                    value={values.name}
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p>{errors.name && touched.name ? errors.name : ''}</p>
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    value={values.email}
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p>{errors.email && touched.email ? errors.email : ''}</p>
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    value={values.phone}
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p>{errors.phone && touched.phone ? errors.phone : ''}</p>
                  <div className="validate" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input
                    value={values.date}
                    type="date"
                    name="date"
                    className="form-control datepicker"
                    id="date"
                    placeholder="Appointment Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p>{errors.date && touched.date ? errors.date : ''}</p>
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    value={values.department}
                    name="department"
                    id="department"
                    className="form-select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  <p>{errors.department && touched.department ? errors.department : ''}</p>
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    value={values.doctor}
                    name="doctor"
                    id="doctor"
                    className="form-select"
                    onChange={handleChange}
                    onBlur={handleBlur}>
                    <option value>Select Doctor</option>
                    <option value="Doctor 1">Doctor 1</option>
                    <option value="Doctor 2">Doctor 2</option>
                    <option value="Doctor 3">Doctor 3</option>
                  </select>
                  <p>{errors.doctor && touched.doctor ? errors.doctor : ''}</p>
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  value={values.message}
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message (Optional)"
                  defaultValue={""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p>{errors.message && touched.message ? errors.message : ''}</p>
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your appointment request has been sent successfully. Thank you!
                </div>
              </div>
              <div className="text-center">
                {
                  (update) ?
                    <button type="submit">Update an Appointment</button>
                    :
                    <button type="submit">Make an Appointment</button>
                }
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
}

export default BookAppointment;
