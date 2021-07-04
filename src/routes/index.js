import React, {Suspense, useEffect, useState, useRef, useCallback} from 'react'
import {Switch, Route} from 'react-router-dom'
import { withRouter } from 'react-router'
import { ClassicSpinner } from 'react-spinners-kit'
import Topbar from 'layouts/topbar'
import MenuBar from 'layouts/menuBar'
import LeftMenu from 'layouts/leftMenu'

import customer from 'routes/customer'
import vendor from 'routes/vendor'

function Loading(){
  return <div className="overlay center"><ClassicSpinner color="#5369f8" /></div>
}
function Chat(){
  const [chatEl, chatElSet] = useState(<ChatBtn />)
  function ChatBtn(){
    return(
      <div className="fixed-bottom z-9 l-unset">
        <div className="center ml-auto same-50 radius-50 bg-gradient p-2 m-3 pointer shadow" onClick={() => chatElSet(<ChatContainer />)}>
          <img src={require('_dummy/icons/chat.png').default} className="w-100 img-white ppx-3" alt=""/>
        </div>
      </div>
    )
  }
  function ChatContainer(){
    return(
      <div className="fixed-bottom z-9999 w-40 ml-auto">
        <div className="bg-white shadow p-2 mx-2 radius-10 relative oh">
          <div className="row">
            <div className="col-4 border-right pr-1">
              <div className="pb-1 mb-1 bg-white">
                <div className="row center">
                  <div className="col pr-2">
                    <input type="text" className="form-control text-9 hpx-25" placeholder="Cari user" required />
                  </div>
                  <div className="col-auto pl-0 pr-3">
                    <i className="uil uil-filter text-10 pointer" />
                  </div>
                </div>
              </div>
              {
                Array(2).fill().map((r, key) => (
                  <div className="center-left py-1" key={key}>
                    <img src={require(`_dummy/avatar/c-${key+1}.png`).default} width="25" className="radius-50" alt=""/>
                    <div className="ml-2 pointer">
                      <p className="m-0 lh-12 bold">Reja Jamil</p>
                      <p className="m-0 lh-1 text-7 text-muted">username</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="col-8">
              <div className="center-left shadow-xs px-2 py-1 row">
                <p className="m-0 bold text-10">Reja Jamil</p>
              </div>
              <div className="chat-conversation">
                <ul className="conversation-list">
                  <li className="center-bottom j-left">
                    <div className="chat-avatar">
                      <img src={`${require('_dummy/avatar/c-1.png').default}`} className="border" alt="female" />
                    </div>
                    <div className="relative w-70">
                      <div className="conversation-text pt-2">
                        <div className="ctext-wrap">
                          <p className="m-0 lh-12"> Lorem ipsum dolor sit amet. </p>
                        </div>
                        <p className="m-0 pt-1 lh-75 text-7 f-600 text-gray">18 Mei 1992</p>
                      </div>
                    </div>
                  </li>
                  <li className="center-bottom j-right odd">
                    <div className="relative w-70">
                      <div className="conversation-text pt-2">
                        <div className="ctext-wrap">
                          <p className="m-0 lh-12"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, laborum. </p>
                        </div>
                        <p className="m-0 pt-1 lh-75 text-7 f-600 text-gray">18 Mei 1992</p>
                      </div>
                    </div>
                    <div className="chat-avatar">
                      <img src={`${require('_dummy/avatar/c-2.png').default}`} className="border" alt="male" />
                    </div>
                  </li>
                </ul>
                <form name="chat-form" id="chat-form">
                  <div className="row center">
                    <div className="col pr-1">
                      <input type="text" className="form-control form-control-sm chat-input" placeholder="Enter your text" required />
                    </div>
                    <div className="col-auto pl-1">
                      <i className="uil uil-navigator text-16 pointer" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute t-0 r-0 p-2 pointer" onClick={() => chatElSet(<ChatBtn />)}>
            <i className="uil uil-times text-12 lh-1 ml-auto" />
          </div>
        </div>
      </div>
    )
  }
  return chatEl
}
function Index(props){
  const cp = useRef()
  const [routes, routesSet] = useState(customer)
  const [vendorPages, vendorPagesSet] = useState(false)
  const expired = useCallback(() => {
    if (false) {
      props.dispatch({type:'LOGOUT'});
    }
  }, [props])
  window.addEventListener('mouseover', expired);
  window.addEventListener('focus', expired);
  useEffect(() => {
    import('feather-icons').then(f => f.replace());
    require('_assets/js/app');
    return () => delete require.cache[require.resolve('_assets/js/app')];
  }, [])
  useEffect(() => {
    const vendorRoutes = (props.location.pathname).split('/')[1] === 'vendor'
    vendorPagesSet(vendorRoutes)
    if (vendorRoutes) {
      document.body.setAttribute('data-layout', 'nav')
    }else {
      document.body.setAttribute('data-layout', 'topnav')
      // delete require.cache[require.resolve('_assets/js/app')];
    }
    routesSet(vendorRoutes ? vendor : customer)
  }, [props.location.pathname, vendorPages])
  useEffect(() => {
    document.querySelector('#search').value = '';
    expired();
    return () => {
      window.removeEventListener('mouseover', {});
      window.removeEventListener('focus', {});
    }
  }, [props, expired]);
  return (
    <div id="wrapper">
      <Topbar />
      <LeftMenu show={vendorPages} />
      <div className="content-page ou mt-0" ref={cp}>
        <div className="content">
          <Suspense fallback={<Loading />}>
            <Switch>
              { routes.map((r, key) => <Route  key={key} {...r} />) }
            </Switch>
          </Suspense>
        </div>
      </div>
      <MenuBar />
      <div className="desktop">
        <Chat />
      </div>
    </div>
  )
}
export default withRouter(Index)
