import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NewList from './components/NewList';
import FunList from './components/FunList';

import { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';

function App() {
  //useEffect here, pass down to components as props
  const[lists, setLists] = useState([]);
  const [funCards, setFunCards] = useState([]);
  const[update, setUpdate] = useState(false);

    function getLists(){
        fetch(`http://localhost:3001/lists`)
        .then(r=>r.json())
        .then(lists => setLists(lists))
      };

    useEffect(()=>{
      getLists();
      getFunList();
    },[update]);

     function handleListDelete(id){
       fetch(`http://localhost:3001/lists/${id}`, {
           method:"DELETE"
       }).then(setUpdate(!update))
   };

      function handleTaskPatch(id, tasks){
        fetch(`http://localhost:3001/lists/${id}`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify ({tasks})
      })
      .then(response => response.json())
      .then(setUpdate(!update))
      .catch(error => console.error("Patch error: ", error))
    };

    function handleNewList(newListFormData){
      fetch(`http://localhost:3001/lists`,{
        method:"POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify (newListFormData)
        }
      ).then(r=>r.json())
      .then(setUpdate(!update))
      .catch(error => console.error("Post error: ", error))
    };

    // Fun Lists
    function getFunList(){
          fetch(`http://localhost:3001/funCards`)
          .then(r=>r.json())
          .then(funSave => setFunCards(funSave))
          .catch(error => console.error("Get fun error: ", error))
        };

    function handleFunAdd(activity){
      fetch(`http://localhost:3001/funCards`,{
        method:"POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify ({activity})
        })
      .then(r=>r.json())
      .then(setUpdate(!update))
      .catch(error => console.error("Post fun error: ", error))
    };
    
    function handleFunDelete(id){
      fetch(`http://localhost:3001/funCards/${id}`,{
        method:"DELETE"
      })
      .then(setUpdate(!update))
      .catch(error => console.error("Delete fun error: ", error))
    }

    
  return (
    <div className="App">
      <Header />
     
      <Switch>
        
        <Route path="/lists/new">
        <NewList lists={lists} handleNewList={handleNewList}/>
        </Route>

        <Route path="/funlist">
          {lists && funCards ? 
            <FunList 
              lists={lists}
              funCards={funCards}
              handleTaskPatch={handleTaskPatch} 
              handleFunAdd={handleFunAdd}
              handleListDelete={handleListDelete}
              handleFunDelete={handleFunDelete}
            /> 
          : undefined}
        
        </Route>
        <Route path="/">
        {lists ?
        <Home 
          lists={lists} 
          handleTaskPatch={handleTaskPatch} 
          handleListDelete={handleListDelete}
        />
        : <h1>Loading</h1>}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;