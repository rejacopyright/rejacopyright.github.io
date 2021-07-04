import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './_redux/store'
import reportWebVitals from './reportWebVitals'

// ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root') )
function El(){
  return(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  )
}
ReactDOM.render( <El />, document.getElementById('root') )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
