import React, { useState, useEffect } from 'react'
import Pagination from '_components/pagination'

function Index(){
  const perpage = 5
  const [pagination, paginationSet] = useState({
    from: 1,
    current_page: 5,
    last_page: 20,
  })
  useEffect(() => {
    document.title = 'Pagination'
  }, [])
  function paginate(e){
    // console.log(e)
    paginationSet({
      ...pagination,
      current_page: e,
    })
  }
  return (
    <div className="container-fluid">
      <div className="row mx-0 mt-3">
        <div className="col-12">
          <div className="border-bottom border-2 mb-3 py-2">
            <div className="center-left">
              <h6 className="header-title"> Current Page </h6>
              <h5 className="ml-1 bold my-0"> | {pagination.current_page}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-12 mb-3">
          <ol start={((pagination.current_page - 1)*(perpage)) + 1} className="px-3">
            {
              Array(perpage).fill().map( (r, key) => (
                <li key={key} className="p-2 text-10 bold">
                  Lorem ipsum dolor sit amet.
                </li>
              ))
            }
          </ol>
        </div>
        <div className="col-12 text-center border-top border-2 pt-3">
          <Pagination currentPage={pagination.current_page} lastPage={pagination.last_page} onClick={paginate} />
        </div>
      </div>
      <div className="row mx-0 mt-3">
        <div className="col-12"> <h6 className="header-title border-top border-bottom border-2 py-2"> Props </h6> </div>
        <div className="col-12 text-10 i bold">
          <h6 className="m-0 lh-2"><span className="bold">(xs, sm, md, lg)</span> => (Props) | Size of Pagination Button. Default "sm"</h6>
          <h6 className="m-0 lh-2"><span className="bold">align</span> => (String) | Pagination Position | Value <span className="bold">("start", "center", "end")</span>, Default "center"</h6>
          <h6 className="m-0 lh-2"><span className="bold">currentPage</span> => (Number) | Init & Set Active Page</h6>
          <h6 className="m-0 lh-2"><span className="bold">lastPage</span> => (Number) | Total of Pages</h6>
          <h6 className="m-0 lh-2"><span className="bold">onClick</span> => (Function) | Click Event</h6>
        </div>
      </div>
    </div>
  )
}

export default Index
