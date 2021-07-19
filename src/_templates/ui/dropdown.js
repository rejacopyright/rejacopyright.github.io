import React from 'react'
import {Link} from 'react-router-dom'

function Default(){
  return(
    <div className="btn-group">
      <div className="btn btn-sm btn-soft-primary lh-1 pointer dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Default<i className="uil uil-angle-down" /></div>
      <div className="dropdown-menu oh radius-5 shadow-img z-1">
        <Link to="#" className="dropdown-item px-2 wrap"><i className="uil uil-edit-alt text-warning mr-1"/>Action</Link>
        <div className="dropdown-divider"></div>
        <Link to="#" className="dropdown-item px-2 wrap"><i className="uil uil-trash text-danger mr-1"/>Remove</Link>
      </div>
    </div>
  )
}
function Separated(){
  return(
    <div className="btn-group">
      <div className="btn btn-sm btn-primary lh-1 pointer">Separated</div>
      <div className="btn btn-sm btn-primary lh-1 pointer dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="uil uil-angle-down" /></div>
      <div className="dropdown-menu oh radius-5 shadow-img z-1">
        <Link to="#" className="dropdown-item px-2 wrap"><i className="uil uil-edit-alt text-warning mr-1"/>Action</Link>
        <div className="dropdown-divider"></div>
        <Link to="#" className="dropdown-item px-2 wrap"><i className="uil uil-trash text-danger mr-1"/>Remove</Link>
      </div>
    </div>
  )
}
function Left(){
  return(
    <div className="btn-group dropleft">
      <div className="btn btn-sm pr-3 btn-primary lh-1 pointer dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="uil uil-angle-left" /> Left</div>
      <div className="dropdown-menu oh radius-5 shadow-img z-1">
        <Link to="#" className="dropdown-item px-2 wrap"><i className="uil uil-edit-alt text-warning mr-1"/>Action</Link>
        <div className="dropdown-divider"></div>
        <Link to="#" className="dropdown-item px-2 wrap"><i className="uil uil-trash text-danger mr-1"/>Remove</Link>
      </div>
    </div>
  )
}
function Right(){
  return(
    <div className="btn-group dropright">
      <div className="btn btn-sm pl-3 btn-primary lh-1 pointer dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Right <i className="uil uil-angle-right" /></div>
      <div className="dropdown-menu oh radius-5 shadow-img z-1">
        <Link to="#" className="dropdown-item px-2 wrap"><i className="uil uil-edit-alt text-warning mr-1"/>Action</Link>
        <div className="dropdown-divider"></div>
        <Link to="#" className="dropdown-item px-2 wrap"><i className="uil uil-trash text-danger mr-1"/>Remove</Link>
      </div>
    </div>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h4 className="border-bottom border-1 pb-2 mt-3 text-primary">Dropdown</h4>
      <div className="row">
        <div className="col-auto"> <Default /> </div>
        <div className="col-auto"> <Separated /> </div>
        <div className="col-auto"> <Left /> </div>
        <div className="col-auto"> <Right /> </div>
      </div>
    </div>
  )
}

export default Index
