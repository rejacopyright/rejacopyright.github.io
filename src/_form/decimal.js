import React from 'react'
import { Desimal } from '_components/form'

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h4 className="border-bottom border-1 pb-2 mt-0 text-primary">Decimal</h4>
      <div className="row">
        <Desimal sm rowClass="col-md-3 mb-2" name="decimal_1" value={1000} title="Decimal 1" placeholder="0" icon="Rp. " />
        <Desimal sm rowClass="col-md-3 mb-2" name="decimal_2" value={22} title="Decimal 2" placeholder="0" icon="Orang" right />
        <Desimal sm rowClass="col-md-3 mb-2" name="decimal_3" value={32} title="Decimal 3" placeholder="0" icon={<i className="uil uil-user"/>} />
        <Desimal sm rowClass="col-md-3 mb-2" name="decimal_4" value={42} title="Decimal 4" placeholder="0" icon={<i className="uil uil-location"/>} right />
      </div>
      <div className="row">
        <Desimal sm rowClass="col-md-3 mb-2" name="decimal_5" min={100} title="Decimal 5 (Min)" placeholder="0" icon="Rp. " />
        <Desimal sm rowClass="col-md-3 mb-2" name="decimal_6" max={100} title="Decimal 6 (Max)" placeholder="0" icon="Rp. " />
        <Desimal sm rowClass="col-md-3 mb-2" name="decimal_7" min ={10} max={100} title="Decimal 7 (Min & Max)" placeholder="0" icon="Rp. " />
      </div>
      <div className="row">
        <Desimal sm rowClass="col-md-3 mb-2" name="decimal_8" onChange={i => console.log(i)} label="Decimal 8 (onChange)" placeholder="0" icon="Rp. " />
      </div>
    </div>
  )
}

export default Index
