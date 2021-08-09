function POST_1(){
  return(
    <div className="row mx-0 p-2 border bg-white radius-5 oh position-relative">
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
        <div className="same-125 radius-5 bg-img" style={{ backgroundImage: `url('${require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default}')` }}> </div>
      </div>
    </div>
  )
}
function POST_2(){
  return(
    <div className="profile-widget p-3 bg-white radius-10 border oh col-md-6">
      <div className="media">
        <div className="row center">
          <div className="col-auto">
            <img className="same-40 radius-50 border border-1 bg-img" src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" />
          </div>
          <div className="col pl-0">
            <h6 className="mt-0 mb-1 text-10 f-700 truncate">Lorem ipsum <span className="text-muted f-600 text-8">Lorem ipsum dolor sit amet.</span></h6>
            <h6 className="text-8 text-muted m-0 truncate">Aulian Shop <span className="text-info ml-1">See Profile</span></h6>
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
      <div className="text-left text-muted">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </div>
      <div className="row mt-2 mx-n1">
        <div className="col px-1"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} alt="" className="img-fluid radius-5" /> </div>
        <div className="col px-1"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/5.jpg`).default} alt="" className="img-fluid radius-5" /> </div>
        <div className="col px-1"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" className="img-fluid radius-5" /> </div>
      </div>
    </div>
  )
}
function Event(props){
  return(
    <li className="event-list">
      <div className="media">
        {/*<div className="event-date width-xs pt-1"> <div className="badge badge-soft-primary text-7"> 21 hours ago </div> </div>*/}
        <div className="media-body">
          {props.children}
          <div className="mt-1 text-rights text-info px-1"><i className="uil uil-clock mr-1"/>{props.time}</div>
        </div>
      </div>
    </li>
  )
}
function Index(props){
  return(
    <div className="left-timeline mb-3 pl-2">
      <ul className="list-unstyled events mb-0">
        <Event time="21 hours ago"> <POST_1 /> </Event>
        <Event time="21 hours ago">
          <h6 className="text-9 m-0 bold"> UX and UI for RJ Admin </h6>
          <p className="text-muted text-9 m-0"> RJ Admin - A responsive admin and dashboard template </p>
        </Event>
        <Event time="21 hours ago">
          <h6 className="text-9 m-0 bold"> Another Post Title </h6>
          <p className="text-muted text-9 m-0"> RJ Admin - A responsive admin and dashboard template </p>
        </Event>
        <Event time="21 hours ago"> <POST_2 /> </Event>
        <Event time="21 hours ago">
          <h6 className="text-9 m-0 bold"> Another Post Title </h6>
          <p className="text-muted text-9 m-0"> RJ Admin - A responsive admin and dashboard template </p>
        </Event>
      </ul>
    </div>
  )
}
export default Index
