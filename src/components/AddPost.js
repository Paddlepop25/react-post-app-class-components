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
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            name='title'
            value={this.state.title}
            placeholder='enter title...'
          />
          <input
            type='text'
            onChange={this.handleChange}
            name='body'
            value={this.state.body}
            placeholder='enter body...'
          />
          <button type='submit'>Add Post</button>
        </form>
      </>
    )
  }
}

export default AddPost
