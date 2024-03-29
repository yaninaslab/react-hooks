import "./App.css";
import { data } from "./data";
import { useState } from "react";
// import { Component } from "react";

// class App extends Component {
//   state = {
//     count: 100,
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count - 5 })}>
//           Click
//         </button>
//       </div>
//     );
//   }
// }
// function App() {
//   const [text, setText] = useState("I love JavaScript");
//   const [count, setCount] = useState(100);

//   const updateText = () => {
//     if (text === "I love JavaScript") {
//       setText("I love React");
//     } else {
//       setText("I love JavaScript");
//     }
//   };

//   const updateCount = () => {
//     setCount(count - 5);
//   };
//   return (
//     <div>
//       <p>{text}</p>
//       <button onClick={updateText}>Click</button>
//       <h1>{count}</h1>
//       <button onClick={updateCount}>Click</button>
//     </div>
//   );
// }

function App() {
  const [filmList, setFilm] = useState(data);

  return (
    <div>
      {filmList.map((element) => {
        const { id, filmName } = element;
        return (
          <div key={id}>
            <p>
              {id} - {filmName}
            </p>
          </div>
        );
      })}
      <button onClick={() => setFilm([])}>Delete All</button>
    </div>
  );
}
export default App;
