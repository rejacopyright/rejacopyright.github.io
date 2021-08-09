function Index(props){
  return(
    <div className={props.className}>
      <div className="row m-0">
        {
          Array(15).fill().map((r, key) => (
            <div className="col-md-6 col-lg-4 mb-3" key={key}>
              <div className="card border hover-sm m-0">
                <div className="card-body px-3 pt-3 pb-2">
                  <div className="pointer" data-toggle="modal" data-target="#view-package">
                    <div className="badge badge-soft-info float-right">10% OFF</div>
                    <p className="text-dark mb-1 bold"> Package Name </p>
                    <h6 className="m-0"> <span className="text-dark"> Rp. 92.000.000 </span> </h6>
                    <p className="text-muted my-2 lh-12 truncate-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo minima, aspernatur molestias corrupti voluptatibus culpa esse velit minus temporibus. </p>
                  </div>
                  <div className="d-flex center-right">
                    <div className="row mx-n1 center-right ml-auto">
                      <div className="col-auto px-1 ml-md-0 lh-1 text-8 f-700 text-muted"><i className="uil uil-thumbs-up mr-1" />12</div>
                      <div className="col-auto px-1 lh-1 text-8 f-700 text-muted"><i className="uil uil-eye mr-1" />76</div>
                    </div>
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
