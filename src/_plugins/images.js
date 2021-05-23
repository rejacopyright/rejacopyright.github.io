import React, {useState, useRef} from 'react'
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
function Example1(props){
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
  return (
    <div className="row">
      <div className="col-md-auto text-center mb-3">
        <div className="h-100 center">
          <div className="same-100 pointer mx-auto oh p-2 center border border-gray border-dashed radius-10" onClick={() => input.current.click()}>
            <input ref={input} type="file" accept="image/png, image/jpeg" className="d-none" multiple={true} onChange={changeImage} />
            <i className="uil uil-image-plus h3 text-gray"></i>
          </div>
        </div>
      </div>
      {
        image.map((r, key) => (
          <div className="col-md-auto text-center mb-3" key={key}>
            <div className="hpx-100 wpx-100 center border border-gray border-dashed position-relative radius-10 oh">
              <div className="same-100 mx-auto oh bg-img-c" style={{ backgroundImage: `url(${r.base})` }}>
                <div className="hover-anim center">
                  <div className="btn btn-xs btn-outline-primary radius-50 px-3 f-700 pointer">Cover</div>
                  <div className="absolute t-0 w-100">
                    <div className="d-flex p-1">
                      <span className="same-20 btn-danger radius-50 center ml-auto pointer" onClick={() => removeImage(key)}><i className="uil uil-times" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
function Example2(){
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
    const img = image.slice();
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
            <input ref={input} type="file" accept="image/png, image/jpeg" className="d-none" multiple={true} onChange={changeImage} />
            <i className="uil uil-image-plus h3 text-gray"></i>
          </div>
        </div>
      </div>
      <Sortable onChange={onSort} useDragHandle className="row mx-0">
        {
          image.map((r, key) => (
            <div className="col-md-auto mb-3" key={key}>
              <div className="hpx-100 wpx-100 center border border-gray border-dashed position-relative radius-10 oh">
                <div className="same-100 mx-auto oh bg-img-c" style={{ backgroundImage: `url(${r.base})` }}>
                  <div className="hover-anim center">
                    <div className="btn btn-xs btn-outline-primary radius-50 px-3 f-700 pointer">Cover</div>
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
    </div>
  )
}
function Index(){
  return(
    <div className="container-fluid pt-3">
      {/* AVATAR */}
      <h6 className="border-bottom border-1 pb-2 text-info">Avatar</h6>
      <Avatar />
      {/* EXAMPLE 1 */}
      <h6 className="border-bottom border-1 pb-2 text-info">Example 1</h6>
      <Example1 />
      {/* EXAMPLE 2 */}
      <h6 className="border-bottom border-1 pb-2 text-info">Example 2</h6>
      <Example2 />
    </div>
  )
}

export default Index
