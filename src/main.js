import React from 'react'
import ReactDOM from 'react-dom'
import { useRouterHistory } from 'react-router'
//import { createHistory } from 'history'
import { createHashHistory } from 'history'
import routes from './routes/index'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
const historyConfig = { queryKey: false }
//const history = useRouterHistory(createHistory)(historyConfig)
const history = useRouterHistory(createHashHistory)(historyConfig)
const initialState = window.__INITIAL_STATE__

const store = configureStore({initialState, history })
 
 

ReactDOM.render(
  <Root history={history} routes={routes(store)} store={store}/>,
  document.getElementById('container')
)
