import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HooksCounterFour from './components/HooksCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';

function App() {
  return (
    <div className="App">
      <HookMouse />
      {/* <ClassMouse /> */}
      {/* <HookCounterOne />
      <ClassCounterOne /> */}
      {/* <HooksCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/*<ClassCounter />*/}
    </div>
  );
}

export default App;
