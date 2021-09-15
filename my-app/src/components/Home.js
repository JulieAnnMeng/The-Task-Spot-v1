import ListLists from './ListLists';
import React, {useState, useEffect} from 'react';

function Home() {
  const[lists, setLists] = useState([])
  const[update, setUpdate] = useState(false)

    function getLists(){
        fetch(`http://localhost:3001/lists`)
        .then(r=>r.json())
        .then(lists => setLists(lists))
      }

    useEffect(()=>{getLists()},[update])

  //   function handleTaskDelete(listId, taskId){
  //     fetch(`http://localhost:3001/lists/${listId}`, {
  //         method:"DELETE"
  //     }).then(setUpdate(!update))
  // }

      function handleTaskPatch(id, tasks){
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
    <div>
        <h2>Welcome to the Task Spot.</h2>
        <ListLists lists={lists} handleTaskPatch={handleTaskPatch}/>
    </div>
  );
}

export default Home;