import React, { Component } from 'react'

class AddPost extends Component {
  state = {
    title: '',
    body: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      title: '',
      body: '',
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
          <input
            type='text'
            onChange={this.handleChange}
            name='title'
            value={this.state.title}
            placeholder='enter title...'
            style={{ flex: '5', padding: '5px' }}
          />
          <input
            type='text'
            onChange={this.handleChange}
            name='body'
            value={this.state.body}
            placeholder='enter body...'
            style={{ flex: '5', padding: '10px' }}
          />
          <button
            type='submit'
            style={{ flex: '2', background: 'orange', cursor: 'pointer' }}
          >
            Add Post
          </button>
        </form>
      </>
    )
  }
}

export default AddPost
