import React, { Component } from 'react'
import Header from './Header'

class Photos extends Component {
  render() {
    return (
      <>
        <Header />

        <img
          src='https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          alt='yummy noodles'
          width='200'
        />

        <img
          src='https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          alt='yummy bread'
          width='200'
        />
      </>
    )
  }
}

export default Photos
