

function Tasks({task, name, date, checked, handleTaskDelete, handleTaskUpdate}) {
// props.map to make each list


    function handleComplete(e){
        task = {...task, checked: !checked}
        handleTaskUpdate(task)
    }

    
    return (
        <tr>
            <td>{date}</td>
            <td>{name}</td>
            <td><input type="checkbox" name="task" onChange={() => handleComplete(task)}/></td>
            <td><button onClick={()=>handleTaskDelete(name)}>X</button></td>
        </tr>
    );
}

export default Tasks;