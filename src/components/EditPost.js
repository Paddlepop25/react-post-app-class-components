import React, { Component } from 'react'
import Header from './Header'
import posts from '../postsData.json'

class EditPost extends Component {
  state = {
    post: {
      carb: '',
      yummies: '',
    },
  }

  componentDidMount() {
    const { id } = this.props.match.params

    if (id > 3) {
      alert('Please choose RICE, NOODLES or BREAD\nfor the edit page')
    } else {
      const post = posts.filter((post) => post.id === Number(id))[0]
      this.setState(
        {
          post,
        },
        () => console.log('this.state.post >>> ', this.state.post)
      )
    }
  }

  editPost = (event) => {
    this.setState({
      post: {
        ...this.state.post,
        [event.target.name]: event.target.value,
      },
    })
  }

  saveEditPost = (event) => {
    event.preventDefault()
    console.log('saved edited post') // save to database in real life

    this.props.history.push('/')
  }

  render() {
    const { carb, yummies } = this.state.post
    // console.log(carb)
    return (
      <>
        <Header />
        <div className='container'>
          <form onSubmit={this.saveEditPost}>
            <h3 style={{ margin: '15px 0' }}>Edit post</h3>
            <code style={code}>
              Please choose RICE, NOODLES or BREAD from the homepage
            </code>

            <br />
            <br />
            <label>Carb: </label>
            <input
              name='carb'
              value={carb}
              onChange={this.editPost}
              maxLength='15'
              style={inputStyle}
            />
            <br />
            <br />

            <label>Yummies: </label>
            <input
              name='yummies'
              value={yummies}
              onChange={this.editPost}
              maxLength='100'
              style={inputStyle}
            />

            <br />
            <br />

            <button style={saveBtn}>
              {this.state.post.carb !== '' ? 'Save post' : 'Back to homepage'}
            </button>
          </form>
        </div>
      </>
    )
  }
}
const code = {
  color: '#ff5959',
}

const inputStyle = {
  width: '80%',
  padding: '5px',
}

const saveBtn = {
  background: '#fcba03',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '20px',
  cursor: 'pointer',
}

export default EditPost
