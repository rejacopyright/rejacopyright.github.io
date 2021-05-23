import React, { useEffect, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Add from './add'
import List from './list'
import Form_1 from './form_1'
import Form_2 from './form_2'
import Form_3 from './form_3'
import Subform from './subform'

function DefaultPage(){
  return(
    <div className="row">
      <div className="col-12 text-center mt-4">
        <img src={require('_assets/images/not-found.png').default} alt="" width="250" style={{ filter: 'opacity(.25)' }} />
        <div className="d-block text-muted"><i className="uil uil-exclamation-circle mr-2" />Halaman yang anda cari tidak ditemukan atau sedang dalam perbaikan... !</div>
        <button type="button" className="btn btn-sm radius-5 btn-light pl-1 width-sm mt-3" onClick={() => window.history.back()}><i className="uil uil-arrow-left"/>BACK</button>
      </div>
    </div>
  )
}
function Index(props){
  const [active, activeSet] = useState('list');
  useEffect(() => {
    import('feather-icons').then(f => f.replace());
  }, []);
  useEffect(() => {
    const splituri = props.location.pathname.split('/');
    const uri = splituri[splituri.length - 1];
    activeSet(uri === 'data' ? 'list' : uri);
  }, [props.location.pathname]);
  return(
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12">
          <div className="email-container bg-transparent">
            <div className="inbox-leftbar px-3 pt-0">
              <h5>Data Listing ({active})</h5>
              <div className="mail-list mt-2">
                <Link to="/vendor/pages/data/list" className={`list-group-item center-left py-1 mb-0 text-9 border-0 btn ${active === 'list' ? 'btn-soft-primary' : 'text-dark'}`}> <i data-feather="check-circle" className="icon-dual icon-xxs mr-2" /> Data List </Link>
                <Link to="/vendor/pages/data/form-1" className={`list-group-item center-left py-1 mb-0 text-9 border-0 btn ${active === 'form-1' ? 'btn-soft-primary' : 'text-dark'}`}> <i data-feather="check-circle" className="icon-dual icon-xxs mr-2" /> Form 1 </Link>
                <Link to="/vendor/pages/data/form-2" className={`list-group-item center-left py-1 mb-0 text-9 border-0 btn ${active === 'form-2' ? 'btn-soft-primary' : 'text-dark'}`}> <i data-feather="check-circle" className="icon-dual icon-xxs mr-2" /> Form 2 </Link>
                <Link to="/vendor/pages/data/form-3" className={`list-group-item center-left py-1 mb-0 text-9 border-0 btn ${active === 'form-3' ? 'btn-soft-primary' : 'text-dark'}`}> <i data-feather="check-circle" className="icon-dual icon-xxs mr-2" /> Form 3 </Link>
                <Link to="/vendor/pages/data/subform" className={`list-group-item center-left py-1 mb-0 text-9 border-0 btn ${active === 'subform' ? 'btn-soft-primary' : 'text-dark'}`}> <i data-feather="check-circle" className="icon-dual icon-xxs mr-2" /> Subform </Link>
                <Link to="/vendor/pages/data/overtime" className={`list-group-item center-left py-1 mb-0 text-9 border-0 btn ${active === 'overtime' ? 'btn-soft-primary' : 'text-dark'}`}> <i data-feather="check-circle" className="icon-dual icon-xxs mr-2" /> Overtime </Link>
              </div>
              <Link to="/vendor/pages/data/add" className="btn btn-xs btn-blocks btn-soft-primary mt-3"><i className="uil uil-plus mr-1" />Add Data</Link>
            </div>
            <div className="inbox-rightbar">
              <Switch>
                <Route exact path="/vendor/pages/data" component={List} />
                <Route exact path="/vendor/pages/data/add" component={Add} />
                <Route exact path="/vendor/pages/data/list" component={List} />
                <Route exact path="/vendor/pages/data/form-1" component={Form_1} />
                <Route exact path="/vendor/pages/data/form-2" component={Form_2} />
                <Route exact path="/vendor/pages/data/form-3" component={Form_3} />
                <Route exact path="/vendor/pages/data/subform" component={Subform} />
                <Route exact path="/vendor/pages/data/*" component={DefaultPage} />
              </Switch>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
