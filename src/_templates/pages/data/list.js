import React, {useEffect, Fragment} from 'react'
import RightBar from '_components/rightBar'
import { Link } from 'react-router-dom'

const Menu = () => (
  <Fragment>
    <div className="btn-group mt-2" style={{marginLeft: '-.6rem'}}>
      <button type="button" className="btn btn-sm text-dark" data-toggle="tooltip" data-placement="top" title="Mark as spam"><i className="uil uil-exclamation-octagon"></i></button>
      <button type="button" className="btn btn-sm text-dark" data-toggle="tooltip" data-placement="top" title="Delete"><i className="uil uil-trash-alt"></i></button>
      <button type="button" className="btn btn-sm text-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> <i className="uil uil-folder"></i> <i className="uil uil-angle-down"></i> </button>
      <div className="dropdown-menu">
        <span className="dropdown-header">Type</span>
        <span className="dropdown-item text-9 pointer"><i className="uil uil-plus-circle mr-1" />Increment</span>
        <span className="dropdown-item text-9 pointer text-danger"><i className="uil uil-minus-circle mr-1" />Decrement</span>
      </div>
    </div>
  </Fragment>
);
function Index(){
  useEffect(() => {
    document.title = "Data List";
  }, []);
  function simpleView(e, key){
    e.preventDefault();
    // console.log(key);
  }
  return(
    <Fragment>
      <RightBar title="Title">
        <p>Simple View</p>
        <div className="absolute-center-h w-100 b-0 p-2">
          <button type="submit" className="btn btn-block btn-sm radius-20 btn-soft-success">Update</button>
        </div>
      </RightBar>
      <Menu />
      <div className="row">
        <div className="col-12">
          <h6 className="pb-1 mb-2 border-bottom border-2">Data List</h6>
          {
            Array(5).fill().map((r, key) => (
              <ul className="message-list mb-1" key={key}>
                <Link to="/pages/data/list/123">
                  <li className="h-unset lh-unset radius-5">
                    <div className="row m-0 p-2 align-items-center pointer">
                      <div className="col-auto px-0">
                        <span className="same-25 radius-100 center oh border border-gray"> <img src={require(`${process.env.REACT_APP_IMAGES}/avatar/c-${key+1}.png`).default} alt="" className="h-100"/> </span>
                      </div>
                      <div className="col">
                        <div className="text-dark text-9 text-nowrap f-600 lh-1">Name</div>
                        <div className="text-muted text-8 text-nowrap f-600 lh-1">Username</div>
                      </div>
                      <div className="col text-truncate">
                        <div className="subject text-truncate text-8 f-600">
                          <div className="text-secondary">Rp. 1.500.000</div>
                        </div>
                      </div>
                      <div className="col-auto text-right text-8">
                        <span className="badge badge-soft-success right-bar-toggle" onClick={(e) => simpleView(e, key)}>Simple View</span>
                      </div>
                      <div className="col-auto pr-0">
                        <div data-toggle="tooltip" data-placement="top" title="Folder">
                          <span className="btn btn-xs text-dark radius-20 pointer same-25 p-0 center dropdown-toggle"> <i className="uil uil-angle-right"></i> </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            ))
          }
        </div>
      </div>
    </Fragment>
  )
}
export default Index
