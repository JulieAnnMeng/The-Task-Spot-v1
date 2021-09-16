import Tasks from './Tasks';
import NewTask from './NewTask';
import { useState } from 'react';
import {Link} from "react-router-dom"



function Lists({id, title, description, tasks, handleTaskPatch, handleListDelete}) {
    let taskList = [];
    const [toggle, setToggle] = useState("")

    function handleToggle (title) {
        toggle === title ? setToggle("") : setToggle(title);
    }

    function handleTaskDelete (name) {
        const newTasksList = tasks.filter(task => task.name !== name);
        handleTaskPatch(id, newTasksList);
    }


    function handleNewTask(formData){
        let newID;
        if(tasks[0]){
            newID = tasks.at(-1).id + 1;
        } else {
            newID = 1;
        }
        const newTask = {id: newID, name: formData.task, date: formData.date, checked: false};
        tasks.push(newTask);
        handleTaskPatch(id, tasks);
    }

    function handleTaskUpdate (updatedTask) {
        tasks.map(task => { 
            if(task.id === updatedTask.id) {
                task.checked = updatedTask.checked;
        }});
        // const newTasksList = {...tasks, task};
        debugger;
        handleTaskPatch(id, tasks);
    }

    if(!tasks){
        return <h2>loading</h2>
    } else {
        taskList = tasks.map((task, index)=>{
            return(
                <Tasks 
                key={index}
                task={task}
                name={task.name}
                date={task.date}
                checked={task.checked}
                handleTaskDelete={handleTaskDelete}
                handleTaskUpdate={handleTaskUpdate}
                />
            )
    })}


    //below is the list card, each list will be created with the table below. 
    //need to add a border to table
    return (
        <div>
            <table className="listCards">
                <caption className='listCards'>
                        
                    <h3>{title}</h3>
                    {
                    title === "Fun" ? 
                    <Link to={`/funlist`}><button>Add Fun</button></Link>
                    : <button onClick={()=>handleListDelete(id)}> Delete List </button>
                    }
                    <div> {description} </div>
                    <br /><br />
                    {
                    toggle === title ? 
                        <button onClick={() => handleToggle(title)}>hide</button> 
                        : <button onClick={() => handleToggle(title)}>Add</button>
                    }
                    {toggle === title ? <NewTask handleNewTask={handleNewTask}/> : null}
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