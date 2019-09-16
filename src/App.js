// https://uxplanet.org/right-to-left-development-tips-and-tricks-fa481e86ae26
// https://css-tricks.com/almanac/properties/d/direction/
// https://baconmockup.com

import React, { useState } from 'react';
import './App.css'

function App() {
  const [direction, setDirection] = useState('ltr');

  function changeDirection() {
    const newDirection = direction === 'ltr' ? 'rtl' : 'ltr';
    setDirection(newDirection);
  }

  return (
    <div className="App" dir={direction}>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => changeDirection()}>Switch text direction</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>This is flexbox</h1>
      <section className="flexbox">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
      </section>
      <h1>This is a float</h1>
      <section className="float">
        <img src="https://baconmockup.com/300/200" alt="bacon" className="floater" />
        <p>Bacon ipsum dolor amet pastrami cupim swine frankfurter, corned beef picanha pork loin. Chuck ham hock landjaeger filet mignon drumstick shoulder. Shank spare ribs swine landjaeger leberkas capicola. Doner beef ribs drumstick tri-tip prosciutto brisket flank shank sirloin ball tip cow jerky rump chicken pancetta. Ham hock ham pork loin short ribs kevin turducken turkey prosciutto meatball.</p>
      </section>
    </div>
  );
}

export default App;
