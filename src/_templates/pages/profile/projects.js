function Index(){
  return(
    <div className="">
      <h5 className="mt-3">Projects</h5>
      <div className="row mt-3">
        {
          Array(4).fill().map((r, key) => (
            <div className="col-md-6" key={key}>
              <div className="card border">
                <div className="card-body p-3">
                  <div className="badge badge-soft-info float-right"><i className="uil uil-calender mr-1" /> 15 Dec</div>
                  <p className="text-success mb-1 text-8 bold"> Web Design </p>
                  <h6 className="m-0"> <span className="text-dark"> Landing page Design </span> </h6>
                  <p className="text-muted mb-2 lh-12">If several languages coalesce, the grammar of the resulting language is more regular. </p>
                  <div>
                    <span> <img src={require(`${process.env.REACT_APP_IMAGES}/avatar/c-1.png`).default} alt="avatar" className="avatar-xs rounded-circle" /> </span>
                    <span> <img src={require(`${process.env.REACT_APP_IMAGES}/avatar/c-1.png`).default} alt="avatar" className="avatar-xs rounded-circle" /> </span>
                    <span> <div className="avatar-xs font-weight-bold d-inline-block"> <span className="avatar-title rounded-circle bg-soft-warning text-warning"> 2+ </span> </div> </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Index
