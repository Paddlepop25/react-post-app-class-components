import React, { Component } from 'react'

class Posts extends Component {
  delPost = (id) => {
    this.props.delPost(id)
  }
  render() {
    return (
      <>
        {this.props.posts.map((post) => {
          return (
            <div key={post.id}>
              <h4>{post.title.toUpperCase()}</h4>
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
