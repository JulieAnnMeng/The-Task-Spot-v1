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

    function handleTaskDelete(listId, taskId){
      fetch(`http://localhost:3001/lists/${listId}`, {
          method:"DELETE"
      }).then(setUpdate(!update))
  }
  
  return (
    <div>
        <h2>Welcome to the Task Spot.</h2>
        <ListLists lists={lists} handleTaskDelete={handleTaskDelete}/>
    </div>
  );
}

export default Home;