import Skeleton from 'react-skeleton-loader'

function Loading1(){
  return (
    <div className="row">
      <div className="col-auto pr-0">
        <Skeleton width="35px" height="35px" count={1} widthRandomness={0} color="#eee" borderRadius="100px" />
      </div>
      <div className="col lh-auto text-8">
        <Skeleton width="100%" height="10px" count={4} widthRandomness={0} color="#eee" />
      </div>
    </div>
  )
}
function Loading2(){
  return (
    <div className="row center-left">
      <div className="col-auto pr-0">
        <Skeleton width="35px" height="35px" count={1} widthRandomness={0} color="#eee" borderRadius="100px" />
      </div>
      <div className="col lh-12">
        <Skeleton width="100%" height="10px" count={2} widthRandomness={0} color="#eee" />
      </div>
    </div>
  )
}
function Loading3(){
  return (
    <div className="">
      <Skeleton width="50%" height="20px" widthRandomness={0} color="#eee" borderRadius="5px" />
      <Skeleton width="100%" height="10px" count={2} widthRandomness={0} color="#eee" />
    </div>
  )
}
function Loading4(){
  return (
    <div className="row center-left">
      <div className="col-auto pr-0">
        <Skeleton width="35px" height="35px" count={1} widthRandomness={0} color="#eee" borderRadius="100px" />
      </div>
      <div className="col lh-12 text-8">
        <Skeleton height="8px" count={2} widthRandomness={0.5} color="#eee" />
      </div>
      <div className="col-12 lh-12 mt-1">
        <Skeleton width="100%" height="8px" count={3} widthRandomness={0} color="#eee" />
      </div>
    </div>
  )
}
function Loading5(){
  return (
    <div className="row center-left">
      <div className="col-12">
        <Skeleton width="100%" height="150px" count={1} widthRandomness={0} color="#eee" borderRadius="5px" />
      </div>
      <div className="col-12 lh-12 text-8 mt-2">
        <Skeleton width="100%" height="20px" count={1} widthRandomness={0.5} color="#eee" borderRadius="5px" />
      </div>
      <div className="col-12 lh-12 text-8 mt-2">
        <Skeleton width="100%" height="8px" count={2} widthRandomness={0.25} color="#eee" />
      </div>
    </div>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-md-3 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Loading 1</h6>
          <Loading1 />
        </div>
        <div className="col-md-3 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Loading 2</h6>
          <Loading2 />
        </div>
        <div className="col-md-3 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Loading 3</h6>
          <Loading3 />
        </div>
        <div className="col-md-3 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Loading 4</h6>
          <Loading4 />
        </div>
        <div className="col-md-3 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Loading 5</h6>
          <Loading5 />
        </div>
      </div>
    </div>
  )
}

export default Index
