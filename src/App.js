import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import PostList from './Components/PostList/PostList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sub: 'all'
    };
    this.toggleSub = this.toggleSub.bind(this);
  }

  toggleSub() {
    if (this.state.sub === 'all') {
      this.setState({
        sub: 'popular'
      });
    } else {
      this.setState({
        sub: 'all'
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header onToggle={this.toggleSub} />
        <PostList sub={this.state.sub} />
      </div>
    );
  }
}

export default App;
