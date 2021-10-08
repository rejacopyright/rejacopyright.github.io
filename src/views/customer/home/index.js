import React, {useEffect, useRef, useState, useMemo, Fragment} from 'react'
import {connect} from 'react-redux'
import {useSize} from '_utils/hooks'
import {Link} from 'react-router-dom'
import {Topbar} from '_el/topbar'
import {Truncate} from '_utils/typo'
// import {List as Gallery} from '_el/gallery'
import st from '_assets/scss/tes.module.sass'
import Slider from 'react-slick'
import '_assets/plugins/slick/slick.scss'
import category from 'views/category'
import {Input, Inputicon, Decimal, Checkbox} from '_components/form'
import lay from '_config/layout'
import Modal from '_components/modal'
import { Scrollbars } from 'react-custom-scrollbars'
import Select from '_components/select'
import Alert from '_components/alert'
// const api = require('js-cookie').getJSON()

function Filter(props){
  const [sortBy, sortBySet] = useState('name')
  const [status, statusSet] = useState(1)
  const sorts = useMemo(() => {
    return [
      {value: 'created_at', label: 'Terbaru'},
      {value: 'price', label: 'Harga'},
      {value: 'discount', label: 'Diskon'},
      {value: 'view', label: 'Dilihat'},
      {value: 'like', label: 'Disukai'},
      {value: 'review', label: 'Diulas'},
      {value: 'sold', label: 'Penjualan'},
    ]
  }, [])
  const stats = useMemo(() => {
    return [
      {value: 1, label: 'Reguler'},
      {value: 2, label: 'Star'},
      {value: 3, label: 'Branded'},
    ]
  }, [])
  return(
    <div className="row m-0">
      <div className="col-12">
        <Scrollbars autoHeight autoHeightMax="65vh" autoHide autoHideDuration={10}>
          <h6 className="m-0 f-700 border-bottom pb-1 border-2 text-primary">Filter Berdasarkan</h6>
          {/*Kategori*/}
          <div className="p-1 mt-2">
            <h6 className="mt-0 mb-2 f-700">Kategori</h6>
            <Select name="select" sm rowClass="" placeholder="Semua Kategori" data={category} label="name" onChange={() => ''} />
          </div>
          {/*Tipe Vendor*/}
          <div className="bg-smoke radius-5 px-3 py-2 mt-2">
            <h6 className="m-0 f-700">Tipe Vendor</h6>
            <div className="radio-primary mt-2">
              <div className="row m-n1">
                {
                  stats.map((r, key) => (
                    <div className="col-4 px-1 my-2 text-center" key={key}>
                      <div onClick={() => statusSet(r.value)} className={`border ${status === r.value ? 'border-primary bg-soft-primary text-primary shadow-sm' : 'shadow-xs'} radius-5 px-2 py-1 pointer hover-sm f-600`}>{r.label}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          {/*Price Range*/}
          <div className="bg-white radius-5 px-3 py-2 mt-2 mb-3">
            <h6 className="m-0 f-700">Harga</h6>
            <div className="radio-primary mt-2">
              <div className="row m-n1 center-left">
                <div className="col-3 px-1 my-1"> Dari </div>
                <div className="col px-1 my-1">
                  <Decimal sm name="from" icon="Rp." iconClass="text-10 bg-light border-gray" inputClass="pl-0 text-10 bg-light border-gray" onChange={() => ''} />
                </div>
              </div>
              <div className="row m-n1 center-left">
                <div className="col-3 px-1 my-1"> Sampai </div>
                <div className="col px-1 my-1">
                  <Decimal sm name="to" icon="Rp." iconClass="text-10 bg-light border-gray" inputClass="pl-0 text-10 bg-light border-gray" onChange={() => ''} />
                </div>
              </div>
            </div>
          </div>
          {/*Lainnya*/}
          <div className="bg-smoke radius-5 px-3 py-2 mt-2">
            <h6 className="m-0 f-700">Lainnya</h6>
            <div className="radio-primary mt-2">
              <div className="row m-n1">
                <div className="col-md-6 px-1 my-1">
                  <Checkbox label="Dengan Diskon" theme="primary" labelClass="text-nowrap text-9 pointer"  id="discount_check" name="discount_check" value="1" onChange={() => ''} />
                </div>
                <div className="col-md-6 px-1 my-1">
                  <Checkbox label="Transportasi" theme="primary" labelClass="text-nowrap text-9 pointer"  id="transportation_check" name="transportation_check" value="1" onChange={() => ''} />
                </div>
                <div className="col-md-6 px-1 my-1">
                  <Checkbox label="Akomodasi" theme="primary" labelClass="text-nowrap text-9 pointer"  id="accommodation_check" name="accommodation_check" value="1" onChange={() => ''} />
                </div>
                <div className="col-md-6 px-1 my-1">
                  <Checkbox label="Uang Muka" theme="primary" labelClass="text-nowrap text-9 pointer"  id="dp_check" name="dp_check" value="1" onChange={() => ''} />
                </div>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
      <div className="col-12 mt-4">
        <div className="mt-0 mb-1 border-bottom pb-1 border-2 center-left">
          <h6 className="m-0 f-700 text-primary">Urutkan</h6>
          <div className="ml-auto pr-2">
            <Checkbox label="DESC" theme="primary" labelClass="text-nowrap text-9 pointer"  id="desc" name="checkbox" value="1" checked onChange={() => ''} />
          </div>
        </div>
        <div className="row m-n1">
          {
            sorts.map((r, key) => (
              <div className="col-auto px-1 mt-2" key={key}>
                <div onClick={() => sortBySet(r.value)} className={`border ${sortBy === r.value ? 'border-primary bg-soft-primary text-primary shadow-sm' : 'shadow-xs'} radius-5 px-2 py-1 pointer hover-sm f-600`}>{r.label}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="col-12 absolute-center-h b-0 pb-2 text-right">
        <div className="btn width-sm btn-sm radius-20 text-dark bold pointer" data-dismiss="modal">Tutup</div>
        <div className="btn width-sm btn-sm radius-20 btn-primary bold pointer" data-dismiss="modal">Simpan</div>
      </div>
    </div>
  )
}
function RecomendedVendor(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: '15%',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return(
    <Slider {...settings}>
      {
        Array(3).fill().map((r, key) => (
          <div className="px-1" key={key}>
            <div className="px-3 py-2 bg-white radius-10 border oh">
              <div className="row center">
                <div className="col-auto">
                  <img className="same-40 radius-50 border border-1 bg-img" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" />
                </div>
                <div className="col pl-0">
                  <h6 className="m-0 text-10 f-700 truncate">Aulian Shop</h6>
                  <p className="lh-1 text-muted m-0 truncate">username</p>
                </div>
              </div>
              <div className="row mt-3 mb-2">
                <div className="col-auto text-9 f-700 text-muted lh-1">Stok <p className="m-0 text-dark lh-1">99</p></div>
                <div className="col-auto text-9 f-700 text-muted lh-1">Kategori <p className="m-0 text-dark lh-1">Kemeja Pria</p></div>
              </div>
              <div className="row">
                <div className="col-auto text-9 f-700 text-muted"><i className="uil uil-comment-alt-lines mr-1" />48</div>
                <div className="col-auto text-9 f-700 text-muted"><i className="uil uil-thumbs-up mr-1" />12</div>
                <div className="col-auto text-9 f-700 text-muted"><i className="uil uil-heart mr-1" />76</div>
              </div>
              <hr className="my-2"/>
              <div className="text-left text-muted text-truncate">
                5 km Dari Lokasi Anda
              </div>
              <div className="row mt-2 mx-n1">
                <div className="col px-1"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} alt="" className="img-fluid radius-5" /> </div>
                <div className="col px-1"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt="" className="img-fluid radius-5" /> </div>
                <div className="col px-1"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" className="img-fluid radius-5" /> </div>
              </div>
            </div>
          </div>
        ))
      }
    </Slider>
  )
}
function FeaturedVendor(props){
  const productImg = useRef()
  const [productHeight, productHeightSet] = useState('0px')
  const settings = {
    dots: false,
    speed: 500,
    infinite: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    // centerMode: true,
    responsive: [
      { breakpoint: 2000, settings: { centerPadding: '50px', slidesToShow: 5, } },
      { breakpoint: 480, settings: { centerPadding: '40px', slidesToShow: 3, } }
    ]
  }
  useSize(() => {
    productImg.current && productHeightSet((productImg.current.offsetWidth || 0) + 'px');
  }, 300)
  return(
    <div className={props.divClass}>
      <div className="center-left mb-2">
        <h6 className="m-0 lh-0 text-11 text-gray bold">Vendor Unggulan</h6>
        <div className="ml-auto">
          <div className="center-inline pointer text-dark">Lihat Semua</div>
        </div>
      </div>
      <Slider {...settings}>
        {
          Array(10).fill().map((r, key) =>
          (
            <div className="p-1" key={key}>
              <div className="position-relative border border-gray oh radius-50 ppx-2">
                <div ref={productImg} className="w-100 mx-auto radius-50 oh bg-img" style={{ backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/products/${key+1}.jpg`).default})`, height: productHeight }}> </div>
              </div>
              <div className="p-1 position-relative text-center">
                <p className="m-0 lh-1 text-muted text-8 text-truncate">username</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
function Sidebar(props){
  const [top, topSet] = useState(0)
  useSize(() => {
    topSet(Array.from(document.querySelectorAll(`.${lay.topbar}`)).find(i => i.clientHeight !== 0).clientHeight)
  }, 300)
  return(
    <div className="w-100 sticky px-md-0 px-2 pb-1 pt-2 bg-white z-9 desktop" style={{top: top+'px'}}>
      <div className="row m-0 py-2 radius-10 bg-white">
        <div className="col center-left pr-0">
          <Inputicon rowClass="w-100" className="radius-5 text-10 bg-light border-gray" sm name="name" icon={<i className="uil uil-search"/>} placeholder="Pencarian" onChange={() => ''} />
        </div>
        <div className="col-auto ml-auto center-left desktop">
          <div className="center pointer" data-toggle="modal" data-target="#filterbar">
            <i className={`uil uil-ellipsis-v text-12`} />
          </div>
        </div>
      </div>
      <div className="row center mx-0 p-2">
        <div className="col-auto">
          <img className="same-75 radius-50 border border-1 bg-img" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" />
        </div>
        <div className="col pl-0 text-10">
          <h6 className="m-0 f-700 truncate">Lorem ipsum</h6>
          <p className="text-muted m-0 truncate">username</p>
          <Link to="/username" className="text-info pointer m-0">Halaman Vendor</Link>
        </div>
        <div className="col-auto"> <div className="text-info pointer">Lihat Profile</div> </div>
      </div>
      <div className="row mx-0 pt-1">
        <div className="col">
          <Alert theme="primary"> Untuk ke Halaman Produk Klik <Link to="/product" className="u">Disini</Link> </Alert>
        </div>
      </div>
      <div className="row mx-0 mb-3"> <div className="col"> <FeaturedVendor /> </div> </div>
      <div className="row center mx-0 my-2">
        <div className="col center-left"> <h6 className="m-0 text-11 text-gray">Rekomendasi Untuk Anda</h6> </div>
        <div className="col-auto"> <div className="text-dark pointer">Lihat Semua</div> </div>
      </div>
      <div className="row mx-0 my-2"> <div className="col"> <RecomendedVendor /> </div> </div>
    </div>
  )
}
function Comment(props){
  return(
    <Fragment>
      <div className="relative border-top bg-white py-2">
        <div className="absolute l-0 z-9 border-left border-1 border-gray text-white">.</div>
        <div className="px-3">
          <div className="center-left text-dark">
            <div className="same-25 radius-50 bg-img mb-1" style={{backgroundImage: `url(${props.avatar})`}} />
            <div className="pl-1">
              <p className="m-0 lh-75 text-11 bold">rejajamil</p>
              <div className="lh-13">
                <span className="f-600 pr-2">
                  { Array(4).fill().map((r, key) => <img key={key} src={require(`${process.env.REACT_APP_IMAGES}/icons/star-fill.png`).default} width="8" className="lh-0" alt=""/>) }
                  { Array(1).fill().map((r, key) => <img key={key} src={require(`${process.env.REACT_APP_IMAGES}/icons/star-o.png`).default} width="8" className="lh-0" alt=""/>) }
                </span>
              </div>
            </div>
            <p className="m-0 px-2 text-8 text-muted lh-1 ml-auto">01-01-2020</p>
          </div>
          <div className="row m-0">
            <div className="col-12 p-0 mt-1">
              <p className="mb-0 lh-12 text-10"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, accusamus! </p>
            </div>
            <div className="col-12 py-0 pr-0 mt-2">
              <div className="bg-light p-2 radius-5">
                <div className="center-left text-dark">
                  { props.vendorAvatar && <div className="same-30 radius-50 bg-img" style={{backgroundImage: `url(${props.vendorAvatar || require(`${process.env.REACT_APP_IMAGES}/icons/image.png`).default})`}} alt="" /> }
                  <div className={`pl-1 ${!props.vendorAvatar && 'center-left'}`}>
                    <p className="m-0 lh-12 text-10 bold">rejajamil</p>
                    <p className={`m-0 lh-12 text-muted text-9 ${!props.vendorAvatar && 'ml-1'}`}>vendor</p>
                  </div>
                </div>
                <p className="mb-0 mt-1 lh-12 text-10"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, accusamus! </p>
              </div>
              <p className="mb-0 mt-2 text-8 text-muted lh-1">01-01-2020</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
function AllComments(props){
  const [active, activeSet] = useState(1)
  const settings = {
    dots: false,
    arrows: true,
    adaptiveHeight: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
    className: "h-100 w-100 slider-ig",
    beforeChange: (current, next) => activeSet(next+1),
  }
  return(
    <Modal id="view-all-comment" headerDisabled modalClass="modal-xl" bodyClass="p-0" contentClass="border-0 radius-0 bg-none">
      <div className="row oh vh-90 relative">
        <div className="col-lg-7 m-0 p-0 mvh-50 desktop relative">
          <Slider {...settings}>
            {
              Array(3).fill().map((r, key) => (
                <div className="h-100 w-100" key={key}>
                  <div className="bg-img h-100 w-100 bg-white" style={{backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/sample/${key+7}.jpg`).default})`}} />
                </div>
              ))
            }
          </Slider>
          {/*<div className="bg-img h-100 w-100 bg-white" style={{backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/sample/5.jpg`).default})`}} />*/}
          <div className="absolute b-3 w-100">
            <div className="row m-0">
              <div className="col text-right px-2">
                <span className="white-50 bold radius-50 px-2">{active}/3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg bg-white p-0">
          <div className="center-left p-3 border-bottom">
            <img className="same-35 radius-50 border border-1 bg-img" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" />
            <div className="px-2">
              <h6 className="m-0 lh-15 text-10 f-700 truncate">Reja Jamil</h6>
              <p className="m-0 lh-75 text-muted truncate">username</p>
            </div>
            <div className="ml-auto pointer"> <i className={`uil uil-ellipsis-h text-14`} /> </div>
          </div>
          <Scrollbars autoHeight autoHeightMax="57vh" autoHide autoHideDuration={10}>
            {
              Array(12).fill().map((r, key) => <Comment key={key} img={[require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default, require(`${process.env.REACT_APP_IMAGES}/products/2.jpg`).default, require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default]}  modalClass="m-0" star={props.star} avatar={require(`${process.env.REACT_APP_IMAGES}/avatar/c-1.png`).default} />)
            }
          </Scrollbars>
          <div className="border-top p-2">
            <div className="row px-2 center-left">
              <div className="col-auto text-10 f-700"><i className="uil uil-comment-alt-lines mr-1" />48</div>
              <div className="col-auto text-10 f-700"><i className="uil uil-eye mr-1" />12</div>
              <div className="col-auto text-10 f-700"><i className="uil uil-heart mr-1" />76</div>
              <div className="col-auto ml-auto"> <span className="pointer bg-light py-1 px-3 radius-5 bold">Follow</span> </div>
            </div>
            <p className="m-0 p-2 text-info text-7 bold text-uppercase">#Photography</p>
            <div className="center-left px-2">
              <p className="bold m-0 text-9">192 Menyukai</p>
              <p className="bold m-0 text-9 px-2">|</p>
              <p className="bold m-0 text-9">4.364 Ulasan</p>
            </div>
            <p className="m-0 p-2 text-7 f-600 text-muted text-uppercase">18 JAM YANG LALU</p>
          </div>
          <div className="absolute b-0 w-100">
            <div className="center-left border-top py-1 bg-smoke">
              <div className="px-2 col">
                <Input rowClass="w-100" className="border-0 bg-smoke text-12" sm name="name" placeholder="Komentari" onChange={() => ''} />
              </div>
              <div className="px-2"> <i className="uil uil-navigator text-16 pointer lh-1"/> </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
function Product(props){
  const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur ut nihil neque labore totam perferendis, unde repudiandae adipisci facilis nostrum reprehenderit facere vitae corporis quod. Obcaecati veniam, corporis beatae.';
  const [more, moreSet] = useState(true)
  const [active, activeSet] = useState(1)
  const settings = {
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
    beforeChange: (current, next) => activeSet(next+1),
  }
  return(
    <div className="bg-white border border-light oh mb-3">
      <div className="row center p-2">
        <div className="col-auto">
          <img className="same-40 radius-50 border border-1 bg-img" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" />
        </div>
        <div className="col pl-0">
          <h6 className="m-0 text-10 f-700 truncate">Lorem ipsum <span className="text-gray ml-1 text-9">Lihat Profile</span></h6>
          <p className="text-muted m-0 truncate">username</p>
        </div>
      </div>
      <div className="relative">
        <Slider {...settings}>
          {
            Array(3).fill().map((r, key) => (
              <div className="text-center" key={key}>
                <img src={require(`${process.env.REACT_APP_IMAGES}/sample/${key+(props.img || 5)}.jpg`).default} alt="" className="w-100" />
              </div>
            ))
          }
        </Slider>
        <div className="absolute b-3 w-100">
          <div className="row m-0">
            <div className="col text-right px-2">
              <span className="white-50 bold radius-50 px-2">{active}/3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2 center-left">
        <div className="col-auto text-10 f-700"><i className="uil uil-comment-alt-lines mr-1" />48</div>
        <div className="col-auto text-10 f-700"><i className="uil uil-eye mr-1" />12</div>
        <div className="col-auto text-10 f-700"><i className="uil uil-heart mr-1" />76</div>
        <div className="col-auto ml-auto"> <span className="pointer bg-light py-1 px-3 radius-5 bold">Follow</span> </div>
      </div>
      <div className="px-2">
        <p className="m-0 text-info text-7 bold text-uppercase">#Photography</p>
      </div>
      <div className="p-2">
        <div className="center-left mb-1">
          <p className="bold m-0 text-9">192 Menyukai</p>
          <p className="bold m-0 text-9 px-2">|</p>
          <p className="bold m-0 text-9">4.364 Ulasan</p>
        </div>
        <p className="mb-1 text-muted f-600 pointer" data-toggle="modal" data-target="#view-all-comment">Lihat Semua 4.364 Ulasan</p>
        <p className="m-0 text-10 lh-15"> {more ? Truncate(15, desc) : desc} <span className="text-9 text-muted ml-1 pointer" onClick={() => moreSet(!more)}> {more ? 'Selengkapnya' : 'Lebih Sedikit'}</span> </p>
        <p className="mb-0 mt-2 text-7 text-muted f-600"> 18 JAM YANG LALU </p>
      </div>
      <Comment img={[require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default, require(`${process.env.REACT_APP_IMAGES}/products/2.jpg`).default, require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default]}  modalClass="m-0" star={props.star} avatar={require(`${process.env.REACT_APP_IMAGES}/avatar/c-1.png`).default} />
      <AllComments />
      <div className="center-left border-top py-1 bg-smoke">
        <div className="px-2 col">
          <Input rowClass="w-100" className="border-0 bg-smoke text-12" sm name="name" placeholder="Komentari" onChange={() => ''} />
        </div>
        <div className="px-2"> <i className="uil uil-navigator text-16 pointer lh-1"/> </div>
      </div>
    </div>
  )
}
function Index(props){
  const topBar = useRef()
  useEffect(() => {
    document.title = 'Wedding Organizer';
  }, [props]);
  return(
    <div className={`container-fluid pb-2 pb-md-3 ${st.ngates}`}>
      <Topbar ref={topBar} fixed logo>
        <div className="row m-0">
          <div className="col px-0">
            <div className="text-12 bold pl-1">Woless</div>
          </div>
          <div className="col-auto center pl-2">
            <Link to="/chat">
              <img src={require(`${process.env.REACT_APP_IMAGES}/icons/chat.png`).default} height="22" alt=""/>
            </Link>
          </div>
        </div>
      </Topbar>
      <div className="row mx-0 px-0 px-md-4">
        <div className="col-xl-10 offset-xl-1">
          <div className="row">
            <div className="col-md-7 px-md-2 px-0 mt-3">
              {
                Array(5).fill().map((r, key) =>
                (
                  <div className="" key={key}>
                    <Product img={key+3} />
                  </div>
                ))
              }
            </div>
            <div className="col-md-5">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Modal right id="filterbar" headerDisabled modalClass="w-md-30 px-0">
        <Filter />
      </Modal>
    </div>
  )
}

export default connect(s => s)(Index)
