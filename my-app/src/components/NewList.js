

function NewList() {


    return (
        <div className="newList">
            <form>
                <h2>Add your new list below</h2>
                <br />

                <label htmlFor="listName">Name </label>
                <input 
                name="listName" 
                placeholder="List name"
                type="text"
                />

                <label htmlFor="description">Description </label>
                <input 
                name="description"
                placeholder="List description"
                type="text"
                />

                <h5>Add your first task below</h5>
                <input
                type="date"
                name="date"
                />

                <input
                type="text"
                name="task"
                placeholder="task"
                />
                
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewList;