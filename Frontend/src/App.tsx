import './App.css';
import './style.css';
import LoginSignup from './components/login/login';
import HomeFeed from './components/newsFeed/feed';
import { useState } from 'react';


function App() {
 const [pages, setPages] = useState('')
  function NowShowing() {
    
    if (pages === 'home') {
      return <HomeFeed setPages={setPages} />
    } else
      return <LoginSignup setPages={setPages} />
  }
  return (

    <NowShowing />

  );
}

export default App;
