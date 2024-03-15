import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Handler3 from './Handler3';
import HandlerE from './HandlerE';
import HandlerEx from './HandlerEx';
import SyntheicEvent from './SyntheicEvent';


function App() {
  return (
    <div className="App">
      <SyntheicEvent />

      <hr />
      <ClassBind />

      <hr />
      <Counter />

      <hr />
      <HandlerEx />

      <hr />
      <HandlerE />

      <hr />
      <Handler3 />
      
    </div>
  );
}

export default App;
