import React, { useEffect, useState } from 'react'
import { Switch, Route, Link } from "react-router-dom"
// STATUS PAGES
import Inbox from "./inbox"
import Sent from "./sent"

function Index(props){
  const [aktif, aktifSet] = useState('inbox');
  useEffect(() => {
    import('feather-icons').then(f => f.replace());
  }, []);
  useEffect(() => {
    const splituri = props.location.pathname.split('/');
    const uri = splituri[splituri.length - 1];
    aktifSet(uri === 'email' ? 'inbox' : uri);
  }, [props.location.pathname]);
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12">
          <div className="email-container bg-transparent">
            <div className="inbox-leftbar px-3 pt-0">
              <h5>Email</h5>
              <div className="mail-list mt-2">
                <Link to="/vendor/pages/email/inbox" className={`list-group-item center-left py-1 mb-0 text-9 border-0 btn ${aktif === 'inbox' ? 'bg-soft-primary text-primary' : 'text-dark'}`}> <i data-feather="user-check" className="icon-dual icon-xxs mr-2" /> Inbox <span className="ml-auto text-9"><span className="badge badge-pill badge-danger">99+</span></span></Link>
                <Link to="/vendor/pages/email/sent" className={`list-group-item center-left py-1 mb-0 text-9 border-0 btn ${aktif === 'sent' ? 'bg-soft-primary text-primary' : 'text-dark'}`}> <i data-feather="user-x" className="icon-dual icon-xxs mr-2" /> Sent <span className="ml-auto text-9"><span className="badge badge-pill badge-success">12</span></span></Link>
              </div>
            </div>
            <div className="inbox-rightbar">
              <div className="mt-2">
                <Switch>
                  <Route exact path="/vendor/pages/email/inbox" component={Inbox} />
                  <Route exact path="/vendor/pages/email/sent" component={Sent} />
                  <Route path="/vendor/pages/email" component={Inbox} />
                </Switch>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
