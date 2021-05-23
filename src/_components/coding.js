import React from 'react'

export function Capitalize(text){
  return text.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
}
export function Whitespace(text){
  return text.replace(/\s+/g, '');
}
export function Email(text){
  return text.toString().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
}
export function Digit(number){
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
export function RandomNumber(min, max){
  return Math.floor(Math.random() * (max || 10)) + (min || 0)
}
export function ArrayDummi(count){
  return Array(count).fill().map((v, i) => i+1)
}
export function Truncate(max, str){
  const string = str.replace(/  +/g, ' ');
  const arr = string.toString().split(' ');
  if (arr.length > max) {
    return arr.slice(0, max).join(' ')+'...';
  }else {
    return string;
  }
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col">
          <h6 className="border-bottom border-1 my-1 text-primary">Capitalize</h6>
          {Capitalize('lorem ipsum dolor sit amet.')}
        </div>
        <div className="col">
          <h6 className="border-bottom border-1 my-1 text-primary">Whitespace</h6>
          {Whitespace('lorem ipsum dolor sit amet.')}
        </div>
        <div className="col">
          <h6 className="border-bottom border-1 my-1 text-primary">Email</h6>
          {Email('rejajamil@gmail.com') ? 'Email Valid' : 'Email tidak Valid'}
        </div>
        <div className="col">
          <h6 className="border-bottom border-1 my-1 text-primary">Digit</h6>
          {Digit(10000000)}
        </div>
        <div className="col">
          <h6 className="border-bottom border-1 my-1 text-primary">Random Number</h6>
          {RandomNumber(1,100)}
        </div>
        <div className="col">
          <h6 className="border-bottom border-1 my-1 text-primary">Array Dummy</h6>
          {ArrayDummi(5)}
        </div>
        <div className="col">
          <h6 className="border-bottom border-1 my-1 text-primary">Truncate</h6>
          {Truncate(5, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, fuga iure sapiente assumenda harum, velit illum beatae eum explicabo minus iusto hic est, quam illo asperiores ad dolore fugiat, odit.')}
        </div>
      </div>
    </div>
  )
}

export default Index
