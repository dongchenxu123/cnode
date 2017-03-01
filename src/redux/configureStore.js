import { applyMiddleware, compose, createStore } from 'redux'
//import { syncHistoryWithStore } from 'redux-simple-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

function withDevTools (middleware) {
  const devTools = window.devToolsExtension
    ? window.devToolsExtension()
    : require('../containers/DevTools').default.instrument()
  return compose(middleware, devTools)
}

const applyResetReducer = reducer => (state, action) => {
  if (action.type === 'STORE_RESET') {
    return reducer(undefined, action)
  } else {
    return reducer(state, action)
  }
}
export default function configureStore ({ initialState = {}, history }) {
  //Sync with router via history instance (main.js)
  //const routerMiddleware = syncHistoryWithStore(history)
  let middleware = applyMiddleware(thunk)

  if (DEBUG) {
    middleware = withDevTools(middleware)
  }
  //Compose final middleware and use devtools in debug environment
  const finalCreateStore = compose(middleware)(createStore)

  const store = finalCreateStore(applyResetReducer(rootReducer), initialState)
  //if (DEBUG) {
    //routerMiddleware.listenForReplays(store, ({ router }) => router.location)
  //}

  /*if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }*/
  
  return store
}

