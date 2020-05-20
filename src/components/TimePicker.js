import React from 'react'
import { Formik, Form } from 'formik';
import CustomRegistrationGe from './CustomRegistrationGe'
import moment from 'moment'
import './UserForm.css';
import * as Yup from 'yup';
import './TimePicker.css'
const TimePicker = () =>{
  const timeList=['09:00','09:30','10:00','10:30','11:00','11:30','12:00', '12:30','13:00',
                      '13:30','14:00','14:30','15:00','15:30','16:00']


const TimeSchema = Yup.object({
         
   checkin: Yup.string()
  .oneOf(timeList,'This time is tot available')
  .test(
    "time not valid",
    "Error",
    value =>{
     return moment(value, 'HH:mm', true).isValid();
    }
  ),
  checkout: Yup.string()
  .oneOf(timeList,'This time is tot available')
  .test(
    'test',
    'Checkout time error',
    function(value){
      let checkin = moment(this.parent.checkin, 'HH:mm')
      let checkout = moment(value, 'HH:mm')
      return checkout.isAfter(checkin);
    }
  ),

})

  return(
        <Formik
        initialValues={{checkin:'', checkout:''} }
        validationSchema={TimeSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 1000);
        }}
        >

        {({values})=>(
        <Form>
         <div>
           <CustomRegistrationGe start="checkin" end="checkout" values={values} timeList={timeList} />

        </div>
            <button type="submit">Submit</button>
        </Form>

        )}
        </Formik>
    )
}

export default TimePicker