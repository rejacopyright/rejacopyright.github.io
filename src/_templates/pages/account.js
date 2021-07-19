import React, { useState, useEffect } from 'react'
import Pagination from '_components/pagination'

function Index(){
  const [page, pageSet] = useState(1);
  const [pagination, paginationSet] = useState({
    from: 1,
    current_page: 1,
    last_page: 50,
  });
  useEffect(() => {
    document.title = 'My Account';
  }, []);
  function paginate(e){
    console.log(e);
    pageSet(e);
    paginationSet({
      ...pagination,
      current_page: e,
    });
  }
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              Test... {page}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ol start={pagination.from}>
            {
              Array(10).fill().map( (r, key) => (
                <li key={key}>
                  <span className="mr-2 f-600">name</span>
                  <span className="text-muted text-8">({new Date().toString()})</span>
                </li>
              ))
            }
          </ol>
        </div>
        <div className="col-12 text-center"><Pagination currentPage={pagination.current_page} lastPage={pagination.last_page} onClick={paginate} /></div>
      </div>
    </div>
  )
}

export default Index
