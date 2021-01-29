import React, { Component } from 'react'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import Header from './components/Header'
import Photos from './components/Photos'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
      <Router>
        <div className='container'>
          <Header />
          <Route
            exact
            path='/'
            render={() => (
              <>
                <AddPost handleSubmit={this.addPost} />
                <Posts posts={this.state.posts} delPost={this.deletePost} />
              </>
            )}
          />
          <Route path='/photos' component={Photos} />
        </div>
      </Router>
    )
  }
}

export default App
