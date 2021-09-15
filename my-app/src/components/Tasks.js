

function Tasks({id, name, date, handleTaskDelete}) {
// props.map to make each list

    
    return (
        <tr>
            <td>{date}</td>
            <td>{name}</td>
            <td><input type="checkbox" name="task" /></td>
            <td><button onClick={()=>handleTaskDelete(id)}>X</button></td>
        </tr>
    );
}

export default Tasks;