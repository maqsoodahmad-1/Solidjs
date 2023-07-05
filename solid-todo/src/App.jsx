//App.jsx
import styles from "./App.module.css";
import { Router, Routes, Route, Link } from "solid-app-router";
import { lazy } from "solid-js";

const Todolist = lazy(() => import("./components/Todolist"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Router>
        <div class={styles.app}>
          <Link href="/">Link to Home Page</Link>
          <Link href="/about">Link to About Page</Link>
          <Routes>
            <Route path="/" element={<Todolist />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;

















// import logo from './logo.svg';
// import styles from './App.module.css';
// import { createSignal } from 'solid-js';

// function App() {
//   return (
//     <div class={styles.App}>
//       <header class={styles.header}>
//         <img src={logo} class={styles.logo} alt="logo" />
//         <p>
//           Edit <code>src/App.jsx</code> and save to reload.
//         </p>
//         <a
//           class={styles.link}
//           href="https://github.com/solidjs/solid"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Solid
//         </a>
//       </header>
//     </div>
//   );
//   }

// const [count, setCount] = createSignal(0)
// return (
//   <>
//   <div>
//     Current Value Count:{count()}
//   </div>
//   <div>
    
//   </div>
//   </>
// )
// }





// # First import createStore at the top of your component
// import { createStore } from "solid-js/store"

// function App(){
//  const [todos, setTodos] = createStore({
//         items: [
//             { text: "Go skydiving", id: 3 },
//             { text: "Go surfing", id: 2, },
//             { text: "Climb Everest", id: 1 }
//         ],
//         counter: 4,
//   })

// const addTodoItem = (input) => {
//         const title = input.value;
//         if (!title.trim()) return;
//         setTodos({
//             items: [{ text: title, id: todos.counter }, ...todos.items],
//             counter: todos.counter + 1
//         });
//         input.value = "";
//     }

//   return (
//       <div>
//         <input type="text" ref={input} 
//           placeholder="What do you have to do today?" name="todo"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               addTodoItem(input);
//                   }
//             }}>
//         </input>
//         <ul>
//           {todos.items.map(i => (
//              <li>{i.text}</li>
//            ))}
//           </ul>
//         </div>
// );
// }


// import { createSignal, onCleanup } from "solid-js";

// function Counter() {
//   const [count, setCount] = createSignal(0);
//   const initialCount  = count();
//   const timer = setInterval(() => setCount(count() + 1), 1000);
//     onCleanup(() => clearInterval(timer));

//   return <div>Count: {count()}
//   {/* <br />dr
//   initialCount:{initialCount} */}
//   </div>;
// }
// export default Counter;
// 

// export default App;