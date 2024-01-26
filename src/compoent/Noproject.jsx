import Noprojectimage from '../assets/no-projects.png';
import Button from './Button';



export default function Noproject({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={Noprojectimage} alt="An empty task" className='w-16 h-16 object-contain mx-auto' />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project selected</h2>
            <p className='text-stone-400 mb-4'> select a project or get started with a new project</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>Create a new project</Button>
            </p>
        </div>
    );
}