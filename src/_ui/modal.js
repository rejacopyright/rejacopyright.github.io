import React from 'react'
import Modal from '_components/modal'
import RightBar from '_components/rightBar'

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h5 className="border-bottom border-1 pb-0 mt-3 text-primary">Modal</h5>
      <div className="row">
        {/* DEFAULT */}
        <div className="col-auto mb-3">
          <span className="btn-link pointer" data-toggle="modal" data-target="#default">Default</span>
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
          <span className="btn-link pointer" data-toggle="modal" data-target="#clean">Clean</span>
          <Modal id="clean" headerDisabled>
            <div className="text-center text-dark"> Modal Content </div>
          </Modal>
        </div>
        {/* SMALL */}
        <div className="col-auto mb-3">
          <span className="btn-link pointer" data-toggle="modal" data-target="#small">Small</span>
          <Modal id="small" headerDisabled modalClass="modal-sm">
            <div className="text-center text-dark"> Modal Content </div>
          </Modal>
        </div>
        {/* LARGE */}
        <div className="col-auto mb-3">
          <span className="btn-link pointer" data-toggle="modal" data-target="#large">Large</span>
          <Modal id="large" headerDisabled modalClass="modal-lg">
            <div className="text-center text-dark"> Modal Content </div>
          </Modal>
        </div>
        {/* IMAGE */}
        <div className="col-auto mb-3">
          <span className="btn-link pointer" data-toggle="modal" data-target="#image">Image</span>
          <Modal id="image" headerDisabled modalClass="" bodyClass="p-0" contentClass="border-0 radius-0 bg-none">
            <img src={require('_dummy/images/6.jpg').default} className="w-100" alt=""/>
          </Modal>
        </div>
        {/* RIGHTBAR */}
        <div className="col-auto mb-3">
          <span className="btn-link right-bar-toggle pointer">Right Bar</span>
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
