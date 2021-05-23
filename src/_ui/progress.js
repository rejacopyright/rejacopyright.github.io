import React from 'react'
function Default(){
  return(
    <div className="progress radius-20">
      <div className="progress-bar bg-success" style={{width: '33%'}} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100}></div>
    </div>
  )
}
function Height(){
  return(
    <div className="progress radius-20" style={{height: '3px'}}>
      <div className="progress-bar bg-success" style={{width: '33%'}} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100}></div>
    </div>
  )
}
function Striped(){
  return(
    <div className="progress radius-20" style={{height: '10px'}}>
      <div className="progress-bar progress-bar-striped bg-success" style={{width: '33%'}} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100}></div>
    </div>
  )
}
function Content(){
  return(
    <div className="progress radius-20" style={{height: '10px'}}>
      <div className="progress-bar progress-bar-striped bg-success" style={{width: '33%'}} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100}>
        33%
      </div>
    </div>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h4 className="border-bottom border-1 pb-2 mt-3 text-primary">Progressbars</h4>
      <div className="row">
        <div className="col-md-3 col-6 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9">Default</h6>
          <Default />
        </div>
        <div className="col-md-3 col-6 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9">Height</h6>
          <Height />
        </div>
        <div className="col-md-3 col-6 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9">Striped</h6>
          <Striped />
        </div>
        <div className="col-md-3 col-6 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9">Content</h6>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Index
