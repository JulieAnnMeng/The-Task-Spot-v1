import ListLists from './ListLists';
import React, {useState, useEffect} from 'react';

function Home() {
  const[lists, setLists] = useState([])

    function getLists(){
        fetch(`http://localhost:3001/lists`)
        .then(r=>r.json())
        .then(lists => setLists(lists))
      }

    useEffect(()=>{getLists()},[])
  
  return (
    <div>
        <h2>Welcome to the Task Spot.</h2>
        <ListLists lists={lists}/>
    </div>
  );
}

export default Home;