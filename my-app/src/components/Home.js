import ListLists from './ListLists';
//import { useParams, useHistory, Link } from 'react-router-dom'

function Home({lists, handleTaskPatch, handleListDelete}) {
    
  return (
    <div className="home">
        <h2>Welcome to the Task Spot.</h2>
        {lists ? <ListLists lists={lists} handleTaskPatch={handleTaskPatch} handleListDelete={handleListDelete}/>
        : <h2>Loading Lists...</h2>}
    </div>
  );
}

export default Home;