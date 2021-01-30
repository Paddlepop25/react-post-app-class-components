import React, { Component } from 'react'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import Header from './components/Header'

import posts from './postsData.json'
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
    const userId = Math.floor(Math.random() * 1000 + 3)
    const id = this.state.posts.length + userId
    // console.log(post)

    if (post.carb === '' || post.yummies === '') {
      alert('Please fill in both the carb and yummies boxes')
    } else {
      post.userId = userId
      post.id = id
      this.setState({
        posts: [...this.state.posts, post],
      })
    }
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
