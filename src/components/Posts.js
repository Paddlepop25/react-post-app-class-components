import React, { Component } from 'react'

class Posts extends Component {
  delPost = (id) => {
    this.props.delPost(id)
  }
  render() {
    return (
      <>
        <h3>Posts</h3>
        {this.props.posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <code>{post.body}</code>
              <button>Edit</button>
              <button onClick={() => this.delPost(post.id)}>X</button>
            </div>
          )
        })}
      </>
    )
  }
}

export default Posts
