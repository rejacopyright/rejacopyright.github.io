import React from 'react'
import Alert from '_components/alert'
import Notif from '_components/notif'

// ALERT 1
function Alert1(){
  return(
    <Alert theme="danger" close onClose={() => console.log('Alert Close')}>
      Alert Messages
    </Alert>
  )
}
// ALERT 2
function Alert2(){
  return(
    <Alert theme="success" icon="false">
      Roll umum untuk pengaturan BPJS Kesehatan adalah : <br/>
      <ol className="m-0 pl-4">
        <li> Company Rate: <strong>4%</strong>, </li>
        <li> Employee Rate: <strong>1%</strong>, </li>
        <li> Salary Min: <strong>UMR/UMK</strong>, </li>
        <li>Salary Max: <strong>Rp. 12.000.000</strong></li>
      </ol>
    </Alert>
  )
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Alert 1</h6>
      <Alert1 />
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Alert 2</h6>
      <Alert2 />
      <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Notif</h6>
      <Notif open={true} onClose={() => console.log('close')} msg={'Notif Message'} theme={'warning'} />
    </div>
  )
}

export default Index
