import Tasks from './Tasks';
import NewTask from './NewTask';


function Lists() {
// props.map to make each list

    // const taskList =  props.map(prop => {
    //     return(
    //         <Tasks 
    //             key={prop.id}
    //             task={prop.task}
    //         />
    //     )
    // })

    //below is the list card, each list will be created with the table below. 
    //need to add a border to table
    return (
        <div>
            <table className="listCards">
                <caption className='listCards'>
                    <h3>List Title</h3>
                    List description
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
                            <h4>Edit</h4>
                        </th>
                        <th>
                            <h4>Delete</h4>
                        </th>
                    </tr>
                    {/* {taskList} */}
                    <Tasks />
                    {/* remove the above, use taskList */}
                </tbody>
            </table>
        </div>
    );
}

export default Lists;