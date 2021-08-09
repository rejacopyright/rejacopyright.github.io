import {Tooltip, Popover} from '_components/popover'
function Index(props){
  return(
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-12">
          <div className="card-body">
            <h5 className="header-title mb-1 mt-0">Tooltips</h5>
            <p className="sub-header">Four options are available: top, right, bottom, and left aligned.</p>
            <div className="button-list">
              <Tooltip top className="btn btn-sm btn-light pointer" title="Lorem ipsum"> Tooltip on top </Tooltip>
              <Tooltip bottom className="btn btn-sm btn-light pointer" title="Lorem ipsum"> Tooltip on bottom </Tooltip>
              <Tooltip left className="btn btn-sm btn-light pointer" title="Lorem ipsum"> Tooltip on left </Tooltip>
              <Tooltip right className="btn btn-sm btn-light pointer" title="Lorem ipsum"> Tooltip on right </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card shadow-md radius-10 border oh">
            <div className="card-body">
              <h5 className="header-title mb-1 mt-0">Popovers</h5>
              <hr className="my-3 border-2"/>
              <p className="header-title text-10 mb-1">Position</p>
              <p className="sub-header mb-2">Top, Bottom, Left, and Right. Default Top</p>
              <div className="button-list">
                <Popover top className="btn btn-sm btn-light pointer" title="Lorem ipsum" content="Lorem ipsum dolor sit amet."> Popover on top </Popover>
                <Popover bottom className="btn btn-sm btn-light pointer" title="Lorem ipsum" content="Lorem ipsum dolor sit amet."> Popover on bottom </Popover>
                <Popover left className="btn btn-sm btn-light pointer" title="Lorem ipsum" content="Lorem ipsum dolor sit amet."> Popover on left </Popover>
                <Popover right className="btn btn-sm btn-light pointer" title="Lorem ipsum" content="Lorem ipsum dolor sit amet."> Popover on right </Popover>
              </div>
              <p className="header-title text-10 mb-1 mt-3">Event</p>
              <p className="sub-header mb-2">Hover, Click, and Focus. Default Focus</p>
              <div className="button-list">
                <Popover className="btn btn-sm btn-light pointer" title="Lorem ipsum" content="Lorem ipsum dolor sit amet."> Default Event </Popover>
                <Popover hover className="btn btn-sm btn-light pointer" title="Lorem ipsum" content="Lorem ipsum dolor sit amet."> Hover Event </Popover>
                <Popover click className="btn btn-sm btn-light pointer" title="Lorem ipsum" content="Lorem ipsum dolor sit amet."> Click Event </Popover>
                <Popover focus className="btn btn-sm btn-light pointer" title="Lorem ipsum" content="Lorem ipsum dolor sit amet."> Focus Event </Popover>
              </div>
              <p className="header-title text-10 mb-1 mt-3">Title</p>
              <p className="sub-header mb-2">All Default Config Without Title</p>
              <div className="button-list">
                <Popover className="btn btn-sm btn-light pointer" content="Lorem ipsum dolor sit amet."> Without Title </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
