import React, {Fragment} from 'react'

// THEME
function ButtonTheme(){
  return(
    <Fragment>
      <div className="row">
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-white">White</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-light">Light</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-secondary">Secondary</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-dark">Dark</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-primary">Primary</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-info">Info</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-success">Success</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-warning">Warning</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-danger">Danger</div>
        </div>
      </div>
      <div className="row">
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-soft-light">Soft Light</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-soft-secondary">Soft Secondary</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-soft-dark">Soft Dark</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-soft-primary">Soft Primary</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-soft-info">Soft Info</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-soft-success">Soft Success</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-soft-warning">Soft Warning</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-soft-danger">Soft Danger</div>
        </div>
      </div>
      <div className="row">
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-outline-light">Outline Light</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-outline-secondary">Outline Secondary</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-outline-dark">Outline Dark</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-outline-primary">Outline Primary</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-outline-info">Outline Info</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-outline-success">Outline Success</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-outline-warning">Outline Warning</div>
        </div>
        <div className="col-auto mb-3">
          <div className="btn btn-sm width-xs btn-outline-danger">Outline Danger</div>
        </div>
      </div>
    </Fragment>
  )
}
// STYLE
function ButtonStyle(){
  return(
    <div className="row">
      <div className="col-auto mb-3">
        <div className="btn btn-sm width-xs btn-soft-danger">Flat</div>
      </div>
      <div className="col-auto mb-3">
        <div className="btn btn-sm width-xs btn-soft-warning radius-50">Rounded</div>
      </div>
      <div className="col-auto mb-3">
        <div className="btn btn-sm width-xs btn-soft-success radius-50 hover">Hover</div>
      </div>
      <div className="col-auto mb-3">
        <div className="btn btn-sm width-xs btn-soft-success radius-50 disabled">Disabled</div>
      </div>
      <div className="col-auto mb-3">
        <div className="btn btn-sm width-xs btn-link pointer">Link</div>
      </div>
      <div className="col-auto mb-3">
        <div className="same-30 btn-soft-danger radius-50 center pointer mr-1"><i className="uil uil-heart" /></div>
      </div>
      <div className="col-auto mb-3">
        <div className="same-30 btn-primary radius-50 center pointer"><i className="uil uil-check text-16" /></div>
      </div>
    </div>
  )
}
// CUSTOM
function ButtonCustom(){
  return(
    <div className="row">
      <div className="col-auto mb-3">
        <div className="border border-primary bg-soft-primary text-primary shadow-sm radius-5 px-2 py-1 pointer f-600 width-sm text-center">Shadow</div>
      </div>
      <div className="col-auto mb-3">
        <div className="border border-primary bg-soft-primary text-primary shadow-sm hover-md radius-5 px-2 py-1 pointer f-600 width-sm text-center">Hover</div>
      </div>
      <div className="col-auto mb-3">
        <div className="border border-primary bg-soft-primary text-primary shadow-xs hover-sm radius-5 px-2 py-1 pointer f-600 width-sm text-center">Hover SM</div>
      </div>
    </div>
  )
}
// SIZE
function ButtonSize(){
  return(
    <div className="row">
      <div className="col-auto mb-3">
        <div className="btn btn-xs btn-soft-primary radius-50">Size XS</div>
      </div>
      <div className="col-auto mb-3">
        <div className="btn btn-sm btn-soft-primary radius-50">Size SM</div>
      </div>
      <div className="col-auto mb-3">
        <div className="btn btn-md btn-soft-primary radius-50">Size MD</div>
      </div>
      <div className="col-auto mb-3">
        <div className="btn btn-lg btn-soft-primary radius-50">Size LG</div>
      </div>
    </div>
  )
}
// WIDTH
function ButtonWidth(){
  return(
    <div className="row">
      <div className="col-auto mb-3">
        <div className="btn btn-xs width-xs btn-soft-warning radius-50">Width XS</div>
      </div>
      <div className="col-auto mb-3">
        <div className="btn btn-xs width-sm btn-soft-warning radius-50">Width SM</div>
      </div>
      <div className="col-auto mb-3">
        <div className="btn btn-xs width-md btn-soft-warning radius-50">Width MD</div>
      </div>
      <div className="col-auto mb-3">
        <div className="btn btn-xs width-lg btn-soft-warning radius-50">Width LG</div>
      </div>
      <div className="col mb-3">
        <div className="btn btn-xs btn-block btn-soft-warning radius-50">Width Full</div>
      </div>
    </div>
  )
}
// GROUP
function ButtonGroup(){
  return(
    <div className="row">
      <div className="col-auto mb-3">
        <p className="m-0 f-700 small">Group 1</p>
        <div className="btn-group">
          <div className="btn btn-sm width-xs btn-warning">One</div>
          <div className="btn btn-sm width-xs btn-warning">Two</div>
          <div className="btn btn-sm width-xs btn-warning">Three</div>
        </div>
      </div>
      <div className="col-auto mb-3">
        <p className="m-0 f-700 small">Group 2</p>
        <div className="btn-group radius-50 oh">
          <div className="btn btn-sm width-xs btn-soft-primary border-0">One</div>
          <div className="btn btn-sm width-xs btn-soft-primary border-0">Two</div>
          <div className="btn btn-sm width-xs btn-soft-primary border-0">Three</div>
        </div>
      </div>
      <div className="col-auto mb-3">
        <p className="m-0 f-700 small">Group 3</p>
        <div className="btn-group radius-50 oh">
          <div className="btn btn-sm width-xs btn-soft-primary border-0">One</div>
          <div className="btn btn-sm width-xs btn-primary border-0">Two</div>
        </div>
      </div>
      <div className="col-auto mb-3">
        <p className="m-0 f-700 small">Group 4</p>
        <div className="btn-group radius-50 oh pointer">
          <div className="btn btn-sm btn-soft-secondary center radius-left-50"><i className="uil lh-1 uil-corner-up-left-alt text-12"/></div>
          <div className="btn btn-sm btn-soft-secondary center"><i className="uil lh-1 uil-redo"/></div>
          <div className="btn btn-sm btn-soft-secondary center radius-right-50"><i className="uil lh-1 uil-corner-up-right-alt text-12"/></div>
        </div>
      </div>
    </div>
  )
}
// GROUP
function ButtonFab(){
  return(
    <div className="position-fixed b-0 r-0 p-3">
      <span className="btn btn-primary same-50 radius-50 center pointer"><i className="uil uil-plus text-14" /></span>
    </div>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Button Theme</h6>
      <ButtonTheme />
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Button Style</h6>
      <ButtonStyle />
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Button Custom</h6>
      <ButtonCustom />
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Button Size</h6>
      <ButtonSize />
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Button Width</h6>
      <ButtonWidth />
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Button Group</h6>
      <ButtonGroup />
      <ButtonFab />
    </div>
  )
}

export default Index
