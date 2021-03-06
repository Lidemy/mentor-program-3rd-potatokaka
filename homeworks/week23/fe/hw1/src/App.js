import React from 'react';
import './app.css';
import NavContainer from './components/nav/NavContainer';
import HomeContainer from './components/home/HomeContainer';
import About from './components/about/About';
import AllPostsContainer from './components/posts/AllPostsContainer';
import SinglePostContainer from './components/posts/SinglePostContainer';
import CreatePostContainer from './components/posts/CreatePostContainer';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/blog_react_redux_01">
      <NavContainer />
      
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/post" component={AllPostsContainer} />
        <Route path="/about" component={About} />
        <Route path="/post/:id" component={SinglePostContainer} />
        <Route path="/createPost" component={CreatePostContainer} />
      </Switch>
    </Router>
  )
}

export default App;
