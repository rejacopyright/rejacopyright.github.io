import React from 'react'
import Modal from '_components/modal'
import RightBar from '_components/rightBar'

function Index(){
  return(
    <div className="container-fluid">
      <h5 className="border-bottom border-1 pb-0 mt-3">Modal</h5>
      <div className="row">
        {/* DEFAULT */}
        <div className="col-auto mb-3">
          <div className="border border-primary bg-soft-primary text-primary shadow-sm pointer radius-5 py-1 f-600 width-sm text-center" data-toggle="modal" data-target="#default">Default</div>
          <Modal id="default" title="Default">
            <div className="text-center text-dark"> Modal Content </div>
            <div className="modal-footer pb-0 px-0 mt-3">
              <button type="button" className="btn btn-sm text-muted mr-2" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-sm btn-rounded btn-soft-danger" data-dismiss="modal" >Save changes</button>
            </div>
          </Modal>
        </div>
        {/* CLEAN */}
        <div className="col-auto mb-3">
          <div className="border border-primary bg-soft-primary text-primary shadow-sm pointer radius-5 py-1 f-600 width-sm text-center" data-toggle="modal" data-target="#clean">Clean</div>
          <Modal id="clean" headerDisabled>
            <div className="text-center text-dark"> Modal Content </div>
          </Modal>
        </div>
        {/* SMALL */}
        <div className="col-auto mb-3">
          <div className="border border-primary bg-soft-primary text-primary shadow-sm pointer radius-5 py-1 f-600 width-sm text-center" data-toggle="modal" data-target="#small">Small</div>
          <Modal id="small" headerDisabled modalClass="modal-sm">
            <div className="text-center text-dark"> Modal Content </div>
          </Modal>
        </div>
        {/* LARGE */}
        <div className="col-auto mb-3">
          <div className="border border-primary bg-soft-primary text-primary shadow-sm pointer radius-5 py-1 f-600 width-sm text-center" data-toggle="modal" data-target="#large">Large</div>
          <Modal id="large" headerDisabled modalClass="modal-lg">
            <div className="text-center text-dark"> Modal Content </div>
          </Modal>
        </div>
        {/* IMAGE */}
        <div className="col-auto mb-3">
          <div className="border border-primary bg-soft-primary text-primary shadow-sm pointer radius-5 py-1 f-600 width-sm text-center" data-toggle="modal" data-target="#image">Image</div>
          <Modal id="image" headerDisabled modalClass="" bodyClass="p-0" contentClass="border-0 radius-0 bg-none">
            <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} className="w-100" alt=""/>
          </Modal>
        </div>
      </div>
      <h5 className="border-bottom border-1 pb-0 mt-3">Modal Position</h5>
      <div className="row">
        {/* LEFT */}
        <div className="col-auto mb-3">
          <div className="border border-success bg-soft-success text-success shadow-sm pointer radius-5 py-1 f-600 width-sm text-center" data-toggle="modal" data-target="#modal-left">Left</div>
          <Modal left id="modal-left" headerDisabled modalClass="w-md-30">
            <div className="text-center text-dark"> Modal Left </div>
          </Modal>
        </div>
        {/* RIGHT */}
        <div className="col-auto mb-3">
          <div className="border border-success bg-soft-success text-success shadow-sm pointer radius-5 py-1 f-600 width-sm text-center" data-toggle="modal" data-target="#modal-right">Right</div>
          <Modal right id="modal-right" headerDisabled modalClass="w-md-30">
            <div className="text-center text-dark"> Modal Right </div>
          </Modal>
        </div>
        {/* TOP */}
        <div className="col-auto mb-3">
          <div className="border border-success bg-soft-success text-success shadow-sm pointer radius-5 py-1 f-600 width-sm text-center" data-toggle="modal" data-target="#modal-top">Top</div>
          <Modal top id="modal-top" headerDisabled bodyClass="px-3">
            <div className="text-center text-dark"> Modal Top </div>
          </Modal>
        </div>
        {/* BOTTOM */}
        <div className="col-auto mb-3">
          <div className="border border-success bg-soft-success text-success shadow-sm pointer radius-5 py-1 f-600 width-sm text-center" data-toggle="modal" data-target="#modal-bottom">Bottom</div>
          <Modal bottom id="modal-bottom" headerDisabled bodyClass="px-3">
            <div className="text-center text-dark"> Modal Bottom </div>
          </Modal>
        </div>
      </div>
      <h5 className="border-bottom border-1 pb-1 mt-3">Right Bar</h5>
      <div className="row">
        {/* RIGHTBAR */}
        <div className="col-auto mb-3">
          <div className="right-bar-toggle border border-warning bg-soft-warning text-warning shadow-sm pointer radius-5 px-2 py-1 f-600">Right Bar</div>
          <RightBar title="Right Bar" className="h-100">
            Right Bar
            <div className="absolute-center-h w-100 b-0 p-2">
              <button type="submit" className="btn btn-block btn-sm radius-20 btn-soft-success">Update</button>
            </div>
          </RightBar>
        </div>
      </div>
    </div>
  )
}

export default Index
