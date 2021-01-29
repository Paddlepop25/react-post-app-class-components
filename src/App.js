import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    posts: [
      {
        userId: 1,
        id: 1,
        title: 'rice',
        body: 'fried rice, claypot chicken rice, brown porridge, briyani',
      },
      {
        userId: 1,
        id: 2,
        title: 'noodles',
        body: 'hokkien mee, mee goreng, prawn noodles, bak chor mee, pho',
      },
      {
        userId: 1,
        id: 3,
        title: 'bread',
        body: 'french loaf, sandwich, yakun kaya toast, butter bun',
      },
    ],
  }
  render() {
    return (
      <>
        {this.state.posts.map((post) => {
          return (
            <div>
              <h3>{post.title}</h3>
              <code>{post.body}</code>
            </div>
          )
        })}
      </>
    )
  }
}

export default App
