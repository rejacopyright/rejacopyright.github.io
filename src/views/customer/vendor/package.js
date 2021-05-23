import React from 'react'
import {Grid as Package} from '_el/package'
// const api = require('js-cookie').getJSON()

function Index(){
  return(
    <div className="row m-0">
      {
        Array(8).fill().map((r, key) => (
          <div className="col-6 col-md-3 col-xl-2 ppx-1" key={key}> <Package img={require(`_dummy/sample/${key+1}.jpg`).default} /> </div>
        ))
      }
    </div>
  )
}
export default Index
