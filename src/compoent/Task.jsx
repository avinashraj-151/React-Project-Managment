import NewTask from "./NewTask";

export default function Task({Tasks,onAddTask,onDeleteTask}){
    // console.log(Tasks);
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddTask={onAddTask}/>
            {
            Tasks.length==0 &&(
                <p className="text-stone-800 mb-4 m-4">This project does not have any tasks yet.</p>)
            }
            {
            Tasks.length>0 &&<ul className="p-4 mt-8">
                {
                    Tasks.map(function(task){
                       return(  <li key={task.id} className="flex justify-between bg-stone-300 my-2 p-3 rounded-md">
                            <span>{task.task}</span>
                            <button className="text-slate-700 hover:text-red-600 capitalize" onClick={()=>onDeleteTask(task.id)}>Clear</button>
                        </li>
                       );
                    })
                }
            </ul>
            }
        </section>
    );
}