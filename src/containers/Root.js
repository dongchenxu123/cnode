import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  };
  get content () {
    return (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    )
  }

  get devTools () {
    if (DEBUG) {
      /*if (DEBUG_NEW_WINDOW) {
        if (!window.devToolsExtension) {
          require('../redux/utils/createDevToolsWindow').default(this.props.store)
        } else {
          window.devToolsExtension.open()
        }
      } else if (!window.devToolsExtension) {*/
        const DevTools = require('./DevTools').default
        return <DevTools />
      //}
    }
  }
  render () {
    return (
      <Provider store={this.props.store}>
        <div className='page-container' style={{minHeight: '100%', backgroundColor: '#efefef'}}>
          {this.content}
          {this.devTools}
        </div>
      </Provider>
    )
  }
}
