import React, {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Topbar} from '_el/topbar'
import {Profile} from '_el/user'

function Card(props){
  return(
    <div className="row">
      <div className="col px-2 my-1">
        <Link to={props.to || '#'} className="p-2 center-left">
          <img src={require(`${process.env.REACT_APP_IMAGES}/icons/${props.icon || 'image'}.png`).default} alt="" height="18" className="" />
          <div className="text-11 lh-0 text-dark bold px-3"> {props.name || 'Lorem ipsum'} </div>
          <div className="">{props.children}</div>
          <img src={require(`${process.env.REACT_APP_IMAGES}/icons/next.png`).default} alt="" height="16" className="ml-auto" />
        </Link>
      </div>
    </div>
  )
}
function Index(){
  const topBar = useRef()
  useEffect(() => {
  }, [])
  return(
    <div className="container-fluid px-0">
      <Topbar fixed back ref={topBar}>
        <div className="row m-0">
          <div className="col-auto center">
            <div className="text-12 bold">Reja Jamil</div>
          </div>
          <div className="col center-right text-right">
            <Link to="/settings">
              <img src={require(`${process.env.REACT_APP_IMAGES}/icons/gear.png`).default} className="same-20" alt=""/>
            </Link>
          </div>
        </div>
      </Topbar>
      <Profile />
      <div className="p-3 text-center">
        <Link to="/vendor/profile"> <span className="d-block p-1 text-10 text-dark text-nowrap border border-gray bold radius-5">Switch to Vendor</span> </Link>
      </div>
      <div className="pb-3">
        <div className="row m-0">
          <div className="col">
            <Card to="/chat" name="Pesan" icon="chat" />
            <Card to="/cart" name="Keranjang" icon="bag" />
            <Card to="/invite" name="Undang Teman" icon="toa" />
            <Card to="/settings/about" name="Koin" icon="about" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
