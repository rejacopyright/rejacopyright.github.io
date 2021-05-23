import React, {useState, useEffect} from 'react'
import { ClassicSpinner } from 'react-spinners-kit'

function Index(){
  const [loading, loadingSet] =  useState(true);
  useEffect(() => {
    setTimeout(() => loadingSet(false), 1000);
  }, []);
  return(
    <div className="container-fluid pt-3">
      { loading && <div className="overlay center"><ClassicSpinner color="#5369f8" loading={loading} /></div> }
    </div>
  )
}

export default Index
