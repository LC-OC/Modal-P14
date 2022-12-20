import React from "react";
import "./styles/modalStyle.css";

const Modal = ({ title, textContent, openModal, closeModal, textButton }) => {
  if (openModal) {
    console.log("modal open");
    return (
      <div className="modal-container">
        <div className="modal-content">
          <h2 className="title-modal">{title}</h2>
          <p className="text-content">{textContent}</p>
          <button className="close-modal" onClick={closeModal}>
            {textButton}
          </button>
        </div>
      </div>
    );
  }
};

export default Modal;
