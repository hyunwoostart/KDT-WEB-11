import PostList from './components/PostList';
import Student from './components/Student';

function App() {
  const handleClick = (name: string, grade: number) => {
    console.log(`안녕 내 이름은 ${name}이고, ${grade}학년이야~`);
  };
  return (
    <div className="App">
      {/* <Student name="코딩온" grade={3} part="CS" handleClick={handleClick} />
      <Student name="코딩" grade={3} handleClick={handleClick} /> */}
      <PostList />
    </div>
  );
}

export default App;