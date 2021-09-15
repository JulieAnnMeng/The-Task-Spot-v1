import Tasks from './Tasks';
import NewTask from './NewTask';



function Lists({ id, title, description, tasks, date, handleTaskDelete}) {
    if(!tasks){
     return <h2>loading</h2>
    }

    const taskList = tasks.map((task)=>{
        return(
            <Tasks 
            key={task}
            listId={id}
            name={task}
            date={date}
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
                    <>{description}</>
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