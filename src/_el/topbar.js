import React, {Fragment, forwardRef, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import lay from '_config/layout'
export const Topbar = forwardRef((props, ref) => {
  const history = useHistory()
  const [height, heightSet] = useState()
  useEffect(() => {
    ref && heightSet(ref.current.offsetHeight)
  }, [ref])
  return(
    <Fragment>
      <div className={`phone bg-white ${lay.topbar} ${props.fixed ? 'fixed' : 'sticky'}-top ${props.className}`} ref={ref}>
        <div className="d-flex center border-bottom py-2">
          <div className="col-auto px-2">
            {!props.back && !props.logo && <div className="py-2"></div>}
            { props.back && <div className="pl-2 d-inline" onClick={() => history.goBack()}><img src={require('_assets/images/icons/back-1.png').default} alt="" height="25"/></div> }
            { props.logo && <div className="pl-2 d-inline" onClick={() => history.goBack()}><img src={require('_assets/images/logo.png').default} alt="" height="25"/></div> }
          </div>
          <div className="col pl-0 pr-2">{props.children}</div>
        </div>
      </div>
      {props.fixed && <div className="phone" style={{paddingTop: height}} />}
    </Fragment>
  )
})
export const Bottombar = forwardRef((props, ref) => {
  return(
    <Fragment>
      <div className={`phone bg-white fixed-bottom ${props.className}`} ref={ref}>
        <div className="d-flex center border-top">
          <div className="col pl-0 pr-2">{props.children}</div>
        </div>
      </div>
    </Fragment>
  )
})
