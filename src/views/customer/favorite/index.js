import React, {useState, useEffect, useRef} from 'react'
import {Topbar} from '_el/topbar'
import {Tabs} from '_components/tab'
import Package from './package'
import Gallery from './gallery'
import Following from './following'

function Index(){
  const topBar = useRef()
  const [top, topSet] = useState(0)
  const tabs = [
    {title: 'package', label: 'Paket', component: <Package />},
    {title: 'gallery', label: 'Galeri', component: <Gallery />},
    {title: 'following', label: 'Mengikuti', component: <Following />},
  ]
  useEffect(() => {
    topSet(topBar.current.offsetHeight)
  }, [])
  return(
    <div className="container-fluid px-0">
      <Topbar fixed back ref={topBar}>
        <div className="row m-0">
          <div className="col text-12 bold lh-0 px-1">Favorit</div>
        </div>
      </Topbar>
      <Tabs justify phone fixed top={top} tabClass="p-0">
        {
          tabs.map((r, key) => (
            <div className="" title={r.title} label={r.label} key={key}>
              {r.component}
            </div>
          ))
        }
      </Tabs>
    </div>
  )
}

export default Index
