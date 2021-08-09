import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Inputicon} from '_components/form'
import Alert from '_components/alert'
import axios from 'axios'
// INIT JS
function Login(props){
  const [loading, loadingSet] = useState(false)
  const [msg, msgSet] = useState(null)
  useEffect(() => {
    return () => {
      loadingSet(false)
      msgSet(null)
    }
  }, [])
  function login(e){
    e.preventDefault()
    loadingSet(true)
    if (props.username && props.password) {
      axios.post(`${process.env.REACT_APP_URI}/login`,{ username: props.username, password: props.password, }).then(res => {
        if (res.data.success) {
          props.dispatch({type:'LOGIN', ...res.data})
        }else {
          msgSet(res.data.message)
        }
      }).then(() => loadingSet(false))
    }else {
      msgSet('"Username" & "Password" harus di isi')
      loadingSet(false)
    }
  }
  return (
    <div className="account-pages">
      <div className="container m-0 w-100 mxw-unset">
        <div className="row center vh-100">
          <div className="col-12 p-0">
            <div className="card m-0 radius-30">
              <div className="card-body p-0">
                <div className="row flex-nowrap m-0">
                  <div className="col-md-7 d-none d-md-flex oh align-items-center justify-content-center border-right">
                    <img src={require(`${process.env.REACT_APP_IMAGES}/templates/1.png`).default} alt="" style={{height:'100vh'}}/>
                  </div>
                  <div className="col px-md-5 py-0 my-auto border-1">
                    <div className="text-center mb-3 px-md-4">
                      <img src={require(`${process.env.REACT_APP_IMAGES}/logo/logo.png`).default} className="mb-2 p-1 border border-pink radius-100" alt="" height={60} />
                      <h3 className="my-0 text-logo text-14">Woless <p className="m-0 f-600 text-7 text-muted lh-2">Best Wedding Organizer</p></h3>
                      <span className="center">
                      </span>
                    </div>
                    <div className="row m-0 px-md-4">
                      <div className="col-12">
                        <form action="#" className="authentication-form" onSubmit={login}>
                          <Inputicon onChange={e => props.dispatch({type:'USERNAME', value:e.target.value})} rowClass="w-100" className="text-dark radius-5 border" placeholder="Username" icon={<i className="uil uil-user lh-12 text-10 pl-1 o-5"/>} />
                          <Inputicon onChange={e => props.dispatch({type:'PASSWORD', value:e.target.value})} password rowClass="w-100 my-3" className="text-dark radius-5 border" placeholder="Password" icon={<i className="uil uil-padlock lh-12 text-10 pl-1 o-5"/>} />
                            {msg && <Alert theme="danger" icon="exclamation-circle" close> {msg} </Alert>}
                          <div className="form-group mb-0 text-center">
                            <button className="btn btn-danger bold btn-block" type="submit" disabled={loading}> {loading ? 'Loading...' : 'Login'} </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="row mt-3 px-md-4">
                      <div className="col-12 p-0 text-center">
                        <p className="text-muted"> Belum Punya Akun ? <span className="text-primary font-weight-bold ml-1">Daftar</span> </p>
                        <p className="mt-0"> Atau </p>
                        <div className="row px-4 m-0 flex-nowrap">
                          <div className="col px-1">
                            <div className="btn py-2 btn-block btn-xs btn-white center shadow-md radius-5 text-8">
                              <img src={require(`${process.env.REACT_APP_IMAGES}/brands/google.png`).default} width="15" className="mr-2" alt=""/>
                              Google
                            </div>
                          </div>
                          <div className="col px-1">
                            <div className="btn py-2 btn-block btn-xs btn-white center shadow-md radius-5 text-8">
                              <img src={require(`${process.env.REACT_APP_IMAGES}/brands/facebook.png`).default} width="15" className="mr-2" alt=""/>
                              Facebook
                            </div>
                          </div>
                          <div className="col px-1">
                            <div className="btn py-2 btn-block btn-xs btn-white center shadow-md radius-5 text-8">
                              <img src={require(`${process.env.REACT_APP_IMAGES}/brands/instagram.png`).default} width="15" className="mr-2" alt=""/>
                              Instagram
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default connect(s => s)(withRouter(Login))
