

function NewTask() {
// props.map to make each list

    return (
        <form>
            <input
            type="date"
            name="date"
             />

            <input
            type="text"
            name="task"
            placeholder="task"
             />

            <button type="submit">Submit</button>
        </form>
    );
}

export default NewTask;