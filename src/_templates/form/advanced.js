import React, {useState} from 'react'
import { Input, Textarea } from '_components/form'
import debounce from 'lodash.debounce'

function Debounced(){
  const [value, valueSet] = useState('')
  const [typing, typingSet] = useState(false)
  const debounceSave = debounce(e => {
    valueSet(e.target.value)
    typingSet(false)
  }, 2000)
  const search = e => {
    typingSet(true)
    debounceSave(e)
  }
  return(
    <div className="">
      <Input sm name="name" onChange={search} value={value} placeholder="Search" />
      {
        typing ?
        <h6 className="text-muted f-400">Typing...</h6>
        :
        <h5>{value}</h5>
      }
    </div>
  )
}
function Tags(props){
  const [tagVal, tagValSet] = useState([])
  const [tag, tagSet] = useState([])
  const reg = /[\s,|/~!@#$%^*()_+=<>?;:'".-]+/
  function onChange(e){
    const val = e.target.value
    const arr = val.split(reg).filter(Boolean)
    tagValSet(val)
    tagSet([...new Set(arr)])
  }
  function onBlur(){
    tagValSet(tag.length ? '#'+tag.join(' #') : '')
  }
  function removeTag(e){
    const filter = tag.filter((val, index) => index !== e)
    tagSet(filter)
    const parsed = '#'+filter.join(' #')
    tagValSet(filter.length ? parsed : '')
  }
  return(
    <div className="row">
      <div className="col">
        <Textarea rows={3} sm noResize name="tag" value={tagVal} onBlur={onBlur} placeholder="Nama Produk" onChange={onChange} />
        { tag.length > 0 && <hr className="mb-1 mt-2 border-2"/> }
        <div className="row mx-n1">
          {
            tag.map((r, key) => (
              <div className="col-auto p-1" key={key}>
                <div className="bg-soft-primary text-primary py-1 pl-2 text-10 lh-1 f-600 radius-50 border border-primary mw-50 center">
                  <span className=""> {r} </span>
                  <div className="ml-auto"><div onClick={() => removeTag(key)} className="same-15 center text-white radius-50 pointer bg-primary mx-1">x</div></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
function Index(){
  return(
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col">
          <div className="shadow-xs hover border p-3 pb-3 radius-10 d-block mb-3">
            <div className="bold text-12 border-bottom pb-2 border-light mb-3"> Search (Debounce) </div>
            <Debounced />
          </div>
          <div className="shadow-xs hover border p-3 pb-3 radius-10 d-block mb-3">
            <div className="bold text-12 border-bottom pb-2 border-light mb-3"> Hashtag </div>
            <Tags />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
