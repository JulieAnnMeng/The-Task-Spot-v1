

function Tasks({name, date}) {
// props.map to make each list
    return (
        <tr>
            <td>{date}</td>
            <td>{name}</td>
            <td><input type="checkbox" name="task" /></td>
            <td><button>✎</button></td>
            <td><button>X</button></td>
        </tr>
    );
}

export default Tasks;