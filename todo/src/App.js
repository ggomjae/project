// import React from 'react';
// import './App.css';
// import Init from './view/init'

// class App extends React.Component {

//   constructor(props) {
//       super(props);
//       this.state = {
//              username:null,
//              subject : {title:'web',sub:'gomjae'}
//       };
//   }

//   componentDidMount(){
//       fetch('api')
//           .then(res=>res.json())
//           .then(data=>this.setState({username:data.name}));
//   }

//   render() {
//     const {username} = this.state;

//     return (
//         <div className="App">
//           <header className="App-header">
//             {username ? `Hello ${username}` : 'Hello World'}
//             <Init title = {this.state.subject.sub}></Init>
//           </header>
//         </div>
//     );
//   }
// }

// export default App;

import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Join from "./view/Join";
import Login from "./view/Login";
import Main from "./view/Main";
import Post from "./view/Post";

function App() {
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
          <Route path="/post" component={Post} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
