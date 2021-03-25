import React from 'react';
import './modal.css';

const ModalWindow = ({ children, closeModalWindow }) => {
  return (
    <div className="modal-window">
      {children}
      <a onClick={closeModalWindow} href="#" className="modal-close-icon">
        <i className="fa fa-times modal-close-icon" />
      </a>
    </div>
  );
};

export default ModalWindow;
