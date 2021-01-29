import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <h3>Posts of yummy goodies</h3>
        <Link to='/'>Home</Link>|<Link to='/photos'>Photos</Link>
      </>
    )
  }
}

export default Header
