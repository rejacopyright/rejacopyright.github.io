import React, {useState} from 'react'
import moment from 'moment'
import MomentUtils from '@date-io/moment';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

function Index(props){
  const [selectedDate, selectedDateSet] = useState(props.defaultValue || new Date(Math.round(new Date().getTime() / (1000*60*5)) * (1000*60*5)));
  const [isOpen, isOpenSet] = useState(false);
  function handleDateChange(e){
    selectedDateSet(e.toDate());
    props.onChange(e, props.name || false)
  }
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="" onClick={() => isOpenSet(true)}>
        {
          props.children ||
          <button type="button" className={`btn ${props.className}`}>
            <i className={`uil uil-clock ${props.showTime && 'mr-1'}`} />
            {props.showTime && moment(selectedDate).format('HH:mm')}
          </button>
        }
      </div>
      <TimePicker
        open={isOpen}
        onOpen={() => isOpenSet(true)}
        onClose={() => isOpenSet(false)}
        variant="dialog"
        label="Jam Masuk"
        inputVariant="outlined"
        hidden={true}
        ampm={false}
        minutesStep={5}
        value={selectedDate}
        onChange={handleDateChange}
        />
    </MuiPickersUtilsProvider>
  )
}

export default Index
