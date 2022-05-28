import * as React from "react";
import { createPortal } from "react-dom";
import { ReactComponent as CloseIcon } from "../../assets/icons/icon-close.svg";
import "./Modal.scss";
import { useOnClickOutside } from "./../../app/hooks";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, handleClose }) => {
    const ref = React.useRef(null);
    useOnClickOutside(ref, handleClose);
    if (!isOpen) return null;
    return createPortal(
        <div className='modal-overlay'>
            <div className='modal' ref={ref}>
                <div className='modal-content'>{children}</div>
                <button className='close-btn' onClick={handleClose}>
                    <CloseIcon className='close-btn__icon' />
                </button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
