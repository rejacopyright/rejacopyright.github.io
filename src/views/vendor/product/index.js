import React, {useRef, useEffect, useState, useMemo, Fragment} from 'react'
import {Link} from 'react-router-dom'
import debounce from 'lodash.debounce'
import {Topbar} from '_el/topbar'
import Rating from 'react-rating'
import lay from '_config/layout'
import {Inputicon, Checkbox} from '_components/form'
import Select from '_components/select'
import Modal from '_components/modal'
import category from 'views/category'
import { Scrollbars } from 'react-custom-scrollbars'

function Product(props){
  const productImg = useRef()
  const [productHeight, productHeightSet] = useState('0px')
  useEffect(() => {
    const updateSize = debounce(() => {
      productImg.current && productHeightSet((productImg.current.offsetWidth || 0) + 'px')
    }, 300)
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [props.view])
  return(
    <Fragment>
      {
        (props.view && props.view === 'grid') ?
        <div className="radius-10 bg-white hover-sm border">
          <Link to="/product/123/123" className="oh pointer">
            <div className="position-relative">
              <div ref={productImg} className="w-100 radius-top-10 mx-auto oh bg-img" style={{ backgroundImage: `url(${props.img})`, height: productHeight }}> </div>
              <div className="position-absolute lh-1 r-0 t-0">
                {
                  props.status === 'active' ?
                  <span className="center same-15 radius-50 m-1 bg-success text-white"><i className="uil uil-check text-10" /></span>
                  :
                  <span className="center same-15 radius-50 m-1 bg-white text-danger"><i className="uil uil-ban text-10" /></span>
                }
              </div>
              {
                props.discount && (
                  <div className="position-absolute lh-1 r-0 b-0 p-1">
                    <span className="badge badge-warning badge-pill">{props.discount}% OFF</span>
                  </div>
                )
              }
            </div>
          </Link>
          <div className="p-2 pb-3 text-11 position-relative">
            <p className="mt-0 mb-1 lh-12 truncate-1 text-muted text-9">{props.title || '-'}</p>
            <p className="f-700 lh-1 text-dark mt-1">{props.price || '0'}</p>
            {
              props.rating && (
                <div className="mt-3">
                  <div className="position-absolute lh-15 l-0 b-0 p-2 f-600 text-muted text-10">
                    <Rating
                      initialRating={props.rating || 0}
                      fullSymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star.png`).default} width="10" alt=""/>}
                      emptySymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star-o.png`).default} width="10" alt=""/>}
                      readonly
                      />
                    { props.review && <span className="text-8 text-dark"> ({props.review})</span> }
                  </div>
                </div>
              )
            }
            <div className="position-absolute lh-15 r-0 b-0 p-1 f-600 text-muted">
              <div className="dropdown">
                <div className="same-25 bg-smoke border border-gray radius-50 center pointer dropdown-toggle arrow-none text-muted" data-toggle="dropdown" aria-expanded="false">
                  <i className="uil uil-ellipsis-h text-dark"></i>
                </div>
                <div className="dropdown-menu dropdown-menu-top t-unset radius-5 oh shadow-img z-1">
                  <Link to="/vendor/product/edit/123" className="dropdown-item text-9"><i className="uil uil-edit-alt mr-1"></i>Edit</Link>
                  <Link to="#" className="dropdown-item text-9"><i className="uil uil-share-alt mr-1"></i>Share</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="#" className="dropdown-item text-9 text-danger"><i className="uil uil-archive mr-1"></i>Arsipkan</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="row mx-0 border hover-md bg-white radius-5 my-2 position-relative">
          <div className="col-auto wpx-100 mr-2 bg-img radius-left-5" style={{ backgroundImage: `url(${props.img})` }}>
            <div className="position-absolute lh-1 r-0 b-0">
              {
                props.status === 'active' ?
                <span className="center same-15 radius-50 m-1 bg-success text-white"><i className="uil uil-check text-10" /></span>
                :
                <span className="center same-15 radius-50 mpx-2 bg-white text-danger"><i className="uil uil-ban text-10" /></span>
              }
            </div>
          </div>
          <div className="col px-1 py-2">
            <h6 className="m-0 text-10 truncate-1">{props.title || '-'}</h6>
            <h6 className="badge badge-soft-primary m-0 f-700">Kategori</h6>
            <div className="mt-3">
              {
                props.discount &&
                <h6 className="m-0 text-9 text-muted f-700 i center-left desktop">
                  <div className="badge badge-info text-7 f-700 py-0 mr-1"><div className="ppx-2">{props.discount}%</div></div>
                  <div className="del"> {props.price || 0} </div>
                </h6>
              }
              <h6 className="my-1 text-10 lh-15 f-700"> {props.price || 0} </h6>
            </div>
            <div className="lh-1">
              <Rating
                initialRating={3}
                fullSymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star.png`).default} width="10" alt=""/>}
                emptySymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star-o.png`).default} width="9" alt=""/>}
                readonly
                />
              <span className="text-8 text-dark"> (89)</span>
            </div>
          </div>
          <div className="absolute b-0 r-0 pb-md-1 px-md-2">
            <div className="row m-0 mr-1 mr-md-0 center-right">
              <div className="col-auto px-md-2 px-1 ml-md-0 ml-auto lh-5 text-8 f-700 text-muted"><i className="uil uil-thumbs-up mr-1" />12</div>
              <div className="col-auto px-md-2 px-1 lh-5 text-8 f-700 text-muted"><i className="uil uil-eye mr-1" />76</div>
              <div className="col-md-auto px-1 text-right text-9 f-700 text-muted">
                <span className="mb-0 text-6 text-gray f-700">2RB TERJUAL</span>
              </div>
            </div>
          </div>
          <div className="absolute-center-v r-0 b-0">
            <div className="col-12">
              <div className="center-right my-2 text-8">
                <div className="same-20 bg-smoke radius-50 center pointer mr-2"><i className="uil uil-eye" /></div>
                <div className="same-20 bg-smoke radius-50 center pointer mr-2"><i className="uil uil-share-alt" /></div>
                <Link to="/vendor/product/edit/123" className="same-20 btn-soft-warning radius-50 center pointer mr-2"><i className="uil uil-edit-alt" /></Link>
                <Link to="/vendor/product/edit/123" className="same-20 btn-soft-danger radius-50 center pointer"><i className="uil uil-archive" /></Link>
              </div>
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}
function Filter(props){
  const [sortBy, sortBySet] = useState('name')
  const [status, statusSet] = useState(1)
  const cat_select = useMemo(() => category.map(r => {
    return {value: r.name.toLowerCase(), label: r.name}
  }), [])
  const sorts = useMemo(() => {
    return [
      {value: 'name', label: 'Nama'},
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
      {value: 1, label: 'Aktif'},
      {value: 2, label: 'Diarsipkan'},
      {value: 3, label: 'Non Aktif'},
      {value: 4, label: 'Diblokir'},
    ]
  }, [])
  return(
    <div className="row m-0">
      <div className="col-12">
        <Scrollbars style={{ height: '60vh' }} autoHide autoHideDuration={10}>
          <h5 className="m-0 f-700 border-bottom pb-2 border-2">Filter Berdasarkan</h5>
          {/*Status*/}
          <div className="bg-smoke radius-5 p-3 mt-3">
            <h6 className="m-0 f-700">Status</h6>
            <div className="radio-primary mt-2">
              <div className="row m-n1">
                {
                  stats.map((r, key) => (
                    <div className="col-4 px-1 mt-2" key={key}>
                      <div onClick={() => statusSet(r.value)} className={`border ${status === r.value ? 'border-primary bg-soft-primary text-primary shadow-sm' : 'shadow-xs'} radius-5 px-2 py-1 pointer hover-sm f-600`}>{r.label}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          {/*Kategori*/}
          <div className="p-1 mt-3">
            <h6 className="mt-0 mb-2 f-700">Kategori</h6>
            <Select name="select" sm rowClass="" placeholder="Semua Kategori" data={cat_select} label="name" onChange={() => ''} />
          </div>
          {/*Lainnya*/}
          <div className="bg-smoke radius-5 p-3 mt-3">
            <h6 className="m-0 f-700">Lainnya</h6>
            <div className="radio-primary mt-2">
              <div className="row m-n1">
                <div className="col-md-6 px-1 mt-2">
                  <Checkbox label="Dengan Diskon" theme="primary" labelClass="text-nowrap text-9 pointer"  id="discount_check" name="discount_check" value="1" onChange={() => ''} />
                </div>
                <div className="col-md-6 px-1 mt-2">
                  <Checkbox label="Transportasi" theme="primary" labelClass="text-nowrap text-9 pointer"  id="transportation_check" name="transportation_check" value="1" onChange={() => ''} />
                </div>
                <div className="col-md-6 px-1 mt-2">
                  <Checkbox label="Akomodasi" theme="primary" labelClass="text-nowrap text-9 pointer"  id="accommodation_check" name="accommodation_check" value="1" onChange={() => ''} />
                </div>
                <div className="col-md-6 px-1 mt-2">
                  <Checkbox label="Uang Muka" theme="primary" labelClass="text-nowrap text-9 pointer"  id="dp_check" name="dp_check" value="1" onChange={() => ''} />
                </div>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
      <div className="col-12 mt-4">
        <div className="mt-0 mb-2 border-bottom pb-2 border-2 center-left">
          <div className="bold text-14"> Urutkan </div>
          <div className="ml-auto pr-2">
            <Checkbox label="DESC" theme="primary" labelClass="text-nowrap text-11 pointer"  id="desc" name="checkbox" value="1" checked onChange={() => ''} />
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
function Index(props){
  const params = useMemo(() => new URLSearchParams(props.location.search), [props.location])
  const topBar = useRef()
  const [desktopBar, desktopBarSet] = useState(0)
  const [desc, descSet] = useState(false)
  const [view, viewSet] = useState()
  useEffect(() => {
    viewSet(params.get('view') || 'grid')
  }, [params])
  useEffect(() => {
    document.title = 'Produk'
    const updateHeight = debounce(() => {
      desktopBarSet(Array.from(document.querySelectorAll(`.${lay.topbar}`)).find(i => i.clientHeight !== 0).clientHeight)
    }, 300)
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])
  return(
    <div className="container-fluid">
      <Topbar fixed back ref={topBar}>
        <div className="row m-0">
          <div className="col-auto center">
            <div className="text-12 bold">Produk</div>
          </div>
          <div className="col center-right text-right">
            <div className="pointer text-dark" data-toggle="modal" data-target="#filterbar">
              <div className="same-35 center bg-light radius-50">
                <i className="uil uil-ellipsis-v text-12 lh-1"/>
              </div>
            </div>
          </div>
        </div>
      </Topbar>
      <div className="w-100 sticky-top px-md-0 px-2 pb-1 pt-2 bg-white z-9" style={{top: desktopBar+'px'}}>
        <div className="row m-0 py-3 px-2 radius-10 shadow-xs border border-light bg-white">
          <div className="col-md-6 center-left">
            <Inputicon rowClass="w-100" className="radius-50 text-10 bg-light border-gray" sm name="name" icon={<i className="uil uil-search"/>} placeholder="Pencarian" onChange={() => ''} />
            <div className="center ml-3">
              <Link to="/vendor/product?view=list">
                <i onClick={() => viewSet('list')} className={`uil uil-document-layout-left text-14 ${view !== 'list' && 'text-muted'} pointer mr-2`}/>
              </Link>
              <Link to="/vendor/product?view=grid">
                <i onClick={() => viewSet('grid')} className={`uil uil-apps text-12 ${view !== 'grid' && 'text-muted'} pointer ml-2`}/>
              </Link>
            </div>
          </div>
          <div className="col-auto ml-auto center-left desktop">
            <div className="same-35 radius-50 center bg-light pointer mr-2" data-toggle="modal" data-target="#filterbar">
              <i className="uil uil-filter text-12 lh-0 mt-1"/>
            </div>
            <div className="same-35 radius-50 center bg-light pointer">
              <i className={`uil uil-sort-amount-${desc ? 'down' : 'up'} text-14 lh-0`} onClick={() => descSet(!desc)} />
            </div>
          </div>
          <div className="col-auto center desktop">
            <Link to={`/vendor/product/add`} className="btn btn-md radius-50 width-md btn-soft-primary bold border border-primary pointer">Tambah Produk</Link>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="row mx-1 mx-md-n2">
          {
            Array(10).fill().map((r, key) => (
              <div className={view === 'grid' ? 'col-6 col-md-3 my-2 px-1 px-md-2' : 'col-12'} key={key}>
                <Product
                  view={view}
                  img={require(`${process.env.REACT_APP_IMAGES}/products/${key+2}.jpg`).default}
                  discount={key%2 ? 10 : false}
                  title="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                  price="Rp. 1.200.000"
                  rating={3}
                  review={30}
                  sold="1RB"
                  status='nonactive'
                  />
              </div>
            ))
          }
        </div>
      </div>
      <Modal right id="filterbar" headerDisabled modalClass="w-md-30 px-0">
        <Filter />
      </Modal>
    </div>
  )
}

export default Index
