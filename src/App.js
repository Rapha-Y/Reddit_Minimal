import './App.css';

import Header from './Components/Header/Header';
import PostList from './Components/PostList/PostList';

function App() {
  return (
    <div className="App" style={{
      backgroundColor: "rgb(218, 224, 230)", 
      paddingBottom: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Header />
      <PostList />
    </div>
  );
}

export default App;
