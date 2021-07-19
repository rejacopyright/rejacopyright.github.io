import {useState, Fragment} from 'react'

export function Truncate(max, str) {
  const string = str.replace(/  +/g, ' ');
  const arr = string.toString().split(' ');
  if (arr.length > max) {
    return arr.slice(0, max).join(' ')+'...';
  }else {
    return string;
  }
}
export function More(props){
  const string = props.text ? props.text.replace(/  +/g, ' ') : [];
  const arr = string.toString().split(' ');
  const [more, moreSet] = useState(true)
  return(
    <Fragment>
      {
        props.text &&
        <p className={`m-0 ${props.className}`}>
          {more ? Truncate(props.length || arr, props.text) : props.text}
          {
            arr > props.length &&
            <span className="f-600 text-muted ml-1" onClick={() => moreSet(!more)}> {more ? 'Selengkapnya' : 'Lebih Sedikit'}</span>
          }
        </p>
      }
    </Fragment>
  )
}
