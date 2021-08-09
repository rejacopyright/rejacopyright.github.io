import React, {Fragment, useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Truncate} from '_utils/typo'
import Modal from '_components/modal'
import Slider from 'react-slick'
import '_assets/plugins/slick/slick.scss'
import {Swipe} from '_el/swipe'

export function Images(props){
  const [active, activeSet] = useState(1);
  const [img, imgSet] = useState([]);
  const settings = {
    dots: props.dots,
    arrows: props.arrows,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
    beforeChange: (current, next) => {
      activeSet(next+1);
    },
  }
  useEffect(() => {
    imgSet(props.img || [])
  }, [props.img])
  return(
    <div className="relative">
      <Slider {...settings}>
        {
          img.map((r, key) => (
            <div className="text-center" key={key}><img className="w-100" src={`${r || require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default}`} alt=""/>
          </div>
          ))
        }
      </Slider>
      <div className="absolute b-3 w-100">
        <div className="row m-0">
          <div className="col text-right px-2">
            <span className="white-50 bold radius-50 px-2">{active}/{img.length}</span>
          </div>
        </div>
      </div>
      {
        props.close &&
        <div className="absolute t-0 r-0 same-25 white-25 radius-50 center pointer m-1" data-dismiss="modal"><i className="uil uil-times"/></div>
      }
    </div>
  )
}
function Comment(props){
  return(
    <Fragment>
      <div className="relative border-bottom bg-white py-1">
        <div className="absolute l-0 z-9 border-left border-1 border-gray text-white">.</div>
        <div className="px-3">
          <p className="m-0 lh-75 text-11 bold">@anisyah</p>
          <div className="row m-0">
            <div className="col-12 p-0 mt-1">
              <p className="mb-0 lh-12 text-10"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, accusamus! </p>
            </div>
            <div className="col-12 p-0 mt-2">
              <p className="m-0 text-8 text-muted lh-1">01-01-2020</p>
            </div>
            <div className="col-12 py-0 pr-0 mt-2">
              <div className="bg-light p-2 radius-5">
                <p className="m-0 lh-1 text-11 bold text-info">@rejajamil</p>
                <p className="mb-0 mt-1 lh-12 text-10"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, accusamus! </p>
                <p className="mb-0 mt-2 text-8 text-muted lh-1">01-01-2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export function List(props) {
  const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorum nemo ad quaerat aspernatur alias cupiditate nesciunt aliquam hic eligendi doloribus perferendis dolore sit obcaecati, iste sed itaque quasi, provident.';
  const [more, moreSet] = useState(true);
  const [active, activeSet] = useState(1);
  const [isOpen, isOpenSet] = useState(false);
  const [img, imgSet] = useState([]);
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
    imgSet(props.img || [])
  }, [props.img])
  return(
    <div className={`${props.className}`}>
      {
        props.header &&
        <div className="center py-2">
          <Link from="/" to="/rejajamil" className="pl-2">
            <img className="same-30 radius-100 ppx-1 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt=""/>
          </Link>
          <Link from="/" to="/rejajamil" className="px-2">
            <p className="f-600 m-0 text-10 lh-12">Reja Jamil</p>
            <p className="f-500 m-0 text-9 lh-12 text-muted">rejajamil</p>
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
              <div className="text-center" key={key}> <img className="w-100" src={`${r || require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default}`} alt=""/> </div>
            ))
          }
        </Slider>
        <div className="absolute b-3 w-100">
          <div className="row m-0">
            <div className="col text-right px-2">
              <span className="white-50 bold radius-50 px-2">{active}/{img.length}</span>
            </div>
          </div>
        </div>
        {
          props.close &&
          <div className="absolute t-0 r-0 same-25 white-25 radius-50 center pointer m-1" data-dismiss="modal"><i className="uil uil-times"/></div>
        }
      </div>
      <div className="center-left">
        <div className="px-2"> <img className="same-20" src={require(`${process.env.REACT_APP_IMAGES}/icons/heart-red.png`).default} alt=""/> </div>
        <div className="px-2"> <img className="same-20" src={require(`${process.env.REACT_APP_IMAGES}/icons/comment.png`).default} alt=""/> </div>
        <div className="f-500 text-8 text-muted ml-auto pr-2">32 menit yang lalu</div>
      </div>
      <div className="p-2">
        <div className="center-left">
          <p className="bold m-0 text-9">192 Menyukai</p>
          <p className="bold m-0 text-9 px-2">|</p>
          <p className="bold m-0 text-9">4.364 Komentar</p>
        </div>
        <div className="py-1">
          <p className="bold m-0 lh-13 text-info text-7 text-uppercase">#Photography</p>
          <p className="f-500 m-0 lh-13 text-muted text-8">Bandung, Jawa Barat</p>
        </div>
        <p className="m-0 text-10 lh-13"> {more ? Truncate(12, desc) : desc} <span className="f-600 text-muted ml-1" onClick={() => moreSet(!more)}> {more ? 'Selengkapnya' : 'Lebih Sedikit'}</span> </p>
      </div>
      <div className="px-2 text-10">
        <p className="lh-13 m-0 truncate"> <span className="bold m-0 mr-1">anisyahputri</span> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, magni.</span> </p>
        <div className="f-600 text-muted lh-2" onClick={() => isOpenSet(!isOpen)}> Lihat Semua Komentar </div>
      </div>
      <div className="px-2 pt-1 center-left">
        <img className="same-20 radius-100" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt=""/>
        <div className="text-muted pl-2"> Tambahkan Komentar... </div>
        <div className="same-20 border radius-50 center pointer ml-auto"><i className="uil uil-plus text-gray"/></div>
      </div>
      <Swipe title="Komentar" fullScreen onSwipeChange={e => isOpenSet(e)} open={isOpen}>
        <div className="row mx-0">
          {
            Array(5).fill().map((r, key) => (
              <div className="col-12 oh py-1 px-0" key={key}>
                <Comment img={key+1} />
              </div>
            ))
          }
        </div>
      </Swipe>
    </div>
  )
};
export function Grid(props){
  const refImg = useRef();
  const [imgHeight, imgHeightSet] = useState('20vh')
  useEffect(() => {
    imgHeightSet(refImg.current.clientWidth+'px');
  }, []);
  return(
    <div className={`col-4 center p-0 ppx-1 oh`} ref={refImg}>
      <div className="w-100 bg-img" onClick={props.onClick} data-toggle="modal" data-target={`#${props.target}`} data-backdrop={props.backdrop && 'static'} style={{backgroundImage: `url(${props.img || require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default})`, height: imgHeight }}>
      </div>
    </div>
  )
}
