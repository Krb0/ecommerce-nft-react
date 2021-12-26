import React from "react";
import ReactDOM from "react-dom";
import { StyledModal, StyledBackdrop } from "./StyledModal";
const Backdrop = ({ onHideCart }) => {
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
