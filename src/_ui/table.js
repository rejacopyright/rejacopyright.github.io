import React from 'react'

function Table1(){
  return(
    <div className="table-responsive">
      <table className="table table-sm table-borderless table-striped table-hover table-radius-5 table-space-5">
        <thead>
          <tr>
            <th className="py-2 bg-primary text-white text-10"><i className="uil uil-shopping-cart-alt pl-2"/></th>
            <th className="py-2 bg-primary text-white text-10"><i className="uil uil-check-circle"/></th>
            <th className="py-2 bg-primary text-white text-10"><i className="uil uil-document-layout-left"/></th>
            <th className="py-2 bg-primary text-white text-10"><i className="uil uil-money-stack"/></th>
            <th className="py-2 bg-primary text-white text-10"><i className="uil uil-layer-group" /></th>
          </tr>
        </thead>
        <tbody>
          {
            Array(5).fill().map((r, key) => (
              <tr key={key}>
                <td className="text-center pointer">
                  <div className="center-left">
                    <img src={require('_dummy/images/6.jpg').default} alt="" className="avatar-sm rounded-circle" />
                    <div className="text-left ml-1">
                      <h6 className="m-0 text-9 text-primary">Product</h6>
                      <h6 className="text-muted small m-0">Username</h6>
                    </div>
                  </div>
                </td>
                <td className="pointer"><i className="uil uil-check-circle"/></td>
                <td className="pointer text-dark text-9 truncate-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, blanditiis.</td>
                <td className="pointer text-primary text-8 text-nowrap f-700">Rp. 100.000</td>
                <td className="text-right">
                  <div className="btn-group dropleft">
                    <span className="same-20 btn-soft-primary radius-50 center ml-auto pointer dropdown-toggle mr-2" data-toggle="dropdown" aria-expanded="false"><i className="uil uil-layer-group" /></span>
                    <div className="dropdown-menu dropdown-primary shadow-sm">
                      <span className="dropdown-item"><i className="uil uil-eye mr-2" />View</span>
                      <span className="dropdown-item"><i className="uil uil-edit-alt mr-2" />Edit</span>
                      <span className="dropdown-item" data-toggle="modal" data-target="#deleteModal"><i className="uil uil-trash mr-2" />Delete</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
function Index(){
  return(
    <div className="container-fluid pt-4">
      <div className="row">
        {/*TABLE 1*/}
        <div className="col-md-6">
          <h6 className="border-bottom border-1 text-primary mb-0">Table 1 (Custom)</h6>
          <Table1 />
        </div>
      </div>
    </div>
  )
}

export default Index
