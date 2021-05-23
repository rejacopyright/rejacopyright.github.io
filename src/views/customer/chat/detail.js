import React, {useEffect, useState, useRef, Fragment} from 'react'
import {Swipe} from '_el/swipe'
import {Textarea} from '_components/form'
import {Topbar, Bottombar} from '_el/topbar'
import {Chats, Chat} from '_el/chat'
// const api = require('js-cookie').getJSON()

function Index(){
  const bottomBar = useRef()
  const topBar = useRef()
  const [bottom, bottomSet] = useState()
  const [isOpen, isOpenSet] = useState(false)
  useEffect(() => {
    bottomSet(bottomBar.current.offsetHeight+5)
  }, [])
  return(
    <Fragment>
      <Topbar fixed back ref={topBar}>
        <div className="row center m-0">
          <div className="col text-14 bold lh-1 px-1">Chat</div>
          <div className="col-auto">
            <div className="same-35 radius-50 bg-light center pointer" onClick={() => isOpenSet(!isOpen)}><i className="uil uil-ellipsis-v"/></div>
          </div>
        </div>
      </Topbar>
      <Chats>
        <Chat avatar img={require('_dummy/sample/1.jpg').default} imgTitle />
        <Chat avatar={require('_dummy/avatar/c-1.png').default} me />
        <Chat avatar me package={require('_dummy/sample/1.jpg').default} />
        <Chat avatar={require('_dummy/avatar/c-11.png').default} />
        <Chat me />
        <Chat avatar me />
      </Chats>
      <div style={{paddingTop: bottom}} />
      <Bottombar ref={bottomBar}>
        <div className="row center py-2 m-0">
          <div className="col text-center relative">
            <div className="absolute-center-v l-4">
              <div className="same-40 radius-50 bg-light center pointer"><i className="uil uil-camera text-dark text-12"/></div>
            </div>
            <Textarea name="typing" rows="1" noResize rowClass="w-100" className="text-dark f-600 radius-50 px-5 text-12 py-3" placeholder="Tulis Pesan..." />
            <div className="absolute-center-v r-4">
              <div className="same-40 radius-50 bg-light center pointer"><i className="uil uil-navigator text-dark text-12"/></div>
            </div>
          </div>
        </div>
      </Bottombar>
      <Swipe onSwipeChange={e => isOpenSet(e)} open={isOpen} overlay={false} height="25vh">
        <div className="p-2">
          TEST
        </div>
      </Swipe>
    </Fragment>
  )
}
export default Index
