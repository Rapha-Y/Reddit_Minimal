import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header';
import Post from './Components/Post/Post';

const posts = [
  {
    title: 'Cat pic, upvotes to the left',
    author: 'AmeliaWatson',
    time: Date.parse('2020-11-28T15:00-03:00'),
    img: 'https://a.wattpad.com/useravatar/SelinaAl7.256.653083.jpg',
    upvotes: 102568
  },
  {
    title: 'I SIMP FOR THE GODDESS',
    author: 'KiaraHololive',
    time: Date.parse('2020-11-28T21:00-03:00'),
    img: 'https://static.zerochan.net/Mori.Calliope.full.3106276.png',
    upvotes: 240194
  },
  {
    title: 'long boi',
    author: 'Nyanners',
    time: Date.now(),
    img: 'https://i.pinimg.com/originals/4c/19/5a/4c195a2b21aa113a91c9ffa14378df81.png',
    upvotes: 666
  }
]

function App() {
  return (
    <div className="App" style={{backgroundColor: "rgb(218, 224, 230)", paddingBottom: 1}}>
      <Header />
      <Post
        title={posts[0].title}
        author={posts[0].author}
        time={posts[0].time}
        img={posts[0].img}
        upvotes={posts[0].upvotes}
      />
      <Post
        title={posts[1].title}
        author={posts[1].author}
        time={posts[1].time}
        img={posts[1].img}
        upvotes={posts[1].upvotes}
      />
      <Post
        title={posts[2].title}
        author={posts[2].author}
        time={posts[2].time}
        img={posts[2].img}
        upvotes={posts[2].upvotes}
      />
    </div>
  );
}

export default App;
