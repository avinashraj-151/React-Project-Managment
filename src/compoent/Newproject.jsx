import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function Newproject({ onAdd, onCancel }) {
    const title = useRef('');
    const Description = useRef('');
    const DueDate = useRef('');
    const showmodel = useRef('');
    function handelSubmit() {
        const TitleEnter = title.current.value;
        const DescriptionEnter = Description.current.value;
        const Duedateenter = DueDate.current.value;
        //validated date
        if (TitleEnter.trim() === '' || DescriptionEnter.trim() === '' || Duedateenter.trim() === '') {
            //show modal
            showmodel.current.showModal();
        } else {
            onAdd({
                title: TitleEnter,
                description: DescriptionEnter,
                duedate: Duedateenter
            });
        }
    }
    return (
        <>
            <Modal ref={showmodel} buttoncaption="Okay">
                <h2 className='text-xl font-bold text-stone-700 my-4 text-center'>Invalid input</h2>
                <p className='text-stone-600 mb-4'>OOPS ....looks like you forget to  enter a value</p>
                <p className='text-stone-600 mb-4'>Please make use you Provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                    <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handelSubmit}>Save</button></li>
                </menu>
                <Input type="text" ref={title} Title={"Title"} textarea={false} />
                <Input ref={Description} Title={"Description"} textarea={true} />
                <Input type="date" ref={DueDate} Title={"Due Date"} textarea={false} />
            </div>
        </>
    );
}