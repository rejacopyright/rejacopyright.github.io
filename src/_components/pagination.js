import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Generate(n, f){
  return Array(n).fill().map((v, i) => (f || 1)+i);
}
function Index(props){
  const [page, pageSet] = useState(1);
  useEffect(() => {
    pageSet(props.currentPage);
  }, [props.currentPage]);
  if (props.lastPage === 1) {
    return true;
  }
  return(
    <div className={`row justify-content-${props.align || 'center'}`}>
      {
        ((props.lastPage > 10 && page >= 7) || (props.lastPage === 11 && page === 6)) &&
        <Fragment>
          <div className="col-auto px-1">{console.log('kondisi 1')}<button type="button" onClick={() => props.onClick(1)} className={`center same-25 btn ${page === 1 ? 'btn-soft-primary' : 'btn-white'} oh rounded-circle text-7 f-700`}>1</button></div>
          <div className="col-auto px-1"><button type="button" onClick={() => props.onClick(2)} className={`center same-25 btn ${page === 2 ? 'btn-soft-primary' : 'btn-white'} oh rounded-circle text-7 f-700`}>2</button></div>
          <div className="col-auto px-0"><span className="center same-25 oh text-7 f-700">...</span></div>
        </Fragment>
      }
      {
        (props.lastPage > 10 && page >= 7 && page < (props.lastPage - 5)) ?
        Generate(7, page - 3).map(key => (
          <div className="col-auto px-1" key={key}>{console.log('kondisi 2')}<button type="button" onClick={() => props.onClick(key)} className={`center same-25 btn ${page === key ? 'btn-soft-primary' : 'btn-white'} oh rounded-circle text-7 f-700`}>{key}</button></div>
        ))
        :
        (props.lastPage > 10 && page >= (props.lastPage - 5)) ?
        Generate(5, props.lastPage - 6).map(key => (
          <div className="col-auto px-1" key={key}>{console.log('kondisi 3')}<button type="button" onClick={() => props.onClick(key)} className={`center same-25 btn ${page === key ? 'btn-soft-primary' : 'btn-white'} oh rounded-circle text-7 f-700`}>{key}</button></div>
        ))
        :
        Generate(props.lastPage > 10 ? 7 : props.lastPage).map(key => (
          <div className="col-auto px-1" key={key}>{console.log('kondisi 4')}<button type="button" onClick={() => props.onClick(key)} className={`center same-25 btn ${page === key ? 'btn-soft-primary' : 'btn-white'} oh rounded-circle text-7 f-700`}>{key}</button></div>
        ))
      }
      {
        (props.lastPage > 10) && (
          <Fragment>
            {(page < (props.lastPage - 5)) && <div className="col-auto px-0"><span className="center same-25 oh text-7 f-700">...</span></div>}
            <div className="col-auto px-1"><button type="button" onClick={() => props.onClick(props.lastPage-1)} className={`center same-25 btn ${page === props.lastPage-1 ? 'btn-soft-primary' : 'btn-white'} oh rounded-circle text-7 f-700`}>{props.lastPage-1}</button></div>
            <div className="col-auto px-1"><button type="button" onClick={() => props.onClick(props.lastPage)} className={`center same-25 btn ${page === props.lastPage ? 'btn-soft-primary' : 'btn-white'} oh rounded-circle text-7 f-700`}>{props.lastPage}</button></div>
          </Fragment>
        )
      }
    </div>
  )
}
// PropTypes
Index.propTypes = {
  // currentPage: PropTypes.any.isRequired,
  // lastPage: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired,
}
export default Index
