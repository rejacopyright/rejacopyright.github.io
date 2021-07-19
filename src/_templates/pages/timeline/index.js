function Item(props){
  return(
    <li className="event-list">
      <div className="media">
        <div className="event-date text-center mr-4">
          <div className=" avatar-sm rounded-circle bg-soft-primary">
            <span className="font-size-16 avatar-title text-primary font-weight-semibold"> {props.date || 1} </span>
          </div>
          <p className="mt-2">Jun</p>
        </div>
        <div className="media-body">
          <div className="card d-inline-block">
            <div className="card-body px-3 py-2 shadow-sm radius-10 oh">
              <h5 className="mt-0">{props.title || 'Title'}</h5>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima blanditiis iure, fugiat sint voluptas veniam officiis ut voluptate ab vel.</p>
              <div className="text-right">
                <div className="btn btn-soft-primary radius-50 border border-primary btn-sm pointer">Read more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
function Index(){
  return(
    <div className="container-fluid pt-3">
      <div className="left-timeline pl-3">
        <ul className="list-unstyled events">
          {
            Array(5).fill().map((r, key) => (
              <Item key ={key} title={`Event ${key+1}`} date={key+1} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Index
