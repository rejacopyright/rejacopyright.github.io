import {useState} from 'react'
import Editor from '_components/pintura'
function Index(props){
  const [src, srcSet] = useState(false)
  const [modal, modalSet] = useState(false)
  function inputChange(e){
    e.name && srcSet(e)
  }
  function onFinish(e){
  }
  function gambarIni(e){
    srcSet(e.target.src)
    modalSet(e.target.hasAttribute('modal'))
  }
  function event(e){
  }
  return(
    <div className="container-fluid">
      <div className="row m-0">
        <div className="col-md-8 px-0">
          <Editor browse event={event} onFinish={onFinish} onInputChange={inputChange} src={src} preview modal={modal} />
        </div>
        <div className="col-md-4 center">
          <div className="row">
            <div className="col-12"> <h5 className="m-0 lh-75 text-dark">Example Image</h5> <hr className="my-2"/> </div>
            {
              Array(2).fill().map((r, key) => (
                <div className="col-6" key={key}>
                  <img className="w-100 pointer radius-5 shadow" src={`${require(`_dummy/sample/${key+2}.jpg`).default}?${Date.now()}`} alt="" onClick={gambarIni} />
                </div>
              ))
            }
            <div className="col-12 mt-5"> <h5 className="m-0 lh-75 text-dark">Example Modal</h5> <hr className="my-2"/> </div>
            {
              Array(2).fill().map((r, key) => (
                <div className="col-6" key={key}>
                  <img modal="true" className="w-100 pointer radius-5 shadow" src={`${require(`_dummy/sample/${key+9}.jpg`).default}?${Date.now()}`} alt="" onClick={gambarIni} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
