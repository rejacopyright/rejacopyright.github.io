import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { ClassicSpinner } from "react-spinners-kit"

function Index(){
  const [loading, loadingSet] = useState(true);
  useEffect(() => {
    setTimeout(() => loadingSet(false), 100);
    document.title = 'Pengaturan';
  }, []);
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-9">
          <div className="row">
            <div className="col-auto">
              <h4 className="border-bottom border-2 pb-1">Human Resources</h4>
              <Link to="/payroll" className="center-left">
                <i className="uil uil-angle-right m-0 text-muted mr-2" />
                <h6 className="m-0 text-10 f-400"> Payroll Master </h6>
              </Link>
            </div>
            <div className="col-auto">
              <h4 className="border-bottom border-2 pb-1">Administrator</h4>
              <Link to="/role" className="center-left">
                <i className="uil uil-angle-right m-0 text-muted mr-2" />
                <h6 className="m-0 text-10 f-400"> Admin Roles </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
      { loading && <div className="overlay center"><ClassicSpinner color="#5369f8" loading={true} /></div> }
    </div>
  )
}

export default Index
