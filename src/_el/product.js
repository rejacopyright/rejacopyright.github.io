import React, {Fragment, useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import category from 'views/category'
import Slider from 'react-slick'
import '_assets/plugins/slick/slick.scss'
import {Truncate} from '_templates/lib/code'
import Modal from '_components/modal'
import {Swipe} from '_el/swipe'
import {Follow as Vendor} from '_el/user'
import {Images} from '_el/gallery'

export function Category(props){
  const settings = {
    className: "hpx-35 center",
    speed: 500,
    // initialSlide: 3,
    centerPadding: '30px',
    centerMode: true,
    swipeToSlide: true,
    // arrows: false,
    adaptiveHeight: false,
    // variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1, } },
      { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1, } },
    ]
  }
  return(
    <Slider {...settings}>
      {
        category.map((r, key) => (
          <div className={`text-center hpx-${props.height || '35'} center px-1`} key={key}> <div className={`border w-100 h-100 center radius-5 p-1 lh-1 truncate-2 ${r.selected ? 'bg-light border-gray' : 'bg-white'}`}>{r.name}</div> </div>
        ))
      }
    </Slider>
  )
}
export function Review(props){
  const [star, starSet] = useState(false)
  const [img, imgSet] = useState([])
  useEffect(() => {
    starSet(props.star >= 1 ? (props.star > 5 ? 5 : props.star) : false)
    imgSet(props.img || [])
  }, [props.star, props.img])
  return(
    <Fragment>
      <div className="relative border-bottom bg-white py-1">
        <div className="absolute l-0 z-9 border-left border-1 border-gray text-white">.</div>
        <div className="px-3">
          <div className="center-left text-dark">
            <div className="same-30 radius-50 bg-img mb-1" style={{backgroundImage: `url(${props.avatar})`}} />
            <div className="pl-1">
              <p className="m-0 lh-75 text-11 bold">rejajamil</p>
              {
                star &&
                <div className="lh-13">
                  <span className="f-600 pr-2">
                    { Array(star).fill().map((r, key) => <img key={key} src={require(`${process.env.REACT_APP_IMAGES}/icons/star-fill.png`).default} width="8" className="lh-0" alt=""/>) }
                    { Array(5 - star).fill().map((r, key) => <img key={key} src={require(`${process.env.REACT_APP_IMAGES}/icons/star-o.png`).default} width="8" className="lh-0" alt=""/>) }
                  </span>
                </div>
              }
            </div>
            <p className="m-0 px-2 text-8 text-muted lh-1 ml-auto">01-01-2020</p>
          </div>
          <div className="row m-0">
            <div className="col-12 p-0 mt-1">
              <p className="mb-0 lh-12 text-10"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, accusamus! </p>
            </div>
            <div className="col-12 p-0 mt-1">
              <div className="row m-0">
                {
                  img.map((r, key) => (
                    <div className="col-auto ppx-2" key={key}>
                      <div className="same-35 radius-5 bg-img" style={{backgroundImage: `url(${r})`}} data-toggle="modal" data-target={`#${props.id || 'review-image'}`} />
                    </div>
                  ))
                }
              </div>
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
                <p className="mb-0 mt-2 text-8 text-muted lh-1">01-01-2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal id={props.id || 'review-image'} headerDisabled modalClass={`my-0 ${props.modalClass}`} bodyClass="p-0" contentClass="border-0 radius-0 bg-none">
        <Images dots={props.dots} arrows={props.arrows} img={[require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default, require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default, require(`${process.env.REACT_APP_IMAGES}/products/4.jpg`).default]} />
      </Modal>
    </Fragment>
  )
}
function Title(){
  return(
    <div className="row m-0">
      <div className="col px-2">
        <p className="bold m-0 text-info text-7 text-uppercase">#Photography</p>
        <h6 className="truncate-2 m-0 text-11 bold lh-12">Paket Lorem ipsum dolor sit amet, tes consectetur adipisicing elit.</h6>
        <h6 className="f-700 m-0 text-12 lh-2 text-dark">Rp. 1.500.000</h6>
      </div>
      <div className="col-auto pl-0 pr-2">
        <div className="same-30 radius-50 bg-light center pointer" data-toggle="modal" data-target="#galleryOpt"><i className="uil uil-ellipsis-v"/></div>
        <Modal id="galleryOpt" headerDisabled modalClass="px-5" contentClass="radius-10">
          <p className="text-center text-10 bold text-dark my-0 py-2"> Share </p>
          <p className="text-center text-10 bold text-dark my-0 py-2"> Unfollow </p>
        </Modal>
      </div>
    </div>
  )
}
export function Detail(props) {
  const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorum nemo ad quaerat aspernatur alias cupiditate nesciunt aliquam hic eligendi doloribus perferendis dolore sit obcaecati, iste sed itaque quasi, provident.';
  const [more, moreSet] = useState(true)
  const [active, activeSet] = useState(1)
  const [isOpen, isOpenSet] = useState(false)
  const [img, imgSet] = useState([])
  const settings = {
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
    beforeChange: (current, next) => activeSet(next+1),
  }
  useEffect(() => {
    imgSet(props.img)
  }, [props.img])
  return(
    <div className={`${props.className}`}>
      {
        props.header &&
        <div className="center py-2">
          <Link from="/" to="/vendor/rejajamil" className="pl-2">
            <img className="same-30 radius-100 ppx-1 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/icons/image.png`).default} alt=""/>
          </Link>
          <Link from="/" to="/vendor/rejajamil" className="px-2">
            <p className="f-600 m-0 lh-12">Reja Jamil</p>
            <p className="f-500 m-0 lh-12 text-muted text-8">rejajamil</p>
          </Link>
          <div className="ml-auto">
            <div className="same-30 radius-50 center pointer mr-1" data-toggle="modal" data-target="#galleryOpt"><i className="uil uil-ellipsis-v"/></div>
            <Modal id="galleryOpt" headerDisabled modalClass="px-5" contentClass="radius-10">
              <p className="text-center text-10 bold text-dark my-0 py-1"> Share </p>
              <p className="text-center text-10 bold text-dark my-0 py-1"> Unfollow </p>
            </Modal>
          </div>
        </div>
      }
      <div className="relative">
        <Slider {...settings}>
          {
            img.map((r, key) => (
              <div className="text-center" key={key}>
                <img className="w-100" src={`${r || require(`${process.env.REACT_APP_IMAGES}/icons/image.png`).default}`} alt=""/>
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
        {
          props.close &&
          <div className="absolute t-0 r-0 same-25 white-25 radius-50 center pointer m-1" data-dismiss="modal"><i className="uil uil-times"/></div>
        }
      </div>
      <Title />
      <Vendor size="same-50" inline location info btnClass="ml-auto" bodyClass="border bg-white" followClass="bg-light" />
      <div className="p-2">
        <div className="center-left">
          <p className="bold m-0 text-9">192 Menyukai</p>
          <p className="bold m-0 text-9 px-2">|</p>
          <p className="bold m-0 text-9">4.364 Ulasan</p>
        </div>
        <p className="m-0 text-10 lh-13"> {more ? Truncate(12, desc) : desc} <span className="f-600 text-muted ml-1" onClick={() => moreSet(!more)}> {more ? 'Selengkapnya' : 'Lebih Sedikit'}</span> </p>
      </div>
      <div className="px-2 text-10">
        <p className="lh-13 m-0 truncate"> <span className="bold m-0 mr-1">anisyahputri</span> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, magni.</span> </p>
        <div className="f-600 text-muted lh-2" onClick={() => isOpenSet(!isOpen)}> Lihat Semua Ulasan </div>
      </div>
      <Swipe title="Ulasan" fullScreen onSwipeChange={e => isOpenSet(e)} open={isOpen}>
        <div className="row mx-0">
          {
            Array(5).fill().map((r, key) => (
              <div className="col-12 oh py-1 px-0" key={key}>
                <Review img={[require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default, require(`${process.env.REACT_APP_IMAGES}/products/2.jpg`).default, require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default]}  modalClass="m-0" star={props.star} avatar={require(`${process.env.REACT_APP_IMAGES}/avatar/c-1.png`).default} />
              </div>
            ))
          }
        </div>
      </Swipe>
    </div>
  )
}
export function Grid(props){
  return(
    <Link to='/product/123/123' className="text-dark">
      <div className="bg-white oh">
        <div className="position-relative">
          <div className="hpx-150 w-100 oh bg-img" style={{ backgroundImage: `url(${props.img || require(`${process.env.REACT_APP_IMAGES}/icons/image.png`).default})` }}> </div>
          {
            props.promo &&
            <div className="position-absolute lh-1 r-0 t-0">
              <span className="badge badge-danger">{props.promo}</span>
            </div>
          }
          {
            props.love &&
            <div className="position-absolute lh-1 l-0 b-0 p-1">
              <div className="radius-50 center ppx-4 white-50 same-20">
                <img src={require(`${process.env.REACT_APP_IMAGES}/icons/heart-red.png`).default} className="pointer hover w-100" alt=""/>
              </div>
            </div>
          }
        </div>
        <div className="p-1 position-relative">
          <div className={`center-left ${props.avatar && 'pb-1'}`}>
            {
              props.avatar &&
              <div className="pr-1">
                <img className="same-25 radius-100 ppx-1 border border-gray" src={(props.avatar && props.avatar !== true) ? props.avatar : require(`${process.env.REACT_APP_IMAGES}/avatar/avatar.png`).default} alt=""/>
              </div>
            }
            <div className="">
              { props.username && <p className="f-600 m-0 lh-1 text-8">username</p> }
              <p className="f-600 m-0 lh-12 text-7 text-info text-uppercase">#Photography</p>
            </div>
          </div>
          <div className="">
            <h6 className="f-600 mb-1 mt-0 text-9 lh-12 truncate-2 text-capitalize o-8">Paket Lorem ipsum dolor</h6>
            <p className="f-700 m-0 text-9 lh-1 text-dark">Rp. 1.500.000</p>
            <h6 className="f-600 mt-1 mb-0 text-7 lh-12 truncate-1 text-capitalize o-5"><i className="uil uil-location-point lh-1"/> Bandung, Jawa Barat</h6>
          </div>
          <div className="row m-0 center">
            <div className="col px-0 lh-0">
              <img src={require(`${process.env.REACT_APP_IMAGES}/icons/star-fill.png`).default} width="8" alt=""/>
              <span className="m-0 lh-1 text-7 bold"> 3/5 </span>
            </div>
            <div className="col px-0 f-600 text-muted text-7 pl-0 text-right">
              2RB Terjual
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export function List(props){
  const height = useRef()
  const [h, hSet] = useState()
  useEffect(() => {
    // console.log(height.current.offsetHeight);
    hSet(height.current.offsetHeight)
  }, [])
  return(
    <Link to={`/product/${props.username || 'username'}/123`}>
      <div className={`row flex-nowrap mx-0 border bg-white radius-5 oh relative ${props.className}`} ref={height}>
        <div className="col-auto p-0">
          <div className="bg-img" style={{backgroundImage: `url(${props.img || require(`${process.env.REACT_APP_IMAGES}/icons/image.png`).default})`, width: h, height: h}} alt="" />
        </div>
        <div className="col p-2 text-dark text-left truncate">
          <h6 className="m-0 text-10 bold truncate-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, natus?</h6>
          <p className="f-600 m-0 lh-15 text-7 text-info text-uppercase text-truncate">#Photography</p>
          <div className="f-600 lh-1 text-left">
            <img src={require(`${process.env.REACT_APP_IMAGES}/icons/star.png`).default} width="9" className="lh-0" alt=""/>
            <span className="bold text-8"> 3/5 </span>
            <img src={require(`${process.env.REACT_APP_IMAGES}/icons/love.png`).default} width="9" className="lh-0 ml-2" alt=""/>
            <span className="bold text-8"> 3/5 </span>
          </div>
          <h6 className="mb-0 mt-1 text-10 bold wpx-100">Rp. 1.500.000</h6>
        </div>
        <div className="col-auto text-right center-right p-0">
          <div className="hpx-25 lh-2 p-1 border-right border-1 border-gray absolute r-0">
          </div>
        </div>
      </div>
    </Link>
  )
}
