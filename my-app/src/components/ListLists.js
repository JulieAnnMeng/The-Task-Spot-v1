import Lists from './Lists';



function ListLists({lists, handleTaskPatch, handleListDelete}) {
    console.log(lists)

    const listList = lists.map((list)=>{
        return(
            <Lists 
            key={list.id}
            id={list.id}
            title={list.title}
            description={list.description}
            tasks={list.tasks}
            date={list.date}
            handleTaskPatch={handleTaskPatch}
            handleListDelete={handleListDelete}
            />
        )
    })

    return (
        <div>
            {listList}
        </div>
    );
}

export default ListLists;