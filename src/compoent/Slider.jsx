import Button from "./Button";

export default function Slider({ onStartAddProject, project,onSelected,id}) {
    // console.log(project);
    // function handelselected(value){
    //     console.log(value);
    // }
    let silder_highlight="w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 "
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {project.map(function (projects) {
                    return <li key={projects.id}>
                        <button className={`${silder_highlight} ${projects.id==id?' bg-stone-800 text-stone-200':' text-stone-400 hover:bg-stone-800'} `}onClick={()=>onSelected(projects.id)}>{projects.title}</button></li>;
                })}
            </ul>
        </aside>
    );
}