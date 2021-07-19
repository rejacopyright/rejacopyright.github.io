import React, {useRef, useEffect, useState, useMemo} from 'react'
import {Link} from 'react-router-dom'
import debounce from 'lodash.debounce'
import {Topbar} from '_el/topbar'
import lay from '_config/layout'
import {Inputicon, Checkbox} from '_components/form'
import Select from '_components/select'
import Modal from '_components/modal'
import category from 'views/category'

function Gallery(props){
  const galleryImg = useRef()
  const [galleryHeight, galleryHeightSet] = useState('0px')
  useEffect(() => {
    const updateSize = debounce(() => {
      galleryImg.current && galleryHeightSet((galleryImg.current.offsetWidth || 0) + 'px');
    }, 300)
    updateSize()
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [])
  return(
    <div className="radius-10 bg-white hover-sm border">
      <div className="oh pointer position-relative">
        <Link to="/gallery/123/123" >
          <div ref={galleryImg} className="w-100 radius-top-10 mx-auto oh bg-img" style={{ backgroundImage: `url(${props.img})`, height: galleryHeight }}> </div>
        </Link>
        <div className="position-absolute lh-1 r-0 t-0">
          {
            props.status === 'active' ?
            <span className="center same-15 radius-50 m-1 bg-success text-white"><i className="uil uil-check text-10" /></span>
            :
            <span className="center same-15 radius-50 m-1 bg-white text-danger"><i className="uil uil-ban text-10" /></span>
          }
        </div>
        <div className="position-absolute l-0 b-0">
          <h6 className="badge badge-soft-primary m-1 f-700">Kategori</h6>
        </div>
        <div className="position-absolute lh-15 r-0 b-0 p-1 f-600 text-muted">
          <div className="dropdown">
            <div className="same-25 black-25 radius-50 center pointer dropdown-toggle arrow-none shadow-md-bold" data-toggle="dropdown" aria-expanded="false">
              <i className="uil uil-ellipsis-h text-white"></i>
            </div>
            <div className="dropdown-menu dropdown-menu-top t-unset radius-5 oh shadow-img z-1">
              <Link to="/vendor/gallery/edit/123" className="dropdown-item text-9"><i className="uil uil-edit-alt mr-1"></i>Edit</Link>
              <Link to="#" className="dropdown-item text-9"><i className="uil uil-share-alt mr-1"></i>Share</Link>
              <div className="dropdown-divider"></div>
              <Link to="#" className="dropdown-item text-9 text-danger"><i className="uil uil-archive mr-1"></i>Arsipkan</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 position-relative">
        <p className="m-0 lh-1 truncate-1 text-10 f-600 text-dark">{props.title || '-'}</p>
        <p className="mb-0 mt-1 f-600 text-gray small truncate-1">
          <i className="uil uil-location-point mr-1"/>
          Jl. Dr. Setiabudi No.376, Ledeng, Kec. Cidadap, Kota Bandung, Jawa Barat
        </p>
        <div className="row mx-n1 mt-1">
          <div className="col-auto px-1 lh-1 text-8 text-muted"><i className="uil uil-thumbs-up mr-1" />12</div>
          <div className="col-auto px-1 lh-1 text-8 text-muted"><i className="uil uil-eye mr-1" />76</div>
          <div className="col-auto px-1 lh-1 text-8 text-muted"><i className="uil uil-comment-lines mr-1" />76</div>
        </div>
      </div>
    </div>
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
      {value: 'view', label: 'Dilihat'},
      {value: 'like', label: 'Disukai'},
      {value: 'comment', label: 'Komentar'},
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
  const topBar = useRef()
  const [desktopBar, desktopBarSet] = useState(0)
  const [desc, descSet] = useState(false)
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
        <div className="row m-0 py-3 px-2 radius-10 shadow-sm border border-light bg-white">
          <div className="col-md-6 center-left">
            <Inputicon rowClass="w-100" className="radius-50 text-10 bg-light border-gray" sm name="name" icon={<i className="uil uil-search"/>} placeholder="Pencarian" onChange={() => ''} />
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
            <Link to={`/vendor/gallery/add`} className="btn btn-md radius-50 width-md btn-soft-primary bold border border-primary pointer">Posting Galeri</Link>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="row mx-1 mx-md-n2">
          {
            Array(10).fill().map((r, key) => (
              <div className="col-6 col-md-3 my-2 px-1 px-md-2" key={key}>
                <Gallery
                  img={require(`${process.env.REACT_APP_IMAGES}/products/${key+2}.jpg`).default}
                  title="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
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
