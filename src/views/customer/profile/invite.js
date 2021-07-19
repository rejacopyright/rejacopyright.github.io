import {useEffect} from 'react'
import Image from '_assets/images/templates/maintenance.png'
export default function PageNotFound(props){
  useEffect(() => {
    document.title = '404 Not Found';
  });
  return(
    <div className="container-fluid">
      <div className="row vh-75 center">
        <div className="col-12 text-center">
          <img src={Image} alt="" width="250" style={{ filter: 'opacity(.5)' }} />
          <div className="d-block text-muted mb-3"><i className="uil uil-exclamation-circle mr-2" />Mohon Maaf, Halaman yang anda tuju sedang dalam pengembangan ... !</div>
          <button type="button" className="btn btn-sm btn-light pl-1" onClick={() => props.history.goBack()}><i className="uil uil-arrow-left"/>KEMBALI</button>
        </div>
      </div>
    </div>
  )
}
