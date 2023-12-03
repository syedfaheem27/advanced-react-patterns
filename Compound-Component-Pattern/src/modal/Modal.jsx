import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openId, setOpenId] = useState(null);

  return (
    <ModalContext.Provider value={{ openId, setOpenId }}>
      {children}
    </ModalContext.Provider>
  );
};

const Action = ({ openModal, children }) => {
  const { setOpenId } = useContext(ModalContext);
  return <div onClick={() => openModal(setOpenId)}>{children}</div>;
};

const Body = ({ children, id }) => {
  const { openId, setOpenId } = useContext(ModalContext);
  if (id !== openId) return null;

  return createPortal(
    <div className="overlay" onClick={() => setOpenId(null)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.Action = Action;
Modal.Body = Body;

export default Modal;
