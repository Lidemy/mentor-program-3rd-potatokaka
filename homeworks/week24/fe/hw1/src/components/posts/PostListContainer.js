import React from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import { getAllPosts } from '../../actions/postAction';
import { withRouter } from 'react-router-dom';

const AllPostsContainer = props => <PostList {...props} />;

const mapStateToProps = state => ({
  allPosts: state.post.allPosts,
  isLoading: state.post.isLoading,
});

/* 簡成一個 object */
const mapDispatchToProps = {
  getAllPosts
}

/*
const mapDispatchToProps = dispatch => ({
  getAllPosts: () => {
    dispatch(getAllPosts());
  }
});　*/

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllPostsContainer));

