import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {useSize} from '_utils/hooks'
import {Topbar} from '_el/topbar'
import {Tooltip} from '_components/popover'
import { Checkbox, Decimal, Input } from '_components/form'
import Editor from '_components/pintura'
import Froala from '_components/editor'
import Slider from 'react-slick'
import '_assets/plugins/slick/slick.scss'
import Select from '_components/select'
import category from 'views/category'
import lay from '_config/layout'

function ImageSection(props){
  const imgContainer = useRef()
  const inputImage = useRef()
  const imgRef = useRef()
  const [image, imageSet] = useState()
  const [imgHeight, imgHeightSet] = useState()
  const [editorSrc, editorSrcSet] = useState()
  const [editorShow, editorShowSet] = useState(false)
  useSize(() => {
    const c = imgContainer.current
    c && imgHeightSet(c.clientWidth)
  }, 300)
  function changeImage(e){
    const file = inputImage.current.files[0]
    if (file) {
      imageSet({name: file.name, base:URL.createObjectURL(file)})
      inputImage.current.value = ''
    }
  }
  function editImgBtn(){
    const src = imgRef.current.style.backgroundImage.slice(4, -1).replace(/"/g, "")
    editorSrcSet(src)
    editorShowSet(true)
  }
  function onEditFinish(e){
    editorSrcSet(null)
    editorShowSet(false)
    imageSet(r => {
      imgRef.current.style.backgroundImage = `url(${e.blob})`
      r.base = e.blob
      return r
    })
    // const active = parseInt(imgRef.current[0].getAttribute('active'))
  }
  function onEditorClose(){
    editorSrcSet(null)
    editorShowSet(false)
  }
  return(
    <div className="row mx-0 mb-2 center-left">
      <div className="col-md-2 offset-md-0 col-8 offset-2 my-2">
        <Editor show={editorShow} onFinish={onEditFinish} onClose={onEditorClose} src={editorSrc} modal={true} />
        <input ref={inputImage} type="file" accept="image/png, image/jpeg" className="d-none" onChange={changeImage} />
          {
            !image ?
            <div className="w-100 h-100 center" ref={imgContainer}>
              <div className="w-100 pointer mx-auto oh p-2 center border border-gray border-dashed radius-10" onClick={() => inputImage.current.click()} style={{height: imgHeight}}>
                <div className="text-center">
                  <i className="uil uil-image-plus h1 text-light lh-75"></i>
                  <p className="mb-0 mt-1 text-gray">Tambah Gambar</p>
                </div>
              </div>
            </div>
            :
            <div ref={imgContainer} className="center hover-xs position-relative radius-5 oh shadow" style={{height: imgHeight}}>
              <div className="w-100 h-100 mx-auto oh bg-img-c" ref={imgRef} style={{ backgroundImage: `url(${image.base})` }}> </div>
            </div>
          }
      </div>
      <div className="col my-2">
        <p className="bold mt-0 mb-1">Gambar Paket <span className="text-muted f-500">(Opsional)</span></p>
        <p className="my-1 text-muted">Contoh: Iklan, Flyer, Banner, Spanduk</p>
        <p className="m-0 text-muted">Direkomendasikan Ukuran 1x1</p>
        {
          image &&
          <div className="btn-list mt-2">
            <div onClick={() => inputImage.current.click()} className="btn btn-xs btn-outline-light pointer bold radius-50 pr-3 mr-1"><i className="uil uil-redo mr-1" />Ganti</div>
            <div onClick={editImgBtn} className="btn btn-xs btn-outline-primary pointer bold radius-50 pr-3 mr-1"><i className="uil uil-pen mr-1" />Edit</div>
            <div onClick={() => imageSet()} className="btn btn-xs btn-outline-danger pointer bold radius-50 pr-3"><i className="uil uil-times mr-1" />Hapus</div>
          </div>
        }
      </div>
    </div>
  )
}
function InfoSection(props){
  const froalaTop = document.querySelector(`.${lay.topbar}`).offsetHeight + 5
  const [dp, dpSet] = useState(false)
  const desc = useRef()
  function froalaChange(e){
    console.log(e)
  }
  return(
    <div className="shadow border p-2 pb-3 radius-10">
      <div className="row mx-n1 pb-1 border-bottom border-light mb-3 center-left">
        <div className="col-auto col-md bold text-12">
          <div className="center-left"><i className="uil uil-exclamation-circle mr-1 text-14"/>Informasi Paket</div>
        </div>
      </div>
      {/*Image*/}
      <ImageSection />
      {/*Name*/}
      <div className="row mx-0 mb-2 center-left">
        <div className="col-md-2 col-auto my-2"> <p className="bold m-0">Nama Paket</p> <p className="m-0 text-muted">Wajib diisi</p> </div>
        <div className="col my-2">
          <Input sm name="name" placeholder="Nama Paket" onChange={() => ''} />
        </div>
      </div>
      {/*Discount & DP*/}
      <div className="row mx-0 mb-2 center-left">
        <div className="col-md-2 col-6 my-2"> <p className="bold m-0">Diskon</p> <p className="m-0 text-muted">Kosongkan jika tidak ada diskon</p> </div>
        <div className="col-md-4 col-6 my-2">
          <Decimal sm name="discount" onChange={i => ''} placeholder="0" icon="%" right min="0" max="100" decimal="2" />
        </div>
        <div className="col-md-auto col-6 my-2">
          <Checkbox label="Pakai Uang Muka" theme="primary" labelClass="text-nowrap text-9 pointer"  id="dp" name="dp_check" value="1" onChange={e => dpSet(e.target.checked)} />
        </div>
        {
          dp &&
          <Decimal sm rowClass="col-md col-6" inputClass="" name="dp" onChange={i => ''} placeholder="0" icon="%" right min="0" max="100" decimal="2" />
        }
      </div>
      {/*Other*/}
      <div className="row mx-0 center-left">
        <div className="col-md-2 col-auto my-2"> <p className="bold m-0">Biaya Lain</p> <p className="m-0 text-muted">Transformasi & Akomodasi</p> </div>
        <div className="col my-2">
          <Checkbox label="Termasuk transportasi" theme="primary" labelClass="text-nowrap text-9 pointer"  id="transportation" name="transportation" value="1" checked onChange={() => ''} />
        </div>
        <div className="col-md-6 my-2">
          <Checkbox label="Termasuk akomodasi" theme="primary" labelClass="text-nowrap text-9 pointer"  id="accommodation" name="accommodation" value="1" checked onChange={() => ''} />
        </div>
      </div>
      {/*Description*/}
      <div className="row mx-0 mt-2">
        <div className="col-12 my-2 pr-md-3">
          <div className="bold mt-2">Deskripsi</div>
          <p className="text-muted mb-2">Tulis deskripsi tentang paket yang ingin anda tawarkan kepada calon klien</p>
          <Froala id="editor" ref={desc} onChange={froalaChange} offsetTop={froalaTop}>
          </Froala>
        </div>
      </div>
    </div>
  )
}
function SelectSection(props){
  const productImg = useRef()
  const [productHeight, productHeightSet] = useState('0px')
  const [activeKey, activeKeySet] = useState(null)
  const settings = {
    dots: false,
    speed: 500,
    infinite: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    // centerMode: true,
    responsive: [
      { breakpoint: 2000, settings: { centerPadding: '50px', slidesToShow: 5, } },
      { breakpoint: 480, settings: { centerPadding: '40px', slidesToShow: 3, } }
    ]
  }
  useSize(() => {
    productImg.current && productHeightSet((productImg.current.offsetWidth || 0) + 'px')
  }, 300)
  return(
    <div className="shadow border p-2 pb-3 radius-10">
      <div className="row mx-n1 pb-1 border-bottom border-light mb-3 center-left">
        <div className="col-auto col-md bold text-12">
          <div className="center-left"><i className="uil uil-image-check mr-1 text-14"/>Produk Yang Dipilih</div>
        </div>
        <div className="col">
          <Select name="select" sm rowClass="" placeholder="- Pilih Kategori -" data={category} label="name" onChange={() => ''} />
        </div>
      </div>
      <Slider {...settings}>
        {
          Array(8).fill().map((r, key) =>
          (
            <div className="py-1 px-2" key={key}>
              <div ref={productImg} onClick={() => activeKeySet(key)} className="w-100 mx-auto oh bg-img radius-10 pointer relative" style={{ backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/products/${key+1}.jpg`).default})`, height: productHeight }}>
                <div className="absolute t-0 r-0 p-1">
                  <div className={`same-15 radius-50 center ${activeKey === key ? 'bg-primary text-white' : 'bg-light'}`}>{activeKey === key && <i className="uil uil-check" />}</div>
                </div>
              </div>
              <div className="py-1 position-relative">
                <Tooltip className="mt-0 mb-1 lh-12 text-truncate d-block" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit."> Lorem ipsum dolor sit amet. </Tooltip>
                <p className="mt-0 mb-1 lh-12 text-10 bold text-truncate">Rp. 999.000</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
function ProductList(props){
  return(
    <div className="row mx-0 border hover-sm bg-white radius-5 position-relative">
      <div className={`col-auto wpx-75 mr-2 bg-img-c radius-left-5`} style={{ backgroundImage: `url(${props.img || require(`${process.env.REACT_APP_IMAGES}/placeholder/image.png`).default})` }}>
      </div>
      <div className="col px-1 py-2">
        <h6 className="m-0 text-9 truncate-1 bold">Product Title</h6>
        <p className="m-0 text-muted">Lorem ipsum dolor.</p>
        <h6 className="mt-3 mb-0 text-10 lh-0 f-700"> Rp. 900.000 <div className="badge badge-soft-danger text-7 f-700 py-0 mr-1"><div className="ppx-2">10%</div></div> </h6>
      </div>
      <div className="absolute-center-v r-0 b-0">
        <div className="col-12">
          <div className="center-right my-md-1 text-14">
            <div className="same-30 btn-soft-danger radius-50 center pointer"><i className="uil uil-times lh-0" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
function SelectedSection(props){
  return(
    <div className="shadow border p-2 pb-3 radius-10">
      <div className="row mx-n1 pb-1 border-bottom border-light mb-3 center-left">
        <div className="col-auto col-md bold text-12">
          <div className="center-left"><i className="uil uil-image-check mr-1 text-14"/>Produk Yang Dipilih</div>
        </div>
      </div>
      <div className="row mx-0">
        {
          Array(5).fill().map((r, key) => (
            <div className="col-md-6 p-1" key={key}>
              <ProductList img={require(`${process.env.REACT_APP_IMAGES}/products/${key+1}.jpg`).default} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
function SubmitSection(){
  const sticky = useRef()
  useSize(() => {
    const stickyBottom = document.querySelector(`#${lay.menu}`).offsetHeight - 10
    sticky.current && (sticky.current.style.bottom = (stickyBottom > 0 ? stickyBottom : 0) + 'px')
  }, 300)
  return(
    <div ref={sticky} className="w-100 position-sticky py-2 px-3 bg-white z-9">
      <div className="row phone mx-1 p-2 radius-5 shadow-sm bg-primary text-white mb-2">
        <div className="col-12 text-center">
          <p className="m-0 bold">Rp. 99.000.0000</p>
        </div>
      </div>
      <div className="row m-0 py-3 px-2 radius-10 shadow-md border border-gray bg-white">
        <div className="col-auto center">
          <Checkbox switch label="Aktifkan" theme="primary" rowClass="mh-0" labelClass="text-nowrap pointer"  id="s3" name="switch" value="1" checked onChange={() => ''} />
        </div>
        <div className="col center">
          <h6 className="desktop header-title m-0 bg-soft-primary shadow-sm py-1 px-3 radius-5 text-primary text-14">Rp. 99.000.0000</h6>
        </div>
        <div className="col-auto center">
          <div className="desktop">
            <Link to={`/vendor/package`} className="btn btn-md radius-50 width-md btn-white border-0 center-left bold pointer"><i className="uil uil-angle-left lh-1 text-14 mr-1"/>Kembali</Link>
          </div>
          <div className="phone">
            <Link to={`/vendor/package`}><div className="same-35 center radius-50 btn-light center border border-muted pointer"><i className="uil uil-angle-left text-16" /></div></Link>
          </div>
        </div>
        <div className="col-auto center">
          <div className="desktop">
            <Link to={`/vendor/package`} className="btn btn-md radius-50 width-md btn-soft-primary center bold border border-primary pointer"><i className="uil uil-navigator lh-1 mr-1"/>Simpan</Link>
          </div>
          <div className="phone">
            <Link to={`/vendor/package`}><div className="same-35 center radius-50 btn-soft-primary center border border-primary pointer"><i className="uil uil-navigator text-14" /></div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
function Index(){
  const topBar = useRef()
  return(
    <div className="container-fluid pt-3">
      <Topbar fixed back ref={topBar}> <div className="text-12 bold px-2">Package</div> </Topbar>
      <div className="px-md-3 px-2 mt-3 mb-4">
        <InfoSection />
      </div>
      <div className="px-md-3 px-2 mt-3 mb-4">
        <SelectSection />
      </div>
      <div className="px-md-3 px-2 mt-3 mb-4">
        <SelectedSection />
      </div>
      <SubmitSection />
    </div>
  )
}

export default Index
