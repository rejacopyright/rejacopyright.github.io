import React, {Fragment, useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import { Tabs as Container, Tab } from '@tarragon/swipeable-tabs'

export function Swipe(props){
  const [tab, tabSet] = useState()
  const style = {
    tab: {
      position: `${props.fixed ? 'fixed' : 'inherit'}`,
      top: `${props.tabHeight}px`,
      height: `${props.tabHeight}px`,
      width: '100%',
      backgroundColor: 'white',
      zIndex: 9,
    },
    body: {
      barColor: 'transparent',
      headerTextColor: '#aaa',
      selectedHeaderTextColor: '#000',
      activeInkBarColor: '#000',
      margin: '20px'
    },
  }
  function changeTab(t){
    tabSet(t.label)
  }
  useEffect(() => {
    tabSet(props.children[0].props.label)
  }, [props.children])
  return(
    <div className={`w-100 ${!props.height && 'vh-100'}`} style={{height: `${props.height ? `${props.height}px` : 'auto'}`}}>
      <Container value={tab} onChange={changeTab} styleProps={style.body} tabBarCSS={style.tab}>
        {
          props.children.map((r, key) => (
            <Tab label={r.props.label} key={key}>
              <div style={{paddingTop: `${props.tabHeight || 0}px`}} />
              {r}
            </Tab>
          ))
        }
      </Container>
    </div>
  )
}
export function Tabs(props){
  const tabHeight = useRef()
  const [top, topSet] = useState();
  const [active, activeSet] = useState();
  const tab = new URLSearchParams(window.location.search).get('tab');
  useEffect(() => {
    topSet(tabHeight.current.offsetHeight)
    const activeTab = tab || props.children[0].props.title
    activeSet(activeTab)
  }, [tab, props.children]);
  return(
    <Fragment>
      <ul ref={tabHeight} className={`nav nav-tabs vendor-profile-tab ${props.className} ${props.justify && 'nav-justified'} ${props.fixed ? 'fixed-top' : props.sticky && 'sticky-top'} bg-white mbpx-2 pt-2 ${props.phone && 'phone'}`} style={{top: `${props.top || 0}px`}}>
        {
          props.children.map((r, key) => (
            <li className="nav-item" onClick={() => activeSet(r.props.title)} key={key}>
              <Link to={`?tab=${r.props.title}`} className={`nav-link text-10 ${props.tabClass} ${active === r.props.title && 'active'}`}>
                <div className="pb-2">{r.props.label}</div>
              </Link>
            </li>
          ))
        }
      </ul>
      {props.fixed && <div className="phone" style={{paddingTop: top}} />}
      {props.children.find((r, key) => r.props.title === active)}
    </Fragment>
  )
}
