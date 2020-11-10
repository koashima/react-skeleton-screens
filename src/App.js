import React from 'react';
import Articles from './components/Articles';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <header>
        <h1>REACT SKELETONS</h1>
      </header>
      <div class="content">
        <Articles />
        <User /> 
      </div>
    </div>
  );
}

export default App;
