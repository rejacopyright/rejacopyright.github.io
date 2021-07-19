import React from 'react'

function Index(){
  return(
    <div className="">
      <h5 className="mt-3">Files</h5>
      <div className="card mb-2 shadow-none border">
        <div className="p-1 px-2">
          <div className="row align-items-center">
            <div className="col-auto"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/3.jpg`).default} className="avatar-sm rounded" alt="files" /> </div>
            <div className="col pl-0"> <span className="text-muted font-weight-bold">sales-_assets.zip</span> <p className="mb-0"> 2.3 MB </p> </div>
            <div className="col-auto">
              <button className="btn btn-link text-muted btn-lg p-0"> <i className="uil uil-cloud-download text-10 text-gray" /> </button>
              <button className="btn btn-link text-danger btn-lg p-0"> <i className="uil uil-multiply text-10 text-gray" /> </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-2 shadow-none border">
        <div className="p-1 px-2">
          <div className="row align-items-center">
            <div className="col-auto"> <img src={require(`${process.env.REACT_APP_IMAGES}/products/6.jpg`).default} className="avatar-sm rounded" alt="files" /> </div>
            <div className="col pl-0"> <span className="text-muted font-weight-bold">new-contarcts.docx</span> <p className="mb-0"> 1.25 MB </p> </div>
            <div className="col-auto">
              <button className="btn btn-link text-muted btn-lg p-0"> <i className="uil uil-cloud-download text-10 text-gray" /> </button>
              <button className="btn btn-link text-danger btn-lg p-0"> <i className="uil uil-multiply text-10 text-gray" /> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
