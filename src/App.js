import React from 'react';
import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter startsAt={3} />
      <Counter startsAt={28} />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
