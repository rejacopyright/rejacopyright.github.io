import {useEffect, useRef} from 'react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap.min.js'

function Tooltip(props){
  const el = useRef()
  useEffect(() => {
    const t = new bootstrap.Tooltip(el.current)
    return () => t.dispose()
  }, [])
  return(
    <span ref={el} title={props.title || 'title'} className={props.className} role="tooltip"
      data-bs-placement={
        (props.top && 'top') || (props.bottom && 'bottom') || (props.left && 'left') || (props.right && 'right') || 'top'
      }>
      {props.children}
    </span>
  )
}

function Popover(props){
  const el = useRef()
  useEffect(() => {
    const p = new bootstrap.Popover(el.current)
    return () => p.dispose()
  }, [])
  return(
    <span ref={el} className={props.className} title={props.title} data-bs-content={props.content || 'content'}
      data-bs-trigger={(props.hover && 'hover') || (props.click && 'click') || 'focus'}
      tabIndex="0"
      data-bs-placement={
        (props.top && 'top') || (props.bottom && 'bottom') || (props.left && 'left') || (props.right && 'right') || 'top'
      }>
      {props.children}
    </span>
  )
}

export {
  Tooltip,
  Popover,
}
