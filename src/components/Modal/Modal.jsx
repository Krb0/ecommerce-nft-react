import React from "react";
import ReactDOM from "react-dom";
import { StyledModal, StyledBackdrop } from "./StyledModal";
const Backdrop = ({ onHideCart }) => {
  // Passing a callback to close modal when backdrop is clicked
  return <StyledBackdrop onClick={onHideCart} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <StyledModal>
      <div>{children}</div>
    </StyledModal>
  );
};

const portalElement = document.querySelector("#overlays");
const Modal = ({ children, onHideCart }) => {
  return (
    //Creating a portal to send component out of #app
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
