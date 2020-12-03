import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import PostList from './Components/PostList/PostList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sub: 'all',
      searchTerm: '',
    };
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.toggleSub = this.toggleSub.bind(this);
  }

  updateSearchTerm(newTerm) {
    this.setState({
      searchTerm: newTerm
    });
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
        <Header onToggle={this.toggleSub} onSearch={this.updateSearchTerm} />
        <PostList sub={this.state.sub} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
