import React, { useRef } from 'react'
import Editor from '_components/editor'

function Index(){
  const r = useRef();
  function submit(e){
    console.log(r.current.oldModel);
  }
  return(
    <div className="container-fluid pt-3">
      <h6 className="border-bottom border-1 mt-3 text-primary">Editor</h6>
      <div className="row">
        <div className="col">
          <Editor id="editor" ref={r} onChange={r => console.log(r)} >
            <p>uuu</p>
            <p>uuu</p>
          </Editor>
          <div className="btn btn-sm btn-primary radius-50 pointer float-right mt-2 width-md" onClick={submit}>SAVE</div>
        </div>
      </div>
    </div>
  )
}

export default Index
