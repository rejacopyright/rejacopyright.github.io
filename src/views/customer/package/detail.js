import React, {useEffect, useRef, useState, Fragment} from 'react'
import {Link} from 'react-router-dom'
import lay from '_config/layout'
import debounce from 'lodash.debounce'
import Modal from '_components/modal'
import {Tabs} from '_components/tab'
import {Topbar, Bottombar} from '_el/topbar'
import {Detail as Package} from '_el/package'
import {Follow as Vendor} from '_el/user'
import Slider from 'react-slick'
import { SideBySideMagnifier as Magnify } from 'react-image-magnifiers'
import Rating from 'react-rating'

import Description from './description'
import Review from './review'
// const api = require('js-cookie').getJSON()

function OtherPackage(props){
  const productImg = useRef()
  const [productHeight, productHeightSet] = useState('0px')
  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    // centerMode: true,
    responsive: [
      { breakpoint: 2000, settings: { centerPadding: '50px', slidesToShow: 6, } },
      { breakpoint: 480, settings: { centerPadding: '40px', slidesToShow: 4, } }
    ]
  }
  useEffect(() => {
    const updateSize = debounce(() => {
      productImg.current && productHeightSet((productImg.current.offsetWidth || 0) + 'px');
    }, 300)
    updateSize()
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [])
  return(
    <Slider {...settings}>
      {
        Array(10).fill().map((r, key) =>
        (
          <div className="p-1" key={key}>
            <div className="radius-5 bg-white oh pointer">
              <Link to="/package/123/123">
                <div className="position-relative">
                  <div className="position-absolute lh-1 l-0 t-1 white-50 p-1 pr-2 radius-right-10">
                    <div className="text-8 center-left">
                      <img src={require('_dummy/icons/super.png').default} width="12" alt=""/>
                      <div className="text-truncate pl-1 text-dark bold"> aulianshop </div>
                    </div>
                  </div>
                  <div ref={productImg} className="w-100 mx-auto oh bg-img" style={{ backgroundImage: `url(${require(`_dummy/images/${key+2}.jpg`).default})`, height: productHeight }}> </div>
                  <div className="position-absolute lh-1 r-0 b-0">
                    <span className="badge badge-danger">25% OFF</span>
                  </div>
                </div>
                <div className="p-2 pb-3 position-relative">
                  <p className="mt-0 mb-1 lh-1 truncate-2 text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit sfsdfsdf fsdfsdf sdf sdf</p>
                  <h6 className="f-700 lh-1 text-primary mt-1">Rp. 1.500.000</h6>
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
        ))
      }
    </Slider>
  )
}
function RecomendedPackage(props){
  const productImg = useRef()
  const [productHeight, productHeightSet] = useState('0px')
  const settings = {
    dots: true,
    speed: 500,
    infinite: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    // centerMode: true,
    responsive: [
      { breakpoint: 2000, settings: { centerPadding: '50px', slidesToShow: 6, } },
      { breakpoint: 480, settings: { centerPadding: '40px', slidesToShow: 4, } }
    ]
  }
  useEffect(() => {
    const updateSize = debounce(() => {
      productImg.current && productHeightSet((productImg.current.offsetWidth || 0) + 'px');
    }, 300)
    updateSize()
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [])
  return(
    <Slider {...settings}>
      {
        Array(10).fill().map((r, key) =>
        (
          <div className="p-1" key={key}>
            <div className="radius-5 mb-2 bg-white shadow-sm oh pointer">
              <Link to="/package/123/123">
                <div className="position-relative">
                  <div className="position-absolute lh-1 l-0 t-1 white-50 p-1 pr-2 radius-right-10">
                    <div className="text-8 center-left">
                      <img src={require('_dummy/icons/super.png').default} width="12" alt=""/>
                      <div className="text-truncate pl-1 text-dark bold"> aulianshop </div>
                    </div>
                  </div>
                  <div ref={productImg} className="w-100 mx-auto oh bg-img" style={{ backgroundImage: `url(${require(`_dummy/images/${key+4}.jpg`).default})`, height: productHeight }}> </div>
                  <div className="position-absolute lh-1 r-0 b-0">
                    <span className="badge badge-danger">25% OFF</span>
                  </div>
                </div>
                <div className="p-2 pb-3 position-relative">
                  <p className="mt-0 mb-1 lh-1 truncate-2 text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit sfsdfsdf fsdfsdf sdf sdf</p>
                  <h6 className="f-700 lh-1 text-primary mt-1">Rp. 1.500.000</h6>
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
        ))
      }
    </Slider>
  )
}
function PackageDesktop(props){
  const [im, setIm] = useState(3);
  const tabs = [
    {title: 'description', label: 'Deskripsi', component: <Description />},
    {title: 'review', label: 'Ulasan', component: <Review />},
  ]
  useEffect(() => { document.querySelector('.img-item').classList.add('active'); }, []);
  function image(r, e){
    setIm(r);
    Array.from(document.querySelectorAll('.img-item')).map(r => r.classList.remove('active'));
    e.currentTarget.classList.add('active');
  }
  const settings = {
    infinite: false,
    swipeToSlide: true,
    focusOnSelect: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return(
    <div className={`row ${props.className}`}>
      <div className="col-4 mb-4">
        <div className="sticky-top t-7">
          <div className="radius-10 oh w-100">
            <Magnify
              imageSrc={require(`_dummy/images/${im}.jpg`).default}
              largeImageSrc={require(`_dummy/images/${im}.jpg`).default}
              alwaysInPlace
              transitionSpeedInPlace={0}
              />
          </div>
          <Slider {...settings} className="mt-2 mx-n1">
            <div className="text-center img-item px-1" onMouseOver={e => image(3, e)}> <img className="w-100 radius-10" src={require('_dummy/images/3.jpg').default} alt=""/> </div>
            <div className="text-center img-item px-1" onMouseOver={e => image(5, e)}> <img className="w-100 radius-10" src={require('_dummy/images/5.jpg').default} alt=""/> </div>
            <div className="text-center img-item px-1" onMouseOver={e => image(6, e)}> <img className="w-100 radius-10" src={require('_dummy/images/6.jpg').default} alt=""/> </div>
            <div className="text-center img-item px-1" onMouseOver={e => image(1, e)}> <img className="w-100 radius-10" src={require('_dummy/images/1.jpg').default} alt=""/> </div>
            <div className="text-center img-item px-1" onMouseOver={e => image(2, e)}> <img className="w-100 radius-10" src={require('_dummy/images/2.jpg').default} alt=""/> </div>
            <div className="text-center img-item px-1" onMouseOver={e => image(4, e)}> <img className="w-100 radius-10" src={require('_dummy/images/4.jpg').default} alt=""/> </div>
          </Slider>
        </div>
      </div>
      <div className="col-8">
        <div className="card">
          <div className="card-body shadow-sm radius-10 oh">
            <h6 className="m-0 text-info text-uppercase">#Photography</h6>
            <h5 className="m-0">Paket Lorem ipsum dolor sit amet, consectetur adipisicing.</h5>
            <div className="f-600 center-left mb-3">
              <Rating
                initialRating={4}
                fullSymbol={<img src={require('_assets/images/icons/star.png').default} width="15" alt=""/>}
                emptySymbol={<img src={require('_assets/images/icons/star-o.png').default} width="15" alt=""/>}
                readonly
                />
              <h6 className="text-dark ml-2 mt-1 mb-0 lh-0 text-9"> <span className="bold text-12">4.5</span> / 5</h6>
            </div>
            <div className="center-left text-10">
              <div className="bold m-0 center-left"><img src={require('_dummy/icons/love-fill.png').default} className="mr-1" height="15" alt=""/><div className="lh-0">192 Menyukai</div></div>
              <div className="bold m-0 px-2">|</div>
              <div className="bold m-0 center-left"><img src={require('_dummy/icons/comment.png').default} className="mr-1" height="15" alt=""/><div className="lh-0">3.221 Ulasan</div></div>
              <div className="bold m-0 px-2">|</div>
              <div className="bold m-0 center-left"><img src={require('_dummy/icons/check-success.png').default} className="mr-1" height="15" alt=""/><div className="lh-0">429 Transaksi Berhasil</div></div>
            </div>
            <div className="p-3 bg-smoke radius-5 mt-3">
              <h6 className="m-0 text-muted bold del i">Rp. 2.500.000</h6>
              <div className="center-left"><div className="text-primary f-800 text-16">RP. 1.500.000</div><span className="badge badge-soft-danger bold p-2 ml-2 lh-0">20% OFF</span></div>
              <div className="center-left mt-1">
                <img src={require('_assets/images/logo.png').default} height="25" alt=""/>
                <div className="ml-2 bold">
                  <p className="m-0 text-10 lh-15 text-primary">Dikelola Woless</p>
                  <p className="m-0 text-8 lh-1 text-muted">Paket Dari Brand Ternama</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Tabs tabClass="py-0">
                {
                  tabs.map((r, key) => (
                    <div className="pt-2" title={r.title} label={r.label} key={key}>
                      {r.component}
                    </div>
                  ))
                }
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 sticky-top b-2 t-7">
        <div className="row m-0 py-2 radius-10 shadow-xs border border-primary bg-smoke">
          <div className="col">
            <Vendor info className="px-0" btnClass="ml-auto" followClass="bg-soft-success text-success" img={`${require('_dummy/sample/1.jpg').default}`} name="Reja Jamil" username="rejajamil" />
          </div>
          <div className="col center-left">
            <div className="">
              <p className="m-0 text-muted bold del i lh-1">Rp. 2.500.000</p>
              <div className="center-left">
                <div className="text-primary f-800 text-16">RP. 1.500.000</div><span className="badge badge-soft-danger bold p-2 ml-2 lh-0">20% OFF</span>
              </div>
            </div>
          </div>
          <div className="col-auto center-left">
            <img src={require('_dummy/icons/love.png').default} alt="" className="same-15 mr-1"/>
            <div className="text-10 f-700 pointer u">Favoritkan</div>
          </div>
          <div className="col-auto center-left">
            <img src={require('_dummy/icons/chat.png').default} alt="" className="same-15 mr-1"/>
            <div className="text-10 f-700 pointer u">Kirim Pesan</div>
          </div>
          <div className="col-auto center">
            <div className="btn btn-md radius-50 width-md btn-soft-success bold border border-success pointer">Booking</div>
          </div>
        </div>
      </div>
      <div className="col-12 my-2">
        <div className="card m-0">
          <div className="card-body shadow-sm radius-10 pt-2 pb-0 px-2 bg-white">
            <div className="center-left p-1">
              <h6 className="m-0 lh-0 text-12 bold">Paket Lain dari Vendor</h6>
              <div className="ml-auto">
                <div className="hpx-25 bold lh-1 center-inline mr-2 u pointer text-primary text-10">Lihat Semua</div>
              </div>
            </div>
            <hr className="mt-1 mb-2" />
            <OtherPackage />
          </div>
        </div>
      </div>
      <div className="col-12 my-2">
        <div className="card m-0">
          <div className="card-body shadow-none radius-10 pt-2 pb-0 px-0 bg-white">
            <div className="center-left p-1">
              <h6 className="m-0 lh-0 text-12 bold">Rekomendasi Paket</h6>
              <div className="ml-auto">
                <div className="hpx-25 bold lh-1 center-inline mr-2 u pointer text-primary text-10">Lihat Semua</div>
              </div>
            </div>
            <hr className="mt-1 mb-2" />
            <div className="mb-2"> <RecomendedPackage /> </div>
            <div className="mb-2"> <OtherPackage /> </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function Index(){
  const bottomBar = useRef()
  const height = useRef()
  const [bottom, bottomSet] = useState()
  useEffect(() => {
    bottomSet(bottomBar.current.offsetHeight+5)
    document.title = 'Package Detail';
    const m = document.querySelector(`#${lay.menu}`).style;
    m.display = 'none';
    return () => m.display = 'block';
  }, [])
  return(
    <Fragment>
      <Topbar fixed back ref={height}>
        <div className="row center bg-white m-0">
          <div className="col text-12 lh-0 px-0">Paket Detail</div>
          <div className="col-auto">
            <div className="same-30 radius-50 bg-light center pointer" data-toggle="modal" data-target="#action"><i className="uil uil-ellipsis-v"/></div>
          </div>
        </div>
        <Modal id="action" headerDisabled modalClass="px-5" contentClass="radius-10">
          <p className="text-center text-10 f-600 text-dark my-0 py-2"> Favoritkan </p>
          <p className="text-center text-10 f-600 text-dark my-0 py-2"> Kirim Pesan </p>
          <p className="text-center text-10 f-600 text-dark my-0 py-2"> Booking </p>
        </Modal>
      </Topbar>
      <div className="container-fluid px-0 pb-2 pb-md-3">
        <Package className="phone" star={9} img={[`${require('_dummy/sample/1.jpg').default}`, `${require('_dummy/sample/2.jpg').default}`, `${require('_dummy/sample/3.jpg').default}`]}/>
        <PackageDesktop className="desktop mt-2" />
        <div style={{paddingTop: bottom}} />
      </div>
      <Bottombar ref={bottomBar}>
        <div className="row center p-2 m-0 shadow-md">
          <div className="col-auto">
            <img src={require('_dummy/icons/love.png').default} alt="" className="same-25"/>
          </div>
          <div className="col-auto">
            <img src={require('_dummy/icons/chat.png').default} alt="" className="same-25"/>
          </div>
          <div className="col text-right pr-0">
            <div className="btn py-2 bg-white text-dark text-12 width-lg bold border border-light radius-5">Booking</div>
          </div>
        </div>
      </Bottombar>
    </Fragment>
  )
}
export default Index
