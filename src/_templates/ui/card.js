import React from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'

// CARD SHADOW
function ShadowXS(){
  return(
    <div className="radius-10 mb-3 bg-white shadow-xs hover">
      <div className="p-3">
        <h5 className="mt-0">Shadow XS</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function ShadowSM(){
  return(
    <div className="radius-10 mb-3 bg-white shadow-sm">
      <div className="p-3">
        <h5 className="mt-0">Shadow SM</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function Shadow(){
  return(
    <div className="radius-10 mb-3 bg-white shadow">
      <div className="p-3">
        <h5 className="mt-0">Shadow</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function ShadowMD(){
  return(
    <div className="radius-10 mb-3 bg-white shadow-md">
      <div className="p-3">
        <h5 className="mt-0">Shadow MD</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function ShadowLG(){
  return(
    <div className="radius-10 mb-3 bg-white shadow-lg">
      <div className="p-3">
        <h5 className="mt-0">Shadow LG</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function ShadowXL(){
  return(
    <div className="radius-10 mb-3 bg-white shadow-xl">
      <div className="p-3">
        <h5 className="mt-0">Shadow XL</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
// CARD HOVER
function HoverXS(){
  return(
    <div className="radius-10 mb-3 bg-white border hover-xs">
      <div className="p-3">
        <h5 className="mt-0">Hover XS</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function HoverSM(){
  return(
    <div className="radius-10 mb-3 bg-white shadow-xs hover-sm">
      <div className="p-3">
        <h5 className="mt-0">Hover SM</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function Hover(){
  return(
    <div className="radius-10 mb-3 bg-white shadow-xs hover">
      <div className="p-3">
        <h5 className="mt-0">Hover</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function HoverMD(){
  return(
    <div className="radius-10 mb-3 bg-white shadow-xs hover-md">
      <div className="p-3">
        <h5 className="mt-0">Hover MD</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function HoverLG(){
  return(
    <div className="radius-10 mb-3 bg-white shadow-xs hover-lg">
      <div className="p-3">
        <h5 className="mt-0">Hover LG</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function HoverXL(){
  return(
    <div className="radius-10 mb-3 bg-white shadow-xs hover-xl">
      <div className="p-3">
        <h5 className="mt-0">Hover XL</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
// CARD TITLE
function TitleBasic(){
  return(
    <div className="radius-10 mb-3 bg-white shadow">
      <div className="px-3 py-2 border-bottom border-1 f-600">Title Basic</div>
      <div className="p-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function TitleColor(){
  return(
    <div className="radius-10 mb-3 bg-white shadow">
      <div className="px-3 py-2 border-bottom border-1 f-600 text-primary">Title Color</div>
      <div className="p-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
function TitleSize(){
  return(
    <div className="radius-10 mb-3 bg-white shadow">
      <div className="px-3 py-2 border-bottom border-1 f-600 text-14">Title Size</div>
      <div className="p-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius.
      </div>
    </div>
  )
}
// CARD PROFILE
function Profile1(){
  return(
    <div className="radius-10 mb-3 bg-white shadow">
      <div className="text-center p-3">
        <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" className="avatar-xl rounded-circle" />
        <h6 className="mt-3 mb-0 lh-1">Profile 1</h6>
        <h6 className="m-0 text-muted text-9">Username</h6>
        <div className="row my-3">
          <div className="col-auto ml-auto text-center text-9 f-700 text-muted lh-1 border-right border-gray"><p className="m-0 text-dark lh-1">2.1K</p>Followers</div>
          <div className="col-auto mr-auto text-center text-9 f-700 text-muted lh-1"><p className="m-0 text-dark lh-1">241</p>Following</div>
        </div>
        <div className="text-center">
          <p className="m-0 lh-1">
            <label className="badge badge-secondary my-0 mr-2">UI & UX</label>
            <label className="badge badge-secondary my-0 mr-2">Frontend</label>
            <label className="badge badge-secondary my-0">Backend</label>
          </p>
        </div>
        <hr className="my-3"/>
        <div className="row">
          <div className="col text-center pr-1">
            <div className="btn btn-block btn-sm hover radius-50 btn-soft-danger">Unfollow</div>
          </div>
          <div className="col text-center pl-1">
            <div className="btn btn-block btn-sm hover radius-50 btn-soft-success">Follow</div>
          </div>
        </div>
      </div>
    </div>
  )
}
function Profile2(){
  return(
    <div className="profile-widget bg-white radius-10 shadow oh mb-3">
      <div className="hpx-100 w-100 mx-auto oh bg-img" style={{ backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default})` }}> </div>
      <div className="dropdown card-action float-right">
        <Link to="#" className="dropdown-toggle arrow-none" data-bs-toggle="dropdown" aria-expanded="false"> <i className="uil uil-ellipsis-v font-size-16 text-white"></i> </Link>
        <div className="dropdown-menu dropdown-menu-right radius-5 text-9 oh">
          <Link to="#" className="dropdown-item"><i className="uil uil-edit-alt mr-2"></i>Edit</Link>
          <Link to="#" className="dropdown-item"><i className="uil uil-refresh mr-2"></i>Refresh</Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item text-danger"><i className="uil uil-trash mr-2"></i>Delete</Link>
        </div>
      </div>
      <div className="text-center p-0">
        <div className="profile-info px-3 pb-3">
          <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" className="img-thumbnail avatar-xl rounded-circle" />
            <h6 className="mt-3 mb-0 lh-1">Profile 2</h6>
            <h6 className="m-0 text-muted text-9">Username</h6>
            <div className="row my-3">
              <div className="col-auto ml-auto text-center text-9 f-700 text-muted lh-1 border-right border-gray"><p className="m-0 text-dark lh-1">2.1K</p>Followers</div>
              <div className="col-auto mr-auto text-center text-9 f-700 text-muted lh-1"><p className="m-0 text-dark lh-1">241</p>Following</div>
            </div>
            <div className="text-center">
              <p className="m-0 lh-1">
                <label className="badge badge-secondary my-0 mr-2">UI & UX</label>
                <label className="badge badge-secondary my-0 mr-2">Frontend</label>
                <label className="badge badge-secondary my-0">Backend</label>
              </p>
            </div>
            <hr className="my-3"/>
            <div className="row">
              <div className="col-12 text-center">
                <div className="btn-group radius-50 oh">
                  <div className="btn btn-sm hover btn-light width-sm border-0">Unfollow</div>
                  <div className="btn btn-sm hover btn-soft-primary width-sm border-0">Follow</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
function Profile3(){
  return(
    <div className="profile-widget p-3 bg-white radius-10 shadow oh mb-3">
      <div className="media">
        <div className="center-left">
          <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} className="avatar-lg radius-50" alt=""/>
          <div className="media-body pl-2">
            <h6 className="m-0 lh-1">Profile 3</h6>
            <h6 className="text-muted m-0 text-9 lh-1">Username</h6>
          </div>
        </div>
        <div className="dropdown card-action float-right">
          <Link to="#" className="dropdown-toggle arrow-none" data-bs-toggle="dropdown" aria-expanded="false"> <i className="uil uil-ellipsis-v text-muted"></i> </Link>
          <div className="dropdown-menu dropdown-menu-right radius-5 text-9 oh">
            <Link to="#" className="dropdown-item"><i className="uil uil-edit-alt mr-2"></i>Edit</Link>
            <Link to="#" className="dropdown-item"><i className="uil uil-refresh mr-2"></i>Refresh</Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item text-danger"><i className="uil uil-trash mr-2"></i>Delete</Link>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-2">
        <div className="col-auto text-9 f-700 text-muted lh-1">Stok <p className="m-0 text-dark lh-1">99</p></div>
        <div className="col-auto text-9 f-700 text-muted lh-1">Type <p className="m-0 text-dark lh-1">Preorder</p></div>
        <div className="col-auto text-9 f-700 text-muted lh-1">Kategori <p className="m-0 text-dark lh-1">Kemeja Pria</p></div>
      </div>
      <div className="row">
        <div className="col-auto text-9 f-700 text-muted"><i className="uil uil-comment-alt-lines mr-1" />48</div>
        <div className="col-auto text-9 f-700 text-muted"><i className="uil uil-thumbs-up mr-1" />12</div>
        <div className="col-auto text-9 f-700 text-muted"><i className="uil uil-heart mr-1" />76</div>
      </div>
      <hr className="my-2"/>
      <div className="text-left">
        <p className="text-10 m-0 lh-12">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
      <div className="row mt-2 mx-0">
        <div className="col px-1"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} alt="" className="img-fluid radius-5" /> </div>
        <div className="col px-1"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt="" className="img-fluid radius-5" /> </div>
        <div className="col px-1"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" className="img-fluid radius-5" /> </div>
      </div>
      <hr className="my-2"/>
      <div className="row">
        <div className="col text-center pr-1">
          <div className="btn btn-block btn-sm hover radius-5 btn-soft-danger">Unfollow</div>
        </div>
        <div className="col text-center pl-1">
          <div className="btn btn-block btn-sm hover radius-5 btn-soft-success">Follow</div>
        </div>
      </div>
    </div>
  )
}
// CARD PRODUCT
function Product1(){
  return(
    <div className="radius-10 mb-3 bg-white shadow oh">
      <img src={require(`${process.env.REACT_APP_IMAGES}/products/1.jpg`).default} className="w-100" alt=""/>
      <div className="p-3">
        <h6 className="m-0 f-700 truncate-2">Product 1</h6>
        <p className="m-0 text-9 text-truncate"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius. </p>
        <h6 className="mb-0 mt-1 f-700 text-primary">Rp. 1.500.000</h6>
      </div>
    </div>
  )
}
function Product2(){
  return(
    <div className="radius-10 mb-3 bg-white shadow oh">
      <div className="position-relative">
        <img src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} className="w-100" alt=""/>
        <div className="position-absolute lh-1 r-0 t-0">
          <span className="badge badge-danger">25% OFF</span>
        </div>
        <div className="position-absolute lh-1 l-0 b-0 p-1">
          <div className="bg-success p-1 radius-20">
            <img src={require(`${process.env.REACT_APP_IMAGES}/icons/free-shipping-white.png`).default} width="20" alt=""/>
          </div>
        </div>
      </div>
      <div className="p-3 position-relative">
        <div className="position-absolute lh-1 r-0 t-0">
          <span className="badge badge-soft-success">Super Seller</span>
        </div>
        <h6 className="m-0 f-700 truncate-2">Product 2</h6>
        <div className="my-1 text-9 center-left">
          <img src={require(`${process.env.REACT_APP_IMAGES}/icons/super.png`).default} width="15" alt=""/>
          <div className="text-truncate pl-1 f-700 text-muted"> Aulian Shop Center </div>
        </div>
        <h6 className="f-700 text-primary">Rp. 1.500.000</h6>
        <div className="position-absolute lh-1 l-0 b-0 py-2 pl-3 f-600 text-muted text-6">
          <Rating
            initialRating={3}
            fullSymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star.png`).default} width="10" alt=""/>}
            emptySymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star-o.png`).default} width="10" alt=""/>}
            readonly
            />
          <span className="text-8 text-dark"> (89)</span>
        </div>
        <div className="position-absolute lh-1 r-0 b-0 p-2 f-600 text-muted text-7">2RB Terjual</div>
      </div>
    </div>
  )
}
function Product3(){
  return(
    <div className="radius-10 mb-3 bg-white shadow oh">
      <div className="position-relative">
        <img src={require(`${process.env.REACT_APP_IMAGES}/products/4.jpg`).default} className="w-100" alt=""/>
        <div className="position-absolute lh-1 r-0 t-0">
          <span className="badge badge-danger">25% OFF</span>
        </div>
      </div>
      <div className="p-3 position-relative">
        <h6 className="mt-0 mb-1 f-700 truncate-2">Product 3</h6>
        <div className="progress radius-20">
          <div className="progress-bar progress-bar-striped bg-success w-50 text-7 lh-2" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>12 Tersisa</div>
        </div>
        <h6 className="mb-1 f-700 text-muted text-9"><del><i>Rp. 1.750.000</i></del></h6>
        <h6 className="m-0 f-700 text-primary">Rp. 1.500.000</h6>
      </div>
    </div>
  )
}
function Product4(){
  return(
    <div className="radius-10 mb-3 bg-white shadow oh">
      <div className="position-relative">
        <img src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} className="w-100" alt=""/>
        <div className="position-absolute lh-1 r-0 t-0">
          <span className="badge badge-danger">25% OFF</span>
        </div>
      </div>
      <div className="p-3 position-relative">
        <h6 className="mt-0 mb-1 f-700 truncate-2">Product 4</h6>
        <p className="m-0 float-right text-8 text-700 text-muted">12 Tersisa</p>
        <div className="clearfix" />
        <div className="progress position-relative radius-20" style={{height: 3}}>
          <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
        </div>
        <h6 className="mb-1 f-700 text-muted text-9"><del><i>Rp. 1.750.000</i></del></h6>
        <h6 className="m-0 f-700 text-primary">Rp. 1.500.000</h6>
      </div>
    </div>
  )
}
function Product5(){
  return(
    <div className="radius-10 mb-3 bg-white shadow oh">
      <div className="position-relative">
        <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} className="w-100" alt=""/>
        <div className="position-absolute lh-1 r-0 t-0">
          <span className="badge badge-danger">25% OFF</span>
        </div>
        <div className="position-absolute lh-1 l-0 b-0 p-1">
          <div className="bg-success p-1 radius-20">
            <img src={require(`${process.env.REACT_APP_IMAGES}/icons/free-shipping-white.png`).default} width="20" alt=""/>
          </div>
        </div>
      </div>
      <div className="px-3 pt-3 pb-2 position-relative">
        <div className="position-absolute lh-1 r-0 t-0">
          <span className="badge badge-soft-success">Super Seller</span>
        </div>
        <h6 className="m-0 f-700 truncate-2">Product 5</h6>
        <div className="row">
          <div className="col f-600 text-muted text-6 pr-0">
            <Rating
              initialRating={3}
              fullSymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star.png`).default} width="10" alt=""/>}
              emptySymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star-o.png`).default} width="10" alt=""/>}
              readonly
              />
            <span className="text-7 text-dark"> (89)</span>
          </div>
          <div className="col f-600 text-muted text-7 pl-0 text-right">
            2RB Terjual
          </div>
        </div>
        <div className="my-1 text-9 center-left">
          <img src={require(`${process.env.REACT_APP_IMAGES}/icons/super.png`).default} width="15" alt=""/>
          <div className="text-truncate pl-1 f-700 text-muted"> Aulian Shop Center </div>
        </div>
        <h6 className="f-700 mb-0 text-primary">Rp. 1.500.000</h6>
        <hr className="my-2" />
        <div className="row center">
          <div className="col-auto">
            <img src={require(`${process.env.REACT_APP_IMAGES}/icons/love.png`).default} width="20" className="pointer hover" alt=""/>
          </div>
          <div className="col text-right">
            <span className="btn pointer center btn-xs radius-10 hover btn-soft-success" > <i className="uil text-9 uil-shopping-cart-alt mr-1"/> Keranjang </span>
          </div>
        </div>
      </div>
    </div>
  )
}
function Product6(){
  return(
    <div className="radius-10 mb-3 bg-white shadow oh position-relative">
      <img src={require(`${process.env.REACT_APP_IMAGES}/products/2.jpg`).default} className="w-100" alt=""/>
      <div className="p-2 white-75 position-absolute b-0 w-100">
        <h6 className="m-0 f-700 truncate-2">Product 6</h6>
        <p className="m-0 text-9 f-600 text-truncate"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eius. </p>
        <h6 className="mb-0 mt-1 f-700 text-primary">Rp. 1.500.000</h6>
      </div>
    </div>
  )
}
function ProductHover(props){
  return(
    <div className="same-150 mx-auto oh bg-img radius-5" style={{ backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default})` }} >
      <div className={`hover-anim ${props.theme} center-left`}>
        <div className={`px-2 text-${props.text}`}>
          <h6 className={`m-0 text-${props.text}`}>Product Name</h6>
          <p className="my-1 lh-1 truncate-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, excepturi?</p>
          <p className={`mb-0 text-${props.text} text-8 f-700`}>Rp. 100.0000</p>
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

function Index(){
  return(
    <div className="container-fluid">
      {/* SHADOW */}
      <h6 className="border-bottom border-1 pb-2 mb-0 mt-3 text-info">Card Shadow</h6>
      <div className="row mt-3">
        <div className="col-md-4 col-6"> <ShadowXS /> </div>
        <div className="col-md-4 col-6"> <ShadowSM /> </div>
        <div className="col-md-4 col-6"> <Shadow /> </div>
        <div className="col-md-4 col-6"> <ShadowMD /> </div>
        <div className="col-md-4 col-6"> <ShadowLG /> </div>
        <div className="col-md-4 col-6"> <ShadowXL /> </div>
      </div>
      {/* HOVER */}
      <h6 className="border-bottom border-1 pb-2 mb-0 mt-3 text-info">Card Hover</h6>
      <div className="row mt-3">
        <div className="col-md-4 col-6"> <HoverXS /> </div>
        <div className="col-md-4 col-6"> <HoverSM /> </div>
        <div className="col-md-4 col-6"> <Hover /> </div>
        <div className="col-md-4 col-6"> <HoverMD /> </div>
        <div className="col-md-4 col-6"> <HoverLG /> </div>
        <div className="col-md-4 col-6"> <HoverXL /> </div>
      </div>
      {/* TITLE */}
      <h6 className="border-bottom border-1 pb-2 mb-0 mt-3 text-info">Card Title</h6>
      <div className="row mt-3">
        <div className="col-md-4 col-6"> <TitleBasic /> </div>
        <div className="col-md-4 col-6"> <TitleColor /> </div>
        <div className="col-md-4 col-6"> <TitleSize /> </div>
      </div>
      {/* PROFILE */}
      <h6 className="border-bottom border-1 pb-2 mb-0 mt-3 text-info">Card Profile</h6>
      <div className="row mt-3">
        <div className="col-md-4 col-6"> <Profile1 /> </div>
        <div className="col-md-4 col-6"> <Profile2 /> </div>
        <div className="col-md-4 col-6"> <Profile3 /> </div>
      </div>
      {/* PRODUCT */}
      <h6 className="border-bottom border-1 pb-2 mb-0 mt-3 text-info">Card Product</h6>
      <div className="row mt-3">
        <div className="col-md-3 col-6"> <Product1 /> </div>
        <div className="col-md-3 col-6"> <Product2 /> </div>
        <div className="col-md-3 col-6"> <Product3 /> </div>
        <div className="col-md-3 col-6"> <Product4 /> </div>
        <div className="col-md-3 col-6"> <Product5 /> </div>
        <div className="col-md-3 col-6"> <Product6 /> </div>
      </div>
      {/* PRODUCT HOVER */}
      <h6 className="border-bottom border-1 pb-2 mb-0 mt-3 text-info">Product Hover</h6>
      <div className="row my-3">
        <div className="col-md-3 col-6"> <ProductHover /> </div>
        <div className="col-md-3 col-6"> <ProductHover theme="dark" text="white" /> </div>
        <div className="col-md-3 col-6"> <ProductHover theme="primary" text="white" /> </div>
        <div className="col-md-3 col-6"> <ProductHover theme="warning" text="white" /> </div>
      </div>
    </div>
  )
}

export default Index
