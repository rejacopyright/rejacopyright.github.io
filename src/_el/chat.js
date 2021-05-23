import React, {Fragment} from 'react'
import {List as Package} from '_el/package'

export function Chats(props){
  return(
    <div className="chat-conversation">
      <ul className="conversation-list">
        { props.children.map((r, key) => r) }
      </ul>
    </div>
  )
}
export function Chat(props){
  return(
    <Fragment>
      {
        props.me ?
        <li className="center-bottom j-right odd">
          <div className="relative w-70">
            <div className="conversation-text pt-2">
              {
                props.img &&
                <div className="bg-light mb-2 radius-10 oh">
                  <img src={`${props.img || require('_dummy/avatar.png').default}`} className="w-100" alt="me" />
                  {
                    props.imgTitle &&
                    <p className="m-0 p-2 f-600 lh-12 text-10"> Lorem ipsum dolor sit amet. </p>
                  }
                </div>
              }
              {
                (props.package && props.package !== true) &&
                <div className="bg-light mb-2 radius-10 oh">
                  <Package img={props.package}  />
                  {
                    props.packageTitle &&
                    <p className="m-0 p-2 f-600 lh-12 text-10"> Lorem ipsum dolor sit amet. </p>
                  }
                </div>
              }
              <div className="ctext-wrap">
                <p className="m-0 lh-12 text-11"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, laborum. </p>
              </div>
              <p className="m-0 pt-1 lh-75 text-7 f-600 text-gray">18 Mei 1992</p>
            </div>
          </div>
          <div className={`chat-avatar ${!props.avatar && 'o-0'}`}>
            <img src={`${(props.avatar && props.avatar !== true) ? props.avatar : require('_dummy/avatar.png').default}`} className="border" alt="me" />
          </div>
        </li>
        :
        <li className="center-bottom j-left">
          <div className={`chat-avatar ${!props.avatar && 'o-0'}`}>
            <img src={`${(props.avatar && props.avatar !== true) ? props.avatar : require('_dummy/avatar.png').default}`} className="border" alt="other" />
          </div>
          <div className="relative w-70">
            <div className="conversation-text pt-2">
              {
                props.img &&
                <div className="bg-light mb-2 radius-10 oh">
                  <img src={`${props.img || require('_dummy/img.png').default}`} className="w-100" alt="me" />
                  {
                    props.imgTitle &&
                    <p className="m-0 p-2 f-600 lh-12 text-10"> Lorem ipsum dolor sit amet. </p>
                  }
                </div>
              }
              {
                (props.package && props.package !== true) &&
                <div className="bg-light mb-2 radius-10 oh">
                  <Package img={props.package}  />
                  {
                    props.packageTitle &&
                    <p className="m-0 p-2 f-600 lh-12 text-10"> Lorem ipsum dolor sit amet. </p>
                  }
                </div>
              }
              <div className="ctext-wrap">
                <p className="m-0 lh-12 text-11"> Lorem ipsum dolor sit amet. </p>
              </div>
              <p className="m-0 pt-1 lh-75 text-7 f-600 text-gray">18 Mei 1992</p>
            </div>
          </div>
        </li>
      }
    </Fragment>
  )
}
