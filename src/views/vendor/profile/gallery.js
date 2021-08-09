import {useState, useRef} from 'react'
import {useSize} from '_utils/hooks'
import Skeleton from 'react-skeleton-loader'

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
              <div className={`oh radius-10 pointer`}>
                <div className="w-100 bg-img" ref={colImg} style={{ backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/products/${key+1}.jpg`).default})`, height:imgHeight }}></div>
                { !imgHeight && <Skeleton width="100%" height="140px" count={1} widthRandomness={0} color="#eee" borderRadius="10px" /> }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Index
