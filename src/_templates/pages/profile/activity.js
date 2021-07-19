import React from 'react'

function Index(){
  return(
    <div className="">
      <h5 className="mt-4"> Last Month </h5>
      <div className="left-timeline mt-3 pl-4">
        <ul className="list-unstyled events mb-0">
          <li className="event-list">
            <div className="media">
              <div className="event-date width-xs pt-1">
                <div className="badge badge-soft-primary text-7"> 21 hours ago </div>
              </div>
              <div className="media-body">
                <h6 className="text-9 m-0"> UX and UI for Ubold Admin </h6>
                <p className="text-muted text-9 m-0"> Ubold Admin - A responsive admin and dashboard template </p>
              </div>
            </div>
          </li>
          <li className="event-list">
            <div className="media">
              <div className="event-date width-xs pt-1">
                <div className="badge badge-soft-primary text-7"> 4 days ago </div>
              </div>
              <div className="media-body">
                <h6 className="text-9 m-0"> UX and UI for Hyper Admin </h6>
                <p className="text-muted text-9 m-0"> Hyper Admin - A responsive admin and dashboard template </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Index
