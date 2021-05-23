import React, {useState} from 'react'
import { Input } from '_components/form'
import debounce from 'lodash.debounce'

function Index(){
  const [value, valueSet] = useState('');
  const [typing, typingSet] = useState(false);
  const debounceSave = debounce(e => {
    valueSet(e.target.value);
    typingSet(false);
  }, 2000);
  const search = e => {
    typingSet(true)
    debounceSave(e);
  };
  return(
    <div className="container-fluid pt-3">
      <h6 className="border-bottom border-1 mt-3 text-primary">Search (Delay)</h6>
      <div className="row">
        <div className="col">
          <Input sm name="name" onChange={search} value={value} placeholder="Search" />
          {
            typing ?
            <h6 className="text-muted f-400">Typing...</h6>
            :
            <h5>{value}</h5>
          }
        </div>
      </div>
    </div>
  )
}

export default Index
