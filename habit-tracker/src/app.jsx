import './app.css';

function App() {
  const name = undefined;
  return (
    <>
      {name && <h1>hello {name}</h1>}
      <h1>hello</h1>
      {
          ['하트', '사과'].map(item =><h1>{item}</h1>)
      }
    </>
  );
}

export default App;
