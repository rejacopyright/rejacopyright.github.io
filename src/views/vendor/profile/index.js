import { useState, useEffect, useRef } from 'react'
import { useSize } from '_utils/hooks'
import { Link, withRouter } from 'react-router-dom'


const routes = [
  { search: "?tab=post", name: 'post', label: 'Post', icon: 'location-pin-alt', exact: true, component: require('./post').default },
  { search: "?tab=product", name: 'product', label: 'Product', icon: 'pricetag-alt', exact: true, component: require('./product').default },
  { search: "?tab=gallery", name: 'gallery', label: 'Gallery', icon: 'images', exact: true, component: require('./gallery').default },
  { search: "?tab=package", name: 'package', label: 'Package', icon: 'gift', exact: true, component: require('./package').default },
]
function Profile(props){
  return(
    <div className={props.className}>
      <div className="card mb-3">
        <div className="radius-10 mt-1 bg-white border">
          <div className="text-center p-3">
            <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} alt="" className="avatar-xl rounded-circle" />
            <h6 className="mt-3 mb-0 lh-1 bold">Full Name</h6>
            <h6 className="m-0 text-muted text-9">Username</h6>
            <div className="row my-3">
              <div className="col-auto ml-auto text-center text-9 f-700 text-muted lh-1 border-right border-gray"><p className="m-0 text-dark lh-1">2.1K</p>Followers</div>
              <div className="col-auto mr-auto text-center text-9 f-700 text-muted lh-1"><p className="m-0 text-dark lh-1">241</p>Following</div>
            </div>
            <div className="text-center">
              <p className="m-0 lh-1">
                <label className="badge badge-soft-primary my-0 mr-2">UI & UX</label>
                <label className="badge badge-soft-primary my-0 mr-2">Frontend</label>
              </p>
            </div>
            <hr className="my-3"/>
            <div className="row">
              <div className="col text-center">
                <Link to="/vendor" className="btn btn-block btn-sm pointer hover radius-5 btn-secondary center"><i className="uil uil-diary mr-2"/>Mode Advance</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 px-2 border-top">
        <h6 className="mb-1 text-dark center-left"><i className="uil uil-home-alt mr-2"/>Alamat</h6>
        <p className="text-muted mb-2 lh-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quia.</p>
      </div>
      <div className="mt-2 px-2 border-top">
        <h6 className="mb-1 text-dark center-left"><i className="uil uil-atm-card mr-2"/>Rekening Bank</h6>
        <p className="text-muted mb-2 lh-12">BCA 123456789 | REJA JAMIL</p>
      </div>
      <div className="mt-2 px-2 border-top">
        <h6 className="mb-1 text-dark center-left"><i className="uil uil-wallet mr-2"/>Saldo</h6>
        <p className="text-primary bold mb-2 lh-12">RP. 999.000</p>
      </div>
    </div>
  )
}
function Index(props){
  const tabList = useRef(), navCol = useRef()
  const [tabListHeight, tabListHeightSet] = useState(0)
  const [navColWidth, navColWidthSet] = useState('auto')
  const [tabActive, tabActiveSet] = useState('activity')
  const tab = new URLSearchParams(props.location.search).get('tab') || routes[0].name
  useSize(() => {
    navCol.current && navColWidthSet(navCol.current.clientWidth - 20)
    tabList.current && tabListHeightSet(tabList.current.offsetHeight + 10)
  }, 300)
  useEffect(() => {
    tabActiveSet(tab)
  }, [tab])
  function Child(){
    const Component = routes.find(i => i.name === tab).component
    return <Component />
  }
  return(
    <div className="container-fluid">
      <div className="row mx-md-n2 relative">
        <div className="col-lg-3 desktop"> <Profile className="sticky-top t-10" /> </div>
        <div className="col-lg-9" ref={navCol}>
          <ul className="nav nav-tabs nav-justified bg-white position-fixed z-1" ref={tabList} style={{width: navColWidth}} role="tablist">
            {
              routes.map((r, key) => (
                <li className="nav-item" key={key} onClick={() => tabActiveSet(r.name)}>
                  <Link to={`${r.search}`} className={`nav-link center py-3 ${tabActive === r.name && 'active'}`}> <i className={`uil uil-${r.icon || 'dice-four'} lh-0 mr-1`}/> {r.label} </Link>
                </li>
              ))
            }
          </ul>
          <div className="" style={{paddingTop: tabListHeight}}>
            <Child tab={tab} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Index)
