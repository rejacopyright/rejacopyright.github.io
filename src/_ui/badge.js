import React from 'react'

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h4 className="border-bottom border-1 pb-2 mt-3 text-primary">Badges</h4>
      <div className="row">
        <div className="col-xl-4">
          <div>
            <h6 className="m-0">Default</h6>
            <p className="sub-header mt-0 mb-2"> Badges scale to match the size of the immediate parent element by using relative font sizing and <code className="highlighter-rouge">em</code> units. </p>
            <span className="badge badge-primary mr-2">Primary</span>
            <span className="badge badge-secondary mr-2">Secondary</span>
            <span className="badge badge-success mr-2">Success</span>
            <span className="badge badge-danger mr-2">Danger</span>
            <span className="badge badge-warning mr-2">Warning</span>
            <span className="badge badge-info mr-2">Info</span>
            <span className="badge badge-light">Light</span>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="mt-4 mt-xl-0">
            <h6 className="m-0">Pill</h6>
            <p className="sub-header mt-0 mb-2"> Use the <code>.badge-pill</code> modifier class to make badges more rounded. </p>
            <span className="badge badge-primary badge-pill mr-2">Pill Primary</span>
            <span className="badge badge-secondary badge-pill mr-2">Pill Secondary</span>
            <span className="badge badge-success badge-pill mr-2">Pill Success</span>
            <span className="badge badge-danger badge-pill mr-2">Pill Danger</span>
            <span className="badge badge-warning badge-pill mr-2">Pill Warning</span>
            <span className="badge badge-info badge-pill">Pill Info</span>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="mt-4 mt-xl-0">
            <h6 className="m-0">Soft</h6>
            <p className="sub-header mt-0 mb-2"> Use the <code>.badge-soft-*</code> for a badge lighten. </p>
            <span className="badge badge-soft-primary mr-2">Soft Primary</span>
            <span className="badge badge-soft-secondary mr-2">Soft Secondary</span>
            <span className="badge badge-soft-success mr-2">Soft Success</span>
            <span className="badge badge-soft-danger mr-2">Soft Danger</span>
            <span className="badge badge-soft-warning mr-2">Soft Warning</span>
            <span className="badge badge-soft-info">Soft Info</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
