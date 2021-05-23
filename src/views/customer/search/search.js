import React, {useEffect, useState, useRef} from 'react'
import lay from '_config/layout'
import {Category} from '_el/package'
import {Topbar} from '_el/topbar'
import {Inputicon} from '_components/form'
import {Swipe} from '_el/swipe'
import {List as Vendor} from '_el/user'
import {Grid as Package} from '_el/package'
// const api = require('js-cookie').getJSON()

function Index(){
  const topBar = useRef()
  const cat = useRef()
  const [top, topSet] = useState(0)
  const [cTop, cTopSet] = useState(0)
  const [isOpen, isOpenSet] = useState(false)
  useEffect(() => {
    const m = document.querySelector(`#${lay.menu}`).style;
    m.display = 'none';
    cTopSet(cat.current.offsetHeight);
    topSet(topBar.current.offsetHeight-2)
    return () => m.display = 'block';
  }, [])
  return(
    <div className="pt-0">
      <Topbar fixed back ref={topBar}>
        <div className="row center m-0">
          <div className="col px-0">
            {/*<Inputicon readOnly name="name" rowClass="w-100" className="pl-5 text-dark radius-50" placeholder="Pencarian..." icon={<i className="uil uil-search text-14 lh-1 pl-1"/>} />*/}
            <Inputicon autoFocus name="name" rowClass="w-100" className="text-dark radius-10" placeholder="Pencarian..." icon={<i className="uil uil-search text-14 lh-1 pl-1"/>} />
          </div>
          <div className="col-auto px-2">
            <div className="center text-dark radius-50 pointer" onClick={() => isOpenSet(!isOpen)}><i className="uil uil-filter text-14" /></div>
          </div>
        </div>
      </Topbar>
      <Swipe onSwipeChange={e => isOpenSet(e)} open={isOpen}>
        <div className="px-3">
          {
            Array(15).fill().map((r, key) => (
              <p key={key}>{key+1}</p>
            ))
          }
        </div>
      </Swipe>
      <div className="fixed-top z-99 bg-white border-top border-bottom py-1" ref={cat} style={{top: top}}>
        <Category />
      </div>
      <div style={{paddingTop: cTop}} />
      <div className="row m-0 ppx-2">
        {
          Array(2).fill().map((r, key) => (
            <div className="col-12 col-md-6 col-xl-4 ppx-1" key={key}> <Vendor img={require(`_dummy/avatar/c-${key+1}.png`).default} username="rejajamil" /> </div>
          ))
        }
      </div>
      <div className="row m-0 ppx-2">
        {
          Array(8).fill().map((r, key) => (
            <div className="col-6 col-md-3 col-xl-2 ppx-1" key={key}> <Package img={require(`_dummy/sample/${key+1}.jpg`).default} username avatar={require(`_dummy/avatar/c-${key+1}.png`).default} /> </div>
          ))
        }
      </div>
    </div>
  )
}

export default Index
