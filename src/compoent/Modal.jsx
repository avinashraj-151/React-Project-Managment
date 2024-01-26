import { forwardRef } from "react";
import Button from "./Button";


const Modal = forwardRef(function Modal({ children, buttoncaption }, ref) {
    return (
        <dialog ref={ref} className="backdrop:bg-stone-900/90  shadow-md rounded-md p-4">
            {children}
            <form method="dialog" className="mt-5 text-right">
                {/* <button >{buttoncaption}</button> */}
                <Button>{buttoncaption}</Button>
            </form>
        </dialog>
    );
});
export default Modal;