import React from "react";
import "./Modal.css";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-gray-900 opacity-75"
        onClick={handleOverlayClick}
      ></div>
      <div className="z-50 mx-4 w-full max-w-md rounded-lg bg-white p-4 md:mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Modal;
