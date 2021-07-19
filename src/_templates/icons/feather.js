import React, {useEffect} from 'react'
import {CopyToClipboard as Copy} from 'react-copy-to-clipboard'

function Index(){
  useEffect(() => {
    import('feather-icons').then(f => f.replace());
  }, []);
  return(
    <div className="container-fluid pt-3">
      <h4 className="border-bottom border-1 pb-2 mt-3 text-primary">Icons</h4>
      <div className="row icons-list">
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="activity" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="activity" className="mr-2"/> activity</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="airplay" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="airplay" className="mr-2"/> airplay</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="alert-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="alert-circle" className="mr-2"/> alert-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="alert-octagon" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="alert-octagon" className="mr-2"/> alert-octagon</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="alert-triangle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="alert-triangle" className="mr-2"/> alert-triangle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="align-center" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="align-center" className="mr-2"/> align-center</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="align-justify" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="align-justify" className="mr-2"/> align-justify</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="align-left" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="align-left" className="mr-2"/> align-left</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="align-right" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="align-right" className="mr-2"/> align-right</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="anchor" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="anchor" className="mr-2"/> anchor</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="aperture" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="aperture" className="mr-2"/> aperture</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="archive" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="archive" className="mr-2"/> archive</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-down-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-down-circle" className="mr-2"/> arrow-down-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-down-left" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-down-left" className="mr-2"/> arrow-down-left</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-down-right" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-down-right" className="mr-2"/> arrow-down-right</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-down" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-down" className="mr-2"/> arrow-down</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-left-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-left-circle" className="mr-2"/> arrow-left-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-left" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-left" className="mr-2"/> arrow-left</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-right-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-right-circle" className="mr-2"/> arrow-right-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-right" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-right" className="mr-2"/> arrow-right</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-up-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-up-circle" className="mr-2"/> arrow-up-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-up-left" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-up-left" className="mr-2"/> arrow-up-left</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-up-right" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-up-right" className="mr-2"/> arrow-up-right</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-up" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="arrow-up" className="mr-2"/> arrow-up</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="at-sign" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="at-sign" className="mr-2"/> at-sign</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="award" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="award" className="mr-2"/> award</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bar-chart-2" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="bar-chart-2" className="mr-2"/> bar-chart-2</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bar-chart" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="bar-chart" className="mr-2"/> bar-chart</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="battery-charging" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="battery-charging" className="mr-2"/> battery-charging</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="battery" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="battery" className="mr-2"/> battery</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bell-off" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="bell-off" className="mr-2"/> bell-off</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bell" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="bell" className="mr-2"/> bell</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bluetooth" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="bluetooth" className="mr-2"/> bluetooth</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bold" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="bold" className="mr-2"/> bold</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="book-open" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="book-open" className="mr-2"/> book-open</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="book" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="book" className="mr-2"/> book</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bookmark" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="bookmark" className="mr-2"/> bookmark</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="box" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="box" className="mr-2"/> box</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="briefcase" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="briefcase" className="mr-2"/> briefcase</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="calendar" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="calendar" className="mr-2"/> calendar</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="camera-off" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="camera-off" className="mr-2"/> camera-off</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="camera" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="camera" className="mr-2"/> camera</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cast" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="cast" className="mr-2"/> cast</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="check-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="check-circle" className="mr-2"/> check-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="check-square" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="check-square" className="mr-2"/> check-square</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="check" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="check" className="mr-2"/> check</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevron-down" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="chevron-down" className="mr-2"/> chevron-down</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevron-left" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="chevron-left" className="mr-2"/> chevron-left</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevron-right" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="chevron-right" className="mr-2"/> chevron-right</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevron-up" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="chevron-up" className="mr-2"/> chevron-up</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevrons-down" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="chevrons-down" className="mr-2"/> chevrons-down</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevrons-left" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="chevrons-left" className="mr-2"/> chevrons-left</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevrons-right" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="chevrons-right" className="mr-2"/> chevrons-right</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevrons-up" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="chevrons-up" className="mr-2"/> chevrons-up</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chrome" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="chrome" className="mr-2"/> chrome</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="circle" className="mr-2"/> circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="clipboard" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="clipboard" className="mr-2"/> clipboard</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="clock" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="clock" className="mr-2"/> clock</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud-drizzle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="cloud-drizzle" className="mr-2"/> cloud-drizzle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud-lightning" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="cloud-lightning" className="mr-2"/> cloud-lightning</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud-off" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="cloud-off" className="mr-2"/> cloud-off</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud-rain" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="cloud-rain" className="mr-2"/> cloud-rain</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud-snow" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="cloud-snow" className="mr-2"/> cloud-snow</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="cloud" className="mr-2"/> cloud</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="code" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="code" className="mr-2"/> code</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="codepen" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="codepen" className="mr-2"/> codepen</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="codesandbox" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="codesandbox" className="mr-2"/> codesandbox</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="coffee" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="coffee" className="mr-2"/> coffee</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="columns" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="columns" className="mr-2"/> columns</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="command" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="command" className="mr-2"/> command</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="compass" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="compass" className="mr-2"/> compass</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="copy" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="copy" className="mr-2"/> copy</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-down-left" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="corner-down-left" className="mr-2"/> corner-down-left</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-down-right" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="corner-down-right" className="mr-2"/> corner-down-right</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-left-down" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="corner-left-down" className="mr-2"/> corner-left-down</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-left-up" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="corner-left-up" className="mr-2"/> corner-left-up</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-right-down" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="corner-right-down" className="mr-2"/> corner-right-down</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-right-up" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="corner-right-up" className="mr-2"/> corner-right-up</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-up-left" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="corner-up-left" className="mr-2"/> corner-up-left</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-up-right" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="corner-up-right" className="mr-2"/> corner-up-right</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cpu" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="cpu" className="mr-2"/> cpu</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="credit-card" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="credit-card" className="mr-2"/> credit-card</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="crop" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="crop" className="mr-2"/> crop</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="crosshair" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="crosshair" className="mr-2"/> crosshair</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="database" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="database" className="mr-2"/> database</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="delete" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="delete" className="mr-2"/> delete</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="disc" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="disc" className="mr-2"/> disc</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="dollar-sign" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="dollar-sign" className="mr-2"/> dollar-sign</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="download-cloud" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="download-cloud" className="mr-2"/> download-cloud</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="download" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="download" className="mr-2"/> download</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="droplet" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="droplet" className="mr-2"/> droplet</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="edit-2" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="edit-2" className="mr-2"/> edit-2</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="edit-3" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="edit-3" className="mr-2"/> edit-3</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="edit" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="edit" className="mr-2"/> edit</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="external-link" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="external-link" className="mr-2"/> external-link</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="eye-off" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="eye-off" className="mr-2"/> eye-off</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="eye" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="eye" className="mr-2"/> eye</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="facebook" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="facebook" className="mr-2"/> facebook</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="fast-forward" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="fast-forward" className="mr-2"/> fast-forward</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="feather" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="feather" className="mr-2"/> feather</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="figma" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="figma" className="mr-2"/> figma</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="file-minus" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="file-minus" className="mr-2"/> file-minus</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="file-plus" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="file-plus" className="mr-2"/> file-plus</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="file-text" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="file-text" className="mr-2"/> file-text</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="file" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="file" className="mr-2"/> file</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="film" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="film" className="mr-2"/> film</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="filter" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="filter" className="mr-2"/> filter</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="flag" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="flag" className="mr-2"/> flag</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="folder-minus" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="folder-minus" className="mr-2"/> folder-minus</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="folder-plus" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="folder-plus" className="mr-2"/> folder-plus</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="folder" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="folder" className="mr-2"/> folder</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="framer" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="framer" className="mr-2"/> framer</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="frown" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="frown" className="mr-2"/> frown</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="gift" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="gift" className="mr-2"/> gift</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="git-branch" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="git-branch" className="mr-2"/> git-branch</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="git-commit" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="git-commit" className="mr-2"/> git-commit</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="git-merge" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="git-merge" className="mr-2"/> git-merge</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="git-pull-request" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="git-pull-request" className="mr-2"/> git-pull-request</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="github" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="github" className="mr-2"/> github</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="gitlab" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="gitlab" className="mr-2"/> gitlab</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="globe" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="globe" className="mr-2"/> globe</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="grid" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="grid" className="mr-2"/> grid</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="hard-drive" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="hard-drive" className="mr-2"/> hard-drive</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="hash" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="hash" className="mr-2"/> hash</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="headphones" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="headphones" className="mr-2"/> headphones</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="heart" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="heart" className="mr-2"/> heart</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="help-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="help-circle" className="mr-2"/> help-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="hexagon" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="hexagon" className="mr-2"/> hexagon</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="home" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="home" className="mr-2"/> home</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="image" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="image" className="mr-2"/> image</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="inbox" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="inbox" className="mr-2"/> inbox</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="info" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="info" className="mr-2"/> info</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="instagram" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="instagram" className="mr-2"/> instagram</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="italic" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="italic" className="mr-2"/> italic</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="key" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="key" className="mr-2"/> key</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="layers" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="layers" className="mr-2"/> layers</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="layout" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="layout" className="mr-2"/> layout</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="life-buoy" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="life-buoy" className="mr-2"/> life-buoy</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="link-2" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="link-2" className="mr-2"/> link-2</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="link" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="link" className="mr-2"/> link</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="linkedin" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="linkedin" className="mr-2"/> linkedin</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="list" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="list" className="mr-2"/> list</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="loader" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="loader" className="mr-2"/> loader</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="lock" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="lock" className="mr-2"/> lock</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="log-in" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="log-in" className="mr-2"/> log-in</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="log-out" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="log-out" className="mr-2"/> log-out</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="mail" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="mail" className="mr-2"/> mail</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="map-pin" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="map-pin" className="mr-2"/> map-pin</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="map" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="map" className="mr-2"/> map</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="maximize-2" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="maximize-2" className="mr-2"/> maximize-2</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="maximize" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="maximize" className="mr-2"/> maximize</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="meh" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="meh" className="mr-2"/> meh</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="menu" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="menu" className="mr-2"/> menu</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="message-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="message-circle" className="mr-2"/> message-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="message-square" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="message-square" className="mr-2"/> message-square</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="mic-off" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="mic-off" className="mr-2"/> mic-off</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="mic" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="mic" className="mr-2"/> mic</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="minimize-2" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="minimize-2" className="mr-2"/> minimize-2</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="minimize" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="minimize" className="mr-2"/> minimize</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="minus-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="minus-circle" className="mr-2"/> minus-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="minus-square" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="minus-square" className="mr-2"/> minus-square</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="minus" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="minus" className="mr-2"/> minus</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="monitor" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="monitor" className="mr-2"/> monitor</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="moon" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="moon" className="mr-2"/> moon</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="more-horizontal" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="more-horizontal" className="mr-2"/> more-horizontal</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="more-vertical" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="more-vertical" className="mr-2"/> more-vertical</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="mouse-pointer" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="mouse-pointer" className="mr-2"/> mouse-pointer</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="move" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="move" className="mr-2"/> move</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="music" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="music" className="mr-2"/> music</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="navigation-2" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="navigation-2" className="mr-2"/> navigation-2</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="navigation" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="navigation" className="mr-2"/> navigation</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="octagon" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="octagon" className="mr-2"/> octagon</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="package" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="package" className="mr-2"/> package</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="paperclip" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="paperclip" className="mr-2"/> paperclip</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="pause-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="pause-circle" className="mr-2"/> pause-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="pause" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="pause" className="mr-2"/> pause</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="pen-tool" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="pen-tool" className="mr-2"/> pen-tool</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="percent" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="percent" className="mr-2"/> percent</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-call" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="phone-call" className="mr-2"/> phone-call</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-forwarded" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="phone-forwarded" className="mr-2"/> phone-forwarded</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-incoming" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="phone-incoming" className="mr-2"/> phone-incoming</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-missed" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="phone-missed" className="mr-2"/> phone-missed</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-off" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="phone-off" className="mr-2"/> phone-off</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-outgoing" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="phone-outgoing" className="mr-2"/> phone-outgoing</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="phone" className="mr-2"/> phone</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="pie-chart" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="pie-chart" className="mr-2"/> pie-chart</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="play-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="play-circle" className="mr-2"/> play-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="play" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="play" className="mr-2"/> play</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="plus-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="plus-circle" className="mr-2"/> plus-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="plus-square" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="plus-square" className="mr-2"/> plus-square</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="plus" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="plus" className="mr-2"/> plus</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="pocket" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="pocket" className="mr-2"/> pocket</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="power" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="power" className="mr-2"/> power</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="printer" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="printer" className="mr-2"/> printer</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="radio" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="radio" className="mr-2"/> radio</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="refresh-ccw" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="refresh-ccw" className="mr-2"/> refresh-ccw</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="refresh-cw" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="refresh-cw" className="mr-2"/> refresh-cw</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="repeat" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="repeat" className="mr-2"/> repeat</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="rewind" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="rewind" className="mr-2"/> rewind</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="rotate-ccw" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="rotate-ccw" className="mr-2"/> rotate-ccw</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="rotate-cw" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="rotate-cw" className="mr-2"/> rotate-cw</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="rss" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="rss" className="mr-2"/> rss</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="save" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="save" className="mr-2"/> save</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="scissors" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="scissors" className="mr-2"/> scissors</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="search" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="search" className="mr-2"/> search</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="send" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="send" className="mr-2"/> send</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="server" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="server" className="mr-2"/> server</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="settings" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="settings" className="mr-2"/> settings</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="share-2" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="share-2" className="mr-2"/> share-2</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="share" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="share" className="mr-2"/> share</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shield-off" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="shield-off" className="mr-2"/> shield-off</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shield" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="shield" className="mr-2"/> shield</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shopping-bag" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="shopping-bag" className="mr-2"/> shopping-bag</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shopping-cart" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="shopping-cart" className="mr-2"/> shopping-cart</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shuffle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="shuffle" className="mr-2"/> shuffle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="sidebar" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="sidebar" className="mr-2"/> sidebar</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="skip-back" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="skip-back" className="mr-2"/> skip-back</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="skip-forward" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="skip-forward" className="mr-2"/> skip-forward</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="slack" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="slack" className="mr-2"/> slack</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="slash" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="slash" className="mr-2"/> slash</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="sliders" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="sliders" className="mr-2"/> sliders</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="smartphone" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="smartphone" className="mr-2"/> smartphone</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="smile" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="smile" className="mr-2"/> smile</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="speaker" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="speaker" className="mr-2"/> speaker</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="square" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="square" className="mr-2"/> square</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="star" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="star" className="mr-2"/> star</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="stop-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="stop-circle" className="mr-2"/> stop-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="sun" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="sun" className="mr-2"/> sun</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="sunrise" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="sunrise" className="mr-2"/> sunrise</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="sunset" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="sunset" className="mr-2"/> sunset</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="tablet" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="tablet" className="mr-2"/> tablet</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="tag" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="tag" className="mr-2"/> tag</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="target" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="target" className="mr-2"/> target</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="terminal" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="terminal" className="mr-2"/> terminal</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="thermometer" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="thermometer" className="mr-2"/> thermometer</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="thumbs-down" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="thumbs-down" className="mr-2"/> thumbs-down</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="thumbs-up" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="thumbs-up" className="mr-2"/> thumbs-up</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="toggle-left" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="toggle-left" className="mr-2"/> toggle-left</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="toggle-right" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="toggle-right" className="mr-2"/> toggle-right</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="tool" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="tool" className="mr-2"/> tool</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="trash-2" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="trash-2" className="mr-2"/> trash-2</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="trash" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="trash" className="mr-2"/> trash</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="trello" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="trello" className="mr-2"/> trello</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="trending-down" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="trending-down" className="mr-2"/> trending-down</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="trending-up" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="trending-up" className="mr-2"/> trending-up</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="triangle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="triangle" className="mr-2"/> triangle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="truck" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="truck" className="mr-2"/> truck</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="tv" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="tv" className="mr-2"/> tv</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="twitch" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="twitch" className="mr-2"/> twitch</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="twitter" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="twitter" className="mr-2"/> twitter</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="type" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="type" className="mr-2"/> type</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="umbrella" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="umbrella" className="mr-2"/> umbrella</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="underline" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="underline" className="mr-2"/> underline</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="unlock" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="unlock" className="mr-2"/> unlock</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="upload-cloud" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="upload-cloud" className="mr-2"/> upload-cloud</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="upload" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="upload" className="mr-2"/> upload</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="user-check" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="user-check" className="mr-2"/> user-check</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="user-minus" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="user-minus" className="mr-2"/> user-minus</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="user-plus" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="user-plus" className="mr-2"/> user-plus</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="user-x" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="user-x" className="mr-2"/> user-x</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="user" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="user" className="mr-2"/> user</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="users" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="users" className="mr-2"/> users</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="video-off" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="video-off" className="mr-2"/> video-off</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="video" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="video" className="mr-2"/> video</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="voicemail" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="voicemail" className="mr-2"/> voicemail</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="volume-1" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="volume-1" className="mr-2"/> volume-1</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="volume-2" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="volume-2" className="mr-2"/> volume-2</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="volume-x" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="volume-x" className="mr-2"/> volume-x</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="volume" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="volume" className="mr-2"/> volume</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="watch" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="watch" className="mr-2"/> watch</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="wifi-off" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="wifi-off" className="mr-2"/> wifi-off</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="wifi" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="wifi" className="mr-2"/> wifi</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="wind" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="wind" className="mr-2"/> wind</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="x-circle" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="x-circle" className="mr-2"/> x-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="x-octagon" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="x-octagon" className="mr-2"/> x-octagon</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="x-square" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="x-square" className="mr-2"/> x-square</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="x" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="x" className="mr-2"/> x</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="youtube" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="youtube" className="mr-2"/> youtube</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="zap-off" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="zap-off" className="mr-2"/> zap-off</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="zap" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="zap" className="mr-2"/> zap</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="zoom-in" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="zoom-in" className="mr-2"/> zoom-in</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="zoom-out" className=""/>'}>
            <div className="pointer radius-10 p-2 hover-md"><i data-feather="zoom-out" className="mr-2"/> zoom-out</div>
          </Copy>
        </div>
      </div>
      <h4 className="border-bottom border-1 pb-2 mt-5 text-primary">Icon Dual</h4>
      <div className="row icons-list">
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="activity" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="activity" className="icon-dual text-muted mr-2"/> activity </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="airplay" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="airplay" className="icon-dual text-muted mr-2"/> airplay </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="alert-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="alert-circle" className="icon-dual text-muted mr-2"/> alert-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="alert-octagon" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="alert-octagon" className="icon-dual text-muted mr-2"/> alert-octagon </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="alert-triangle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="alert-triangle" className="icon-dual text-muted mr-2"/> alert-triangle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="align-center" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="align-center" className="icon-dual text-muted mr-2"/> align-center </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="align-justify" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="align-justify" className="icon-dual text-muted mr-2"/> align-justify </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="align-left" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="align-left" className="icon-dual text-muted mr-2"/> align-left </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="align-right" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="align-right" className="icon-dual text-muted mr-2"/> align-right </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="anchor" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="anchor" className="icon-dual text-muted mr-2"/> anchor </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="aperture" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="aperture" className="icon-dual text-muted mr-2"/> aperture </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="archive" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="archive" className="icon-dual text-muted mr-2"/> archive </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-down-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-down-circle" className="icon-dual text-muted mr-2"/> arrow-down-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-down-left" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-down-left" className="icon-dual text-muted mr-2"/> arrow-down-left </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-down-right" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-down-right" className="icon-dual text-muted mr-2"/> arrow-down-right </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-down" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-down" className="icon-dual text-muted mr-2"/> arrow-down </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-left-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-left-circle" className="icon-dual text-muted mr-2"/> arrow-left-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-left" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-left" className="icon-dual text-muted mr-2"/> arrow-left </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-right-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-right-circle" className="icon-dual text-muted mr-2"/> arrow-right-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-right" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-right" className="icon-dual text-muted mr-2"/> arrow-right </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-up-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-up-circle" className="icon-dual text-muted mr-2"/> arrow-up-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-up-left" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-up-left" className="icon-dual text-muted mr-2"/> arrow-up-left </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-up-right" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-up-right" className="icon-dual text-muted mr-2"/> arrow-up-right </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="arrow-up" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="arrow-up" className="icon-dual text-muted mr-2"/> arrow-up </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="at-sign" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="at-sign" className="icon-dual text-muted mr-2"/> at-sign </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="award" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="award" className="icon-dual text-muted mr-2"/> award </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bar-chart-2" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="bar-chart-2" className="icon-dual text-muted mr-2"/> bar-chart-2 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bar-chart" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="bar-chart" className="icon-dual text-muted mr-2"/> bar-chart </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="battery-charging" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="battery-charging" className="icon-dual text-muted mr-2"/> battery-charging </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="battery" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="battery" className="icon-dual text-muted mr-2"/> battery </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bell-off" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="bell-off" className="icon-dual text-muted mr-2"/> bell-off </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bell" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="bell" className="icon-dual text-muted mr-2"/> bell </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bluetooth" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="bluetooth" className="icon-dual text-muted mr-2"/> bluetooth </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bold" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="bold" className="icon-dual text-muted mr-2"/> bold </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="book-open" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="book-open" className="icon-dual text-muted mr-2"/> book-open </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="book" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="book" className="icon-dual text-muted mr-2"/> book </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="bookmark" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="bookmark" className="icon-dual text-muted mr-2"/> bookmark </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="box" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="box" className="icon-dual text-muted mr-2"/> box </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="briefcase" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="briefcase" className="icon-dual text-muted mr-2"/> briefcase </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="calendar" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="calendar" className="icon-dual text-muted mr-2"/> calendar </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="camera-off" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="camera-off" className="icon-dual text-muted mr-2"/> camera-off </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="camera" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="camera" className="icon-dual text-muted mr-2"/> camera </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cast" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="cast" className="icon-dual text-muted mr-2"/> cast </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="check-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="check-circle" className="icon-dual text-muted mr-2"/> check-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="check-square" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="check-square" className="icon-dual text-muted mr-2"/> check-square </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="check" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="check" className="icon-dual text-muted mr-2"/> check </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevron-down" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="chevron-down" className="icon-dual text-muted mr-2"/> chevron-down </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevron-left" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="chevron-left" className="icon-dual text-muted mr-2"/> chevron-left </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevron-right" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="chevron-right" className="icon-dual text-muted mr-2"/> chevron-right </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevron-up" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="chevron-up" className="icon-dual text-muted mr-2"/> chevron-up </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevrons-down" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="chevrons-down" className="icon-dual text-muted mr-2"/> chevrons-down </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevrons-left" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="chevrons-left" className="icon-dual text-muted mr-2"/> chevrons-left </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevrons-right" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="chevrons-right" className="icon-dual text-muted mr-2"/> chevrons-right </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chevrons-up" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="chevrons-up" className="icon-dual text-muted mr-2"/> chevrons-up </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="chrome" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="chrome" className="icon-dual text-muted mr-2"/> chrome </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="circle" className="icon-dual text-muted mr-2"/> circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="clipboard" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="clipboard" className="icon-dual text-muted mr-2"/> clipboard </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="clock" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="clock" className="icon-dual text-muted mr-2"/> clock </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud-drizzle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="cloud-drizzle" className="icon-dual text-muted mr-2"/> cloud-drizzle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud-lightning" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="cloud-lightning" className="icon-dual text-muted mr-2"/> cloud-lightning </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud-off" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="cloud-off" className="icon-dual text-muted mr-2"/> cloud-off </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud-rain" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="cloud-rain" className="icon-dual text-muted mr-2"/> cloud-rain </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud-snow" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="cloud-snow" className="icon-dual text-muted mr-2"/> cloud-snow </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cloud" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="cloud" className="icon-dual text-muted mr-2"/> cloud </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="code" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="code" className="icon-dual text-muted mr-2"/> code </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="codepen" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="codepen" className="icon-dual text-muted mr-2"/> codepen </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="codesandbox" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="codesandbox" className="icon-dual text-muted mr-2"/> codesandbox </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="coffee" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="coffee" className="icon-dual text-muted mr-2"/> coffee </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="columns" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="columns" className="icon-dual text-muted mr-2"/> columns </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="command" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="command" className="icon-dual text-muted mr-2"/> command </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="compass" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="compass" className="icon-dual text-muted mr-2"/> compass </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="copy" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="copy" className="icon-dual text-muted mr-2"/> copy </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-down-left" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="corner-down-left" className="icon-dual text-muted mr-2"/> corner-down-left </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-down-right" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="corner-down-right" className="icon-dual text-muted mr-2"/> corner-down-right </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-left-down" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="corner-left-down" className="icon-dual text-muted mr-2"/> corner-left-down </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-left-up" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="corner-left-up" className="icon-dual text-muted mr-2"/> corner-left-up </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-right-down" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="corner-right-down" className="icon-dual text-muted mr-2"/> corner-right-down </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-right-up" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="corner-right-up" className="icon-dual text-muted mr-2"/> corner-right-up </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-up-left" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="corner-up-left" className="icon-dual text-muted mr-2"/> corner-up-left </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="corner-up-right" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="corner-up-right" className="icon-dual text-muted mr-2"/> corner-up-right </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="cpu" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="cpu" className="icon-dual text-muted mr-2"/> cpu </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="credit-card" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="credit-card" className="icon-dual text-muted mr-2"/> credit-card </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="crop" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="crop" className="icon-dual text-muted mr-2"/> crop </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="crosshair" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="crosshair" className="icon-dual text-muted mr-2"/> crosshair </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="database" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="database" className="icon-dual text-muted mr-2"/> database </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="delete" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="delete" className="icon-dual text-muted mr-2"/> delete </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="disc" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="disc" className="icon-dual text-muted mr-2"/> disc </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="dollar-sign" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="dollar-sign" className="icon-dual text-muted mr-2"/> dollar-sign </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="download-cloud" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="download-cloud" className="icon-dual text-muted mr-2"/> download-cloud </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="download" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="download" className="icon-dual text-muted mr-2"/> download </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="droplet" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="droplet" className="icon-dual text-muted mr-2"/> droplet </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="edit-2" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="edit-2" className="icon-dual text-muted mr-2"/> edit-2 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="edit-3" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="edit-3" className="icon-dual text-muted mr-2"/> edit-3 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="edit" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="edit" className="icon-dual text-muted mr-2"/> edit </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="external-link" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="external-link" className="icon-dual text-muted mr-2"/> external-link </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="eye-off" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="eye-off" className="icon-dual text-muted mr-2"/> eye-off </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="eye" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="eye" className="icon-dual text-muted mr-2"/> eye </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="facebook" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="facebook" className="icon-dual text-muted mr-2"/> facebook </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="fast-forward" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="fast-forward" className="icon-dual text-muted mr-2"/> fast-forward </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="feather" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="feather" className="icon-dual text-muted mr-2"/> feather </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="figma" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="figma" className="icon-dual text-muted mr-2"/> figma </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="file-minus" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="file-minus" className="icon-dual text-muted mr-2"/> file-minus </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="file-plus" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="file-plus" className="icon-dual text-muted mr-2"/> file-plus </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="file-text" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="file-text" className="icon-dual text-muted mr-2"/> file-text </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="file" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="file" className="icon-dual text-muted mr-2"/> file </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="film" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="film" className="icon-dual text-muted mr-2"/> film </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="filter" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="filter" className="icon-dual text-muted mr-2"/> filter </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="flag" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="flag" className="icon-dual text-muted mr-2"/> flag </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="folder-minus" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="folder-minus" className="icon-dual text-muted mr-2"/> folder-minus </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="folder-plus" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="folder-plus" className="icon-dual text-muted mr-2"/> folder-plus </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="folder" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="folder" className="icon-dual text-muted mr-2"/> folder </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="framer" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="framer" className="icon-dual text-muted mr-2"/> framer </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="frown" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="frown" className="icon-dual text-muted mr-2"/> frown </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="gift" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="gift" className="icon-dual text-muted mr-2"/> gift </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="git-branch" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="git-branch" className="icon-dual text-muted mr-2"/> git-branch </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="git-commit" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="git-commit" className="icon-dual text-muted mr-2"/> git-commit </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="git-merge" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="git-merge" className="icon-dual text-muted mr-2"/> git-merge </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="git-pull-request" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="git-pull-request" className="icon-dual text-muted mr-2"/> git-pull-request </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="github" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="github" className="icon-dual text-muted mr-2"/> github </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="gitlab" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="gitlab" className="icon-dual text-muted mr-2"/> gitlab </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="globe" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="globe" className="icon-dual text-muted mr-2"/> globe </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="grid" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="grid" className="icon-dual text-muted mr-2"/> grid </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="hard-drive" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="hard-drive" className="icon-dual text-muted mr-2"/> hard-drive </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="hash" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="hash" className="icon-dual text-muted mr-2"/> hash </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="headphones" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="headphones" className="icon-dual text-muted mr-2"/> headphones </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="heart" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="heart" className="icon-dual text-muted mr-2"/> heart </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="help-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="help-circle" className="icon-dual text-muted mr-2"/> help-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="hexagon" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="hexagon" className="icon-dual text-muted mr-2"/> hexagon </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="home" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="home" className="icon-dual text-muted mr-2"/> home </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="image" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="image" className="icon-dual text-muted mr-2"/> image </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="inbox" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="inbox" className="icon-dual text-muted mr-2"/> inbox </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="info" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="info" className="icon-dual text-muted mr-2"/> info </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="instagram" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="instagram" className="icon-dual text-muted mr-2"/> instagram </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="italic" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="italic" className="icon-dual text-muted mr-2"/> italic </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="key" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="key" className="icon-dual text-muted mr-2"/> key </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="layers" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="layers" className="icon-dual text-muted mr-2"/> layers </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="layout" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="layout" className="icon-dual text-muted mr-2"/> layout </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="life-buoy" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="life-buoy" className="icon-dual text-muted mr-2"/> life-buoy </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="link-2" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="link-2" className="icon-dual text-muted mr-2"/> link-2 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="link" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="link" className="icon-dual text-muted mr-2"/> link </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="linkedin" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="linkedin" className="icon-dual text-muted mr-2"/> linkedin </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="list" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="list" className="icon-dual text-muted mr-2"/> list </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="loader" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="loader" className="icon-dual text-muted mr-2"/> loader </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="lock" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="lock" className="icon-dual text-muted mr-2"/> lock </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="log-in" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="log-in" className="icon-dual text-muted mr-2"/> log-in </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="log-out" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="log-out" className="icon-dual text-muted mr-2"/> log-out </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="mail" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="mail" className="icon-dual text-muted mr-2"/> mail </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="map-pin" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="map-pin" className="icon-dual text-muted mr-2"/> map-pin </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="map" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="map" className="icon-dual text-muted mr-2"/> map </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="maximize-2" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="maximize-2" className="icon-dual text-muted mr-2"/> maximize-2 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="maximize" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="maximize" className="icon-dual text-muted mr-2"/> maximize </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="meh" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="meh" className="icon-dual text-muted mr-2"/> meh </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="menu" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="menu" className="icon-dual text-muted mr-2"/> menu </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="message-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="message-circle" className="icon-dual text-muted mr-2"/> message-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="message-square" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="message-square" className="icon-dual text-muted mr-2"/> message-square </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="mic-off" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="mic-off" className="icon-dual text-muted mr-2"/> mic-off </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="mic" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="mic" className="icon-dual text-muted mr-2"/> mic </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="minimize-2" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="minimize-2" className="icon-dual text-muted mr-2"/> minimize-2 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="minimize" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="minimize" className="icon-dual text-muted mr-2"/> minimize </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="minus-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="minus-circle" className="icon-dual text-muted mr-2"/> minus-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="minus-square" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="minus-square" className="icon-dual text-muted mr-2"/> minus-square </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="minus" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="minus" className="icon-dual text-muted mr-2"/> minus </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="monitor" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="monitor" className="icon-dual text-muted mr-2"/> monitor </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="moon" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="moon" className="icon-dual text-muted mr-2"/> moon </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="more-horizontal" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="more-horizontal" className="icon-dual text-muted mr-2"/> more-horizontal </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="more-vertical" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="more-vertical" className="icon-dual text-muted mr-2"/> more-vertical </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="mouse-pointer" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="mouse-pointer" className="icon-dual text-muted mr-2"/> mouse-pointer </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="move" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="move" className="icon-dual text-muted mr-2"/> move </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="music" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="music" className="icon-dual text-muted mr-2"/> music </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="navigation-2" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="navigation-2" className="icon-dual text-muted mr-2"/> navigation-2 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="navigation" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="navigation" className="icon-dual text-muted mr-2"/> navigation </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="octagon" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="octagon" className="icon-dual text-muted mr-2"/> octagon </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="package" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="package" className="icon-dual text-muted mr-2"/> package </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="paperclip" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="paperclip" className="icon-dual text-muted mr-2"/> paperclip </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="pause-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="pause-circle" className="icon-dual text-muted mr-2"/> pause-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="pause" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="pause" className="icon-dual text-muted mr-2"/> pause </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="pen-tool" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="pen-tool" className="icon-dual text-muted mr-2"/> pen-tool </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="percent" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="percent" className="icon-dual text-muted mr-2"/> percent </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-call" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="phone-call" className="icon-dual text-muted mr-2"/> phone-call </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-forwarded" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="phone-forwarded" className="icon-dual text-muted mr-2"/> phone-forwarded </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-incoming" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="phone-incoming" className="icon-dual text-muted mr-2"/> phone-incoming </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-missed" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="phone-missed" className="icon-dual text-muted mr-2"/> phone-missed </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-off" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="phone-off" className="icon-dual text-muted mr-2"/> phone-off </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone-outgoing" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="phone-outgoing" className="icon-dual text-muted mr-2"/> phone-outgoing </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="phone" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="phone" className="icon-dual text-muted mr-2"/> phone </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="pie-chart" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="pie-chart" className="icon-dual text-muted mr-2"/> pie-chart </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="play-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="play-circle" className="icon-dual text-muted mr-2"/> play-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="play" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="play" className="icon-dual text-muted mr-2"/> play </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="plus-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="plus-circle" className="icon-dual text-muted mr-2"/> plus-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="plus-square" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="plus-square" className="icon-dual text-muted mr-2"/> plus-square </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="plus" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="plus" className="icon-dual text-muted mr-2"/> plus </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="pocket" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="pocket" className="icon-dual text-muted mr-2"/> pocket </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="power" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="power" className="icon-dual text-muted mr-2"/> power </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="printer" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="printer" className="icon-dual text-muted mr-2"/> printer </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="radio" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="radio" className="icon-dual text-muted mr-2"/> radio </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="refresh-ccw" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="refresh-ccw" className="icon-dual text-muted mr-2"/> refresh-ccw </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="refresh-cw" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="refresh-cw" className="icon-dual text-muted mr-2"/> refresh-cw </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="repeat" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="repeat" className="icon-dual text-muted mr-2"/> repeat </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="rewind" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="rewind" className="icon-dual text-muted mr-2"/> rewind </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="rotate-ccw" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="rotate-ccw" className="icon-dual text-muted mr-2"/> rotate-ccw </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="rotate-cw" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="rotate-cw" className="icon-dual text-muted mr-2"/> rotate-cw </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="rss" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="rss" className="icon-dual text-muted mr-2"/> rss </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="save" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="save" className="icon-dual text-muted mr-2"/> save </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="scissors" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="scissors" className="icon-dual text-muted mr-2"/> scissors </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="search" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="search" className="icon-dual text-muted mr-2"/> search </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="send" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="send" className="icon-dual text-muted mr-2"/> send </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="server" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="server" className="icon-dual text-muted mr-2"/> server </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="settings" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="settings" className="icon-dual text-muted mr-2"/> settings </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="share-2" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="share-2" className="icon-dual text-muted mr-2"/> share-2 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="share" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="share" className="icon-dual text-muted mr-2"/> share </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shield-off" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="shield-off" className="icon-dual text-muted mr-2"/> shield-off </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shield" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="shield" className="icon-dual text-muted mr-2"/> shield </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shopping-bag" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="shopping-bag" className="icon-dual text-muted mr-2"/> shopping-bag </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shopping-cart" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="shopping-cart" className="icon-dual text-muted mr-2"/> shopping-cart </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shuffle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="shuffle" className="icon-dual text-muted mr-2"/> shuffle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="sidebar" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="sidebar" className="icon-dual text-muted mr-2"/> sidebar </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="skip-back" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="skip-back" className="icon-dual text-muted mr-2"/> skip-back </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="skip-forward" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="skip-forward" className="icon-dual text-muted mr-2"/> skip-forward </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="slack" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="slack" className="icon-dual text-muted mr-2"/> slack </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="slash" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="slash" className="icon-dual text-muted mr-2"/> slash </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="sliders" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="sliders" className="icon-dual text-muted mr-2"/> sliders </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="smartphone" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="smartphone" className="icon-dual text-muted mr-2"/> smartphone </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="smile" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="smile" className="icon-dual text-muted mr-2"/> smile </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="speaker" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="speaker" className="icon-dual text-muted mr-2"/> speaker </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="square" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="square" className="icon-dual text-muted mr-2"/> square </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="star" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="star" className="icon-dual text-muted mr-2"/> star </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="stop-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="stop-circle" className="icon-dual text-muted mr-2"/> stop-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="sun" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="sun" className="icon-dual text-muted mr-2"/> sun </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="sunrise" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="sunrise" className="icon-dual text-muted mr-2"/> sunrise </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="sunset" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="sunset" className="icon-dual text-muted mr-2"/> sunset </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="tablet" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="tablet" className="icon-dual text-muted mr-2"/> tablet </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="tag" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="tag" className="icon-dual text-muted mr-2"/> tag </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="target" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="target" className="icon-dual text-muted mr-2"/> target </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="terminal" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="terminal" className="icon-dual text-muted mr-2"/> terminal </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="thermometer" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="thermometer" className="icon-dual text-muted mr-2"/> thermometer </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="thumbs-down" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="thumbs-down" className="icon-dual text-muted mr-2"/> thumbs-down </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="thumbs-up" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="thumbs-up" className="icon-dual text-muted mr-2"/> thumbs-up </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="toggle-left" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="toggle-left" className="icon-dual text-muted mr-2"/> toggle-left </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="toggle-right" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="toggle-right" className="icon-dual text-muted mr-2"/> toggle-right </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="tool" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="tool" className="icon-dual text-muted mr-2"/> tool </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="trash-2" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="trash-2" className="icon-dual text-muted mr-2"/> trash-2 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="trash" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="trash" className="icon-dual text-muted mr-2"/> trash </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="trello" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="trello" className="icon-dual text-muted mr-2"/> trello </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="trending-down" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="trending-down" className="icon-dual text-muted mr-2"/> trending-down </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="trending-up" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="trending-up" className="icon-dual text-muted mr-2"/> trending-up </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="triangle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="triangle" className="icon-dual text-muted mr-2"/> triangle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="truck" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="truck" className="icon-dual text-muted mr-2"/> truck </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="tv" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="tv" className="icon-dual text-muted mr-2"/> tv </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="twitch" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="twitch" className="icon-dual text-muted mr-2"/> twitch </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="twitter" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="twitter" className="icon-dual text-muted mr-2"/> twitter </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="type" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="type" className="icon-dual text-muted mr-2"/> type </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="umbrella" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="umbrella" className="icon-dual text-muted mr-2"/> umbrella </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="underline" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="underline" className="icon-dual text-muted mr-2"/> underline </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="unlock" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="unlock" className="icon-dual text-muted mr-2"/> unlock </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="upload-cloud" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="upload-cloud" className="icon-dual text-muted mr-2"/> upload-cloud </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="upload" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="upload" className="icon-dual text-muted mr-2"/> upload </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="user-check" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="user-check" className="icon-dual text-muted mr-2"/> user-check </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="user-minus" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="user-minus" className="icon-dual text-muted mr-2"/> user-minus </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="user-plus" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="user-plus" className="icon-dual text-muted mr-2"/> user-plus </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="user-x" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="user-x" className="icon-dual text-muted mr-2"/> user-x </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="user" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="user" className="icon-dual text-muted mr-2"/> user </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="users" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="users" className="icon-dual text-muted mr-2"/> users </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="video-off" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="video-off" className="icon-dual text-muted mr-2"/> video-off </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="video" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="video" className="icon-dual text-muted mr-2"/> video </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="voicemail" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="voicemail" className="icon-dual text-muted mr-2"/> voicemail </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="volume-1" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="volume-1" className="icon-dual text-muted mr-2"/> volume-1 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="volume-2" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="volume-2" className="icon-dual text-muted mr-2"/> volume-2 </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="volume-x" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="volume-x" className="icon-dual text-muted mr-2"/> volume-x </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="volume" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="volume" className="icon-dual text-muted mr-2"/> volume </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="watch" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="watch" className="icon-dual text-muted mr-2"/> watch </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="wifi-off" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="wifi-off" className="icon-dual text-muted mr-2"/> wifi-off </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="wifi" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="wifi" className="icon-dual text-muted mr-2"/> wifi </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="wind" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="wind" className="icon-dual text-muted mr-2"/> wind </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="x-circle" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="x-circle" className="icon-dual text-muted mr-2"/> x-circle </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="x-octagon" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="x-octagon" className="icon-dual text-muted mr-2"/> x-octagon </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="x-square" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="x-square" className="icon-dual text-muted mr-2"/> x-square </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="x" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="x" className="icon-dual text-muted mr-2"/> x </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="youtube" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="youtube" className="icon-dual text-muted mr-2"/> youtube </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="zap-off" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="zap-off" className="icon-dual text-muted mr-2"/> zap-off </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="zap" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="zap" className="icon-dual text-muted mr-2"/> zap </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="zoom-in" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="zoom-in" className="icon-dual text-muted mr-2"/> zoom-in </div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="zoom-out" className="icon-dual text-muted"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="zoom-out" className="icon-dual text-muted mr-2"/> zoom-out </div>
          </Copy>
        </div>
      </div>
      <h4 className="border-bottom border-1 pb-2 mt-5 text-primary">Icon Color</h4>
      <div className="row icons-list">
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="activity" className="icon-dual-primary"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="activity" className="icon-dual-primary mr-2"/> activity</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="airplay" className="icon-dual-success"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="airplay" className="icon-dual-success mr-2"/> airplay</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="alert-circle" className="icon-dual-danger"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="alert-circle" className="icon-dual-danger mr-2"/> alert-circle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="alert-octagon" className="icon-dual-info"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="alert-octagon" className="icon-dual-info mr-2"/> alert-octagon</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="alert-triangle" className="icon-dual-warning"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="alert-triangle" className="icon-dual-warning mr-2"/> alert-triangle</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="anchor" className="icon-dual-dark"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="anchor" className="icon-dual-dark mr-2"/> anchor</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="aperture" className="icon-dual-primary"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="aperture" className="icon-dual-primary mr-2"/> aperture</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="archive" className="icon-dual-success"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="archive" className="icon-dual-success mr-2"/> archive</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="clock" className="icon-dual-danger"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="clock" className="icon-dual-danger mr-2"/> clock</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="shopping-bag" className="icon-dual-info"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="shopping-bag" className="icon-dual-info mr-2"/> shopping-bag</div>
          </Copy>
        </div>
        <div className="col-lg-3 col-sm-6">
          <Copy text={'<i data-feather="printer" className="icon-dual-warning"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="printer" className="icon-dual-warning mr-2"/> printer</div>
          </Copy>
        </div>
      </div>
      <h4 className="border-bottom border-1 pb-2 mt-5 text-primary">Icon Size</h4>
      <div className="row icons-list">
        <div className="col-auto col-sm-6">
          <Copy text={'<i data-feather="airplay" className="icon-xs icon-dual"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="airplay" className="icon-xs icon-dual mr-2"/> Extra Small</div>
          </Copy>
        </div>
        <div className="col-auto col-sm-6">
          <Copy text={'<i data-feather="airplay" className="icon-sm icon-dual"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="airplay" className="icon-sm icon-dual mr-2"/> Small</div>
          </Copy>
        </div>
        <div className="col-auto col-sm-6">
          <Copy text={'<i data-feather="airplay" className="icon-lg icon-dual"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="airplay" className="icon-lg icon-dual mr-2"/> Large</div>
          </Copy>
        </div>
        <div className="col-auto col-sm-6">
          <Copy text={'<i data-feather="airplay" className="icon-xl icon-dual"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="airplay" className="icon-xl icon-dual mr-2"/> Extra Large</div>
          </Copy>
        </div>
        <div className="col-auto col-sm-6">
          <Copy text={'<i data-feather="airplay" className="icon-xxl icon-dual"/>'}>
            <div className="pointer radius-10 p-2 hover-md"> <i data-feather="airplay" className="icon-xxl icon-dual mr-2"/> Extra Extra Large</div>
          </Copy>
        </div>
      </div>
    </div>
  )
}

export default Index
