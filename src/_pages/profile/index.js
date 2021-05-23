import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// SUB PAGES
import Activity from './activity'
import Pictures from './pictures'
import Projects from './projects'
import Files from './files'


function Index(props){
  const [tabActive, tabActiveSet] = useState('activity');
  const tab = new URLSearchParams(props.location.search).get('tab');
  useEffect(() => {
    tabActiveSet(tab || 'activity');
  }, [tab]);
  function Child(){
    switch (tab) {
      case 'activity': return <Activity />
      case 'pictures': return <Pictures />
      case 'projects': return <Projects />
      case 'files': return <Files />
      default: return <Activity />
    }
  }
  return(
    <div className="container-fluid">
      <div className="row pt-3">
        <div className="col-lg-3">
          <div className="card">
            <div className="center-left text-muted pointer" onClick={() => props.history.goBack()}> <i className="uil uil-arrow-left mr-1" /> Back </div>
            <div className="radius-10 mt-1 bg-white shadow-sm">
              <div className="text-center p-3">
                <img src={require('_dummy/images/6.jpg').default} alt="" className="avatar-xl rounded-circle" />
                <h6 className="mt-3 mb-0 lh-1">Profile 1</h6>
                <h6 className="m-0 text-muted text-9">Username</h6>
                <div className="row my-3">
                  <div className="col-auto ml-auto text-center text-9 f-700 text-muted lh-1 border-right border-gray"><p className="m-0 text-dark lh-1">2.1K</p>Followers</div>
                  <div className="col-auto mr-auto text-center text-9 f-700 text-muted lh-1"><p className="m-0 text-dark lh-1">241</p>Following</div>
                </div>
                <div className="text-center">
                  <p className="m-0 lh-1">
                    <label className="badge badge-secondary my-0 mr-2">UI & UX</label>
                    <label className="badge badge-secondary my-0 mr-2">Frontend</label>
                  </p>
                </div>
                <hr className="my-3"/>
                <div className="row">
                  <div className="col text-center pr-1">
                    <div className="btn btn-block btn-sm hover radius-50 btn-soft-danger">Unfollow</div>
                  </div>
                  <div className="col text-center pl-1">
                    <div className="btn btn-block btn-sm hover radius-50 btn-soft-success">Follow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 border-top">
            <h6 className="mb-0 text-info">Address</h6>
            <p className="text-muted mb-2 lh-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quia.</p>
          </div>
          <div className="mt-2 pt-2 border-top">
            <h6 className="mb-0 text-info">Skills</h6>
            <span className="badge badge-light mt-2 mr-2"> UI design </span>
            <span className="badge badge-light mt-2 mr-2">UX</span>
            <span className="badge badge-light mt-2 mr-2">Sketch</span>
            <span className="badge badge-light mt-2 mr-2">Photoshop</span>
            <span className="badge badge-light mt-2">Frontend</span>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="card">
            <div className="card-body p-3">
              <ul className="nav nav-tabs nav-justifieds bg-white" role="tablist">
                <li className="nav-item" onClick={() => tabActiveSet('activity')}> <Link to="?tab=activity" className={`nav-link py-1 ${tabActive === 'activity' && 'active'}`}> Activity </Link> </li>
                <li className="nav-item" onClick={() => tabActiveSet('pictures')}> <Link to="?tab=pictures" className={`nav-link py-1 ${tabActive === 'pictures' && 'active'}`}> Pictures </Link> </li>
                <li className="nav-item" onClick={() => tabActiveSet('projects')}> <Link to="?tab=projects" className={`nav-link py-1 ${tabActive === 'projects' && 'active'}`}> Projects </Link> </li>
                <li className="nav-item" onClick={() => tabActiveSet('files')}> <Link to="?tab=files" className={`nav-link py-1 ${tabActive === 'files' && 'active'}`}> Files </Link> </li>
              </ul>
              <div className="pt-3">
                <Child tab={tab}></Child>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
