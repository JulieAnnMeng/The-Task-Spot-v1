import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import NewList from './components/NewList';
import FunList from './components/FunList';
import { useState, useEffect } from 'react';

function App() {
  //useEffect here, pass down to components as props
  const[lists, setLists] = useState([])
  const[update, setUpdate] = useState(false)

    function getLists(){
        fetch(`http://localhost:3001/lists`)
        .then(r=>r.json())
        .then(lists => setLists(lists))
      }

    useEffect(()=>{getLists()},[update])

     function handleListDelete(id){
       fetch(`http://localhost:3001/lists/${id}`, {
           method:"DELETE"
       }).then(setUpdate(!update))
   }

      function handleTaskPatch(id, tasks){
        debugger;
        fetch(`http://localhost:3001/lists/${id}`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify ({tasks})
      })
      .then(response => response.json())
      .then(setUpdate(!update))
      .catch(error => console.error("Patch error: ", error))
    }
  
  
  return (
    <div className="App">
      <Header />
      <Home 
        lists={lists} 
        handleTaskPatch={handleTaskPatch} 
        handleListDelete={handleListDelete}
      />
      <NewList />
      <FunList />
    </div>
  );
}

export default App;