
import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Join from "./view/Join";
import Login from "./view/Login";
import Main from "./view/Main";
import Post from "./view/Post";

class App extends React.Component {

  render(){
    return (
      <Router>
        <header>
          <Link to="/">
            <button>main</button>
          </Link>
          <Link to="/join">
            <button>join</button>
          </Link>
          <Link to="/login">
            <button>login</button>
          </Link>
          <Link to="/post">
            <button>post</button>
          </Link>
        </header>
        <hr />
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/join" component={Join} />
            <Route exact path="/login" component={Login} />
            <Route path="/post/:postId" component={Post} />
          </Switch>
        </main>
      </Router>
    )
  }
}

export default App;
