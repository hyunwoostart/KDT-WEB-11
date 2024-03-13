import './App.css';
import ClassComponent from './ClassComponent';
import Button from './Button';
import Food from './Food';
import Book from './Book';

function App() {
  const name = '고기';
  const title = '고기';
  return (
    <div className='App'>
      {/* <FunctionComponent name={name} time="14시" />
      <FunctionComponent time="14시" />
      <FunctionComponent time={13} time="14시">
        자식 내용
      </FunctionComponent> */}

      <hr />
      <ClassComponent name={name} />
      <ClassComponent />

      <hr />
      <Button link="https://www.google.com"><span>Google</span></Button>

      <hr />
      <Food name={name} color="red"/>

      <hr />
      <Book title="이번주 베스트셀러" author="김유진" price="13,500원" type="자기개발서"/>
    </div>
  );
};

export default App;
