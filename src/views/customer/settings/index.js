import React, {useState, useRef} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {Topbar} from '_el/topbar'
// const cookies = require('js-cookie').getJSON()

function Card(props){
  return(
    <div className="row">
      <div className="col px-2 my-1">
        <Link to={props.to || '#'} className="p-2 center-left">
          <img src={require(`${process.env.REACT_APP_IMAGES}/icons/${props.icon || 'image'}.png`).default} alt="" height="16" className="" />
          <div className="text-11 lh-0 pt-1 text-dark bold px-3"> {props.name} </div>
          <img src={require(`${process.env.REACT_APP_IMAGES}/icons/next.png`).default} alt="" height="16" className="ml-auto" />
        </Link>
      </div>
    </div>
  )
}
function Index(props){
  const topBar = useRef()
  useState(() => {
    // console.log(cookies);
  })
  return(
    <div className="container-fluid px-0">
      <Topbar fixed back ref={topBar}>
        <div className="text-12 bold px-2">Pengaturan</div>
      </Topbar>
      <div className="p-3">
        <Card to="/settings/profile" name="Profil" icon="user" />
        <Card to="/settings/account" name="Akun" icon="shield" />
        <Card to="/settings/help" name="Bantuan" icon="help" />
        <Card to="/settings/about" name="Tentang" icon="about" />
      </div>
      <div className="px-3">
        <h6 className="text-info px-2 mb-1">Lorem ipsum dolor</h6>
        <p className="text-muted text-9 f-500 lh-15 px-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quo ut maxime fugiat officia provident eum laborum aliquid sed quisquam.</p>
      </div>
      <div className="px-2 pb-2 border-top">
        <Link to="/vendor/profile" className="d-block text-10 pt-3 text-dark bold px-3"> Syarat & Ketentuan </Link>
        <Link to="/vendor/profile" className="d-block text-10 pt-3 text-dark bold px-3"> Hak Cipta </Link>
        <Link to="/vendor/profile" className="d-block text-10 pt-3 text-dark bold px-3"> Kontak Kami </Link>
      </div>
      <hr className="my-1"/>
      <div className="p-2">
        <Link to="/vendor/profile" className="text-10 text-dark bold px-3"> Switch to Vendor </Link>
      </div>
      <div className="p-2">
        <div className="text-11 lh-0 pt-1 text-info bold px-3" onClick={() => props.dispatch({type: 'LOGOUT'})}> Logout </div>
      </div>
    </div>
  )
}

export default connect(s => s)(Index)
