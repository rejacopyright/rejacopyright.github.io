import {useState, Fragment} from 'react'

function Capitalize(text){
  return text.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
}
function Whitespace(text){
  return text.replace(/\s+/g, '');
}
function Email(text){
  return text.toString().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
}
function Digit(number){
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
function RandomNumber(min, max){
  return Math.floor(Math.random() * (max || 10)) + (min || 0)
}
function ArrayDummi(count){
  return Array(count).fill().map((v, i) => i+1)
}
function Truncate(max, str) {
  const string = str.replace(/  +/g, ' ');
  const arr = string.toString().split(' ');
  if (arr.length > max) {
    return arr.slice(0, max).join(' ')+'...';
  }else {
    return string;
  }
}
function More(props){
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

 export {
   Capitalize,
   Whitespace,
   Email,
   Digit,
   RandomNumber,
   ArrayDummi,
   Truncate,
   More,
 }
