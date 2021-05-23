import React, {Fragment} from 'react'
import { Link } from "react-router-dom"

function List(props){
  return (
    <Fragment>
      <ul className="message-list mb-1">
        <li className="h-unset lh-unset radius-5">
          <div className="row m-0 p-2 align-items-center right-bar-toggle pointer">
            <Link className="col-atuo" to={`${props.link || '#'}`} >
              <span className="same-25 radius-100 center oh border border-gray"> <img src={require('_dummy/avatar/c-1.png').default} alt="" className="h-100"/> </span>
            </Link>
            <Link className="col-md-2 col-auto" to={`${props.link || '#'}`}>
              <div className="text-dark text-9 text-nowrap f-600 lh-1 d-block m-0">{props.name}</div>
              <div className="text-muted text-8 text-nowrap f-600 lh-1 d-block m-0">{props.userName}</div>
            </Link>
            <Link className="col text-truncate" to={`${props.link || '#'}`}>
              <div className="subject f-600 text-8"> {props.userDesc} </div>
            </Link>
            <Link className="col text-right text-7 text-dark pr-0" to={`${props.link || '#'}`} >{props.right}</Link>
            <div className="col-auto px-0">
              <div data-toggle="tooltip" data-placement="top" title="Folder">
                <span className="btn text-dark text-9 radius-20 pointer same-25 p-0 center dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> <i className="uil uil-angle-right"></i> </span>
                <div className="dropdown-menu l-unset r-0">
                  <span className="dropdown-header">Move to</span>
                  <a className="dropdown-item text-9" href="##">View</a>
                  <a className="dropdown-item text-9" href="##">Approve</a>
                  <a className="dropdown-item text-9 text-danger" href="##">Reject</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </Fragment>
  )
}

export default List;
