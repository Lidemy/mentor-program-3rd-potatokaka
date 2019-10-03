import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './posts.css';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      body: '',
      isEditing: false,
    }
  }
  
  componentDidMount() {
    const { getSinglePost } = this.props;
    const { id } = this.props.match.params;
    getSinglePost(id);
  }

  componentDidUpdate(prevProps, prevState) {
    const { singlePost, deleteDone, editDone, history} = this.props;

    if (prevProps !== this.props) {
      this.setState({
        author: singlePost.author,
        title: singlePost.title,
        body: singlePost.body,
      });
    }

    if (deleteDone !== prevProps.deleteDone && !deleteDone) {
      history.push('/post')
    }
    
    if (editDone !== prevProps.editDone && !editDone) {
      // history.push('/post')
      history.push(`/post/${singlePost.id}`);
    }

  }

  handleDelete = () => {
    const message = 'Are you sure deleting this?';
    const { id } = this.props.match.params;
    const { deletePost } = this.props;
    if (window.confirm(message)) {
      deletePost(id);
      //history.push('/post')
    } else {
      return null;
    }
  }

  onEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleUpdate = () => {
    const { author, title, body } = this.state;
    const { editPost} = this.props;
    const { id } = this.props.match.params;
    editPost(id, author, title, body);
    // history.push(`/post/${singlePost.id}`);
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }

  render() {
    const { isEditing, title, body } = this.state;
    const { singlePost } = this.props;

    return (
      <div>
        <div className="post-item col-md-8 mx-auto mt-3">
          <img src="https://images.unsplash.com/photo-1553458287-b25ff2a8a778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" width="100%" alt="" />
        </div>
        <div className="post-item col-md-8 mx-auto mt-3 mb-4">
          {
            !isEditing 
            ? <div>
                <h2>{!singlePost.title ? 'loading...' : singlePost.title}</h2>
                <p className="single-post__content">{singlePost.body}</p>
              </div>
            : <div>
                <textarea className="single-post__title" value={title} onChange={this.handleInputChange} name='title' />
                <textarea className="single-post__content__edit" value={body} onChange={this.handleInputChange} name='body' />
              </div>
          }

          <div className="d-flex justify-content-end">
            {
              !isEditing 
              ? <div>
                  <button className="btn btn-secondary mr-2" onClick={this.onEdit}>Edit</button>
                  <button className="btn btn-secondary  mr-2" onClick={this.handleDelete}>Delete</button>
                </div>
              : <div>
                  <button className="btn btn-secondary mr-2" onClick={this.handleUpdate}>Update</button>
                  <button className="btn btn-secondary  mr-2" onClick={this.handleDelete}>Delete</button>
                </div>
            }
            <Link to="/post" className="btn btn-secondary">Back</Link>
          </div>
        </div>

      </div>
    )
  }
}

export default SinglePost;