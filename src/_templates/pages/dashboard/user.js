import React from 'react'

function User(props){
  return (
    <div className={`${props.divClass}`}>
      <div className="card mb-2 shadow-sm">
        <div className="card-body p-0">
          <div className="media p-3">
            <div className="media-body lh-1 text-7 text-nowrap">
              <div className="text-secondary text-uppercase f-700 border-bottom border-gray pb-1">{props.title}</div>
              <div className="d-flex align-items-center mt-2">
                <h2 className={`my-0 text-${props.theme || 'muted'}`}>{props.value}</h2>
                <div className={`icon-lg icon-dual-${props.theme || 'muted'} ml-auto bg-soft-${props.theme || 'muted'} p-1 radius-20`} data-feather={`${props.icon || 'check'}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;
