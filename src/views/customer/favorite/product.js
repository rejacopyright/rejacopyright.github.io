import React from 'react'
import {Grid as ProductGrid} from '_el/product'
// const api = require('js-cookie').getJSON()

function Index(){
  return(
    <div className="row m-0">
      {
        Array(8).fill().map((r, key) => (
          <div className="col-6 col-md-3 col-xl-2 ppx-1" key={key}> <ProductGrid img={require(`${process.env.REACT_APP_IMAGES}/products/${key+1}.jpg`).default} /> </div>
        ))
      }
    </div>
  )
}
export default Index
