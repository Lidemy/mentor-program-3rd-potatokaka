import React, {Component} from 'react';
import './posts.css';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      body: ''
    }
  }

  componentDidUpdate(prevProps) {
    const { createDone, history } = this.props
    if (createDone !== prevProps.createDone && !createDone) {
      history.push('/post')
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {createPost} = this.props;
    const {author, title, body} = this.state;
    createPost(author, title, body);
    //history.push('/post');
    this.setState({
      author: '',
      title: '',
      body: ''
    })
  }

  render() {
    const {author, title, body} = this.state;
    return (
      <div className="col-md-8 mx-auto mt-3">

        <h1>Create a Post</h1>
        <div>
          <label htmlFor='author' >Author: </label>
          <input value={author} className='form-control' name='author' onChange={this.handleInputChange} id='author' />
        </div>
        <div>
          <label htmlFor='title' >Title: </label>
          <input value={title} className='form-control' name='title' onChange={this.handleInputChange} id='title' />
        </div>
        <br/>
        <label htmlFor='body' >Content: </label>
        <textarea value={body} className='form-control single-post__content__edit' name='body' onChange={this.handleInputChange} id='content' />
        <button className='btn btn-secondary mt-2' onClick={this.onSubmit}>submit</button>

      </div>
    )
  }
}

export default CreatePost;