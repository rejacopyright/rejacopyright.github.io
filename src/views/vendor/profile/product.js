import {useState, useRef} from 'react'
import {useSize} from '_utils/hooks'
import Skeleton from 'react-skeleton-loader'

function Loading(){
  return (
    <div className="row center-left">
      <div className="col-12">
        <Skeleton width="100%" height="140px" count={1} widthRandomness={0} color="#eee" borderRadius="10px" />
      </div>
      <div className="col-12 lh-12 text-8 mt-2">
        <Skeleton width="100%" height="8px" count={2} widthRandomness={0.5} color="#eee" />
      </div>
    </div>
  )
}
function Index(props){
  const colImg = useRef()
  const [imgHeight, imgHeightSet] = useState()
  useSize(() => {
    const c = colImg.current
    c && imgHeightSet(c.clientWidth)
  }, 300)
  return(
    <div className={props.className}>
      <div className="row m-0">
        {
          Array(15).fill().map((r, key) => (
            <div className="col-md-3 col-6 mb-3" key={key}>
              <div className={`${imgHeight && 'border'} oh radius-10 pointer`}>
                <div className="w-100 bg-img-c" ref={colImg} style={{ backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/products/${key+1}.jpg`).default})`, height:imgHeight }}></div>
                {
                  imgHeight ?
                  <div className="p-2">
                    <div className="bold lh-12 text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veritatis.</div>
                    <div className="bold text-truncate text-primary">Rp. 999.000</div>
                  </div>
                  :
                  <Loading />
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Index
