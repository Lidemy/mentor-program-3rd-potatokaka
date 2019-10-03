import React from 'react';
import { connect } from 'react-redux';
import CreatePost from './CreatePost';
import { createPost } from '../../actions/postAction';
import { withRouter } from 'react-router-dom';

const CreatePostContainer = props => <CreatePost {...props} />;

const mapStateToProps = state => ({
  createDone: state.post.createDone,
});

const mapDispatchToProps = dispatch => ({
  createPost: (author, title, body) => {
    dispatch(createPost(author, title, body));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePostContainer));