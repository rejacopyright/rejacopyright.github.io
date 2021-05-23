import React, {useEffect, useState, useRef} from 'react'
import { Link } from "react-router-dom"
import { Input, Desimal, Textarea } from '_components/form'
import StickyBottom from '_components/stickyBottom'
import Sortable, {SortableHandle} from '_components/sortable'

function Avatar(props){
  const [image, imageSet] = useState();
  const input = useRef();
  function changeImage(e){
    const file = input.current.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      imageSet({name: file.name, base:reader.result});
    }
    reader.readAsDataURL(file);
  }
  return (
    <div className="row">
      <input ref={input} type="file" accept="image/png, image/jpeg" className="d-none" onChange={changeImage} />
      {
        !image ?
        <div className="col-12 text-center">
          <div className="h-100 center position-relative same-100 mx-auto">
            <div className="same-100 mx-auto oh p-2 center border border-gray border-dashed radius-50">
              <i className="uil uil-image-plus h3 text-gray"></i>
            </div>
            <div className="absolute b-0 w-100 z-9">
              <div className="d-flex p-1">
                <span className="same-25 btn-light radius-50 center ml-auto pointer" onClick={() => input.current.click()}><i className="uil uil-pen" /></span>
              </div>
            </div>
          </div>
        </div> :
        <div className="col-12 text-center">
          <div className="hpx-100 wpx-100 center mx-auto position-relative">
            <div className="absolute t-0 w-100 z-9">
              <div className="d-flex p-1">
                <span className="same-20 btn-light radius-50 center ml-auto pointer" onClick={() => imageSet()}><i className="uil uil-times" /></span>
              </div>
            </div>
            <div className="same-100 mx-auto radius-50 oh bg-img" style={{ backgroundImage: `url(${image.base})` }}>
              <div className="hover-anim center">
                <div className="btn btn-xs btn-outline-primary radius-50 px-3 f-700 pointer" onClick={() => input.current.click()}>Change</div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
function Galeri(props){
  const input = useRef();
  const [image, imageSet] = useState([]);
  function changeImage(e){
    const files = input.current.files;
    if (files.length) {
      for (let i of files) {
        const reader = new FileReader();
        reader.onload = () => {
          imageSet(image => [...image, {name: i.name, base:reader.result}]);
        }
        reader.readAsDataURL(i);
      }
    }
  }
  function removeImage(key){
    const img = [...image];
    img.splice(key, 1);
    imageSet(img);
  }
  function onSort(e){
    const arrange = image.map((r, key) => image[e[key]]);
    imageSet(arrange);
  }
  return (
    <div className="row">
      <div className="col-md-auto text-center mb-3">
        <div className="h-100 center">
          <div className="same-100 pointer mx-auto oh p-2 center border border-gray border-dashed radius-10" onClick={() => input.current.click()}>
            <input type="file" ref={input} accept="image/png, image/jpeg" className="d-none" multiple={true} onChange={changeImage} />
            <i className="uil uil-image-plus h3 text-gray"></i>
          </div>
        </div>
      </div>
      <Sortable onChange={onSort} useDragHandle className="row mx-0">
        {
          image.map((r, key) => (
            <div className="col-md-auto text-center mb-3" key={key}>
              <div className="hpx-100 wpx-100 center border border-gray border-dashed position-relative radius-10 oh">
                <div className="same-100 mx-auto oh bg-img-c" style={{ backgroundImage: `url(${r.base})` }}>
                  <div className="hover-anim center">
                    <div className="btn btn-xs btn-outline-primary radius-50 px-3 f-700 pointer">Cover</div>
                    <div className="absolute t-0 w-100">
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
    </div>
  )
}

function Index(){
  useEffect(() => {
    document.title = 'Form 1';
  }, []);
  return(
    <form>
      <h5 className="py-2 mb-3 mt-0 border-bottom border-2">Form 1</h5>
      {/* Submit Button */}
      <StickyBottom>
        <Link to="/pages/data/list" className="btn btn-xs width-md radius-5 text-light text-9"><i className="uil uil-times mr-1" />Kembali</Link>
        <button type="submit" className="btn btn-xs width-md radius-5 btn-soft-info"><i className="uil uil-check-circle mr-1" />Simpan Perubahan</button>
      </StickyBottom>
      <div className="row sticky-bottom-container pt-3">
        <div className="col-12">
          <div className="shadow-xl radius-10 p-3 mb-3">
            <Avatar />
          </div>
        </div>
        <div className="col-12">
          <div className="shadow-xl radius-10 px-3 py-1 mb-3">
            <div className="row">
              <div className="col-12"> <h6 className="pb-2 mb-3 border-bottom border-2 bold"> Data Pribadi </h6> </div>
              <Input sm rowClass="col-md-6 mb-2" name="firstname" title="First Name" placeholder="First Name" autoFocus />
              <Input sm rowClass="col-md-6 mb-2" name="lastname" title="Last Name" placeholder="Last Name" />
              <Desimal sm rowClass="col-md-6 mb-2" name="gaji" title="Gaji Pokok" placeholder="Gaji Pokok" icon="Rp." />
              <Desimal sm rowClass="col-md-6 mb-2" name="makan" title="Uang Makan" placeholder="Uang Makan" icon="Rp." />
              <Textarea sm rowClass="col-12 mb-2" name="desc" title="Deskripsi" placeholder="Deskripsi singkat..." noResize rows={3} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="shadow-xl radius-10 px-3 py-1 mb-3">
            <div className="row">
              <div className="col-12"> <h6 className="pb-2 mb-3 border-bottom border-2 bold"> Galeri </h6> </div>
              <div className="col-12"> <Galeri /> </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
export default Index
