import React, { Component } from 'react'
import Header from './Header'
import posts from '../postsData.json'

class EditPost extends Component {
  state = {
    post: {
      title: '',
      body: '',
    },
  }

  componentDidMount() {
    const { id } = this.props.match.params
    const post = posts.filter((post) => post.id === Number(id))[0]
    this.setState(
      {
        post,
      },
      () => console.log('this.state.post >>> ', this.state.post)
    )
  }

  editPost = (event) => {
    this.setState({
      post: {
        ...this.state.post,
        [event.target.name]: event.target.value,
      },
    })
  }

  render() {
    const { title, body } = this.state.post
    // console.log(title)
    return (
      <>
        <Header />
        <div className='container'>
          <h3 style={{ margin: '15px 0' }}>Edit post</h3>
          <label>Title: </label>
          <input
            name='title'
            value={title}
            onChange={this.editPost}
            maxLength='15'
            style={inputStyle}
          />
          <br />
          <br />

          <label>Body: </label>
          <input
            name='body'
            value={body}
            onChange={this.editPost}
            maxLength='100'
            style={inputStyle}
          />
        </div>
      </>
    )
  }
}

const inputStyle = {
  width: '80%',
  padding: '5px',
}

export default EditPost
