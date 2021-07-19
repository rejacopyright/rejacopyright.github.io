import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router'
import {Input, Textarea, Decimal} from '_components/form'
import { ClassicSpinner } from 'react-spinners-kit'

function Index(){
  const [loading, loadingSet] = useState(true);
  useEffect(() => {
    setTimeout(() => loadingSet(false), 500);
    document.title = 'Form 2';
  }, []);
  return(
    <form>
      { loading && <div className="overlay center"><ClassicSpinner color="#5369f8" loading={true} /></div> }
      <div className="row">
        <div className="col-12"> <h5 className="pb-2 mb-3 border-bottom border-2">Simple Form<button type="submit" className="btn btn-xs radius-20 btn-primary float-right"><i className="uil uil-check mr-1" />Simpan Perubahan</button></h5> </div>
        <Input sm rowClass="col-md-6 mb-2" name="name" title="Nama Lengkap" placeholder="Nama Lengkap" autoFocus />
        <Decimal sm rowClass="col-md-6 mb-2" name="salary" title="Basic Salary" placeholder="Basic Salary" icon="Rp." />
        <Textarea sm rowClass="col-12 mb-2" name="desc" title="Deskripsi" placeholder="Deskripsi singkat..." rows={3} />
      </div>
    </form>
  )
}
export default withRouter(Index)
