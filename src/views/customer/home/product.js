import React, {useEffect, useRef, useState, useMemo} from 'react'
import {connect} from 'react-redux'
import {useSize} from '_utils/hooks'
import {Link} from 'react-router-dom'
import {Topbar} from '_el/topbar'
// import {List as Gallery} from '_el/gallery'
import st from '_assets/scss/tes.module.sass'
import Slider from 'react-slick'
import '_assets/plugins/slick/slick.scss'
import category from 'views/category'
import Rating from 'react-rating'
import {Inputicon, Decimal, Checkbox} from '_components/form'
import lay from '_config/layout'
import Modal from '_components/modal'
import { Scrollbars } from 'react-custom-scrollbars'
import Select from '_components/select'
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
function Search(props){
  const [top, topSet] = useState(0)
  const [desc, descSet] = useState(false)
  useSize(() => {
    topSet(Array.from(document.querySelectorAll(`.${lay.topbar}`)).find(i => i.clientHeight !== 0).clientHeight)
  }, 300)
  return(
    <div className="w-100 sticky px-md-0 px-2 pb-1 pt-2 bg-white z-9" style={{top: top+'px'}}>
      <div className="row m-0 py-3 px-2 radius-10 shadow-xs border border-light bg-white">
        <div className="col-md-4 center-left">
          <Inputicon rowClass="w-100" className="radius-50 text-10 bg-light border-gray" sm name="name" icon={<i className="uil uil-search"/>} placeholder="Pencarian" onChange={() => ''} />
        </div>
        <div className="col-auto ml-auto center-left desktop">
          <div className="same-35 radius-50 center bg-light pointer">
            <i className={`uil uil-sort-amount-${desc ? 'down' : 'up'} text-14 lh-0`} onClick={() => descSet(!desc)} />
          </div>
        </div>
        <div className="col-auto center desktop">
          <div className="btn btn-md radius-50 width-md btn-soft-primary bold border border-primary pointer" data-toggle="modal" data-target="#filterbar">Filter Pencarian</div>
        </div>
      </div>
    </div>
  )
}
function Header(props){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          // centerMode: true,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          // centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  }
  return(
    <div className={props.divClass}>
      <Slider {...settings}>
        <div className="text-center px-2 px-md-0"> <img className="w-100 radius-10" src={require(`${process.env.REACT_APP_IMAGES}/headers/header_1.jpg`).default} alt=""/> </div>
        <div className="text-center px-2 px-md-0"> <img className="w-100 radius-10" src={require(`${process.env.REACT_APP_IMAGES}/headers/header_2.jpg`).default} alt=""/> </div>
        <div className="text-center px-2 px-md-0"> <img className="w-100 radius-10" src={require(`${process.env.REACT_APP_IMAGES}/headers/header_3.jpg`).default} alt=""/> </div>
        <div className="text-center px-2 px-md-0"> <img className="w-100 radius-10" src={require(`${process.env.REACT_APP_IMAGES}/headers/header_4.jpg`).default} alt=""/> </div>
      </Slider>
    </div>
  )
}
function Category(props){
  const settings = {
    className: `hpx-${props.height || '35'} center`,
    speed: 500,
    centerPadding: '30px',
    centerMode: true,
    swipeToSlide: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1, } },
      { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1, } },
    ]
  }
  return(
    <div className={props.divClass}>
      <Slider {...settings}>
        {
          category.map((r, key) => (
            <div className={`text-center hpx-${props.height || '35'} center px-1 relative`} key={key}>
              <div className="border w-100 h-100 radius-5 oh">
                <div className={`w-100 h-100 ${r.selected ? 'border-primary o-10' : 'border-primary o-0'}`} style={{ background: `url(${require(`${process.env.REACT_APP_IMAGES}/templates/bg-flat-4.jpg`).default}) center / cover no-repeat` }} />
                <div className="absolute-center center p-1">
                  <img src={require(`${process.env.REACT_APP_IMAGES}/category/${r.icon}`).default} height="20"  className={`mr-1 ${r.selected && 'img-shadow'}`} alt=""/>
                  <div className={`lh-1 truncate-2 ${r.selected && 'bold'}`}>
                    {r.label}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
function Flash(props){
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
      { breakpoint: 480, settings: { centerPadding: '40px', slidesToShow: 3, } }
    ]
  }
  useSize(() => {
    productImg.current && productHeightSet((productImg.current.offsetWidth || 0) + 'px');
  }, 300)
  return(
    <Slider {...settings}>
      {
        Array(8).fill().map((r, key) =>
        (
          <div className="p-1" key={key}>
            <div className="radius-5 bg-white oh">
              <div className="position-relative">
                <div ref={productImg} className="w-100 mx-auto oh bg-img" style={{ backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/products/${key+7}.jpg`).default})`, height: productHeight }}> </div>
              </div>
              <div className="px-2 py-1 position-relative">
                {/*<p className="mt-0 mb-1 lh-12 text-8 text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>*/}
                <div className="progress position-relative radius-20" style={{height: 3}}>
                  <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h6 className="mt-1 mb-0 text-muted text-7 del i">Rp. 1.750.000</h6>
                <h6 className="m-0 f-700 text-dark text-8">Rp. ???</h6>
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
      { breakpoint: 2000, settings: { centerPadding: '50px', slidesToShow: 7, } },
      { breakpoint: 480, settings: { centerPadding: '40px', slidesToShow: 5, } }
    ]
  }
  useSize(() => {
    productImg.current && productHeightSet((productImg.current.offsetWidth || 0) + 'px');
  }, 300)
  return(
    <div className={props.divClass}>
      <Slider {...settings}>
        {
          Array(10).fill().map((r, key) =>
          (
            <div className="p-1" key={key}>
              <div className="position-relative border border-gray oh radius-15 p-1">
                <div ref={productImg} className="w-100 mx-auto radius-50 oh bg-img" style={{ backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/avatar/woman-${key+1}.png`).default})`, height: productHeight }}> </div>
              </div>
              <div className="px-2 py-1 position-relative">
                <p className="mt-0 mb-1 lh-12 text-7 text-truncate">Photography</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
function FeaturedProduct(props){
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
      { breakpoint: 480, settings: { centerPadding: '40px', slidesToShow: 4, } }
    ]
  }
  useSize(() => {
    productImg.current && productHeightSet((productImg.current.offsetWidth || 0) + 'px');
  }, 300)
  return(
    <div className={props.divClass}>
      <Slider {...settings}>
        {
          Array(8).fill().map((r, key) =>
          (
            <div className="p-1" key={key}>
              <div ref={productImg} className="w-100 mx-auto oh bg-img" style={{ backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/products/${key+1}.jpg`).default})`, height: productHeight }}> </div>
              <div className="py-1 position-relative">
                <p className="mt-0 mb-1 lh-12 text-7 text-truncate">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
function Product(props){
  const productImg = useRef()
  const [productHeight, productHeightSet] = useState()
  useSize(() => {
    productHeightSet((productImg.current.offsetWidth || 0) + 'px');
  }, 300)
  return(
    <div className={`radius-5 mb-3 bg-white hover-sm oh pointer ${props.divClass}`}>
      <Link to="/product/123/123">
        <div className="position-relative">
          <div className="position-absolute lh-1 l-0 t-1 white-50 p-1 pr-2 radius-right-10">
            <div className="text-8 center-left">
              <img src={require(`${process.env.REACT_APP_IMAGES}/icons/super.png`).default} width="12" alt=""/>
              <div className="text-truncate pl-1 text-dark bold"> aulianshop </div>
            </div>
          </div>
          <div ref={productImg} className="w-100 mx-auto oh bg-img" style={{ backgroundImage: `url(${props.img})`, height: productHeight }}> </div>
          <div className="position-absolute lh-1 r-0 b-0">
            <span className="badge badge-danger">25% OFF</span>
          </div>
        </div>
        <div className="p-2 pb-3 position-relative">
          <p className="mt-0 mb-1 lh-12 f-600 truncate-1 text-10 text-dark">Lorem ipsum dolor sit amet amet</p>
          <h6 className="f-700 lh-1 text-dark mt-1">Rp. 1.500.000</h6>
          <div className="position-absolute lh-15 l-0 b-0 p-2 f-600 text-muted text-10">
            <Rating
              initialRating={4}
              fullSymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star.png`).default} width="10" alt=""/>}
              emptySymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star-o.png`).default} width="10" alt=""/>}
              readonly
              />
            <span className="text-8 text-dark"> (89)</span>
          </div>
          <div className="position-absolute lh-15 r-0 b-0 p-2 f-600 text-muted text-7"><i className="uil uil-check" />2RB</div>
        </div>
      </Link>
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
      <Search />
      <Header divClass="mt-2" />
      <Category height="50" divClass="mt-2 radius-10" />
      <hr className="mb-0"/> {/*FLASH OFFER*/}
      <div className="row mx-1 mx-md-n2">
        <div className="col-md-8 p-0 my-1">
          <div className="card m-0">
            <div className="card-body radius-10 p-2">
              <div className="center-left p-1">
                <img src={require(`${process.env.REACT_APP_IMAGES}/icons/flash.png`).default} className="mr-2" height="25" alt=""/>
                <h6 className="m-0 lh-0 text-primary text-16 f-800 i desktop">Flash Offer</h6>
                <div className="mx-auto">
                  <div className="hpx-25 bold lh-1 center-inline mr-1 desktop text-8">Dalam : </div>
                  <div className="same-25 radius-5 text-danger bold lh-1 center-inline border border-danger ml-1">08</div><span className="f-800"> :</span>
                  <div className="same-25 radius-5 text-danger bold lh-1 center-inline border border-danger ml-1">24</div><span className="f-800"> :</span>
                  <div className="same-25 radius-5 text-danger bold lh-1 center-inline border border-danger ml-1">13</div>
                </div>
                <div className="">
                  <div className="hpx-25 bold lh-1 center-inline mr-2 u pointer text-dark text-10">Lihat Semua</div>
                </div>
              </div>
              <hr className="my-2" />
              <Flash />
            </div>
          </div>
        </div>
        <div className="col-md-4 my-1">
          <div className="card m-0">
            <div className="card-body radius-10 p-2">
              {/*VENDOR UNGGULAN*/}
              <div className="">
                <div className="center-left">
                  <h6 className="m-0 lh-0 text-gray text-9 bold">Vendor Unggulan</h6>
                  <div className="ml-auto">
                    <div className="bold lh-1 center-inline u pointer text-gray text-9">Lihat Semua</div>
                  </div>
                </div>
                <hr className="mt-0 mb-2" />
                <FeaturedVendor />
              </div>
              {/*VENDOR UNGGULAN*/}
              <div className="mt-0">
                <div className="center-left">
                  <h6 className="m-0 lh-0 text-gray text-9 bold">Penawaran Terbaik</h6>
                  <div className="ml-auto">
                    <div className="bold lh-1 center-inline u pointer text-gray text-9">Lihat Semua</div>
                  </div>
                </div>
                <hr className="mt-0 mb-2" />
                <FeaturedProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=""/> {/*IKLAN*/}
      <div className="row mx-1 mx-md-n2">
        {
          Array(15).fill().map((r, key) =>
          (
            <div className="col-6 col-md-2 mt-2s px-1 px-md-2" key={key}>
              <Product img={require(`${process.env.REACT_APP_IMAGES}/products/${key+1}.jpg`).default} />
            </div>
          ))
        }
      </div>
      <Modal right id="filterbar" headerDisabled modalClass="w-md-30 px-0">
        <Filter />
      </Modal>
    </div>
  )
}

export default connect(s => s)(Index)
