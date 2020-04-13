import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HooksCounterFour from './components/HooksCounterFour';

function App() {
  return (
    <div className="App">
      <HooksCounterFour />
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/*<ClassCounter />*/}
    </div>
  );
}

export default App;
