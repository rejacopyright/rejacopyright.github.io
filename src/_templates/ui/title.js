import React from 'react'

function Index(props){
  return(
    <div className="container-fluid pt-3">

      {/*BASIC*/}
      <h6 className="border-bottom border-1 mt-3 pb-1 text-primary">Basic</h6>
      <div className="row">
        <div className="col">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quos.
        </div>
      </div>

      {/*WITH BACK*/}
      <hr className="border-0 mt-5"/>
      <div className="center-left text-muted pointer" onClick={() => props.history.goBack()}> <i className="uil uil-arrow-left mr-1" /> Back </div>
      <h6 className="text-primary">With Back</h6>
      <div className="row">
        <div className="col">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, officia.
        </div>
      </div>

      {/*WITH BACK BUTTON*/}
      <hr className="border-0 mt-5"/>
      <div className="row center-left">
        <div className="col-auto pr-0">
          <div className="same-25 center bg-light radius-50 pointer" onClick={() => props.history.goBack()}><i className="uil uil-arrow-left text-12" /></div>
        </div>
        <div className="col">
          <h6 className="text-primary">With Back Button</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, architecto.
        </div>
      </div>

    </div>
  )
}

export default Index
