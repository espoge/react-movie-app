import React from 'react'
import PropTypes from 'prop-types';

import "./SelectTimeOptions.css"


const SelectTimeOptions = ({lastSelect, type, activeList, field, form, subordinaryList, handleTime}) =>{

    return (
      <div>
      {lastSelect === type  
                ? 
            <div className="time-range">{activeList.map((el,i)=>(
                <input key={i} className={field.value === el ? 'selected-value' : ''} type="text" readOnly name={field.name}  value={el} onClick={(e)=>handleTime({value:e.target.value,form, field, type})}/>
            ))}</div>
              :
            <div className="time-range">{subordinaryList.map((el,i)=>(
                <input key={i} className={field.value === el ? 'selected-value' : ''} type="text" readOnly name={field.name}  value={el} onClick={(e)=>handleTime({value:e.target.value,form, field, type})}/>
            ))}</div>}
    </div> 
    )
}


SelectTimeOptions.propTypes = {
  lastSelect: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  activeList: PropTypes.array.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  subordinaryList: PropTypes.array.isRequired,
  handleTime: PropTypes.func.isRequired,

};


SelectTimeOptions.defaultProps = {
  lastSelect:'',
  type: '',
  activeList: [],
  field: {},
  form: {},
  subordinaryList: [],
  handleTime: ()=>null

}


export default SelectTimeOptions