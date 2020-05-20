import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const CustomDatePicker = ({maxDate, selected, dateFormat}) =>{
    return (
        <DatePicker maxDate={maxDate} selected={selected} dateFormat={dateFormat} />
    )
}

export default CustomDatePicker