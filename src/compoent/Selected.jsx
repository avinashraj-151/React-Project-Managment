import Task from "./Task";

export default function Selected(props){
    // console.log(props.Tasksvalue);
    return(
        <>
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-700 mb-2">{props.id.title}</h1>
                    <div className="flex flex-row gap-2">
                    <button onClick={props.onClose} className="text-stone-600 hover:text-stone-950">Close</button>
                    <button onClick={()=>props.onDelete(props.id.id)} className="text-stone-600 hover:text-stone-950">Delete</button>
                    </div>
                </div>
                <p className="mb-4 text-stone-400">{props.id.duedate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{props.id.description}</p>
            </header>
            <Task onAddTask={props.onAddTask} Tasks={props.Tasksvalue} onDeleteTask={props.onDeleteTask}></Task>
        </div>
        {/* task */}
        </>
    );
}