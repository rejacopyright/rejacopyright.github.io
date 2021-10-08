import React, {Fragment, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Swipe as Tabs} from '_components/tab'
function Default(){
  return(
    <Fragment>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="#default_1" data-bs-toggle="tab" aria-expanded="false" className="nav-link p-2">
            <span className="d-block d-sm-none"><i className="uil uil-home-alt"></i></span>
            <span className="d-none d-sm-block">Default 1</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#default_2" data-bs-toggle="tab" aria-expanded="true" className="nav-link p-2 active">
            <span className="d-block d-sm-none"><i className="uil uil-user"></i></span>
            <span className="d-none d-sm-block">Default 2</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#default_3" data-bs-toggle="tab" aria-expanded="false" className="nav-link p-2">
            <span className="d-block d-sm-none"><i className="uil uil-envelope"></i></span>
            <span className="d-none d-sm-block">Default 3</span>
          </a>
        </li>
      </ul>
      <div className="tab-content p-3">
        <div className="tab-pane" id="default_1">
          <p>Default 1</p>
        </div>
        <div className="tab-pane show active" id="default_2">
          <p>Default 2</p>
        </div>
        <div className="tab-pane" id="default_3">
          <p>Default 3</p>
        </div>
      </div>
    </Fragment>
  )
}
function Justify(){
  return(
    <Fragment>
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          <a href="#justify_1" data-bs-toggle="tab" aria-expanded="false" className="nav-link p-2">
            <span className="d-block d-sm-none"><i className="uil uil-home-alt"></i></span>
            <span className="d-none d-sm-block">Justify 1</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#justify_2" data-bs-toggle="tab" aria-expanded="true" className="nav-link p-2 active">
            <span className="d-block d-sm-none"><i className="uil uil-user"></i></span>
            <span className="d-none d-sm-block">Justify 2</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#justify_3" data-bs-toggle="tab" aria-expanded="false" className="nav-link p-2">
            <span className="d-block d-sm-none"><i className="uil uil-envelope"></i></span>
            <span className="d-none d-sm-block">Justify 3</span>
          </a>
        </li>
      </ul>
      <div className="tab-content p-3">
        <div className="tab-pane" id="justify_1">
          <p>Justify 1</p>
        </div>
        <div className="tab-pane show active" id="justify_2">
          <p>Justify 2</p>
        </div>
        <div className="tab-pane" id="justify_3">
          <p>Justify 3</p>
        </div>
      </div>
    </Fragment>
  )
}
function Pill(){
  return(
    <Fragment>
      <ul className="nav nav-pills navtab-bg nav-justified">
        <li className="nav-item">
          <a href="#pill_1" data-bs-toggle="tab" aria-expanded="false" className="nav-link p-0">
            <span className="d-block d-sm-none"><i className="uil uil-home-alt"></i></span>
            <span className="d-none d-sm-block">Pill 1</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#pill_2" data-bs-toggle="tab" aria-expanded="true" className="nav-link p-0 active">
            <span className="d-block d-sm-none"><i className="uil uil-user"></i></span>
            <span className="d-none d-sm-block">Pill 2</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#pill_3" data-bs-toggle="tab" aria-expanded="false" className="nav-link p-0">
            <span className="d-block d-sm-none"><i className="uil uil-envelope"></i></span>
            <span className="d-none d-sm-block">Pill 3</span>
          </a>
        </li>
      </ul>
      <div className="tab-content p-3">
        <div className="tab-pane" id="pill_1">
          <p>Pill 1</p>
        </div>
        <div className="tab-pane show active" id="pill_2">
          <p>Pill 2</p>
        </div>
        <div className="tab-pane" id="pill_3">
          <p>Pill 3</p>
        </div>
      </div>
    </Fragment>
  )
}
function WithComponent(){
  const [active, activeSet] = useState('comp1');
  const tab = new URLSearchParams(window.location.search).get('tab');
  useEffect(() => activeSet(tab || 'comp1'), [tab]);
  function Child(){
    switch (tab) {
      case 'comp1': return <div>Component 1</div>
      case 'comp2': return <div>Component 2</div>
      case 'comp3': return <div>Component 3</div>
      default: return <div>Component 1</div>
    }
  }
  return(
    <Fragment>
      <ul className="nav nav-pills navtab-bg nav-justified">
        <li className="nav-item" onClick={() => activeSet('comp1')}>
          <Link to="?tab=comp1" className={`nav-link p-0 ${active === 'comp1' && 'active'}`}>
            <span className="d-block d-sm-none"><i className="uil uil-home-alt"></i></span>
            <span className="d-none d-sm-block">Pill 1</span>
          </Link>
        </li>
        <li className="nav-item" onClick={() => activeSet('comp2')}>
          <Link to="?tab=comp2" className={`nav-link p-0 ${active === 'comp2' && 'active'}`}>
            <span className="d-block d-sm-none"><i className="uil uil-user"></i></span>
            <span className="d-none d-sm-block">Pill 2</span>
          </Link>
        </li>
        <li className="nav-item" onClick={() => activeSet('comp3')}>
          <Link to="?tab=comp3" className={`nav-link p-0 ${active === 'comp3' && 'active'}`}>
            <span className="d-block d-sm-none"><i className="uil uil-envelope"></i></span>
            <span className="d-none d-sm-block">Pill 3</span>
          </Link>
        </li>
      </ul>
      <div className="p-3">
        <Child tab={tab} />
      </div>
    </Fragment>
  )
}
function SwipeTab(){
  const tabs = [
    { label: 'Tab 1', component: <div className="p-2">Page 1</div> },
    { label: 'Tab 2', component: <div className="p-2">Page 2</div> },
    { label: 'Tab 3', component: <div className="p-2">Page 3</div> },
  ]
  return(
    <Tabs height={200}>
      {
        tabs.map((r, key) => (
          <div label={r.label} key={key}>{r.component}</div>
        ))
      }
    </Tabs>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h4 className="border-bottom border-1 pb-2 mt-3 text-primary">Tabs</h4>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="shadow radius-10">
            <Default />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="shadow radius-10">
            <Justify />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="shadow radius-20">
            <Pill />
          </div>
        </div>
      </div>
      <h4 className="border-bottom border-1 pb-2 mt-3 text-primary">Tabs With Component (Code Splitting)</h4>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="shadow radius-20">
            <WithComponent/>
          </div>
        </div>
      </div>
      <h4 className="border-bottom border-1 pb-2 mt-3 text-primary">Swipe Tab</h4>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="shadow radius-20 oh">
            <SwipeTab/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
