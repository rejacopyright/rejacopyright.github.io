import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import { SideBySideMagnifier as Magnify, GlassMagnifier as Glass } from 'react-image-magnifiers'
import '_assets/plugins/slick/slick.scss'

function Slider1(){
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
  }
  return(
    <Slider {...settings}>
      <div className="text-center"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/headers/banner_3.jpg`).default} alt=""/> </div>
      <div className="text-center"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/headers/banner_5.jpg`).default} alt=""/> </div>
      <div className="text-center"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/headers/banner_6.jpg`).default} alt=""/> </div>
    </Slider>
  )
}
function Slider2(){
  const settings = {
    speed: 500,
    centerPadding: '30px',
    centerMode: true,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1
  }
  return(
    <Slider {...settings}>
      <div className="text-center px-1"> <img className="w-100 radius-100 p-1 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate">Reja Jamil</p> </div>
      <div className="text-center px-1"> <img className="w-100 radius-100 p-1 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate">Reja Jamil</p> </div>
      <div className="text-center px-1"> <img className="w-100 radius-100 p-1 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate">Reja Jamil</p> </div>
      <div className="text-center px-1"> <img className="w-100 radius-100 p-1 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate">Reja Jamil</p> </div>
      <div className="text-center px-1"> <img className="w-100 radius-100 p-1 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate">Reja Jamil</p> </div>
    </Slider>
  )
}
function Slider3(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return(
    <Slider {...settings}>
      <div className="text-center"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} alt=""/> </div>
      <div className="text-center"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt=""/> </div>
      <div className="text-center"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt=""/> </div>
    </Slider>
  )
}
function Slider4(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: '20px',
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return(
    <Slider {...settings}>
      <div className="text-center px-1"> <img className="w-100 radius-10" src={require(`${process.env.REACT_APP_IMAGES}/headers/banner_3.jpg`).default} alt=""/> </div>
      <div className="text-center px-1"> <img className="w-100 radius-10" src={require(`${process.env.REACT_APP_IMAGES}/headers/banner_5.jpg`).default} alt=""/> </div>
      <div className="text-center px-1"> <img className="w-100 radius-10" src={require(`${process.env.REACT_APP_IMAGES}/headers/banner_6.jpg`).default} alt=""/> </div>
    </Slider>
  )
}
function Slider5(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return(
    <Slider {...settings}>
      <div className="text-center px-1"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} alt=""/> </div>
      <div className="text-center px-1"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt=""/> </div>
      <div className="text-center px-1"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt=""/> </div>
      <div className="text-center px-1"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} alt=""/> </div>
      <div className="text-center px-1"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt=""/> </div>
      <div className="text-center px-1"> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt=""/> </div>
    </Slider>
  )
}
function Slider6(){
  useEffect(() => { document.querySelector('.img-item').classList.add('active'); }, []);
  const [im, setIm] = useState(3);
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
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return(
    <div className="">
      <div className="px-1">
        <Magnify
          imageSrc={require(`${process.env.REACT_APP_IMAGES}/products/${im}.jpg`).default}
          largeImageSrc={require(`${process.env.REACT_APP_IMAGES}/products/${im}.jpg`).default}
          alwaysInPlace
          transitionSpeedInPlace={0}
          />
      </div>
      <Slider {...settings} className="mt-2">
        <div className="text-center img-item px-1" onClick={e => image(3, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} alt=""/> </div>
        <div className="text-center img-item px-1" onClick={e => image(5, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt=""/> </div>
        <div className="text-center img-item px-1" onClick={e => image(6, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt=""/> </div>
        <div className="text-center img-item px-1" onClick={e => image(1, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default} alt=""/> </div>
        <div className="text-center img-item px-1" onClick={e => image(2, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/2.jpg`).default} alt=""/> </div>
        <div className="text-center img-item px-1" onClick={e => image(4, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/4.jpg`).default} alt=""/> </div>
      </Slider>
    </div>
  )
}
function Slider7(){
  useEffect(() => { document.querySelector('.img-item').classList.add('active'); }, []);
  const [im, setIm] = useState(3);
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
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return(
    <div className="">
      <div className="px-1">
        <Glass
          imageSrc={require(`${process.env.REACT_APP_IMAGES}/products/${im}.jpg`).default}
          largeImageSrc={require(`${process.env.REACT_APP_IMAGES}/products/${im}.jpg`).default}
          magnifierSize="50%"
          />
      </div>
      <Slider {...settings} className="mt-2">
        <div className="text-center img-item px-1" onClick={e => image(3, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} alt=""/> </div>
        <div className="text-center img-item px-1" onClick={e => image(5, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt=""/> </div>
        <div className="text-center img-item px-1" onClick={e => image(6, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt=""/> </div>
        <div className="text-center img-item px-1" onClick={e => image(1, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default} alt=""/> </div>
        <div className="text-center img-item px-1" onClick={e => image(2, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/2.jpg`).default} alt=""/> </div>
        <div className="text-center img-item px-1" onClick={e => image(4, e)}> <img className="w-100" src={require(`${process.env.REACT_APP_IMAGES}/products/4.jpg`).default} alt=""/> </div>
      </Slider>
    </div>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h4 className="border-bottom border-1 mb-3 text-primary">Slider</h4>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9 f-700">Slider 1 (Auto Play)</h6>
          <Slider1 />
        </div>
        <div className="col-md-6 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9 f-700">Slider 2 (Swipe Slide)</h6>
          <Slider2 />
        </div>
        <div className="col-md-3 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9 f-700">Slider 3 (Default)</h6>
          <Slider3 />
        </div>
        <div className="col-md-9 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9 f-700">Slider 4 (Center Mode)</h6>
          <Slider4 />
        </div>
        <div className="col-12 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9 f-700">Slider 5 (Responsive)</h6>
          <Slider5 />
        </div>
        <div className="col-md-4 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9 f-700">Slider 6 (Zoom)</h6>
          <Slider6 />
        </div>
        <div className="col-md-4 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1 text-9 f-700">Slider 7 (Glass Magnify)</h6>
          <Slider7 />
        </div>
      </div>
    </div>
  )
}

export default Index
