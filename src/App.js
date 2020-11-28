import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header';
import Post from './Components/Post/Post';

function App() {
  return (
    <div className="App" style={{backgroundColor: "rgb(218, 224, 230)"}}>
      <Header />
      <Post/>
    </div>
  );
}

export default App;
