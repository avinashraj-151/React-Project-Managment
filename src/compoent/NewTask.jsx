import { useState } from "react";

export default function NewTask({onAddTask}){
    const [entervalue,setentervalue]=useState('');
    function handelchangeTask(event){
        setentervalue(event.target.value);
    }
    function handelnewTask(){
        if(entervalue.trim()!=''){
            onAddTask(entervalue);
            setentervalue('');
            // console.log(entervalue);
        }
    }
    return(
        <div className="flex gap-4">
            <input onChange={handelchangeTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200 focus:outline-none focus:border-stone-600 border-b-2 border-stone-300" value={entervalue}></input>
            <button className="text-stone-200 bg-zinc-900 p-2 rounded hover:bg-zinc-700" onClick={handelnewTask}>Add Task</button>
        </div>
    );
}