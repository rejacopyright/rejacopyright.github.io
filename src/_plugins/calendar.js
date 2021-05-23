import React, {useState} from 'react'

// Date & Time Picker
import DatePicker from '_components/datePicker'
import TimePicker from '_components/timePicker'

// Date Range Picker
import moment from "moment"
import 'moment/locale/id'
import DateRange from '_components/dateRange'

function Date1(){
  return(
    <DatePicker showDate name="date1" defaultValue={'1992-05-18'} onChange={r => console.log(r.toDate(), r.format('DD-MM-Y'))} className={`btn-soft-light border-0 shadow-xs btn-sm px-2 text-dark text-9 f-700`} />
  )
}
function Date2(){
  return(
    <DatePicker name="date2" defaultValue={'1992-05-18'} onChange={r => console.log(r.toDate(), r.format('DD-MM-Y'))} className={`same-30 btn-soft-success radius-50 center pointer text-10`} />
  )
}
function Date3(){
  const [date, setDate] = useState(moment('1992-05-18').format('dddd, D MMMM Y'));
  const onChange = r => {
    setDate(r.format('dddd, D MMMM Y'));
  }
  return(
    <DatePicker name="date3" defaultValue={'1992-05-18'} onChange={onChange}>
      <span className="pt-1 m-0 f-700 pointer badge badge-light lh-15">{date}</span>
    </DatePicker>
  )
}
function Time1(){
  return(
    <TimePicker showTime name="time1" defaultValue={'1992-05-18 18:05'} onChange={r => console.log(r.toDate(), r.format('HH:mm'))} className={`btn-soft-light border-0 shadow-xs btn-sm px-2 text-dark text-9 f-700`} />
  )
}
function Time2(){
  return(
    <TimePicker name="time2" defaultValue={'1992-05-18 18:05'} onChange={r => console.log(r.toDate(), r.format('HH:mm'))} className={`same-30 btn-soft-danger radius-50 center pointer text-10`} />
  )
}
function Time3(){
  const [time, setTime] = useState(moment('1992-05-18 18:05').format('HH:mm'));
  const onChange = r => {
    setTime(r.format('HH:mm'));
  }
  return(
    <TimePicker name="time3" defaultValue={'1992-05-18 18:05'} onChange={onChange}>
      <span className="pt-1 m-0 f-700 pointer badge badge-light lh-15">{time}</span>
    </TimePicker>
  )
}
function Range1(){
  const [start, setStart] = useState(moment().format('dddd, D MMMM Y'));
  const [end, setEnd] = useState(moment().format('dddd, D MMMM Y'));
  const onChange = r => {
    setStart(moment(r.startDate).format('dddd, D MMMM Y'));
    setEnd(moment(r.endDate).format('dddd, D MMMM Y'));
  }
  return(
    <DateRange id="range1" onChange={onChange} btnClass="btn-soft-success" >
      <span className="pt-1 m-0 f-700 pointer badge badge-light lh-15">{start} - {end}</span>
    </DateRange>
  )
}
function Range2(){
  const onChange = r => {
    console.log(moment(r.startDate), moment(r.endDate));
    console.log(moment(r.startDate).format('YMD'), moment(r.endDate).format('dddd, D MMMM Y'));
  }
  return(
    <div className="">
      <DateRange onChange={onChange} btnClass="btn-soft-success" />
    </div>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h5 className="border-bottom border-1 my-3 text-primary">Date & Time Picker</h5>
      <div className="row mb-5">
        <div className="col mb-2">
          <h6 className="border-bottom border-1 pb-1 mt-2 text-8 text-info">Date 1</h6>
          <Date1 />
        </div>
        <div className="col mb-2">
          <h6 className="border-bottom border-1 pb-1 mt-2 text-8 text-info">Date 2</h6>
          <Date2 />
        </div>
        <div className="col mb-2">
          <h6 className="border-bottom border-1 pb-1 mt-2 text-8 text-info">Date 3</h6>
          <Date3 />
        </div>
        <div className="col mb-2">
          <h6 className="border-bottom border-1 pb-1 mt-2 text-8 text-info">Time 1</h6>
          <Time1 />
        </div>
        <div className="col mb-2">
          <h6 className="border-bottom border-1 pb-1 mt-2 text-8 text-info">Time 2</h6>
          <Time2 />
        </div>
        <div className="col mb-2">
          <h6 className="border-bottom border-1 pb-1 mt-2 text-8 text-info">Time 3</h6>
          <Time3 />
        </div>
      </div>
      <h5 className="border-bottom border-1 my-3 text-primary">Date Range Picker</h5>
      <div className="row">
        <div className="col-md-6 col-auto mb-2">
          <h6 className="border-bottom border-1 pb-1 mt-2 text-8 text-info">Date Range 1</h6>
          <Range1 />
        </div>
        <div className="col-md-6 col-auto mb-2">
          <h6 className="border-bottom border-1 pb-1 mt-2 text-8 text-info">Date Range 2</h6>
          <Range2 />
        </div>
      </div>
    </div>
  )
}

export default Index
