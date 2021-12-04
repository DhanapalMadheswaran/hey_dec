/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        <a href="#!" className="modal-close" onClick={handleClose}>
          <span aria-hidden="true">×</span>
        </a>
        {children}
      </div>
    </div>
  );
};

export default Modal;
