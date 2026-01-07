
import { useState } from 'react';
import './App.css';
import News from './components/News';

function App() {
  //create a state to store the selected category
  const[category,setCategory]=useState("general");
  return (
    <div className="App">
    <h1>News Application</h1>
    <button onClick={() => setCategory("general")}>General</button>
    <button onClick={() => setCategory("technology")}>Technology</button>
    <button onClick={() => setCategory("sports")}>Sports</button>
    {/* passing the category to pass */}
    <News category={category} />
      
    </div>
  );
}


export default App;
