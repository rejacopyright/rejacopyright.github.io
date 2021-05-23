import React, {useEffect, useState, useRef, Fragment} from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import lay from '_config/layout'
const menu = [
  { link: '/vendor', icon: 'home' },
  { link: '/vendor/explore', icon: 'search' },
  { link: '/vendor/favorite', icon: 'heart' },
  { link: '/vendor/profile', icon: 'user' }
];
function Index(props){
  const height = useRef();
  const [space, spaceSet] = useState(0);
  const[activeLink, activeLinkSet] = useState(null);
  useEffect(() => {
    const rjMenu = document.querySelector(`#${lay.menu}`).getElementsByClassName(lay.menu);
    const homeItem = Object.values(rjMenu).find(i => i.href === window.location.origin+'/vendor' );
    let activeItem = Object.values(rjMenu).find(i => i.href !== window.location.origin+'/vendor' && window.location.href.includes(i.href) ) || homeItem;
    activeItem = activeItem.href.replace(window.location.origin, '');
    activeLinkSet(activeItem);
    spaceSet(height.current.offsetHeight+10);
  }, [activeLink, props]);
  return(
    <Fragment>
      <div id={lay.menu}>
        <div className={`phone fixed-bottom b-0 shadow bg-white z-999 w-100 text-center`} ref={height}>
          <div className="d-flex py-2">
            {
              menu.map((r, key) => (
                <div className="col py-1" key={key} onClick={() => activeLinkSet(r.link)}>
                  <Link to={r.link} className={lay.menu}>
                    <img src={require(`_dummy/icons/${r.icon}${activeLink === r.link ? '-fill' : ''}.png`).default} alt="" className="same-25"/>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        <div className="phone" style={{paddingBottom: space}} />
      </div>
      {/*<div className="phone" style={{paddingBottom: 10}} />*/}
    </Fragment>
  )
}
export default withRouter(Index)
