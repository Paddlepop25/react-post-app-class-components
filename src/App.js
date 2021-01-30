import React, { Component } from 'react'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import Header from './components/Header'

import posts from './posts.json'
import './App.css'

class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.setState({
      posts,
    })
  }

  addPost = (post) => {
    const userId = Math.floor(Math.random() * 50)
    const id = this.state.posts.length + userId
    post.userId = userId
    post.id = id
    this.setState({
      posts: [...this.state.posts, post],
    })
  }

  deletePost = (id) => {
    const postToDelete = this.state.posts.filter((post) => {
      return post.id !== id
    })
    // console.log(postToDelete)
    this.setState({
      posts: postToDelete,
    })
  }
  render() {
    return (
      <>
        <Header />
        <AddPost handleSubmit={this.addPost} />
        <div className='container'>
          <Posts posts={this.state.posts} delPost={this.deletePost} />
        </div>
      </>
    )
  }
}

export default App
