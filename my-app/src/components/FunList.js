//Julie don't touch this 
//issue is rendering

import { useState} from 'react';
import Lists from './Lists';
// import { useParams, useHistory, Link } from 'react-router-dom'



function FunList({lists, handleTaskPatch, handleListDelete}) {
    const funList = lists.find(list => list.title === "Fun");
    // const{id, title, description, tasks} = funList;
    // console.log(funList);

    const [toggleAdd, setToggleAdd] = useState(false);
    const [funActivity, setFunActivity]= useState("");

    const funURL = "https://www.boredapi.com/api/activity";
    const apiFun = "Click 'Get Fun' to see fun ideas!";

    function getFun(){
        fetch(funURL)
        .then(r=>r.json())
        .then(activityObj=>setFunActivity( activityObj.activity))
    }
    // console.log(funActivity)

    const blankForm = {date: "", task: ""};
    const [formData, setFormData] = useState(blankForm);

    function addFunForm (){
        setToggleAdd(!toggleAdd);
    }

    function boardAdd (funActivity) {
        debugger;
    }

    function handleFormChange(e){
        let name = e.target.name;
        let value = e.target.value;
        setFormData({...formData, [name]: value})
        debugger;
    }

    function handleSubmit(e){
        e.preventDefault();
        debugger;
        handleNewTask(formData);
    }
    
    function handleNewTask(formData){
        let newID = funList.tasks.at(-1).id + 1;
        const newTask = {id: newID, name: formData.task, date: formData.date, checked: false};
        funList.tasks.push(newTask);
        handleTaskPatch(funList.id, funList.tasks);
    }

    return (
        <div>
            <h2>Plan fun activities below</h2>
            <button className="funListAdd" onClick={addFunForm}>Add Fun</button>
            {toggleAdd ? 
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
                        value={formData.task}
                        onChange={handleFormChange}
                    />
                    <br /><br />
                    <button type="submit">Submit</button>
                </form> 
            : null }

            {/* <form className="apiFunAdd" onSubmit={handleSubmit}> */}
                <h3>Get fun ideas below</h3>
                <button className="apiFunAdd" onClick={getFun}>Get Fun</button>
                <h5>{funActivity ? funActivity : apiFun} <button onClick={() => boardAdd(funActivity)}>Add Fun!</button></h5>
                {/* <input
                // type="hidden"
                name="name"
                placeholder="fun task"
                value={funActivity ? funActivity : "random fun idea"}
                onChange={handleFormChange}
                />
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleFormChange}
                 />
                <br />
                <button type="submit">Submit</button> */}
            {/* </form> */}
            

            {funList ? 
                <Lists 
                    key={funList.id}
                    id={funList.id}
                    title={funList.title}
                    description={funList.description}
                    tasks={funList.tasks}
                    
                    handleTaskPatch={handleTaskPatch}
                    handleListDelete={handleListDelete}
                /> 
            : <h2>Loading...</h2> }
            
        </div>
  );
}

export default FunList;