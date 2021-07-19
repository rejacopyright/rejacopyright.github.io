import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

function Scroll(){
  return(
    <div className="shadow-xs hover-md bg-white radius-5 p-2 mt-1 center-left">
      <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} className="avatar-sm radius-50 mr-2" alt="" />
      <div className="">
        <h6 className="m-0 text-10 f-700">Lorem ipsum</h6>
        <h6 className="text-8 text-muted m-0 truncate">Lorem ipsum.</h6>
      </div>
      <div className="ml-auto text-right">
        <div className="btn btn-xs btn-soft-success radius-50 pr-3 pl-2"><i className="uil uil-check mr-1" />Invite</div>
      </div>
    </div>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-md-4 mb-2">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Scroll</h6>
          <Scrollbars style={{ height: 200 }} autoHide autoHideDuration={10} onScrollFrame={r => console.log(r.top === 1)} >
            <Scroll />
            <Scroll />
            <Scroll />
            <Scroll />
            <Scroll />
            <Scroll />
          </Scrollbars>
        </div>
      </div>
    </div>
  )
}

export default Index
