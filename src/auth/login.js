import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Inputicon} from '_components/form'
import Alert from '_components/alert'

// INIT JS
function Login(props){
  const [loading, loadingSet] = useState(false)
  const [msg, msgSet] = useState(null)
  function login(e){
    e.preventDefault()
    loadingSet(true)
    if (props.username === 'reja' && props.password === 'jamil') {
      props.dispatch({type:'LOGIN', value:{}})
      msgSet('Login Berhasil')
    }else {
      msgSet('"Username" & "Password" tidak sesuai')
      loadingSet(false)
    }
  }
  function autoLogin(){
    loadingSet(true)
    props.dispatch({type:'USERNAME', value: 'reja'})
    props.dispatch({type:'PASSWORD', value: 'jamil'})
    props.dispatch({type:'LOGIN', value:{}})
    loadingSet(false)
  }
  return (
    <div className="account-pages">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-90">
          <div className="col-xl-10">
            <div className="card m-0 radius-30">
              <div className="card-body p-0">
                <div className="row flex-nowrap m-0">
                  <div className="col-md-7 d-none d-md-flex align-items-center oh border-right">
                    <div className="">
                      <p className="bold text-12 border-bottom border-light pb-1 mb-2 border-2">What's New</p>
                      <ul className="px-0">
                        <li onClick={autoLogin} className="text-10 my-2 i text-muted"><code>Product page</code> in vendor <Link to={{pathname: '/vendor/product', autoLogin: true}} className="ml-1 small">[Link]</Link></li>
                        <li onClick={autoLogin} className="text-10 my-2 i text-muted"><code>Product Add page</code> in vendor <Link to={{pathname: '/vendor/product/add', autoLogin: true}} className="ml-1 small">[Link]</Link></li>
                        <li onClick={autoLogin} className="text-10 my-2 i text-muted">Image Editor <Link to={{pathname: '/vendor/plugins/image', autoLogin: true}} className="ml-1 small">[Link]</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col px-4 py-0 border-1">
                    <div className="text-center mb-1">
                      <img src={require("_assets/images/logo.png").default} className="mb-2 p-1 border border-pink radius-100" alt="" height={60} />
                      <h3 className="my-0 text-logo text-14">Woless <p className="m-0 f-600 text-7 text-muted lh-2">Best Wedding Organizer</p></h3>
                      <span className="center">
                      </span>
                    </div>
                    <div className="row m-0 px-1">
                      <div className="col-12 text-center">
                        <div className="bg-soft-success py-1 px-2 d-inline-block radius-5 text-9 mb-1">
                          <table className="table table-xs table-borderless w-auto mx-auto my-0">
                            <tbody>
                              <tr>
                                <th className="lh-12 text-right">Username</th>
                                <th className="lh-12 text-center">:</th>
                                <th className="lh-12 text-left">reja</th>
                              </tr>
                              <tr>
                                <th className="lh-12 text-right">Password</th>
                                <th className="lh-12 text-center">:</th>
                                <th className="lh-12 text-left">jamil</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-12">
                        <form action="#" className="authentication-form" onSubmit={login}>
                          <Inputicon onChange={e => props.dispatch({type:'USERNAME', value:e.target.value})} rowClass="w-100" className="text-dark radius-5 border-light" placeholder="Username" icon={<i className="uil uil-user lh-12 text-10 pl-1 o-5"/>} />
                          <Inputicon onChange={e => props.dispatch({type:'PASSWORD', value:e.target.value})} password rowClass="w-100 my-3" className="text-dark radius-5 border-light" placeholder="Password" icon={<i className="uil uil-padlock lh-12 text-10 pl-1 o-5"/>} />
                            {msg && <Alert theme="danger" icon="exclamation-circle" close> {msg} </Alert>}
                          <div className="form-group mb-0 text-center">
                            <button className="btn btn-danger bold btn-block" type="submit" disabled={loading}> {loading ? 'Loading...' : 'Login'} </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12 p-0 text-center">
                        <p className="text-muted"> Belum Punya Akun ? <span className="text-primary font-weight-bold ml-1">Daftar</span> </p>
                        <p className="mt-0"> Atau </p>
                        <div className="row px-4 m-0 flex-nowrap">
                          <div className="col px-1">
                            <div className="btn py-2 btn-block btn-xs btn-white center shadow-md radius-5 text-8">
                              <img src={require('_dummy/brands/google.png').default} width="15" className="mr-2" alt=""/>
                              Google
                            </div>
                          </div>
                          <div className="col px-1">
                            <div className="btn py-2 btn-block btn-xs btn-white center shadow-md radius-5 text-8">
                              <img src={require('_dummy/brands/facebook.png').default} width="15" className="mr-2" alt=""/>
                              Facebook
                            </div>
                          </div>
                          <div className="col px-1">
                            <div className="btn py-2 btn-block btn-xs btn-white center shadow-md radius-5 text-8">
                              <img src={require('_dummy/brands/instagram.png').default} width="15" className="mr-2" alt=""/>
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
export default connect(s => s)(Login)
