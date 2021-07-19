import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import '_assets/plugins/slick/slick.scss'

export function Following(props){
  const settings = {
    speed: 500,
    centerPadding: '20px',
    centerMode: true,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 4000, settings: { slidesToShow: 5, slidesToScroll: 1, swipeToSlide: false, touchMove: false, arrows: true } },
      { breakpoint: 600, settings: { slidesToShow: 5, slidesToScroll: 1, } },
    ]
  }
  return(
    <Slider {...settings}>
      <div className="text-center px-1"> <img className="w-100 radius-100 ppx-2 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate lh-12">Reja Jamil</p> </div>
      <div className="text-center px-1"> <img className="w-100 radius-100 ppx-2 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate lh-12">Reja Jamil</p> </div>
      <div className="text-center px-1"> <img className="w-100 radius-100 ppx-2 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate lh-12">Reja Jamil</p> </div>
      <div className="text-center px-1"> <img className="w-100 radius-100 ppx-2 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate lh-12">Reja Jamil</p> </div>
      <div className="text-center px-1"> <img className="w-100 radius-100 ppx-2 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate lh-12">Reja Jamil</p> </div>
      <div className="text-center px-1"> <img className="w-100 radius-100 ppx-2 border border-gray" src={require(`${process.env.REACT_APP_IMAGES}/products/7.jpg`).default} alt=""/> <p className="m-0 text-8 f-600 truncate lh-12">Reja Jamil</p> </div>
    </Slider>
  )
}
export function List(props){
  return(
    <div className="row mx-0 border bg-white radius-5 oh position-relative">
      <div className="col p-2">
        <Link to={`/${props.username || 'username'}`}>
          <div className="center-left text-dark">
            <div className="same-50 radius-50 bg-img" style={{backgroundImage: `url(${props.img || require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default})`}} alt="" />
            <div className="pl-2">
              <h6 className="m-0 text-10 bold">Reja Jamil<span className="text-9 f-500 text-muted"> - rejajamil</span></h6>
              <h6 className="f-500 m-0 text-9 lh-15 truncate-1 text-capitalize"><i className="uil uil-location-point text-6 lh-0"/> Bandung, Jawa Barat</h6>
            </div>
            <div className="lh-0 p-1 border-right border-1 border-gray absolute r-0 b-0s">
              <span className="f-600 px-1">
                <img src={require(`_assets/images/icons/star.png`).default} width="10" className="lh-0" alt=""/>
                <span className="bold text-8"> 3/5 </span>
              </span>
              <span className="f-600 px-1">
                <img src={require(`_assets/images/icons/user.png`).default} width="10" className="lh-0" alt=""/>
                <span className="bold text-8"> 2RB </span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
export function Follow(props){
  return(
    <div className="row mx-0">
      <div className={`col oh ${props.className}`}>
        <div className={`relative radius-5 p-2 ${props.bodyClass}`}>
          <div className="center-left text-dark">
            <div className={`${(props.size || 'same-40')} radius-50 bg-img`} style={{backgroundImage: `url(${props.img || require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default})`}} alt="" />
            <div className="pl-2">
              <h6 className="m-0 text-11 bold">{(props.name || 'Reja Jamil')}<span className={`text-10 f-600 text-muted ${!props.inline && 'd-block'}`}> {props.inline && '-'} {(props.username || 'rejajamil')}</span></h6>
              {
                props.location &&
                <h6 className="f-500 m-0 text-8 lh-15 truncate-1 text-capitalize"><i className="uil uil-location-point text-6 lh-0"/> Bandung, Jawa Barat</h6>
              }
              {
                props.info &&
                <div className="lh-1">
                  <span className="f-600 pr-2">
                    <img src={require(`_assets/images/icons/star.png`).default} width="10" className="lh-0" alt=""/>
                    <span className="bold text-7"> 3/5 </span>
                  </span>
                  <span className="f-600">
                    <img src={require(`_assets/images/icons/user.png`).default} width="10" className="lh-0" alt=""/>
                    <span className="bold text-7"> 2RB </span>
                  </span>
                </div>
              }
            </div>
            <div className={`lh-0 py-1 px-2 border-right border-1 border-gray ${props.btnClass}`}>
              <span className={`px-3 py-2 radius-5 bold pointer ${props.followClass}`}>
                {props.unfollow ? 'Unfollow' : 'Follow'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export function Simple(props){
  return(
    <div className="bg-white py-2 center-left mb-2">
      <div className="col-auto">
        <Link to="/chat/123"> <div className={`${props.size || 'same-40'} radius-50 bg-img`} style={{backgroundImage: `url(${props.img || require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default})`}} alt="" /> </Link>
      </div>
      <div className="col p-0 oh">
        <Link to="/chat/123" className="">
          <h6 className="m-0 text-11">Lorem ipsum</h6>
          <h6 className="text-10 text-muted m-0 text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, provident.</h6>
          <h6 className="f-500 m-0 text-8 text-gray lh-15 truncate-1 text-capitalize"><i className="uil uil-location-point text-6 lh-0"/> Bandung, Jawa Barat</h6>
        </Link>
      </div>
      <div className="col-auto">
        <p className="m-0 lh-12 text-8 f-600 text-muted">18-05</p>
      </div>
    </div>
  )
}
export function Profile(props){
  return(
    <Fragment>
      <div className="center-left p-1">
        <div className="pl-2">
          <img className="same-75 border border-gray ppx-1 radius-100 bg-img" src={`${props.img || require(`${process.env.REACT_APP_IMAGES}/avatar/avatar.png`).default}`} alt="" />
        </div>
        <div className="center-left w-100">
          {/*<div className="col-auto text-center text-8 f-500"><img src={`${require(`_assets/images/icon/star.png`).default}`} alt="" width="10"/><p className="m-0">3/5</p></div>*/}
          <div className="col col-md-auto text-center text-10"><p className="m-0 text-dark text-12 lh-1 bold">4/5</p>Rating</div>
          <div className="col col-md-auto text-center text-10"><p className="m-0 text-dark text-12 lh-1 bold">2.1K</p>Pengikut</div>
          <div className="col col-md-auto text-center text-10"><p className="m-0 text-dark text-12 lh-1 bold">112</p>Pelanggan</div>
        </div>
      </div>
      <div className="px-3">
        <h6 className="m-0 lh-2 bold text-12">Reja Jamil</h6>
        <p className="m-0 text-10 lh-15 text-info">Jl. Jakarta no.123 Kota Bandung, Jawa Barat</p>
        <p className="m-0 text-10 lh-12 truncate-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, maiores!</p>
      </div>
    </Fragment>
  )
}
