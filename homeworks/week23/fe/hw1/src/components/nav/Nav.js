import React from 'react';
import { Link, Route } from 'react-router-dom';
import './nav.css';

function Item(props) {
    const {to, children, exact, navChange} = props;

    return ( 
      <Route
        path={to}
        exact={exact}
        children={({ match }) => ( //就是一個 functional component
          <li className={match ? "nav-link active" : "nav-link"} onClick={() => {
            navChange(to)
          }}>
            <Link to={to} className="nav-link" >{children}</Link>
          </li>
        )}
      />
    );
}

const Nav = ({navChange}) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <i className="material-icons">
            visibility
          </i>
      </Link>
    
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <Item to="/"  navChange={navChange} exact={true}>
            Home
          </Item >
          <Item to="/post" navChange={navChange}>
            Post
          </Item>
          <Item to="/about" navChange={navChange}>
            About
          </Item>
          <Item to="/createPost" navChange={navChange}>
            New Post
          </Item>

        </ul>
      </div>
    </nav>
  </div>
)

export default Nav;