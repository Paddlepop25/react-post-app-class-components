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
              <button style={editBtn}>Edit</button>
              <button onClick={() => this.delPost(post.id)} style={delBtn}>
                X
              </button>
            </div>
          )
        })}
      </>
    )
  }
}

const editBtn = {
  background: '#008716',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '20px',
  cursor: 'pointer',
  marginLeft: '4px',
  marginRight: '4px',
}

const delBtn = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '20px',
  cursor: 'pointer',
}

export default Posts
