import ListLists from './ListLists';
import React, {useState, useEffect} from 'react';

function Home({lists, handleTaskPatch, handleListDelete}) {
    
  return (
    <div>
        <h2>Welcome to the Task Spot.</h2>
        <ListLists lists={lists} handleTaskPatch={handleTaskPatch} handleListDelete={handleListDelete}/>
    </div>
  );
}

export default Home;