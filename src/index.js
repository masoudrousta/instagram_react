import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
