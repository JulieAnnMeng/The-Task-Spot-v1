import Tasks from './Tasks';
import NewTask from './NewTask';



function Lists({ id, title, description, tasks, handleTaskPatch, handleListDelete}) {
    if(!tasks){
     return <h2>loading</h2>
    }

    function handleTaskDelete (name) {
        const newTasksList = tasks.filter(task => task.name !== name);
        handleTaskPatch(id, newTasksList);
    }

    const taskList = tasks.map((task, index)=>{
        return(
            <Tasks 
            key={index}
            name={task.name}
            date={task.date}
            handleTaskDelete={handleTaskDelete}
            />
        )
    })


    //below is the list card, each list will be created with the table below. 
    //need to add a border to table
    return (
        <div>
            <table className="listCards">
                <caption className='listCards'>
                        
                    <h3>{title}</h3>
                    <button onClick={()=>handleListDelete(id)}> x </button>
                    <div> {description} </div>
                    <br /><br />
                    
                    <button>Add</button>
                    <NewTask />
                </caption>
                <tbody>
                    <tr>
                        <th>
                            <h4>Date</h4>
                        </th>
                        <th>
                            <h4>Task</h4>
                        </th>
                        <th>
                            <h4>Done?</h4>
                        </th>
                        <th>
                            <h4>Delete</h4>
                        </th>
                    </tr>

                    {taskList}
                    
                </tbody>
            </table>
        </div>
    );
}

export default Lists;