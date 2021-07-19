import React, {useEffect} from 'react'
import { Link } from "react-router-dom"
import { Decimal } from '_components/form'
import StickyBottom from '_components/stickyBottom'

function Index(){
  useEffect(() => {
    document.title = 'Subform 1';
  }, []);
  return(
    <form>
      {/* Submit Button */}
      <StickyBottom>
        <div className="row">
          <div className="col text-muted lh-2 text-9 text-left"> Information </div>
          <div className="col-auto px-0"> <Link to="/pages/data" className="btn btn-xs width-md radius-5 text-light text-9"><i className="uil uil-times mr-1" />Kembali</Link> </div>
          <div className="col-auto"> <button type="submit" className="btn btn-xs width-md radius-5 btn-soft-info"><i className="uil uil-check-circle mr-1" />Simpan Perubahan</button> </div>
        </div>
      </StickyBottom>
      <div className="row sticky-bottom-container pt-3">
        {/* STATUS */}
        <div className="col-md-6">
          <div className="shadow-sm p-3 radius-10 mb-4">
            <div className="row">
              <div className="col-12"> <h6 className="mt-0 border-bottom border-2 pb-2">Status</h6> </div>
              <Decimal sm rowClass="col-12 mb-2" name="tk" value={1000} title="TK (Tidak Kawin)" placeholder="0" icon="Rp. " />
              <Decimal sm rowClass="col-12 mb-2" name="k" value={1000} title="K (Kawin)" placeholder="0" icon="Rp. " />
              <Decimal sm rowClass="col-12 mb-2" name="ki" value={1000} title="K/I (NPWP Suami & Istri digabung)" placeholder="0" icon="Rp. " />
            </div>
          </div>
        </div>
        {/* TANGGUNGAN */}
        <div className="col-md-6">
          <div className="shadow-sm p-3 radius-10 mb-4">
            <div className="row">
              <div className="col-12"> <h6 className="mt-0 border-bottom border-2 pb-2">Tanggungan</h6> </div>
              <Decimal sm rowClass="col-12 mb-2" name="tanggungan" value={1000} title="Tanggungan" placeholder="0" icon="Rp. " />
              <Decimal sm rowClass="col-12 mb-2" name="max" value={1000} title="Maksimal Tanggungan" placeholder="0" icon="Orang" right />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
export default Index
