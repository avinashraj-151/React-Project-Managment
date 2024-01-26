import Newproject from "./compoent/Newproject";
import Noproject from "./compoent/Noproject";
import Selected from "./compoent/Selected";
import Slider from "./compoent/Slider";
import { useState } from "react";
function App() {
  const [projectState, setProjectstate] = useState({
    seletcedProject: undefined,
    project: [],
    task:[]
  });

  function handeladdTask(enterTask){
    // console.log(enterTask);
    setProjectstate(function(prevdata){
       const new_task={
        id:Math.random(),
        task:enterTask,
        projectid:prevdata.seletcedProject
       };
      return{
        ...prevdata,
        task:[new_task,...prevdata.task]
      };
    });
  }
  function handeldeleteTask(id){
    // console.log(id);
    setProjectstate(function(prevdata){
    const selected_task=projectState.task.filter(function(task){
      return task.id!=id;
    });
    return{
      ...prevdata,
      task:selected_task
    }
  });
    // console.log(selected_task);
  }
  function handelSelectedProject(id){
    // console.log(id);
    // console.log(projectState.project[id]);
    setProjectstate(prevState => {
      return {
        ...prevState,
        seletcedProject:id,
      }
    });
  }

  function handelStartAddProject() {
    // console.log('avinashraj');
    setProjectstate(prevState => {
      return {
        ...prevState,
        seletcedProject: null,
      }
    });
  }
  function handelAddProject(projectData) {
    setProjectstate(function (prevdata) {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevdata,
        seletcedProject: undefined,
        project: [...prevdata.project, newProject]
      };
    });
  }
  // console.log(projectState);
  function handelcancelAddproject() {
    setProjectstate(function (projectdata) {
      return {
        ...projectdata,
        seletcedProject: undefined,
      }
    });
  }
  
  const selectedProjectid = projectState.project.find(function(Project) {
    return projectState.seletcedProject==Project.id;
});
const selected_task=projectState.task.filter(function(task){
  return task.projectid==projectState.seletcedProject;
});
function handelselectDelete(id){
  // console.log(id);
  setProjectstate(function(Projectdata){
    const updatedProject=projectState.project.filter(function(project){
      return project.id!=id;
    });
    return{
      ...Projectdata,
      project:updatedProject,
      seletcedProject:undefined
    };
  });
}
function handelselectClose(){
setProjectstate(function(prevdata){
return{
  ...prevdata,
  seletcedProject:undefined
};
});
}

// console.log("ya hai output ", selectedProjectid);

  let content=<Selected id={selectedProjectid} onDelete={handelselectDelete} onAddTask={handeladdTask} Tasksvalue={selected_task} onDeleteTask={handeldeleteTask} onClose={handelselectClose}></Selected>;
  if (projectState.seletcedProject === null) {
    content = <Newproject onAdd={handelAddProject} onCancel={handelcancelAddproject}></Newproject>
  } else if (projectState.seletcedProject === undefined) {
    content = <Noproject onStartAddProject={handelStartAddProject}></Noproject>;
    // content=<Selected title={'title'} duedate={'20-20-2002'} description={'this is year'}></Selected>
  }
  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <main className="h-screen my-8 flex gap-8">
        <Slider id={projectState.seletcedProject} onStartAddProject={handelStartAddProject} project={projectState.project} onSelected={handelSelectedProject}></Slider>
        {content}
      </main>
    </>
  );
}

export default App;
