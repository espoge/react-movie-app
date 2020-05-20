import React from 'react';
import SelectTimeOptions from './SelectTimeOptions'
import PropTypes from 'prop-types';
import {  Field, ErrorMessage  } from 'formik';

const TimeSelectionField = ({nameValue, timeList,label,type,lastSelect,setLastSelect,activeList,setActiveList,subordinaryList,setSubordinaryList }) =>{
  const handleTime = ({value, form, field,type}) =>{

    if(type==='checkin'){
      const indx = timeList.indexOf(value)
      const active = timeList
      const subordinary = timeList.slice(indx + 1)
      setLastSelect(type)
      setActiveList(active)
      setSubordinaryList(subordinary)
   }

    if(type==='checkout'){
      const indx = timeList.indexOf(value)
      const active = timeList
      const subordinary = timeList.slice(0, indx)
      setLastSelect(type)
      setActiveList(active)
      setSubordinaryList(subordinary)
    }

    form.setFieldValue(field.name,value)
    }
  
    return (
            <label>{label} ({type})
             <Field name={nameValue}  >
               {({ field,form})=>(
                 <div>
                  <input type="text" 
                  name={field.name} 
                  value={field.value} 
                  onBlur={form.handleBlur(field.name)}
                  onChange={(e)=>handleTime({value:e.target.value,form, field, type})} />

                    <div>
                      <SelectTimeOptions 
                        lastSelect={lastSelect} 
                        type={type} 
                        field={field} 
                        form={form} 
                        activeList={activeList} 
                        subordinaryList={subordinaryList}
                        handleTime={handleTime}/>
                    </div>

                </div>
                 )}
              </Field>
             <ErrorMessage name={nameValue}/>
         </label>
    )
}


TimeSelectionField.propTypes = {
  nameValue: PropTypes.string.isRequired,
  timeList: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  lastSelect: PropTypes.string.isRequired,
  setLastSelect: PropTypes.func.isRequired,
  activeList: PropTypes.array.isRequired,
  setActiveList: PropTypes.func.isRequired,
  subordinaryList: PropTypes.array.isRequired,
  setSubordinaryList: PropTypes.func.isRequired,

};

TimeSelectionField.defaultProps = {
  nameValue: '',
  timeList: [],
  label: '',
  type: '',
  lastSelect: '',
  setLastSelect: ()=>null,
  activeList: [],
  setActiveList: ()=>null,
  subordinaryList: [],
  setSubordinaryList: ()=>null,
};

export default TimeSelectionField