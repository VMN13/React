import React, {useState} from 'react';
import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import { GiNightSky } from 'react-icons/gi';
function App() {
const [theme, setTheme] = useState('light');
  const toogleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
    };



{
  return (
    <div className="App">
<div className={`app ${theme}`}>

       <GiNightSky className="my-3.5" style={{color: 'black', fontSize: '30px'}} 
          onClick={toogleTheme} />
   <Header />
   <Main />
   <Footer />
    </div>
    </div>
  );
}
};
export default App;
