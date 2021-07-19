import React from 'react'

// Bootstrap Row & Col
function Example1(){
  return(
    <div className="row center mx-0 border border-2 radius-5 hpx-100">
      <div className="col text-center border border-grey">1</div>
      <div className="col text-center border border-grey">2</div>
      <div className="col text-center border border-grey">3</div>
    </div>
  )
}
function Example2(){
  return(
    <div className="row center mx-0 border border-2 radius-5 hpx-100">
      <div className="col-auto text-center border border-grey">1</div>
      <div className="col-auto text-center border border-grey">2</div>
      <div className="col text-center border border-grey">3</div>
    </div>
  )
}
function Example3(){
  return(
    <div className="row center mx-0 border border-2 radius-5 hpx-100">
      <div className="col text-center border border-grey">1</div>
      <div className="col-auto text-center border border-grey">2</div>
      <div className="col-auto text-center border border-grey">3</div>
    </div>
  )
}
function Example4(){
  return(
    <div className="row center mx-0 border border-2 radius-5 hpx-100">
      <div className="col-auto text-center border border-grey">1</div>
      <div className="col text-center border border-grey">2</div>
      <div className="col-auto text-center border border-grey">3</div>
    </div>
  )
}
function Example5(){
  return(
    <div className="row center mx-0 border border-2 radius-5 hpx-100">
      <div className="col text-center border border-grey">1</div>
      <div className="col-auto text-center border border-grey">2</div>
      <div className="col text-center border border-grey">3</div>
    </div>
  )
}
// FLEX
function FlexCenter(){
  return(
    <div className="center border border-2 radius-5 hpx-100">
      <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">1</div>
      <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">2</div>
      <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">3</div>
    </div>
  )
}
function FlexCenterLeft(){
  return(
    <div className="center-left border border-2 radius-5 hpx-100">
      <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">1</div>
      <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">2</div>
      <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">3</div>
    </div>
  )
}
function FlexCenterJustify(){
  return(
    <div className="center-left border border-2 radius-5 hpx-100">
      <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">1</div>
      <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">2</div>
      <div className="same-25 bg-primary radius-50 center text-white text-8 f-700 ml-auto">3</div>
    </div>
  )
}
// ABSOLUTE
function AbsoluteCenter(){
  return(
    <div className="position-relative border border-2 radius-5 hpx-100">
      <div className="absolute-center">
        <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">1</div>
      </div>
    </div>
  )
}
function AbsoluteCenterVertical(){
  return(
    <div className="position-relative border border-2 radius-5 hpx-100">
      <div className="absolute-center-v">
        <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">1</div>
      </div>
    </div>
  )
}
function AbsoluteCenterVerticalLeft(){
  return(
    <div className="position-relative border border-2 radius-5 hpx-100">
      <div className="absolute-center-v r-0">
        <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">1</div>
      </div>
    </div>
  )
}
function AbsoluteCenterHorizontal(){
  return(
    <div className="position-relative border border-2 radius-5 hpx-100">
      <div className="absolute-center-h">
        <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">1</div>
      </div>
    </div>
  )
}
function AbsoluteCenterHorizontalBottom(){
  return(
    <div className="position-relative border border-2 radius-5 hpx-100">
      <div className="absolute-center-h b-0">
        <div className="same-25 bg-primary radius-50 center text-white text-8 f-700">1</div>
      </div>
    </div>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      {/* Bootstrap Row & Col */}
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Bootstrap Row & Col</h6>
      <div className="row">
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Example 1</p>
          <Example1 />
        </div>
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Example 2</p>
          <Example2 />
        </div>
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Example 3</p>
          <Example3 />
        </div>
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Example 4</p>
          <Example4 />
        </div>
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Example 5</p>
          <Example5 />
        </div>
      </div>
      {/* FLEX */}
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Flex</h6>
      <div className="row">
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Flex Center</p>
          <FlexCenter />
        </div>
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Flex Center Left</p>
          <FlexCenterLeft />
        </div>
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Flex Center Justify</p>
          <FlexCenterJustify />
        </div>
      </div>
      {/* ABSOLUTE */}
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Absolute</h6>
      <div className="row">
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Absolute Center</p>
          <AbsoluteCenter />
        </div>
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Absolute Center Vertical</p>
          <AbsoluteCenterVertical />
        </div>
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Absolute Center Vertical Left</p>
          <AbsoluteCenterVerticalLeft />
        </div>
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Absolute Center Horizontal</p>
          <AbsoluteCenterHorizontal />
        </div>
        <div className="col-md-4 col-6 mb-2">
          <p className="m-0 text-8">Absolute Center Horizontal Bottom</p>
          <AbsoluteCenterHorizontalBottom />
        </div>
      </div>
    </div>
  )
}

export default Index
