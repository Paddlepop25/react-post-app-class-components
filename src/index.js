import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import EditPost from './components/EditPost'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/' component={App} />
      <Route exact path='/editpost/:id' component={EditPost} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
