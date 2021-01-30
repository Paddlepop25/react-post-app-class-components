import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h3>Posts of yummy goodies</h3>
        <Link to='/' style={linkStyle}>
          Home
        </Link>
        |
        <Link to='/photos' style={linkStyle}>
          Photos
        </Link>
      </header>
    )
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '15px',
}

const linkStyle = {
  color: '#fff',
  padding: '7px',
}

export default Header
