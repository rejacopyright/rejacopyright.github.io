import React, {useRef, useEffect, useMemo, useState} from 'react'
import {Link} from 'react-router-dom'
import debounce from 'lodash.debounce'
import {Topbar} from '_el/topbar'
import Rating from 'react-rating'
import lay from '_config/layout'

function Product(props){
  const productImg = useRef()
  const [productHeight, productHeightSet] = useState('0px')
  useEffect(() => {
    console.log(lay);
    const updateSize = debounce(() => {
      productImg.current && productHeightSet((productImg.current.offsetWidth || 0) + 'px');
    }, 300)
    updateSize()
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [])
  return(
    <div className="p-1">
      <div className="radius-5 bg-white oh pointer hover-sm">
        <Link to="/package/123/123">
          <div className="position-relative">
            <div ref={productImg} className="w-100 mx-auto oh bg-img" style={{ backgroundImage: `url(${props.img})`, height: productHeight }}> </div>
            <div className="position-absolute lh-1 r-0 b-0">
              <span className="badge badge-danger">25% OFF</span>
            </div>
          </div>
          <div className="p-2 pb-3 position-relative">
            <p className="mt-0 mb-1 lh-1 truncate-2 text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit sfsdfsdf fsdfsdf sdf sdf</p>
            <h6 className="f-700 lh-1 text-dark mt-1">Rp. 1.500.000</h6>
            <div className="position-absolute lh-15 l-0 b-0 p-2 f-600 text-muted text-10">
              <Rating
                initialRating={4}
                fullSymbol={<img src={require('_assets/images/icons/star.png').default} width="10" alt=""/>}
                emptySymbol={<img src={require('_assets/images/icons/star-o.png').default} width="10" alt=""/>}
                readonly
                />
              <span className="text-8 text-dark"> (89)</span>
            </div>
            <div className="position-absolute lh-15 r-0 b-0 p-2 f-600 text-muted text-7"><i className="uil uil-check" />2RB</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
function Index(){
  const topBar = useRef()
  const [desktopBar, desktopBarSet] = useState(0)
  useMemo(() => document.title = 'Produk' , [])
  useEffect(() => {
    const updateHeight = debounce(() => {
      desktopBarSet(Array.from(document.querySelectorAll(`.${lay.topbar}`)).find(i => i.clientHeight !== 0).clientHeight)
    }, 300)
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])
  return(
    <div className="container-fluid">
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
      <div className="w-100 sticky-top px-md-0 pb-1 pt-2 bg-white z-9" style={{top: desktopBar+'px'}}>
        <div className="row m-0 py-3 px-2 radius-10 shadow-sm border border-light bg-white">
          <div className="col center-left">
            <div className="">
              <p className="m-0 text-12 text-danger bold del i lh-1 desktop">Rp. 2.500.000</p>
            </div>
          </div>
          <div className="col-auto center-left">
            <img src={require('_dummy/icons/love.png').default} alt="" className="same-20 mr-1 phone"/>
            <div className="text-10 f-700 pointer desktop">Filter</div>
          </div>
          <div className="col-auto center-left">
            <img src={require('_dummy/icons/chat.png').default} alt="" className="same-20 mr-1 phone"/>
            <div className="text-10 f-700 pointer desktop">Urutkan</div>
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
      <div className="mb-3">
        <div className="row mx-1 mx-md-n2">
          {
            Array(15).fill().map((r, key) => (
              <div className="col-6 col-md-3 mt-2 px-1 px-md-2" key={key}>
                <Product img={require(`_dummy/images/${key+2}.jpg`).default} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Index
