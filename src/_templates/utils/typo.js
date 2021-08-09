import {Capitalize, Whitespace, Email, Digit, RandomNumber, ArrayDummi, Truncate} from '_utils/typo'
function Index(){
  return(
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col col-md-3 mb-3">
          <h6 className="bold border-bottom border-1 my-1 pb-1">Capitalize</h6>
          {Capitalize('lorem ipsum dolor sit amet.')}
        </div>
        <div className="col col-md-3 mb-3">
          <h6 className="bold border-bottom border-1 my-1 pb-1">Whitespace</h6>
          {Whitespace('lorem ipsum dolor sit amet.')}
        </div>
        <div className="col col-md-3 mb-3">
          <h6 className="bold border-bottom border-1 my-1 pb-1">Email</h6>
          {Email('rejajamil@gmail.com') ? 'Email Valid' : 'Email tidak Valid'}
        </div>
        <div className="col col-md-3 mb-3">
          <h6 className="bold border-bottom border-1 my-1 pb-1">Digit</h6>
          {Digit(10000000)}
        </div>
        <div className="col col-md-3 mb-3">
          <h6 className="bold border-bottom border-1 my-1 pb-1">Random Number</h6>
          {RandomNumber(1,100)}
        </div>
        <div className="col col-md-3 mb-3">
          <h6 className="bold border-bottom border-1 my-1 pb-1">Array Dummy</h6>
          {ArrayDummi(5)}
        </div>
        <div className="col col-md-3 mb-3">
          <h6 className="bold border-bottom border-1 my-1 pb-1">Truncate</h6>
          {Truncate(5, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, fuga iure sapiente assumenda harum, velit illum beatae eum explicabo minus iusto hic est, quam illo asperiores ad dolore fugiat, odit.')}
        </div>
      </div>
    </div>
  )
}

export default Index
