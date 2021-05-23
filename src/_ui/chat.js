import React from 'react'

function Chat1(){
  return(
    <div className="chat-conversation">
      <ul className="conversation-list">
        <li className="center-bottom j-left">
          <div className="chat-avatar">
            <img src={`${require('_dummy/avatar/c-1.png').default}`} className="border" alt="female" />
          </div>
          <div className="relative w-70">
            <div className="conversation-text pt-2">
              <div className="ctext-wrap">
                <p className="m-0 lh-12"> Lorem ipsum dolor sit amet. </p>
              </div>
              <p className="m-0 pt-1 lh-75 text-7 f-600 text-gray">18 Mei 1992</p>
            </div>
          </div>
        </li>
        <li className="center-bottom j-right odd">
          <div className="relative w-70">
            <div className="conversation-text pt-2">
              <div className="ctext-wrap">
                <p className="m-0 lh-12"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, laborum. </p>
              </div>
              <p className="m-0 pt-1 lh-75 text-7 f-600 text-gray">18 Mei 1992</p>
            </div>
          </div>
          <div className="chat-avatar">
            <img src={`${require('_dummy/avatar/c-2.png').default}`} className="border" alt="male" />
          </div>
        </li>
      </ul>
      <form name="chat-form" id="chat-form">
        <div className="row">
          <div className="col pr-1">
            <input type="text" className="form-control form-control-sm chat-input" placeholder="Enter your text" required />
          </div>
          <div className="col-auto pl-0">
            <button type="button" className="btn btn-sm btn-primary radius-30">Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}
function Index(){
  return(
    <div className="container-fluid">
      {/* SHADOW */}
      <div className="row mt-2">
        <div className="col-md-4 col-12">
          <h6 className="border-bottom border-1 pb-1 my-2 text-info">Chat 1</h6>
          <div className="p-2 radius-10 border border-light"><Chat1 /></div>
        </div>
      </div>
    </div>
  )
}

export default Index
