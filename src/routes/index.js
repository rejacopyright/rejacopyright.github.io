import React, {Suspense, useEffect, useState, useRef, useCallback} from 'react'
import {Switch, Route} from 'react-router-dom'
import { withRouter } from 'react-router'
import { ClassicSpinner } from 'react-spinners-kit'
import Topbar from 'layouts/topbar'
import MenuBar from 'layouts/menuBar'
import LeftMenu from 'layouts/leftMenu'
import Chat from '_components/chat'

import customer from 'routes/customer'
import vendor from 'routes/vendor'

function Loading(){
  return <div className="overlay center"><ClassicSpinner color="#5369f8" /></div>
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
