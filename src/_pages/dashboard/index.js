import React, { useState, useEffect } from 'react'
// LIB
import { ClassicSpinner } from "react-spinners-kit";
// WIDGET
import User from './user'
import Grafik from './grafik'
import Ticket from './ticket'
// INIT JS

function Dashboard(){
  const [loading, loadingSet] = useState(true);
  const [total, totalSet] = useState(0);
  const [hadir, hadirSet] = useState(0);
  const [absen, absenSet] = useState(0);
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  useEffect(() => {
    document.title = 'Dashboard';
    import('feather-icons').then(f => f.replace());
    console.log('once');
  }, []);
  useEffect(() => {
    setTimeout(() => loadingSet(false), 200);
    const userCount = setInterval( () => {
      totalSet(randInt(0,5));
      hadirSet(randInt(0,5));
      absenSet(randInt(0,5));
    }, 3000 );
    return () => clearInterval(userCount);
  }, [ total, hadir, absen ]);
  return (
    <div className="container-fluid">
      { loading && <div className="overlay center"><ClassicSpinner color="#5369f8" loading={true} /></div> }
      <div className="row mt-3">
        <User divClass="col-xl-2 col-md-3" title="Total Karyawan" value={total} theme="primary" icon="users" />
        <User divClass="col-xl-2 col-md-3" title="Karyawan Hadir" value={hadir} theme="success" icon="user-check" />
        <User divClass="col-xl-2 col-md-3" title="Karyawan Absen" value={absen} theme="danger" icon="user-x" />
      </div>
      <Grafik rowClass="mt-2" />
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <Ticket />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
