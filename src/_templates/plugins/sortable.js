import React from 'react'
import Sortable, {SortableHandle} from '_components/sortable'

function SimpleSortable(){
  return(
    <Sortable onChange={r => console.log(r)} className="row">
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-white shadow-sm">
          <div className="p-3">
            <h5 className="mt-0">0</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-white shadow-sm">
          <div className="p-3">
            <h5 className="mt-0">1</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-white shadow-sm">
          <div className="p-3">
            <h5 className="mt-0">2</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-white shadow-sm">
          <div className="p-3">
            <h5 className="mt-0">3</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-white shadow-sm">
          <div className="p-3">
            <h5 className="mt-0">4</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-white shadow-sm">
          <div className="p-3">
            <h5 className="mt-0">5</h5>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-white shadow-sm">
          <div className="p-3">
            <h5 className="mt-0">6</h5>
          </div>
        </div>
      </div>
    </Sortable>
  )
}
function HandlerSortable(){
  return(
    <Sortable onChange={r => console.log(r)} className="row" useDragHandle>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-info text-white shadow-sm p-3 center-left">
          <h5 className="m-0 text-white">0</h5>
          <div className="ml-auto">
            <SortableHandle><span className="same-20 radius-50 center pointer"><i className="uil uil-expand-arrows rotate-1" /></span></SortableHandle>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-info text-white shadow-sm p-3 center-left">
          <h5 className="m-0 text-white">1</h5>
          <div className="ml-auto">
            <SortableHandle><span className="same-20 radius-50 center pointer"><i className="uil uil-expand-arrows rotate-1" /></span></SortableHandle>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-info text-white shadow-sm p-3 center-left">
          <h5 className="m-0 text-white">2</h5>
          <div className="ml-auto">
            <SortableHandle><span className="same-20 radius-50 center pointer"><i className="uil uil-expand-arrows rotate-1" /></span></SortableHandle>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-info text-white shadow-sm p-3 center-left">
          <h5 className="m-0 text-white">3</h5>
          <div className="ml-auto">
            <SortableHandle><span className="same-20 radius-50 center pointer"><i className="uil uil-expand-arrows rotate-1" /></span></SortableHandle>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-info text-white shadow-sm p-3 center-left">
          <h5 className="m-0 text-white">4</h5>
          <div className="ml-auto">
            <SortableHandle><span className="same-20 radius-50 center pointer"><i className="uil uil-expand-arrows rotate-1" /></span></SortableHandle>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="radius-10 mb-3 bg-info text-white shadow-sm p-3 center-left">
          <h5 className="m-0 text-white">5</h5>
          <div className="ml-auto">
            <SortableHandle><span className="same-20 radius-50 center pointer"><i className="uil uil-expand-arrows rotate-1" /></span></SortableHandle>
          </div>
        </div>
      </div>
    </Sortable>
  )
}

function Index(){
  return(
    <div className="container-fluid">
      {/* Simple Sortable */}
      <h6 className="border-bottom border-1 pb-2 mt-3 text-info">Simple Sortable</h6>
      <SimpleSortable />
      {/* Handler Sortable */}
      <h6 className="border-bottom border-1 pb-2 mt-5 text-info">Handler Sortable</h6>
      <HandlerSortable />
    </div>
  )
}

export default Index
