import React from 'react'

function Index(){
  return(
    <div className="row">
      {
        Array(8).fill().map((r, key) => (
          <div className="col-md-auto same-150 m-2 oh bg-img-c radius-10" key={key} style={{ backgroundImage: `url(${require(`${process.env.REACT_APP_IMAGES}/products/${key+1}.jpg`).default})` }}> </div>
        ))
      }
    </div>
  )
}

export default Index
