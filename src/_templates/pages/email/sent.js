import React, {Fragment, useState, useEffect} from 'react'
import List from "./list"
// Date
import moment from "moment"
import DateRange from '_components/dateRange'

function Index(){
  const [params, paramsSet] = useState({
    from: moment(),
    to: moment(),
  });
  useEffect(() => {
    import('feather-icons').then(f => f.replace());
    document.title = 'Sent';
  }, []);
  function onDateRangeChange(r){
    paramsSet({...params, from:moment(r.startDate), to:moment(r.endDate)});
    // console.log(r.startDate);
  }
  return (
    <Fragment>
      <div className="btn-group mb-2">
        <button type="button" className="btn btn-sm text-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as spam"><i className="uil uil-exclamation-octagon"></i></button>
        <button type="button" className="btn btn-sm text-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="uil uil-trash-alt"></i></button>
        <button type="button" className="btn btn-sm text-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> <i className="uil uil-folder"></i> <i className="uil uil-angle-down"></i> </button>
        <div className="dropdown-menu">
          <span className="dropdown-header">Move to</span>
          <a className="dropdown-item" href="##">Social</a>
          <a className="dropdown-item" href="##">Promotions</a>
          <a className="dropdown-item" href="##">Updates</a>
          <a className="dropdown-item" href="##">Forums</a>
        </div>
      </div>
      <div className="center">
        <h5 className="col pb-2 pl-0 mt-0 mb-3 border-bottom border-2">
          <i data-feather="user-check" className="icon-dual icon-xs mb-1 mr-2" />
          Sent
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
            userID={1}
            link="/email/detail/123"
            name="Name"
            userName="Username"
            userDesc="Deskripsi"
            avatar="avatar" />
        ))
      }
    </Fragment>
  )
}

export default Index
