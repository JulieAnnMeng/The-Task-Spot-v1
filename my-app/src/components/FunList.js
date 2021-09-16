//import { useState} from 'react';
//import Lists from './Lists';
//import { useParams, useHistory, Link } from 'react-router-dom'


//const funURL = "https://www.boredapi.com/api/activity"
function FunList({lists, handleTaskPatch, handleListDelete}) {
    /*
    const [funActivity, setFunActivity]= useState(null)
    
    const fun = lists.find(list => list.title === "Fun")
        


    
    
    
    

    


    function getFun(){
        fetch(funURL)
        .then(r=>r.json())
        .then(activityObj=>setFunActivity( activityObj.activity))
    }
    // console.log(funActivity)

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
    
    function handleNewTask(formData){
        let newID = tasks.at(-1).id + 1;
        const newTask = {id: newID, name: formData.task, date: formData.date, checked: false};
        tasks.push(newTask);
        handleTaskPatch(id, tasks);
    }
*/

    return (
        <div>{/*
            <h2>Plan fun activities below</h2>
            <button className="funListAdd">Add Fun</button>
            <button className="apiFunAdd" onClick={getFun}>Get Fun</button>
            
            <form className="funListAdd" onSubmit={handleSubmit}>
                <h3>Add to your fun below</h3>
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleFormChange}
                />

                <input
                type="text"
                name="name"
                placeholder="fun task"
                value={formData.name}
                onChange={handleFormChange}
                />
                
                <br /><br />
                <button type="submit">Submit</button>
            </form>
            <form className="apiFunAdd" onSubmit={handleSubmit}>
                <h3>Get fun ideas below</h3>
                <h5>{funActivity ? funActivity : "random fun idea"}</h5>
                <input
                type="hidden"
                name="name"
                placeholder="fun task"
                value={funActivity}
                onChange={handleFormChange}
                />
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleFormChange}
                 />
                <br />
                <button type="submit">Submit</button>
            </form>
            <Lists 
            key={id}
            id={id}
            title={title}
            description={description}
            tasks={tasks}
            
            handleTaskPatch={handleTaskPatch}
            handleListDelete={handleListDelete}
            />
            */}
        </div>
  );
}

export default FunList;