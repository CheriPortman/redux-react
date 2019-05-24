import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostById from '../containers/posts/PostById';
import Home from './Home';

//here just for seeing as things are getting connected
// import AllPosts from '../containers/posts/AllPosts';
// import CreatePost from '../containers/posts/CreatePost';

// import PostForm from './posts/PostForm';
// import Posts from './posts/Posts';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/posts/:id" component={PostById} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
