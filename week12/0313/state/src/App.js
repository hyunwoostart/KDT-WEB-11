import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
import ClassComponent2 from './ClassComponent2';
import CounterFunc from './CounterFunc';
import Ex3 from './Ex3';
import SayFunction from './SayFunction';

class App extends Component {
  render() {

    const printConsole = () => {
      console.log('콘솔 띄우기 성공!');
    }
    return (
      <div className="App">
        <ClassComponent text='dd'/>

        <hr />
        <ClassComponent2/>

        <hr />
        <CounterFunc />

        <hr />
        <Ex3 valid={printConsole}/>

        <hr />
        <SayFunction />
      </div>
    );
  }
}

export default App;
