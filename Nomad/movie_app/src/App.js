import React from 'react';

// function Food(props) {
//   console.log(props);
//   console.log(props.fav);
//   return <h1>I like Potato</h1>;
// }
function Food({fav}) {
  console.log(fav);
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <>
      <div>
        <h1>Hello!</h1>
        <Food
          fav="kimch" 
          somthing={true} 
          papapapapapapa={["hello", 1, 2, 3, 4, true]}/>
        <Food fav="ramen"/>
        <Food fav="samgiopsal"/>
        <Food fav="chukumi"/>
      </div>
    </>
  );
}// class js랑 겹쳐서 JSX에선 안써요.

export default App;
