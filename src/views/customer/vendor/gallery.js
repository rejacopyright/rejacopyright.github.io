import React, {useState} from 'react'
import {Grid as Image} from '_el/gallery'
import {List} from '_el/gallery'
import {Swipe} from '_el/swipe'
// const api = require('js-cookie').getJSON()

function Index(props){
  const [isOpen, isOpenSet] = useState(false)
  return(
    <div className="row m-0">
      {
        Array(18).fill().map((r, key) => (
          <Image img={require(`_dummy/sample/${(key+1)}.jpg`).default} key={key} onClick={() => isOpenSet(!isOpen)} />
        ))
      }
      <Swipe fullScreen noBar onSwipeChange={e => isOpenSet(e)} open={isOpen}>
        <List img={[require(`_dummy/sample/2.jpg`).default, require(`_dummy/sample/3.jpg`).default]} />
      </Swipe>
    </div>
  )
}
export default Index
