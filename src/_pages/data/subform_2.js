import React, {useEffect, useState, Fragment} from 'react'
import { Link } from "react-router-dom"
import { Desimal } from '_components/form'
import StickyBottom from '_components/stickyBottom'

function Index(){
  const [data, dataSet] = useState([]);
  useEffect(() => {
    document.title = 'Subform 2';
  }, []);
  function plus(e){
    e.preventDefault();
    const target = e.target;
    const dt = {};
    const nm = target.querySelector('input[name=nm]').value;
    const pj = target.querySelector('input[name=pj]').value;
    if (nm) { dt['nm'] = parseFloat(nm.split('.').join('').replace(',', '.')); }
    if (pj) { dt['pj'] = parseFloat(pj.split('.').join('').replace(',', '.')); }
    // Bikin Uniq ID Otomatis
    let id = data.map(a => a.id);
    let maxNominal = data.map(a => a.nominal);
    if (!id.length) { id = maxNominal = [0]; }
    id = Math.max(...id) + 1;
    // Validasi
    maxNominal = Math.max(...maxNominal);
    const duplicateMax = data.filter(a => a.nominal === maxNominal).length;
    const biggerThanDuplicateMax = duplicateMax > 1 && dt.nm >= maxNominal;
    if (dt.nm && dt.pj && (!data.map(r => r.nominal).includes(dt.nm) || (dt.nm === maxNominal && duplicateMax < 2)) && !biggerThanDuplicateMax) {
      const dtset = [...data, {id:id, nominal:dt.nm, pajak:dt.pj}];
      dataSet(dtset.sort((a,b) => (a.nominal !== b.nominal) ? (a.nominal - b.nominal) : (a.pajak - b.pajak)));
      setTimeout(() => target.querySelector('input[name=nm]').focus(), 100);
    }else if (biggerThanDuplicateMax){
      console.log('Anda sudah memiliki nilai terbesar lebih dai satu dan anda memasukan nilai nominal yang sama / lebih besar dari nilai maksimal yang sudah ada. Hapus dahulu salahsatu nilai terbesar untuk menmbahkan ke daftar Data..');
    }else if (data.map(r => r.nominal).includes(dt.nm)) {
      console.log('Nilai Pajak yang anda masukan sudah ada, coba nilai lain..');
    }else {
      console.log('Mohon isikan nominal dan persentase pajak..');
    }
  }
  function minus(id){
    const dt = data.filter(r => r.id !== id);
    dataSet(dt);
  }
  return(
    <Fragment>
      <h6 className="py-2 mb-3 mt-0 border-bottom border-1 text-10">Form Input</h6>
      <div className="row">
        <div className="col-12">
          <ul className="message-list mb-1">
            <li className="h-unset lh-unset radius-5">
              <form className="center p-2" onSubmit={plus}>
                <Desimal sm rowClass="col mb-1" name="nm" title="Nominal" placeholder="0" icon="Rp." />
                <Desimal sm rowClass="col mb-1" name="pj" title="Pajak" placeholder="0" icon="%" max="100" right />
                <div className="col-auto mb-1 mt-3 border-left">
                  <button type="submit" className="same-30 border-0 radius-10 center bg-soft-primary"><i className="uil uil-plus text-primary" /></button>
                </div>
              </form>
            </li>
          </ul>
          <hr className="border-1 border-light mb-0"/>
          <form>
            {/* Submit Button */}
            <StickyBottom>
              <div className="row">
                <div className="col text-muted lh-2 text-9 text-left"> </div>
                <div className="col-auto px-0"> <Link to="/payroll/list" className="btn btn-xs width-md radius-5 text-light text-9"><i className="uil uil-times mr-1" />Kembali</Link> </div>
                <div className="col-auto px-0"> <span className="btn btn-xs width-md radius-5 btn-soft-danger pointer" onClick={() => dataSet([])}><i className="uil uil-check-circle mr-1" />Reset</span> </div>
                <div className="col-auto"> <button type="submit" className="btn btn-xs width-md radius-5 btn-soft-info"><i className="uil uil-check-circle mr-1" />Simpan Perubahan</button> </div>
              </div>
            </StickyBottom>
            <div className="row sticky-bottom-container pt-3">
              <div className="col-12 mb-4">
                { data.length > 0 && <h6 className="my-3">Data Result</h6> }
                {
                  data.map((r, key) => (
                    <div className="center mx-0 p-2 mb-2 shadow radius-5" key={key}>
                      <div className="col-auto pr-0"> <div className="center same-20 radius-20 bg-soft-primary text-primary text-7 f-600 lh-auto"> {++key} </div> </div>
                      <div className="col text-8 text-muted f-600 lh-1">
                        { data.length === key ? 'Lebih Besar Dari' : 'Lebih Kecil / Sama Dengan' }
                      </div>
                      <div className="col text-success lh-1">
                        <div className="text-8 text-muted f-600 lh-15">Nominal</div>
                        Rp. {r.nominal.toString().replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                      </div>
                      <div className="col text-danger lh-1">
                        <div className="text-8 text-muted f-600 lh-15">Pajak</div>
                        {r.pajak.toString().replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}%
                      </div>
                      <div className="col-auto"><div className="same-25 border-0 radius-10 center bg-soft-danger pointer" onClick={() => minus(r.id)}><i className="uil uil-times text-danger" /></div></div>
                    </div>
                  ))
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}
export default Index
