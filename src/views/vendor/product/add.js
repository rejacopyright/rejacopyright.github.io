import React, {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Topbar} from '_el/topbar'

function Index(){
  const topBar = useRef()
  useEffect(() => {
    document.title = 'Produk'
  }, [])
  return(
    <div className="container-fluid px-0">
      <Topbar fixed back ref={topBar}>
        <div className="row m-0">
          <div className="col-auto center">
            <div className="text-12 bold">Produk</div>
          </div>
          <div className="col center-right text-right">
            <Link to="/vendor/product/filter">
              <img src={require(`_dummy/icons/lock.png`).default} className="" height="25" alt=""/>
            </Link>
            <Link to="/vendor/product/add">
              <img src={require(`_dummy/icons/add.png`).default} className="ml-3" height="25" alt=""/>
            </Link>
          </div>
        </div>
      </Topbar>
      <div className="w-100 position-sticky p-md-3 p-2 bg-white b-0">
        <div className="row m-0 py-3 px-2 radius-10 shadow-lg border border-light bg-white">
          <div className="col center-left">
            <div className="">
              <p className="m-0 text-muted bold del i lh-1 desktop">Rp. 2.500.000</p>
            </div>
          </div>
          <div className="col-auto center-left">
            <img src={require('_dummy/icons/love.png').default} alt="" className="same-20 mr-1"/>
            <div className="text-10 f-700 pointer u desktop">Filter</div>
          </div>
          <div className="col-auto center-left">
            <img src={require('_dummy/icons/chat.png').default} alt="" className="same-20 mr-1"/>
            <div className="text-10 f-700 pointer u desktop">Urutkan</div>
          </div>
          <div className="col-auto center">
            <div className="desktop">
              <Link to={`/vendor/product/add`} className="btn btn-md radius-50 width-md btn-soft-success bold border border-success pointer">Tambah Produk</Link>
            </div>
            <div className="phone">
              <Link to={`/vendor/product/add`}><div className="same-30 center radius-50 btn-soft-success border border-success pointer"><i className="uil uil-plus text-14" /></div></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-md-3 text-center mb-3">
        <div className="row mx-1 mx-md-n2">
          ADD
        </div>
      </div>
    </div>
  )
}

export default Index
