import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

// SUB PAGES
import Subform1 from './subform_1'
import Subform2 from './subform_2'


function Index(props){
  const [tabActive, tabActiveSet] = useState('subform2');
  const tab = new URLSearchParams(props.location.search).get('tab');
  useEffect(() => {
    document.title = 'Subform';
  }, []);
  useEffect(() => {
    tabActiveSet(tab || 'subform2');
  }, [tab]);
  function Child(){
    switch (tab) {
      case 'subform1': return <Subform1 />
      case 'subform2': return <Subform2 />
      default: return <Subform2 />
    }
  }
  return(
    <div className="row">
      <div className="col-12">
        <ul className="nav nav-tabs nav-justifieds bg-white" role="tablist">
          <li className="nav-item" onClick={() => tabActiveSet('subform1')}> <Link to="?tab=subform1" className={`nav-link py-1 ${tabActive === 'subform1' && 'active'}`}> Subform 1 </Link> </li>
          <li className="nav-item" onClick={() => tabActiveSet('subform2')}> <Link to="?tab=subform2" className={`nav-link py-1 ${tabActive === 'subform2' && 'active'}`}> Subform 2 </Link> </li>
        </ul>
        <div className="pt-3">
          <Child tab={tab}></Child>
        </div>
      </div>
    </div>
  )
}
export default Index
