import React, {useEffect, lazy} from 'react'
import {Switch, Route} from 'react-router-dom'
import lay from '_config/layout'

const chat = [
  { path: "/chat", exact: true, component: lazy(() => import('views/customer/chat/list')) },
  { path: "/chat/:other", exact: true, component: lazy(() => import('views/customer/chat/detail')) },
  { path: "*", exact: false, component: lazy(() => import('layouts/pageNotFound')) },
]
function Index(){
  useEffect(() => {
    document.title = 'Chat'
    const m = document.querySelector(`#${lay.menu}`).style;
    m.display = 'none';
    return () => m.display = 'block';
  }, [])
  return(
    <div className="container-fluid px-0">
      <Switch> { chat.map((r, key) => <Route key={key} {...r} />) } </Switch>
    </div>
  )
}

export default Index
