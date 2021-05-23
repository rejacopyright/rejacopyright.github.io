import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import moment from 'moment'
import 'moment/locale/id'

function Grafik(props){
  function timeMin(sub){
    return moment().subtract(sub || 0, 'hours').format('HH:mm:ss');
  }
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  const [series, setSeries] = useState([
    { name: 'Absen', data: [0, 0, 0, 0, 0] },
    { name: 'Hadir', data: [0, 0, 0, 0, 0] },
    { name: 'Terdeteksi Kamera', data: [0, 0, 0, 0, 0] }
  ]);
  const [options, setOptions] = useState({
    chart: {
      toolbar: { show: false },
    },
    colors: ["#ff80ab", "#82b1ff", "#ffbe0b"],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 1 },
    title: { text: 'People Analytic', align: 'left' },
    subtitle: { text: '5 Jam Terakhir ('+moment().format("dddd, DD MMMM YYYY")+')', align: 'left' },
    xaxis: {
      type: 'date',
      categories: [timeMin(4), timeMin(3), timeMin(2), timeMin(1), timeMin()]
    },
    tooltip: {
      x: { format: 'HH:mm:ss' },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.9,
        opacityTo: 0.7,
        stops: [0, 90, 100]
      }
    },
  });
  useEffect(() => {
    const timer = setInterval( () => {
      setSeries([
        { name: 'Absen', data: [randInt(5,10), randInt(5,10), randInt(5,10), randInt(5,10), randInt(5,10)] },
        { name: 'Hadir', data: [randInt(5,10), randInt(5,10), randInt(5,10), randInt(5,10), randInt(5,10)] },
        { name: 'Terdeteksi Kamera', data: [randInt(5,10), randInt(5,10), randInt(5,10), randInt(5,10), randInt(5,10)] }
      ]);
      setOptions({
        ...options,
        xaxis:{
          type: 'datetime',
          categories: [timeMin(4), timeMin(3), timeMin(2), timeMin(1), timeMin()]
        }
      });
      // console.log(randInt(5,10));
    }, 3000 );
    return () => clearInterval(timer);
  }, [series, options]);
  return(
    <div className={`row ${props.rowClass}`}>
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <Chart options={options} type="area" series={series} height={350} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grafik
