import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import { navChange } from '../../actions/navAction';

const NavContainer = props => <Nav {...props} />;

const mapStateToProps = state => ({
  nav: state.nav.nav,
});

const mapDispatchToProps = dispatch => ({
  navChange: nav => dispatch(navChange(nav)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
