

function Tasks() {
// props.map to make each list

    return (
        <tr>
            <td>09/13/2021</td>
            <td>Setup React Project</td>
            <td><input type="checkbox" name="task" /></td>
            <td><button>✎</button></td>
            <td><button>X</button></td>
        </tr>
    );
}

export default Tasks;