import {Review} from '_el/package'
function Index(){
  return(
    <div className="m-0 text-12 text-justify">
      {
        Array(3).fill().map((r, key) => (
          <div className="col-12 oh py-1 px-0" key={key}>
            <Review arrows id="view-img" star={5} avatar={require(`_dummy/avatar/c-${key+4}.png`).default} img={[require('_dummy/images/1.jpg').default, require('_dummy/images/2.jpg').default, require('_dummy/images/3.jpg').default]} />
          </div>
        ))
      }
    </div>
  )
}
export default Index
