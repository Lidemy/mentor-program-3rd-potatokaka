import React from 'react';
import { connect } from 'react-redux';
import SinglePost from './SinglePost';
import { getSinglePost, deletePost, editPost } from '../../actions/postAction';
import { withRouter } from 'react-router-dom';

const SinglePostContainer = props => <SinglePost {...props} />;

const mapStateToProps = state => ({
  singlePost: state.post.singlePost,
  deleteDone: state.post.deleteDone,
  editDone: state.post.editDone,
});

const mapDispatchToProps = dispatch => ({
  getSinglePost: id => {
    dispatch(getSinglePost(id));
  },
  deletePost: id => {
    dispatch(deletePost(id));
  },
  editPost: (id, author, title, body) => {
    dispatch(editPost(id, author, title, body));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer));

