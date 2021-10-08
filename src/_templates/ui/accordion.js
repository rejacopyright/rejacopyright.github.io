import React from 'react'
import {Link} from 'react-router-dom'
function Default(){
  return(
    <div className="accordion custom-accordionwitharrow radius-10 oh" id="default">
      <div className="">
        <Link to="#" data-bs-toggle="collapse" data-bs-target="#default_1" aria-expanded="true"> <div className="bg-white py-2 px-3" id="headingOne"> <h6 className="m-0 text-10 center-left"> <p className="m-0">One</p> <i className="uil uil-angle-up ml-auto accordion-arrow text-10" /> </h6> </div> </Link>
        <div id="default_1" className="collapse show" data-bs-parent="#default">
          <div className="px-3 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, necessitatibus!
          </div>
        </div>
      </div>
      <div className="">
        <Link to="#" className="collapsed" data-bs-toggle="collapse" data-bs-target="#default_2" aria-expanded="false"> <div className="bg-white py-2 px-3" id="headingTwo"> <h6 className="m-0 text-10 center-left"> <p className="m-0">Two</p> <i className="uil uil-angle-up ml-auto accordion-arrow text-10" /> </h6> </div> </Link>
        <div id="default_2" className="collapse" data-bs-parent="#default">
          <div className="px-3 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, necessitatibus!
          </div>
        </div>
      </div>
      <div className="">
        <Link to="#" className="collapsed" data-bs-toggle="collapse" data-bs-target="#default_3" aria-expanded="false" > <div className="bg-white py-2 px-3" id="headingThree"> <h6 className="m-0 text-10 center-left"> <p className="m-0">Three</p> <i className="uil uil-angle-up ml-auto accordion-arrow text-10" /> </h6> </div> </Link>
        <div id="default_3" className="collapse" data-bs-parent="#default">
          <div className="px-3 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, necessitatibus!
          </div>
        </div>
      </div>
    </div>
  )
}
function Custom(){
  return(
    <div className="custom-accordion accordion ml-3" id="customaccordion_exa">
      <div className="card mb-1">
        <Link to="#" className="text-dark" data-bs-toggle="collapse" data-bs-target="#customaccorcollapseOne" aria-expanded="true" aria-controls="customaccorcollapseOne">
          <div className="card-header py-1 px-2" id="customaccorheadingOne">
            <h6 className="m-0 text-10 center-left">
              <i className="uil uil-question-circle text-gray h4 icon bg-white lh-1 radius-50 oh" />
              <p className="m-0">One</p>
            </h6>
          </div>
        </Link>
        <div id="customaccorcollapseOne" className="collapse show" aria-labelledby="customaccorheadingOne" data-bs-parent="#customaccordion_exa">
          <div className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, necessitatibus!
          </div>
        </div>
      </div>
      <div className="card mb-1">
        <Link to="#" className="text-dark collapsed" data-bs-toggle="collapse" data-bs-target="#customaccorcollapseTwo" aria-expanded="false" aria-controls="customaccorcollapseTwo">
          <div className="card-header py-1 px-2" id="customaccorheadingTwo">
            <h6 className="m-0 text-10 center-left">
              <i className="uil uil-question-circle text-gray h4 icon bg-white lh-1 radius-50 oh" />
              <p className="m-0">Two</p>
            </h6>
          </div>
        </Link>
        <div id="customaccorcollapseTwo" className="collapse" aria-labelledby="customaccorheadingTwo" data-bs-parent="#customaccordion_exa">
          <div className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, necessitatibus!
          </div>
        </div>
      </div>
      <div className="card mb-0">
        <Link to="#" className="text-dark collapsed" data-bs-toggle="collapse" data-bs-target="#customaccorcollapseThree" aria-expanded="false" aria-controls="customaccorcollapseThree">
          <div className="card-header py-1 px-2" id="customaccorheadingThree">
            <h6 className="m-0 text-10 center-left">
              <i className="uil uil-question-circle text-gray h4 icon bg-white lh-1 radius-50 oh" />
              <p className="m-0">Three</p>
            </h6>
          </div>
        </Link>
        <div id="customaccorcollapseThree" className="collapse" aria-labelledby="customaccorheadingThree" data-bs-parent="#customaccordion_exa">
          <div className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, necessitatibus!
          </div>
        </div>
      </div>
    </div>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h4 className="border-bottom border-1 pb-2 mt-3 text-primary">Accordions</h4>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1">Default</h6>
          <div className="shadow radius-10">
            <Default />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h6 className="mt-0 pb-1 border-bottom border-1">Custom</h6>
          <div className="shadow radius-10 p-2">
            <Custom />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
