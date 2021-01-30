import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
              <h4>{post.carb.toUpperCase()}</h4>
              <span>{post.yummies}</span>
              <button style={editBtn}>
                <Link to={`/editpost/${post.id}`}>Edit</Link>
              </button>
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
  border: 'none',
  padding: '5px 9px',
  borderRadius: '20px',
  cursor: 'pointer',
  marginLeft: '10px',
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
