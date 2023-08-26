import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import DisplaySection from './Components/DisplaySection';
import moon from "./assets/moon-icon.svg";
import sun from "./assets/sun-icon.svg";

function App() {
  const [dark, setTheme] = useState(true);

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className="header">
          <div className="title">
            DevDetective
          </div>
          <div onClick={() => setTheme(!dark)} className='Theme'>
            {
              dark ? (
                <div className="iconContainer">
                  <span className="text">Dark</span>
                  <img src={moon} alt="" id="modeIcon" loading="lazy" />
                </div>
              ) : (
                <div className="iconContainer">
                  <span className="text">Light</span>
                  <img src={sun} alt="" id="modeIcon" loading="lazy" />
                </div>
              )
            }
          </div>
        </div>
        <SearchBar />
        <DisplaySection />
      </div>
    </div>
  );
}

export default App;
