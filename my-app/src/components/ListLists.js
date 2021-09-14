import Lists from './Lists';



function ListLists({lists}) {
    console.log(lists)

    const listList = lists.map((list)=>{
        return(
            <Lists 
            key={list.id}
            title={list.title}
            description={list.description}
            tasks={list.tasks}
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