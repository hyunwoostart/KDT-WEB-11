import './App.css';
import ClassComponent from './ClassComponent';
import Button from './Button';
import Food from './Food';
import Book from './Book';
import Book2 from './Book2';

function App() {
  const name = '고기';
  const title = '고기';
  const book2 = {
    title: '아아아',
    author: '디디디',
    price: '500원',
    type: '뭐냐 이거'
  }
  return (
    <div className='App'>
      {/* <FunctionComponent name={name} time="14시" />
      <FunctionComponent time="14시" />
      <FunctionComponent time={13} time="14시">
        자식 내용
      </FunctionComponent> */}

      {/* 함수형과 클래스형 컴포넌트 중복 사용 시 prop-types 하나만 뜨는 경우 발생 */}

      <hr />
      <ClassComponent name={name} />
      <ClassComponent />

      <hr />
      <Button link="https://www.google.com"><span>Google</span></Button>

      <hr />
      <Food name={name} color="red"/>

      <hr />
      <Book title="이번주 베스트셀러" author="김유진" price="13,500원" type="자기개발서"/>

      <hr />
      {/* <Book2 title="이번주 베스트셀러" author="깅뮤진" price="500원" type="하하하만화책인가요"/> */}
      <Book2 book2={book2} />
    </div>
  );
};

export default App;
