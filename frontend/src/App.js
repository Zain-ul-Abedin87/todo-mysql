import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Todo app with my sql and node js</h1>
     <input
     placeholder={"add todos"}
     />
     <button >Add</button>
     <ul>
       <li>
         <span></span>
         <button>Edit </button>
         <button>Delete</button>
       </li>
     </ul>
     
    </div>
  );
}

export default App;
