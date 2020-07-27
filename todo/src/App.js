import React from 'react';
import './App.css';
import Init from './view/init'

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
             username:null,
             subject : {title:'web',sub:'gomjae'}
      };
  }

  componentDidMount(){
      fetch('api')
          .then(res=>res.json())
          .then(data=>this.setState({username:data.name}));
  }

  render() {
    const {username} = this.state;

    return (
        <div className="App">
          <header className="App-header">
            {username ? `Hello ${username}` : 'Hello World'}
            <Init title = {this.state.subject.sub}></Init>
          </header>
        </div>
    );
  }
}

export default App;