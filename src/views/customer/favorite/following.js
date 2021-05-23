import React from 'react'
import Name from 'random-words'
import {Follow as Vendor} from '_el/user'
import {Capitalize, RandomNumber} from '_components/coding'
// const api = require('js-cookie').getJSON()

function Index(){
  return(
    <div className="">
      {
        Array(10).fill().map((r, key) => <Vendor key={key} size="same-40" className="px-2 py-1" bodyClass="border bg-white" btnClass="ml-auto" followClass="bg-light" img={require(`_dummy/avatar/c-${RandomNumber(1,10)}.png`).default} name={Capitalize(Name({exactly: 2, join: ' '}))} username={Name()} unfollow />)
      }
    </div>
  )
}

export default Index
