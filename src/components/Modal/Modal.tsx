// @ts-nocheck
import ReactDOM from "react-dom";

export default function Modal({
    children,
    isOpen,
    onClose
}) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="w-fit" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById('modal')! // The portal destination
    );
}