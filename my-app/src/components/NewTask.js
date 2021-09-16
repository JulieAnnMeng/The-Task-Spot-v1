import { useState } from 'react';

function NewTask({handleNewTask}) {
// props.map to make each list
    const blankForm = {date: "", task: ""};
    const [formData, setFormData] = useState(blankForm);

    function handleFormChange(e){
        let name = e.target.name;
        let value = e.target.value;
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault();
        handleNewTask(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleFormChange}
             />

            <input
            type="text"
            name="task"
            placeholder="task"
            value={formData.task}
            onChange={handleFormChange}
             />

            <button type="submit">Submit</button>
        </form>
    );
}

export default NewTask;