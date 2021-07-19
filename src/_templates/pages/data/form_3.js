import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router'
import {Input, Textarea, Checkbox} from '_components/form'
import { ClassicSpinner } from "react-spinners-kit"

function Index(){
  const [loading, loadingSet] = useState(true);
  useEffect(() => {
    setTimeout(() => loadingSet(false), 500);
    document.title = 'Form 3';
  }, []);
  function checkAll(e){
    Array.prototype.slice.call(e.target.parentElement.nextElementSibling.querySelectorAll('input[type=checkbox]')).map(c => c.checked = e.target.checked);
  }
  function checkSingle(e){
    const parent = e.target.parentElement.parentElement;
    const head = parent.previousElementSibling.querySelector('input[type=checkbox]');
    const length = parent.querySelectorAll('input[type=checkbox]').length;
    const checked = parent.querySelectorAll('input[type=checkbox]:checked').length;
    head.checked = checked >= length;
  }
  return(
    <form>
      { loading && <div className="overlay center"><ClassicSpinner color="#5369f8" loading={true} /></div> }
      <div className="row">
        <div className="col-12"> <h5 className="pb-2 mb-3 border-bottom border-2">Multiple Checkbox<button type="submit" className="btn btn-xs radius-20 btn-primary float-right"><i className="uil uil-check mr-1" />Simpan Perubahan</button></h5> </div>
        <Input sm rowClass="col-12 mb-2" name="name" title="Nama Role" placeholder="Nama Role" autoFocus />
        <Textarea sm rowClass="col-12 mb-2" name="desc" title="Deskripsi" placeholder="Deskripsi singkat role..." rows={3} />
      </div>
      <h5 className="pb-1 mb-2 border-bottom border-2">Roles <span className="text-muted text-8">(Under Development)</span></h5>
      <div className="row">
        {/* User */}
        <div className="col-md-3">
          <Checkbox id="user_scope" label="User" rowClass="mb-2" onChange={checkAll} />
          <div className="pl-3">
            <Checkbox small name="user_read" id="user_read" label="View" onChange={checkSingle} />
            <Checkbox small name="user_create" id="user_create" label="Create" onChange={checkSingle} />
            <Checkbox small name="user_update" id="user_update" label="Edit" onChange={checkSingle} />
            <Checkbox small name="user_delete" id="user_delete" label="Remove" onChange={checkSingle} />
          </div>
        </div>
        {/* Report */}
        <div className="col-md-3">
          <Checkbox id="report_scope" label="Report" rowClass="mb-2" onChange={checkAll} />
          <div className="pl-3">
            <Checkbox small name="report_read" id="report_read" label="View" onChange={checkSingle} />
            <Checkbox small name="report_create" id="report_create" label="Create" onChange={checkSingle} />
            <Checkbox small name="report_update" id="report_update" label="Edit" onChange={checkSingle} />
            <Checkbox small name="report_delete" id="report_delete" label="Remove" onChange={checkSingle} />
          </div>
        </div>
        {/* Setting */}
        <div className="col-md-3">
          <Checkbox id="setting_scope" label="Setting" rowClass="mb-2" onChange={checkAll} />
          <div className="pl-3">
            <Checkbox small name="setting_master" id="setting_master" label="Settings Master" onChange={checkSingle} />
            <Checkbox small name="setting_personal" id="setting_personal" label="Personal Setting" onChange={checkSingle} />
          </div>
        </div>
      </div>
    </form>
  )
}
export default withRouter(Index)
