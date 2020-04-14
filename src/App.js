import React, {useReducer} from 'react';
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
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentOne from './components/ComponentOne';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';
import HookMemoCounter from './components/HookMemoCounter';

export const UserContext = React.createContext()
export const ChanelContext = React.createContext()
export const CountContext = React.createContext()


const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <HookMemoCounter />
      {/* <ParentComponent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Count - {count}
        <ComponentOne />
      </CountContext.Provider> */}

      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={'yes'}>
        <ChanelContext.Provider value={'no'}>
          <ComponentC />
        </ChanelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter />
      <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
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
