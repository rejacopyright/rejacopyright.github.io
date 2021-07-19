import React, { useState, useEffect, useRef, Fragment } from 'react'
import { Link } from "react-router-dom"
import { Input, Textarea, Decimal, Radio, Checkbox } from '_components/form'
import Select from '_components/select'
import Alert from '_components/alert'
import Skeleton from 'react-skeleton-loader'

function Index(){
  const ref = useRef();
  const [percent, percentSet] =  useState(false);
  const [allColor, allColorSet] =  useState(true);
  const [selection] =  useState([{value: 'white', label: 'White'}, {value: 'black', label: 'Black'}]);
  const [alert, alertSet] =  useState(true);
  const [loading, loadingSet] =  useState(true);
  useEffect(() => {
    document.title = 'Add Data';
    setTimeout(() => loadingSet(false), 1000);
  }, []);
  function onSelectColorChange(e){
    console.log(e);
  }
  function onPercentChange(e){
    console.log(ref);
    percentSet(e.target.checked);
  }
  function onAllColorChange(e){
    allColorSet(e.target.checked);
  }
  if (loading) {
    return (
      <Fragment>
        <h5 className="pb-2 mb-3 border-bottom border-2">Edit Data</h5>
        <Skeleton width="100%" height="20px" count={3} widthRandomness={0} color="#eee" />
        <hr/>
        <Skeleton width="100%" height="50px" count={1} widthRandomness={0} color="#eee" />
        <hr/>
        <div className="row">
          <div className="col text-right">
            <Skeleton width="100px" height="25px" count={1} widthRandomness={0} color="#eee" />
            <span className="mr-2" />
            <Skeleton width="100px" height="25px" count={1} widthRandomness={0} color="#eee" />
          </div>
        </div>
      </Fragment>
    )
  }
  return(
    <form>
      <h5 className="py-2 mb-3 mt-0 border-bottom border-2">Add Data</h5>
      {
        alert &&
        <Alert theme="danger" close icon="exclamation-circle" onClose={() => setTimeout(() => alertSet(false), 100)}>
          Pastikan Field "Title" dan "Value" sudah terisi dengan benar
        </Alert>
      }
      {/* Line 1 */}
      <div className="form-group row">
        <Input sm rowClass="col-md" name="name" title="Data Name" placeholder="Data Name" />
        <div className="col-md-auto">
          <small className="d-block"> Tipe Data </small>
          <div className="mt-1">
            <Radio small label="Penambahan" id="increment" name="type" value="1" checked labelClass="mr-3" />
            <Radio small label="Pengurangan" id="decrement" name="type" value="0" />
          </div>
        </div>
      </div>
      {/* Line 2 */}
      <div className="form-group row">
        <div className="col-12">
          <div className="mt-1">
            <Checkbox small label={`Semua Warna`} labelClass="text-nowrap"  id="all_selection" name="all_selection" value="1" checked onChange={onAllColorChange} />
          </div>
        </div>
        {
          !allColor &&
          <Select name="selection" sm rowClass="col-12 border-top pt-2 mt-2" title="Pilih Warna" data={selection} defaultValue="black" label="name" onChange={onSelectColorChange} multiple dontClose placeholder="Pilih Warna" />
        }
      </div>
      {/* Line 3 */}
      <div className="form-group row">
        <div className="col-md-6">
          <small className="d-block"> Tipe Value </small>
          <div className="mt-1">
            <Checkbox small label={`Persentase dari "Basic Salary"`} labelClass="text-nowrap"  id="percent" name="percent" value="1" onChange={onPercentChange} />
          </div>
        </div>
        {
          percent ?
          <Decimal sm ref={ref} name="value" rowClass="col-md-6" title={`Persentase / bln dari "Basic Salary"`} placeholder={`Persentase dari "Basic Salary"`} value={''} max="100" icon="%" right />
          :
          <Decimal sm ref={ref} name="value" rowClass="col-md-6" title={`Nominal / bln (Rupiah)`} placeholder={`Nominal (Rupiah)`} value={''} icon="Rp." />
        }
      </div>
      {/* Line 4 */}
      <div className="row">
        <Textarea sm rowClass="col-12" name="desc" title="Deskripsi (Opsional)" placeholder="Deskripsi data..." rows={3} />
      </div>
      {/* Submit Button */}
      <div className="row">
        <div className="col-12 mt-3 text-right">
          <Link to="/pages/data" className="btn btn-xs width-md radius-5 text-muted text-9"><i className="uil uil-times mr-1" />Kembali</Link>
          <button type="submit" className="btn btn-xs width-md radius-5 btn-soft-primary"><i className="uil uil-check-circle mr-1" />Proses</button>
        </div>
      </div>
    </form>
  )
}
export default Index
