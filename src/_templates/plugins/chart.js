import React from 'react'
import Chart from 'react-apexcharts'

function Graphic1(){
  const data = [
    { name: 'Type 1', data: [12, 4, 8, 6, 10] },
    { name: 'Type 2', data: [8, 16, 6, 8, 12] },
    { name: 'Type 3', data: [5, 2, 4, 3, 5] }
  ];
  const setting = {
    chart: {
      toolbar: { show: false },
    },
    colors: ["#ff80ab", "#82b1ff", "#ffbe0b"],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 1 },
    // title: { text: 'People Analytic', align: 'left' },
    // subtitle: { text: '5 Jam Terakhir', align: 'left' },
    xaxis: {
      type: 'text',
      categories: ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4', 'Cat 5']
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
  }
  return <Chart options={setting} type="area" series={data} height={300} />
}
function Graphic2(){
  const data = [
    {
      name: 'Column A',
      type: 'column',
      data: [21.1, 23, 33.1, 34]
    },
    {
      name: "Column B",
      type: 'column',
      data: [10, 19, 27, 26]
    },
    {
      name: "Line C",
      type: 'line',
      data: [1.4, 2, 2.5, 1.5]
    },
  ];
  const setting = {
    chart: {
      toolbar: { show: false },
      stacked: false
    },
    dataLabels: { enabled: false },
    colors: ["#ff80ab", "#82b1ff", "#ffbe0b"],
    stroke: { width: [1,1,1] },
    plotOptions: {
      bar: { columnWidth: "50%" }
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012]
    },
    yaxis: [
      {
        seriesName: 'Column A',
        axisTicks: { show: true },
        axisBorder: { show: true, },
        title: { text: "Columns" }
      },
      {
        seriesName: 'Column A',
        show: false
      },
      {
        opposite: true,
        seriesName: 'Line C',
        axisTicks: { show: true },
        axisBorder: { show: true, },
        title: { text: "Line" }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: { show: false }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    },
  }
  return <Chart options={setting} type="line" series={data} height={250} />
}
function Graphic3(){
  const data = [
    {
      name: 'Column',
      type: 'column',
      data: [21.1, 23, 33.1, 34, 44.1]
    }
  ];
  const setting = {
    chart: {
      toolbar: { show: false },
      stacked: false
    },
    dataLabels: { enabled: false },
    colors: ["#82b1ff"],
    stroke: { width: 1 },
    plotOptions: { bar: { columnWidth: "75%" } },
    xaxis: { categories: [2009, 2010, 2011, 2012, 2013] },
    yaxis: {
      seriesName: 'Column A',
      axisTicks: { show: true },
      axisBorder: { show: true, },
      title: { text: "Columns" }
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: { show: false }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    },
  }
  return <Chart options={setting} type="line" series={data} height={250} />
}
function Graphic4(){
  const data = [
    { name: 'Type 1', data: [12, 4, 8, 6, 10] },
    { name: 'Type 2', data: [8, 50, 6, 8, 12] },
    { name: 'Type 3', data: [5, 2, 4, 3, 5] }
  ];
  const setting = {
    chart: { toolbar: { show: false }, },
    colors: ["#ff80ab", "#82b1ff", "#ffbe0b"],
    dataLabels: { enabled: false },
    markers: { size: 3 },
    stroke: { curve: 'straight', width: 2 },
    xaxis: {
      type: 'text',
      categories: ['Jan', 'Feb', 'Maret', 'Apr', 'Mei']
    },
  }
  return <Chart options={setting} type="line" series={data} height={300} />
}
function Graphic5(){
  const data = [
    {
      name: "Series 1",
      data: [45, 52, 38, 24, 33, 10]
    },
    {
      name: "Series 2",
      data: [26, 21, 20, 6, 8, 15]
    }
  ];
  const setting = {
    chart: {
      toolbar: { show: false },
    },
    labels: ['April', 'May', 'June', 'July', 'August', 'September'],
    stroke: {
      show: true,
      width: 1,
      dashArray: 0
    },
    // dataLabels: {
    //   enabled: true,
    //   background: { enabled: true, borderRadius:3, }
    // },
    colors: ["#ff80ab", "#82b1ff"],
  }
  return <Chart options={setting} type="radar" series={data} height={300} />
}
function Graphic6(){
  const data = [44, 55, 13, 33];
  const setting = {
    chart: {
      toolbar: { show: false },
      stacked: false
    },
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    // dataLabels: { enabled: true, formatter: function (val) { return parseInt(val) + "%x" } },
    colors: ["#ff80ab", "#82b1ff", "#ffbe0b", "#ff0957"],
    plotOptions: {
      pie: {
        donut: {
          size: '50%',
        }
      }
    },
  }
  return <Chart options={setting} type="donut" series={data} height={200} />
}
function Graphic7(){
  const setting = {
    chart: {
      toolbar: { show: false },
    },
    labels: ['Progress'],
    colors: ["#20E647"],
    stroke: { lineCap: "round" },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
  }
  return <Chart options={setting} type="radialBar" series={[70]} height={200} />
}

function Index(){
  return(
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-12 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Graphic 1</h6>
          <div className="radius-10 border border-light">
            <Graphic1 />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Graphic 2</h6>
          <div className="radius-10 border border-light">
            <Graphic2 />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Graphic 3</h6>
          <div className="radius-10 border border-light">
            <Graphic3 />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Graphic 4</h6>
          <div className="radius-10 border border-light">
            <Graphic4 />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Graphic 5</h6>
          <div className="radius-10 border border-light">
            <Graphic5 />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Graphic 6</h6>
          <div className="radius-10 border border-light">
            <Graphic6 />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h6 className="border-bottom border-1 pb-2 mt-3 text-primary">Graphic 7</h6>
          <div className="radius-10 border border-light">
            <Graphic7 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
