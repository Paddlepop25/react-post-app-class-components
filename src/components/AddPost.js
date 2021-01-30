import React, { Component } from 'react'

class AddPost extends Component {
  state = {
    carb: '',
    yummies: '',
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
      carb: '',
      yummies: '',
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
          <input
            type='text'
            onChange={this.handleChange}
            name='carb'
            value={this.state.carb}
            placeholder='enter carb...'
            style={{ flex: '5', padding: '5px' }}
          />
          <input
            type='text'
            onChange={this.handleChange}
            name='yummies'
            value={this.state.yummies}
            placeholder='enter yummies...'
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
