import React, {useState, useEffect, useRef} from 'react'
import debounce from 'lodash.debounce'

// HOVER
function Hover1(){
  return(
    <div className="same-150 mx-auto oh bg-img radius-5" style={{ backgroundImage: `url(${require('_dummy/images/5.jpg').default})` }}>
      <div className="hover-anim dark center-left">
        <div className="px-2 text-white">
          <h6 className="m-0 text-white">Product Name</h6>
          <p className="my-1 lh-1 truncate-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, excepturi?</p>
          <p className="mb-0 text-white text-8 f-700">Rp. 100.0000</p>
        </div>
        <div className="absolute b-0 w-100">
          <div className="d-flex p-2">
            <span className="same-30 btn-danger radius-50 center ml-auto mr-2 pointer"><i className="uil uil-heart" /></span>
            <span className="same-30 btn-success radius-50 center pointer"><i className="uil uil-shopping-cart-alt" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
function Hover2(){
  return(
    <div className="same-150 mx-auto oh bg-img radius-5" style={{ backgroundImage: `url(${require('_dummy/images/2.jpg').default})` }}>
      <div className="hover-anim primary center-left">
        <div className="px-2 text-white">
          <h6 className="m-0 text-white">Product Name</h6>
          <p className="my-1 lh-1 truncate-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, excepturi?</p>
          <p className="mb-0 text-white text-8 f-700">Rp. 100.0000</p>
        </div>
        <div className="absolute b-0 w-100">
          <div className="d-flex p-2">
            <span className="same-30 btn-danger radius-50 center ml-auto mr-2 pointer"><i className="uil uil-heart" /></span>
            <span className="same-30 btn-success radius-50 center pointer"><i className="uil uil-shopping-cart-alt" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
function Hover3(){
  return(
    <div className="same-150 mx-auto oh bg-img radius-5" style={{ backgroundImage: `url(${require('_dummy/images/6.jpg').default})` }}>
      <div className="hover-anim dark center">
        <div className="btn btn-sm btn-soft-light text-white pointer">Cover</div>
        <div className="absolute t-0 w-100">
          <div className="d-flex p-1">
            <span className="same-20 btn-light radius-50 center ml-auto pointer"><i className="uil uil-times" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
function Hover4(){
  return(
    <div className="same-150 mx-auto oh bg-img radius-5" style={{ backgroundImage: `url(${require('_dummy/images/3.jpg').default})` }}>
      <div className="hover-anim center">
        <div className="btn btn-sm btn-outline-primary radius-50 px-3 f-700 pointer">Cover</div>
        <div className="absolute t-0 w-100">
          <div className="d-flex p-1">
            <span className="same-20 btn-danger radius-50 center ml-auto pointer"><i className="uil uil-times" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
// CENTERED COVER
function Centered1(){
  return <div className="same-150 mx-auto oh bg-img" style={{ backgroundImage: `url(${require('_dummy/images/v.jpg').default})` }}> </div>
}
function Centered2(){
  return <div className="same-150 mx-auto oh bg-img" style={{ backgroundImage: `url(${require('_dummy/images/h.jpg').default})` }}> </div>
}
// CENTERED RESPONSIVE
function Responsive(){
  const productImg = useRef()
  const [productHeight, productHeightSet] = useState()
  useEffect(() => {
    const updateSize = debounce(() => {
      productHeightSet((productImg.current.offsetWidth || 0) + 'px');
    }, 300)
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [])
  return <div ref={productImg} className="w-100 mx-auto radius-10 oh bg-img" style={{ backgroundImage: `url(${require('_dummy/images/3.jpg').default})`, height: productHeight }}> </div>
}
// CENTERED COVER
function Contain1(){
  return <div className="same-150 mx-auto oh bg-img-c border border-gray border-dashed radius-10 bg-light" style={{ backgroundImage: `url(${require('_dummy/images/v.jpg').default})` }}> </div>
}
function Contain2(){
  return <div className="same-150 mx-auto oh bg-img-c border border-gray border-dashed radius-10 bg-light" style={{ backgroundImage: `url(${require('_dummy/images/h.jpg').default})` }}> </div>
}
function Contain3(){
  return <div className="same-150 mx-auto oh bg-img-c border border-gray border-dashed radius-10 bg-light" style={{ backgroundImage: `url(${require('_dummy/images/1.jpg').default})` }}> </div>
}
// STYLE
function Radius0(){
  return <img src={require('_dummy/images/6.jpg').default} className="same-100" alt=""/>
}
function Radius10(){
  return <img src={require('_dummy/images/6.jpg').default} className="same-100 radius-10" alt=""/>
}
function Radius20(){
  return <img src={require('_dummy/images/6.jpg').default} className="same-100 radius-20" alt=""/>
}
function Radius100(){
  return <img src={require('_dummy/images/6.jpg').default} className="same-100 radius-100" alt=""/>
}
function RadiusBorder(){
  return <img src={require('_dummy/images/6.jpg').default} className="same-100 radius-100 border border-1 border-gray p-1" alt=""/>
}
// SIZE
function Size200(){
  return <img src={require('_dummy/images/6.jpg').default} className="same-200" alt=""/>
}
function Size150(){
  return <img src={require('_dummy/images/6.jpg').default} className="same-150" alt=""/>
}
function Size100(){
  return <img src={require('_dummy/images/6.jpg').default} className="same-100" alt=""/>
}
function Size50(){
  return <img src={require('_dummy/images/6.jpg').default} className="same-50" alt=""/>
}
function Size25(){
  return <img src={require('_dummy/images/6.jpg').default} className="same-25" alt=""/>
}
// AVATAR
function AvatarXS(){
  return <img src={require('_dummy/images/6.jpg').default} className="avatar-xs" alt=""/>
}
function AvatarSM(){
  return <img src={require('_dummy/images/6.jpg').default} className="avatar-sm" alt=""/>
}
function Avatar(){
  return <img src={require('_dummy/images/6.jpg').default} className="avatar" alt=""/>
}
function AvatarMD(){
  return <img src={require('_dummy/images/6.jpg').default} className="avatar-md" alt=""/>
}
function AvatarLG(){
  return <img src={require('_dummy/images/6.jpg').default} className="avatar-lg" alt=""/>
}
function AvatarXL(){
  return <img src={require('_dummy/images/6.jpg').default} className="avatar-xl" alt=""/>
}

function Index() {
  return(
    <div className="container-fluid pt-3">
      {/* HOVER IMAGE */}
      <h6 className="border-bottom border-1 pb-2 text-info">Image Hover</h6>
      <div className="row">
        <div className="col-auto"> <Hover1 /> </div>
        <div className="col-auto"> <Hover2 /> </div>
        <div className="col-auto"> <Hover3 /> </div>
        <div className="col-auto"> <Hover4 /> </div>
      </div>
      {/* CENTERED COVER */}
      <h6 className="border-bottom border-1 pb-2 mt-5 text-info">Image Centered Vertical Horizontal</h6>
      <div className="row">
        <div className="col-auto">
          <Centered1 />
          <p className="m-0 text-center f-700 text-10">Centered 1</p>
        </div>
        <div className="col-auto">
          <Centered2 />
          <p className="m-0 text-center f-700 text-10">Centered 2</p>
        </div>
      </div>
      {/* RESPONSIVE */}
      <h6 className="border-bottom border-1 pb-2 mt-5 text-info">Image Centered & Square & Reponsive (Try to Resize Windows)</h6>
      <div className="row mx-1 mx-md-n2">
        <div className="col-6 col-md-3 px-1 px-md-2"> <Responsive /> <p className="m-0 text-center f-700 text-10">Responsive 1</p> </div>
        <div className="col-6 col-md-3 px-1 px-md-2"> <Responsive /> <p className="m-0 text-center f-700 text-10">Responsive 1</p> </div>
        <div className="col-6 col-md-3 px-1 px-md-2"> <Responsive /> <p className="m-0 text-center f-700 text-10">Responsive 1</p> </div>
        <div className="col-6 col-md-3 px-1 px-md-2"> <Responsive /> <p className="m-0 text-center f-700 text-10">Responsive 1</p> </div>
      </div>
      {/* CENTERED CONTAIN */}
      <h6 className="border-bottom border-1 pb-2 mt-5 text-info">Image Contained Centered</h6>
      <div className="row">
        <div className="col-auto">
          <Contain1 />
          <p className="m-0 text-center f-700 text-10">Contain 1</p>
        </div>
        <div className="col-auto">
          <Contain2 />
          <p className="m-0 text-center f-700 text-10">Contain 2</p>
        </div>
        <div className="col-auto">
          <Contain3 />
          <p className="m-0 text-center f-700 text-10">Contain 3</p>
        </div>
      </div>
      {/* STYLE */}
      <h6 className="border-bottom border-1 pb-2 mt-5 text-info">Image Style</h6>
      <div className="row">
        <div className="col-auto"> <Radius0 /> <p className="m-0 text-center f-700 text-10">Radius 0</p> </div>
        <div className="col-auto"> <Radius10 /> <p className="m-0 text-center f-700 text-10">Radius 10</p> </div>
        <div className="col-auto"> <Radius20 /> <p className="m-0 text-center f-700 text-10">Radius 20</p> </div>
        <div className="col-auto"> <Radius100 /> <p className="m-0 text-center f-700 text-10">Radius 100</p> </div>
        <div className="col-auto"> <RadiusBorder /> <p className="m-0 text-center f-700 text-10">Radius Border</p> </div>
      </div>
      {/* SIZE */}
      <h6 className="border-bottom border-1 pb-2 mt-5 text-info">Image Size</h6>
      <div className="row">
        <div className="col-auto"> <Size200 /> <p className="m-0 text-center f-700 text-8">Size 200</p> </div>
        <div className="col-auto"> <Size150 /> <p className="m-0 text-center f-700 text-8">Size 150</p> </div>
        <div className="col-auto"> <Size100 /> <p className="m-0 text-center f-700 text-8">Size 100</p> </div>
        <div className="col-auto"> <Size50 /> <p className="m-0 text-center f-700 text-8">Size 50</p> </div>
        <div className="col-auto"> <Size25 /> <p className="m-0 text-center f-700 text-8">Size 25</p> </div>
      </div>
      {/* AVATAR */}
      <h6 className="border-bottom border-1 pb-2 mt-5 text-info">Avatar</h6>
      <div className="row">
        <div className="col-auto"> <AvatarXS /> <p className="m-0 text-center f-700 text-7">AvatarXS</p> </div>
        <div className="col-auto"> <AvatarSM /> <p className="m-0 text-center f-700 text-7">AvatarSM</p> </div>
        <div className="col-auto"> <Avatar /> <p className="m-0 text-center f-700 text-7">Avatar</p> </div>
        <div className="col-auto"> <AvatarMD /> <p className="m-0 text-center f-700 text-7">AvatarMD</p> </div>
        <div className="col-auto"> <AvatarLG /> <p className="m-0 text-center f-700 text-7">AvatarLG</p> </div>
        <div className="col-auto"> <AvatarXL /> <p className="m-0 text-center f-700 text-7">AvatarXL</p> </div>
      </div>
    </div>
  )
}

export default Index
