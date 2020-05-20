import React, {useState} from 'react';
import CustomDatePicker from './CustomDatePicker';
import "react-datepicker/dist/react-datepicker.css";
import './UserForm.css'
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';



const UserForm = () => {
// const [initialValues, setInitialValues] = useState({ email: '', password:'', repassword:'', newsCheck: false, newsletter:'', date:new Date()});
 /*const [startDate, setStartDate] = useState(new Date());
 const [newsletter, setNewsletter] = useState(false);*/
 return (
   <section className="form-container">
    <Formik
    initialValues={{ email: '', password:'', repassword:'', frequency:'', mydate: new Date()} }
  //  initialValues={initialValues}
    //enableReinitialize
    validationSchema={Yup.object({
      email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
      password: Yup.string()
        //.max(15, 'Must be 15 characters or less')
        .matches(
          '(?=.*?[A-Z])(?=.*?[a-z])',
          'Password contain at least one uppercase and one lower case'
        )
        .required('Required'),
      repassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
        
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    }}
  >
    {({values, isSubmitting})=>(
    <Form>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <Field name="email" type="text"  />
        <div className="error">
          <ErrorMessage name="email"/>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <Field name="password" type="text" />
        <div className="error">
          <ErrorMessage name="password" />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="repassword">Repeat password</label>
        <Field name="repassword" type="text" disabled={isSubmitting}/>
        <div className="error">
          <ErrorMessage name="repassword" />
        </div>
      </div>
      <div className="input-group">
      <label>Select a date</label>
         <Field component={CustomDatePicker} name="mydate" selected={values.mydate} maxDate={new Date()} dateFormat="dd/MM/yyyy"/>
      </div>
      <div className="input-group">
        <label htmlFor="repassword">Send me the newsletler</label>
        <Field name="newsletter" type="checkbox" disabled={isSubmitting}/>
      </div>
      {values.newsletter ?
      <div className="input-group">
        <label htmlFor="repassword">I want to it receive every :</label>
        <Field as="select" name="frequency">
            <option value="week">week</option>
            <option value="month">month</option>
            <option value="year">year</option>
        </Field>
      </div>: null } 

      <button type="submit" disabled={isSubmitting}> Submit</button>
    </Form>)}
  </Formik>
  </section>
  )
}

export default UserForm;