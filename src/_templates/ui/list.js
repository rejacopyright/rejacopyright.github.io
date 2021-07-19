import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'

// LIST 1
function List1(){
  return(
    <div className="shadow-xs hover-sm bg-white radius-5 p-1 mt-1 center-left">
      <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} className="avatar radius-5 mr-2" alt="" />
      <div className="">
        <h6 className="m-0 text-10">Lorem ipsum</h6>
        <h6 className="text-8 text-muted m-0 truncate">Lorem ipsum dolor sit amet.</h6>
      </div>
      <div className="dropdown ml-auto">
        <Link to="#" className="dropdown-toggle arrow-none text-muted" data-toggle="dropdown" aria-expanded="false">
          <i className="uil uil-ellipsis-v"></i>
        </Link>
        <div className="dropdown-menu dropdown-menu-right radius-5 oh shadow-img z-1">
          <Link to="#" className="dropdown-item text-9"><i className="uil uil-edit-alt mr-1"></i>Edit</Link>
          <Link to="#" className="dropdown-item text-9"><i className="uil uil-exit mr-1"></i>Remove</Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item text-9 text-danger"><i className="uil uil-trash mr-1"></i>Delete</Link>
        </div>
      </div>
    </div>
  )
}
// LIST 2
function List2(){
  return(
    <div className="border hover-sm bg-white radius-5 p-2 mt-1 center-left">
      <div className="custom-control custom-checkbox center">
        <input type="checkbox" className="custom-control-input" id="task" />
        <label className="custom-control-label center" htmlFor="task">
          <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} className="avatar radius-5 mr-2" alt="" />
          <span className="">
            <h6 className="m-0 text-10 truncate">Lorem ipsum</h6>
            <h6 className="text-8 text-muted m-0 truncate">Lorem ipsum dolor sit amet.</h6>
          </span>
        </label>
      </div>
      <div className="dropdown ml-auto">
        <Link to="#" className="dropdown-toggle arrow-none text-muted" data-toggle="dropdown" aria-expanded="false">
          <i className="uil uil-ellipsis-v"></i>
        </Link>
        <div className="dropdown-menu dropdown-menu-right radius-5 oh shadow-img z-1">
          <Link to="#" className="dropdown-item text-9"><i className="uil uil-edit-alt mr-1"></i>Edit</Link>
          <Link to="#" className="dropdown-item text-9"><i className="uil uil-exit mr-1"></i>Remove</Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item text-9 text-danger"><i className="uil uil-trash mr-1"></i>Delete</Link>
        </div>
      </div>
    </div>
  )
}
// LIST 3
function List3(){
  return(
    <div className="shadow-sm hover-md bg-white radius-5 p-2 mt-1 center-left">
      <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} className="avatar-sm radius-50 mr-2" alt="" />
      <div className="">
        <h6 className="m-0 text-10 f-700">Lorem ipsum</h6>
        <h6 className="text-8 text-muted m-0 truncate">Lorem ipsum.</h6>
      </div>
      <div className="ml-auto text-right">
        <div className="btn btn-xs btn-soft-success radius-50 pr-3 pl-2"><i className="uil uil-check mr-1" />Invite</div>
      </div>
    </div>
  )
}
// LIST 4
function List4(){
  return(
    <div className="row mx-0 shadow-sm border hover-md bg-white radius-5 mt-1 oh position-relative">
      <div className="col-auto same-100 mr-2 bg-img" style={{ backgroundImage: `url('${require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default}')` }}> </div>
      <div className="col px-1 py-2">
        <h6 className="m-0 text-10 f-700">Lorem ipsum</h6>
        <h6 className="text-8 text-muted m-0 truncate">Aulian Shop</h6>
        <h6 className="text-8 text-muted my-2 truncate">Stok : <span className="text-success f-700">99</span></h6>
        <h6 className="m-0 text-9 f-700">Rp. 999.000</h6>
        <div className="lh-1">
          <Rating
            initialRating={3}
            fullSymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star.png`).default} width="9" alt=""/>}
            emptySymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star-o.png`).default} width="8" alt=""/>}
            readonly
            />
          <span className="text-7 text-dark"> (89)</span>
        </div>
      </div>
      <div className="col center-right">
        <div className="same-30 btn-soft-danger radius-50 center pointer mr-1"><i className="uil uil-heart" /></div>
        <div className="same-30 btn-soft-success radius-50 center pointer"><i className="uil uil-shopping-cart-alt" /></div>
        <div className="absolute b-0 p-2">
          <p className="mb-0 mt-2 text-6 text-gray f-700">2RB TERJUAL</p>
        </div>
      </div>
    </div>
  )
}
// LIST 5
function List5(){
  return(
    <div className="row mx-0 p-2 shadow-sm border hover-md bg-white radius-5 mt-1 oh position-relative">
      <div className="col">
        <div className="row center">
          <div className="col-auto">
            <img className="same-40 radius-50 border border-1 bg-img" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" />
          </div>
          <div className="col pl-0">
            <h6 className="mt-0 mb-1 text-10 f-700 truncate">Lorem ipsum <span className="text-muted f-600 text-8">Lorem ipsum dolor sit amet.</span></h6>
            <h6 className="text-8 text-muted m-0 truncate">Aulian Shop <span className="text-info ml-1">See Profile</span></h6>
          </div>
        </div>
        <hr className="my-2" />
        <div className="row">
          <div className="col-auto text-9 f-700 text-muted lh-1">Stok <p className="m-0 text-dark lh-1">99</p></div>
          <div className="col-auto text-9 f-700 text-muted lh-1">Type <p className="m-0 text-dark lh-1">Preorder</p></div>
          <div className="col-auto text-9 f-700 text-muted lh-1">Kategori <p className="m-0 text-dark lh-1">Kemeja Pria</p></div>
        </div>
        <div className="row my-2">
          <div className="col-auto text-9 f-700 text-muted"><i className="uil uil-comment-alt-lines mr-1" />48</div>
          <div className="col-auto text-9 f-700 text-muted"><i className="uil uil-thumbs-up mr-1" />12</div>
          <div className="col-auto text-9 f-700 text-muted"><i className="uil uil-heart mr-1" />76</div>
        </div>
        <div className="row mt-2">
          <div className="col-auto pr-0"><span className="btn btn-xs btn-soft-danger radius-5 pointer"><i className="uil uil-heart mr-1" />Favoritkan</span></div>
          <div className="col-auto"><span className="btn btn-xs btn-soft-success radius-5 pointer"><i className="uil uil-shopping-cart-alt mr-1" />Keranjang</span></div>
        </div>
      </div>
      <div className="col-auto center-right">
        <div className="text-right">
          <div className="same-100 radius-5 bg-img" style={{ backgroundImage: `url('${require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default}')` }}> </div>
          <h6 className="mb-0 mt-1 text-9 f-700">Rp. 999.000</h6>
          <div className="lh-1">
            <Rating
              initialRating={3}
              fullSymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star.png`).default} width="9" alt=""/>}
              emptySymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star-o.png`).default} width="8" alt=""/>}
              readonly
              />
            <span className="text-7 text-dark"> (89)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

class Index extends Component {
  render(){
    return(
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col-md-4 mb-2">
            <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">List 1</h6>
            <List1 />
            <List1 />
            <List1 />
          </div>
          <div className="col-md-4 mb-2">
            <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">List 2</h6>
            <List2 />
            <List2 />
            <List2 />
          </div>
          <div className="col-md-4 mb-2">
            <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">List 3</h6>
            <List3 />
            <List3 />
            <List3 />
          </div>
          <div className="col-md-4 mb-2">
            <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">List 4</h6>
            <List4 />
            <List4 />
            <List4 />
          </div>
          <div className="col-md-6 mb-2">
            <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">List 5</h6>
            <List5 />
            <List5 />
          </div>
        </div>
      </div>
    )
  }
}

export default Index
