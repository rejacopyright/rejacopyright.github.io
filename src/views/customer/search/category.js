import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import category from 'views/category'
import {Topbar} from '_el/topbar'
import {Inputicon} from '_components/form'

function Index(){
  return(
    <Fragment>
      <Topbar>
        <div className="row m-0">
          <div className="col px-0" >
            <Link to="/explore/search">
              <Inputicon readOnly name="name" rowClass="w-100" className="text-dark radius-10" placeholder="Pencarian..." icon={<i className="uil uil-search text-14 lh-1 pl-1"/>} />
            </Link>
          </div>
        </div>
      </Topbar>
      <div className="row m-0">
        {
          category.map((r, key) => (
            <div className="col-3 col-lg-2 text-center my-1" key={key}>
              <Link to="/explore/search">
                <div className="center pt-2 pb-1">
                  <div className="same-35 black-5 ppx-3 radius-10">
                    <img src={require(`_dummy/icons/${r.icon}`).default} className="w-100" alt=""/>
                  </div>
                </div>
                <p className="m-0 lh-1 text-8 truncate-1 text-dark f-600">{r.name}</p>
              </Link>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}

export default Index
