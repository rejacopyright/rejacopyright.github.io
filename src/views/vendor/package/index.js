import React, {useRef, useEffect, useState, useMemo} from 'react'
import {Link} from 'react-router-dom'
import debounce from 'lodash.debounce'
import {Topbar} from '_el/topbar'
import Rating from 'react-rating'
import lay from '_config/layout'
import {Inputicon, Checkbox} from '_components/form'
import Modal from '_components/modal'
function ViewPackage(props){
  return(
    <div className="row m-0">
      <div className="col-12">
        Package View
      </div>
    </div>
  )
}
function Package(props){
  return(
    <div className="card border hover-sm my-2">
      <div className="card-body p-3">
        <div className="badge badge-soft-info float-right">10% OFF</div>
        <p className="text-dark mb-1 bold"> Package Name </p>
        <div className="float-right mt-2">
          <p className="m-0 text-center text-10 bold lh-1">8</p>
          <p className="m-0 text-center text-7">Produk</p>
        </div>
        <h6 className="m-0"> <span className="text-dark"> Rp. 92.000.000 </span> </h6>
        <div className="m-0">
          <div className="f-600 text-muted text-10">
            <Rating
              initialRating={props.rating || 3}
              fullSymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star.png`).default} width="10" alt=""/>}
              emptySymbol={<img src={require(`${process.env.REACT_APP_IMAGES}/icons/star-o.png`).default} width="10" alt=""/>}
              readonly
              />
            <span className="text-8 text-dark"> (92)</span>
          </div>
        </div>
        <p className="text-muted my-2 lh-12 truncate-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo minima, aspernatur molestias corrupti voluptatibus culpa esse velit minus temporibus. </p>
        <div className="d-flex center-right">
          <div className="row mx-n1 center-left mr-auto">
            <div className="col-auto px-1 ml-md-0 lh-5 text-8 f-700 text-muted"><i className="uil uil-thumbs-up mr-1" />12</div>
            <div className="col-auto px-1 lh-5 text-8 f-700 text-muted"><i className="uil uil-eye mr-1" />76</div>
            <div className="col-md-auto px-1 text-9 f-700 text-muted">
              <span className="mb-0 text-6 text-gray f-700">2RB TERJUAL</span>
            </div>
          </div>
          <div className="same-25 btn-soft-success radius-50 center pointer mr-2" data-toggle="modal" data-target="#view-package">
            <i className="uil uil-eye text-success"></i>
          </div>
          <div className="dropdown">
            <div className="same-25 bg-smoke border radius-50 center pointer dropdown-toggle arrow-none text-muted" data-toggle="dropdown" aria-expanded="false">
              <i className="uil uil-ellipsis-h text-dark"></i>
            </div>
            <div className="dropdown-menu dropdown-menu-top t-unset radius-5 oh shadow z-1">
              <Link to="/vendor/product/edit/123" className="dropdown-item text-9"><i className="uil uil-edit-alt mr-1"></i>Edit</Link>
              <Link to="#" className="dropdown-item text-9"><i className="uil uil-share-alt mr-1"></i>Share</Link>
              <div className="dropdown-divider"></div>
              <Link to="#" className="dropdown-item text-9 text-danger"><i className="uil uil-archive mr-1"></i>Arsipkan</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function Filter(props){
  const [sortBy, sortBySet] = useState('name')
  const [status, statusSet] = useState(1)
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
                  <div className="col-4 px-1 my-2" key={key}>
                    <div onClick={() => statusSet(r.value)} className={`border ${status === r.value ? 'border-primary bg-soft-primary text-primary shadow-sm' : 'shadow-xs'} radius-5 px-2 py-1 pointer hover-sm f-600`}>{r.label}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-4 px-3">
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
function Index(){
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
            <div className="text-12 bold">Paket</div>
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
            Array(6).fill().map((r, key) => (
              <div className="col-md-6 col-lg-4 mt-2 px-1 px-md-2" key={key}>
                <Package />
              </div>
            ))
          }
        </div>
      </div>
      <Modal right id="filterbar" headerDisabled modalClass="w-md-30 px-0"> <Filter /> </Modal>
      <Modal right id="view-package" headerDisabled modalClass="w-md-30 px-0"> <ViewPackage /> </Modal>
    </div>
  )
}

export default Index
