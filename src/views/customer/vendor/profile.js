import React, {Fragment, useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import {Tabs} from '_components/tab'
import {Topbar} from '_el/topbar'
import {Profile} from '_el/user'
import Gallery from './gallery'
import Package from './package'

function Info(){
  return(
    <div className="row m-0 pt-4 px-2">
      <div className="col text-center px-1 mb-2 text-11"> <span className="d-block px-3 py-1 text-nowrap border border-gray bold radius-5">Ikuti</span> </div>
      <div className="col text-center px-1 mb-2 text-11"> <span className="d-block px-3 py-1 text-nowrap border border-gray bold radius-5">Kirim Pesan</span> </div>
      <div className="col text-center px-1 mb-2 text-11"> <span className="d-block px-3 py-1 text-nowrap border border-gray bold radius-5">Review</span> </div>
      <div className="col text-center px-1 mb-2 text-11"> <span className="d-block px-3 py-1 text-nowrap border border-gray bold radius-5">Info</span> </div>
    </div>
  )
}
function Index(){
  const get = useParams();
  const topBar = useRef()
  const [top, topSet] = useState(0)
  const tabs = [
    {title: 'gallery', label: 'Galeri', component: <Gallery />},
    {title: 'package', label: 'Paket', component: <Package />},
  ]
  useEffect(() => {
    topSet(topBar.current.offsetHeight-2)
  }, [])
  return(
    <Fragment>
      <Topbar fixed back ref={topBar}> <div className="text-12 center-left bold pl-2 pr-0">{get.username}</div> </Topbar>
      <Profile />
      <Info />
      <Tabs top={top}>
        {
          tabs.map((r, key) => (
            <div className="" title={r.title} label={r.label} key={key}>
              {r.component}
            </div>
          ))
        }
      </Tabs>
    </Fragment>
  )
}

export default Index
