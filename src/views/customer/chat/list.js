import React, {useEffect, useState, useRef, Fragment} from 'react'
import {Swipe} from '_el/swipe'
import {Inputicon, Checkbox} from '_components/form'
import {Topbar} from '_el/topbar'
import {Simple as Chat} from '_el/user'
// const api = require('js-cookie').getJSON()

function SearchBar(props){
  const searcHeight = useRef()
  const [height, heightSet] = useState()
  useEffect(() => {
    heightSet(searcHeight.current.offsetHeight)
  }, [])
  return(
    <Fragment>
      <div className="fixed-top z-99 bg-white border-bottom py-2" style={{top: props.top}} ref={searcHeight}>
        <div className="row m-0">
          <div className="col">
            <Inputicon name="search" rowClass="w-100" className="text-dark radius-10" placeholder="Pencarian..." icon={<i className="uil uil-search text-14 lh-1 pl-1"/>} />
          </div>
        </div>
      </div>
      <div style={{paddingBottom: height}} />
    </Fragment>
  )
}
function Index(){
  const topBar = useRef()
  const [top, topSet] = useState(0)
  const [isOpen, isOpenSet] = useState(false)
  useEffect(() => {
    topSet(topBar.current.offsetHeight)
  }, [])
  return(
    <Fragment>
      <Topbar fixed back ref={topBar}>
        <div className="row center m-0">
          <div className="col text-14 bold lh-1 px-1">Chat</div>
          <div className="col-auto">
            <div className="same-35 radius-50 bg-light center pointer" onClick={() => isOpenSet(!isOpen)}><i className="uil uil-ellipsis-v"/></div>
          </div>
        </div>
      </Topbar>
      <SearchBar top={top} />
      <div className="pb-3">
        {
          Array(12).fill().map((r, key) => (
            <Chat key={key} img={require(`${process.env.REACT_APP_IMAGES}/avatar/c-${key+1}.png`).default} size="same-50" />
          ))
        }
      </div>
      <Swipe onSwipeChange={e => isOpenSet(e)} open={isOpen} overlay={false}>
        <div className="row m-0 py-2">
          <div className="col-auto">
            <Checkbox circle theme="danger" label="Pilih Semua" labelClass="text-nowrap bold"  id="selectall" value="1" onChange={() => ''} />
          </div>
          <div className="col center-right">
            <h6 className="m-0 text-9 bold lh-12 text-danger"> Hapus yang ditandai </h6>
            <span className="badge badge-soft-danger badge-pill ml-1 text-9">3</span>
          </div>
        </div>
      </Swipe>
    </Fragment>
  )
}

export default Index
