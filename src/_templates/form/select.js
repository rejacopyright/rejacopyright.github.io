import React from 'react'
import Select from '_components/select'

function Index(){
  const data = [
    {value: 'one', label: 'One'},
    {value: 'two', label: 'Two'},
    {value: 'three', label: 'Three'},
    {value: 'four', label: 'Four'},
    {value: 'five', label: 'Five'},
    {value: 'six', label: 'Six'},
    {value: 'seven', label: 'Seven'},
  ]
  return(
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-md-6 mb-3">
          <h4 className="border-bottom border-1 pb-2 mt-0 text-primary">Multiple</h4>
          <Select name="select" sm rowClass="" title="Default" placeholder="Default" data={data} label="name" onChange={() => ''} />
          <hr className="my-2"/>
          <Select name="select" sm rowClass="" title="Selected Multiple" placeholder="Selected Multiple" data={data} defaultValue={['two', 'three']} label="name" onChange={() => ''} multiple dontClose />
        </div>
      </div>
    </div>
  )
}

export default Index
