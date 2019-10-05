import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import { getLatestPosts } from '../../actions/postAction';
import { withRouter } from 'react-router-dom';

const HomeContainer = props => <Home {...props} />;

const mapStateToProps = state => ({
  latestPosts: state.post.latestPosts,
  isLoading: state.post.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getLatestPosts: () => {
    dispatch(getLatestPosts());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));

