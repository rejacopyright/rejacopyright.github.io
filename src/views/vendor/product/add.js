import React, {useState, useRef, useEffect} from 'react'
import debounce from 'lodash.debounce'
import Sortable, {SortableHandle} from '_components/sortable'
import Editor from '_components/pintura'
import {Checkbox} from '_components/form'
import {Link} from 'react-router-dom'
import {Topbar} from '_el/topbar'
import Select from '_components/select'
import { Desimal } from '_components/form'
import Froala from '_components/editor'
import lay from '_config/layout'

function UploadSection(){
  const imgContainer = useRef();
  const input = useRef();
  const imgRef = useRef([]);
  const [imgHeight, imgHeightSet] = useState();
  const [image, imageSet] = useState([]);
  const [activeImg, activeImgSet] = useState(0);
  const [editorSrc, editorSrcSet] = useState();
  const [editorShow, editorShowSet] = useState(false);
  useEffect(() => {
    const updateSize = debounce(() => {
      const c = imgContainer.current
      c && imgHeightSet(c.clientWidth)
    }, 300)
    updateSize()
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [])
  function changeImage(e){
    const files = input.current.files;
    if (files.length) {
      for (let i of files) {
        imageSet(image => [...image, {name: i.name, base:URL.createObjectURL(i)}]);
      }
      input.current.value = ''
    }
  }
  function removeImage(key){
    const img = image.slice();
    img.splice(key, 1);
    imageSet(img);
  }
  function onSort(e){
    const arrange = image.map((r, key) => image[e[key]]);
    imageSet(arrange);
  }
  function editImgBtn(e){
    const src = imgRef.current[e].style.backgroundImage.slice(4, -1).replace(/"/g, "")
    activeImgSet(e)
    editorSrcSet(src)
    editorShowSet(true)
  }
  function onEditFinish(e){
    editorSrcSet(null)
    editorShowSet(false)
    imageSet(r => {
      const active = parseInt(imgRef.current[0].getAttribute('active'))
      imgRef.current[active].style.backgroundImage = `url(${e.blob})`
      r[active].base = e.blob
      return r
    })
    // const active = parseInt(imgRef.current[0].getAttribute('active'))
  }
  function onEditorClose(){
    editorSrcSet(null)
    editorShowSet(false)
  }
  return (
    <div className="row mx-1 mx-md-n2">
      <Editor show={editorShow} onFinish={onEditFinish} onClose={onEditorClose} src={editorSrc} modal={true} />
      <input ref={input} type="file" accept="image/png, image/jpeg" className="d-none" multiple={true} onChange={changeImage} />
      <div className="col-12 px-2">
        <div className="shadow border pt-2 pb-3 radius-10">
          <div className="center-left px-3 pb-2 border-bottom border-light text-left">
            <div className="bold text-12"> Upload Gambar </div>
            { image.length > 0 && <div className="ml-auto"> <div className="btn btn-soft-primary btn-sm radius-5 center pointer" onClick={() => input.current.click()}><i className="uil uil-plus lh-1 mr-1" /> <span>Tambah Gambar</span></div> </div> }
          </div>
          {
            image.length === 0 && (
              <div className="row mx-0">
                <div className="col-md-3 col-6 mt-2">
                  <div className="w-100 h-100 center" ref={imgContainer}>
                    <div className="w-100 pointer mx-auto oh p-2 center border border-gray border-dashed radius-10" onClick={() => input.current.click()} style={{height: imgHeight}}>
                      <div className="">
                        <i className="uil uil-image-plus h1 text-light lh-75"></i>
                        <p className="mb-0 mt-2 text-gray text-10 f-500">Tambah Gambar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          {
            image.length > 0 && (
              <Sortable onChange={onSort} useDragHandle className="row mx-0">
                {
                  image.map((r, key) => (
                    <div className="col-md-3 col-6 mt-3" key={key}>
                      <div ref={imgContainer} className="center hover position-relative radius-5 oh" style={{height: imgHeight}}>
                        <div className="w-100 h-100 mx-auto oh bg-img-c" active={activeImg} ref={el => imgRef.current[key] = el} style={{ backgroundImage: `url(${r.base})` }}>
                          <div className="hover-anim center">
                            <div className="same-30 btn-light border border-gray center radius-50 pointer" onClick={() => editImgBtn(key)}><i className="uil uil-image-edit text-12"/></div>
                            <div className="absolute t-0 w-100 z-99">
                              <div className="d-flex p-1">
                                <div className="text-center">
                                  <SortableHandle><span className="same-20 btn-light radius-50 center pointer"><i className="uil uil-expand-arrows rotate-1" /></span></SortableHandle>
                                </div>
                                <span className="same-20 btn-danger radius-50 center ml-auto pointer" onClick={() => removeImage(key)}><i className="uil uil-times" /></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Sortable>
            )
          }
        </div>
      </div>
    </div>
  )
}
function InfoSection(props){
  const froalaTop = document.querySelector(`.${lay.topbar}`).offsetHeight + 5
  const category = [
    {value: 1, label: 'Kategori 1'},
    {value: 2, label: 'Kategori 2'},
    {value: 3, label: 'Kategori 3'},
    {value: 4, label: 'Kategori 4'},
    {value: 5, label: 'Kategori 5'},
    {value: 6, label: 'Kategori 6'},
    {value: 7, label: 'Kategori 7'},
  ]
  const desc = useRef()
  function onChange(e){
    console.log(e)
  }
  return(
    <div className="row mx-1 mx-md-n2">
      <div className="col-12 px-2">
        <div className="shadow border p-2 pb-3 radius-10">
          <div className="row mx-0 pb-2 border-bottom border-light mb-3">
            <div className="col-12 bold text-12"> Informasi Produk </div>
          </div>
          {/*Category*/}
          <div className="row mx-0 center-left">
            <div className="col-md-2 col-auto my-2"> <p className="bold m-0">Kategori</p> <p className="m-0 text-muted">Wajib dipilih</p> </div>
            <div className="col my-2">
              <Select name="select" sm rowClass="" placeholder="- Pilih Kategori -" data={category} label="name" onChange={() => ''} />
            </div>
          </div>
          {/*Price & Discount*/}
          <div className="row mx-0 mt-3">
            <div className="col-md-6 my-2 pr-md-3">
              <div className="row">
                <div className="col-md-4"> <p className="bold m-0">Harga</p> <p className="m-0 text-muted">Harga Wajib di isi</p> </div>
                <Desimal sm rowClass="col" name="price" onChange={i => ''} placeholder="0" icon="Rp. " />
              </div>
            </div>
            <div className="col-md-6 my-2">
              <div className="row">
                <div className="col-md-6 pr-0"> <p className="bold m-0">Diskon</p> <p className="m-0 text-muted">Kosongkan jika tidak ada diskon</p> </div>
                <Desimal sm rowClass="col" name="discount" onChange={i => ''} placeholder="0" icon="%" right min="0" max="100" decimal="2" />
              </div>
            </div>
          </div>
          {/*Description*/}
          <div className="row mx-0 mt-2">
            <div className="col-12 my-2 pr-md-3">
              <div className="bold mt-2">Deskripsi</div>
              <p className="text-muted mb-2">Tulis deskripsi tentang produk yang ingin anda tawarkan kepada calon klien</p>
              <Froala id="editor" ref={desc} onChange={onChange} offsetTop={froalaTop}>
              </Froala>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function SubmitSection(){
  return(
    <div className="w-100 position-sticky py-2 px-3 bg-white b-0 z-9">
      <div className="row m-0 py-3 px-2 radius-10 shadow-md border border-gray bg-white">
        <div className="col-auto center">
          <Checkbox switch label="Aktifkan" theme="success" rowClass="mh-0" labelClass="text-nowrap"  id="s3" name="switch" value="1" checked onChange={() => ''} />
        </div>
        <div className="col-auto ml-auto center">
          <div className="desktop">
            <Link to={`/vendor/product`} className="btn btn-md radius-50 width-md btn-white border-0 center-left bold pointer"><i className="uil uil-angle-left lh-1 text-14 mr-1"/>Kembali</Link>
          </div>
          <div className="phone">
            <Link to={`/vendor/product`}><div className="same-35 center radius-50 btn-light center border border-muted pointer"><i className="uil uil-angle-left text-16" /></div></Link>
          </div>
        </div>
        <div className="col-auto center">
          <div className="desktop">
            <Link to={`/vendor/product/add`} className="btn btn-md radius-50 width-md btn-soft-success center bold border border-success pointer"><i className="uil uil-navigator lh-1 mr-1"/>Simpan</Link>
          </div>
          <div className="phone">
            <Link to={`/vendor/product/add`}><div className="same-35 center radius-50 btn-soft-success center border border-success pointer"><i className="uil uil-navigator text-14" /></div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
function Index(){
  const topBar = useRef()
  useEffect(() => {
    document.title = 'Produk'
  }, [])
  return(
    <div className="container-fluid px-0">
      <Topbar fixed back ref={topBar}> <div className="text-12 bold px-2">Produk</div> </Topbar>
      <div className="px-md-3 text-center mt-3 mb-4">
        <UploadSection />
      </div>
      <div className="px-md-3 mt-3 mb-4">
        <InfoSection />
      </div>
      <SubmitSection />
    </div>
  )
}

export default Index
