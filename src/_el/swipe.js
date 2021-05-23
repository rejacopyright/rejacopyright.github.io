import React from 'react'
import * as Slide from 'react-swipeable-bottom-sheet'

export function Swipe(props){
  return(
    <div className="w-100">
      <Slide overflowHeight={props.overflowHeight || 0} topShadow={false} open={props.open} overlay={props.overlay}
        onChange={props.onSwipeChange}
        fullScreen={props.fullScreen}
        style={{ width: '100%', left: 'unset', right: 'unset', background: 'white', zIndex: props.zIndex || 9999, overFlow: 'hidden'}}
        bodyStyle={{background: 'white', borderRadius: `${props.fullScreen ? '0' : '10px 10px 0px 0px'}`, padding: '0' }}
        overlayStyle={{background: 'gray'}}>
        <div className="w-100 text-center sticky-top bg-white">
          {!props.noBar && <div className="border-top"><i className="uil uil-grip-horizontal-line text-12 lh-12 o-2"/></div>}
          {props.title && <h6 className="m-0 text-12 pb-1">{props.title}</h6>}
          {
            props.fullScreen &&
            <div className="absolute t-0 r-0 p-1">
              <div className={props.noBar ? 'same-25 o-3 bg-white center radius-50' : 'o-2'} onClick={() => props.onSwipeChange(false)}>
                <i className="uil uil-times lh-75 text-12" />
              </div>
            </div>
          }
        </div>
        <div className="" style={{ maxHeight: props.maxHeight || '50vh', minHeight: props.minHeight || '0vh', height: props.height || 'auto' }}>
          {props.children}
          <div className="pt-1"/>
        </div>
      </Slide>
    </div>
  )
}
