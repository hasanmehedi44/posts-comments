import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import NotFound from './components/NotFound/NotFound';

export const ImgUrlContext = createContext();

function App() {
  const [imgUrl, setImgUrl] = useState([]);
  return (
    <ImgUrlContext.Provider value = {[imgUrl, setImgUrl]}>
      <Router>
        <Switch>
        <Route exact path={'/'}>
            <Home></Home>
          </Route>
          <Route path={'/post/:postId'}>
            <PostDetail/>
          </Route>
          <Route path={'*'}>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </ImgUrlContext.Provider>
  );
}

export default App;
