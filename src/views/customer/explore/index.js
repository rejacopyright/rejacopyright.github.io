import React, {lazy} from 'react'
import {withRouter} from 'react-router'
import {Switch, Route} from 'react-router-dom'

const explore = [
  { path: "/explore", exact: true, component: lazy(() => import('views/customer/explore/home')) },
  { path: "/explore/search", exact: true, component: lazy(() => import('views/customer/explore/search')) },
  { path: "/explore/vendor/:username", exact: true, component: lazy(() => import('views/customer/vendor/profile')) },
  { path: "/explore/package/:vendorId/:packageId", exact: true, component: lazy(() => import('views/customer/vendor/packageDetail')) },
  { path: "*", exact: false, component: lazy(() => import('layouts/pageNotFound')) },
]
function Index(props){
  document.title = 'Explore';
  return(
    <div className="content-page ou">
      <div className="content">
        <div className="container-fluid px-0">
          <Switch> { explore.map((r, key) => <Route key={key} {...r} />) } </Switch>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Index)
