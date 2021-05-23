import React, { Fragment, useState, useEffect } from 'react'
import List from "./list"
// Date
import moment from "moment"
import DateRange from '_components/dateRange'

function Index(){
  const [params, paramsSet] = useState({
    from: moment(),
    to: moment(),
    sortby: 'name',
    type: 'asc'
  });
  useEffect(() => {
    import('feather-icons').then(f => f.replace());
    document.title = 'Inbox';
  }, []);
  function onDateRangeChange(r){
    paramsSet({...params, from:moment(r.startDate), to:moment(r.endDate)});
    // console.log(r.startDate);
  }
  function sortby(e){
    if (params.sortby === e) {
      switch (params.type) {
        case 'asc':
          paramsSet({...params, type:'desc'});
          break;
        case 'desc':
          paramsSet({...params, type:'asc'});
          break;
        default:
      }
    }else {
      paramsSet({...params, sortby:e, type:'asc'});
    }
    // console.log(params.sortby === e, e);
  }
  return (
    <Fragment>
      {/*ADDITIONAL*/}
      <div className="center">
        {/*SORT BY*/}
        <div className="col pl-0">
          <div className="btn-group my-2">
            <span className="center pr-2 mr-2 border-right"><i className="uil uil-filter"/></span>
            <span className={`btn pointer center btn-xs py-0 ${params.sortby === 'name' ? 'btn-soft-primary' : 'btn-soft-secondary'} radius-50 hover mr-1 text-nowrap`} onClick={() => sortby('name')} >
              Name {params.sortby === 'name' ? params.type === 'asc' ? <i className="uil text-9 uil-arrow-up ml-1"/> : <i className="uil text-9 uil-arrow-down ml-1"/> : ''}
            </span>
            <span className={`btn pointer center btn-xs py-0 ${params.sortby === 'counter' ? 'btn-soft-primary' : 'btn-soft-secondary'} radius-50 hover mr-1 text-nowrap`} onClick={() => sortby('counter')} >
              Counter {params.sortby === 'counter' ? params.type === 'asc' ? <i className="uil text-9 uil-arrow-up ml-1"/> : <i className="uil text-9 uil-arrow-down ml-1"/> : ''}
            </span>
            <span className={`btn pointer center btn-xs py-0 ${params.sortby === 'checkin' ? 'btn-soft-primary' : 'btn-soft-secondary'} radius-50 hover mr-1 text-nowrap`} onClick={() => sortby('checkin')} >
              Check-In {params.sortby === 'checkin' ? params.type === 'asc' ? <i className="uil text-9 uil-arrow-up ml-1"/> : <i className="uil text-9 uil-arrow-down ml-1"/> : ''}
            </span>
            <span className={`btn pointer center btn-xs py-0 ${params.sortby === 'checkout' ? 'btn-soft-primary' : 'btn-soft-secondary'} radius-50 hover mr-1 text-nowrap`} onClick={() => sortby('checkout')} >
              Check-Out {params.sortby === 'checkout' ? params.type === 'asc' ? <i className="uil text-9 uil-arrow-up ml-1"/> : <i className="uil text-9 uil-arrow-down ml-1"/> : ''}
            </span>
          </div>
        </div>
        {/*EXPORT*/}
        <div className="col text-right">
          <div className="btn-group">
            <span className="btn pointer center btn-xs radius-10 hover btn-soft-danger mr-2" > <i className="uil text-9 uil-file-download mr-1"/> PDF </span>
            <span className="btn pointer center btn-xs radius-10 hover btn-soft-success" > <i className="uil text-9 uil-file-download-alt mr-1"/> Excel </span>
          </div>
        </div>
      </div>
      <div className="center">
        <h5 className="col pb-2 pl-0 mb-3 border-bottom border-2">
          <i data-feather="user-check" className="icon-dual icon-xs mb-1 mr-2" />
          Inbox
          <span className="text-primary text-8">
            {
              params.from.format('YMD') === params.to.format('YMD') ?
              ` (${params.from.format('dddd, D MMMM Y')})`
              :
              ` (${params.from.format('dddd, D MMMM Y')} - ${params.to.format('dddd, D MMMM Y')})`
            }
          </span>
        </h5>
        <div className="same-40 pr-0 text-right border border-1 radius-50 center">
          <DateRange onChange={onDateRangeChange} />
        </div>
      </div>
      {
        Array(5).fill().map((r, key) => (
          <List
            key={key}
            link="/email/detail/123"
            name="Name"
            userName="Username"
            userDesc="Email Content"
            avatar="avatar" />
        ))
      }
    </Fragment>
  )
}

export default Index
