import React, {useState} from 'react'
import PropTypes from 'prop-types';
import './CustomRegistrationGe.css';
import TimeSelectionField from './TimeSelectionField'

const CustomRegistrationGe = ({start, end, values, timeList}) =>{
  const [lastSelect, setLastSelect] = useState('')
  const [activeList, setActiveList] = useState([])
  const [subordinaryList, setSubordinaryList] = useState([])

    return(
        <div className="time-container">
         <TimeSelectionField 
            nameValue={start} 
            timeList={timeList} 
            active={values.checkin}
            type="checkin" 
            label="Check-in"
            lastSelect={lastSelect}
            setLastSelect={setLastSelect}
            activeList={activeList}
            setActiveList={setActiveList}
            subordinaryList={subordinaryList}
            setSubordinaryList={setSubordinaryList}/>
         <TimeSelectionField 
            nameValue={end} 
            timeList={timeList} 
            active={values.checkout}
            type="checkout" 
            label="Check-out"
            lastSelect={lastSelect}
            setLastSelect={setLastSelect}
            activeList={activeList}
            setActiveList={setActiveList}
            subordinaryList={subordinaryList}
            setSubordinaryList={setSubordinaryList}/>
        </div>
  

    )

}

CustomRegistrationGe.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  values:PropTypes.object.isRequired,
  timeList:PropTypes.array.isRequired,

};

CustomRegistrationGe.defaultProps = {
  start: '',
  end:'',
  values:{},
  timeList:[]
};

export default CustomRegistrationGe


