import React, { createContext, useContext, useState} from "react";

const ModalContext = createContext();

export const useModalContext = () => {
  return useContext(ModalContext);
};

const ModalContextProvider = ({ children }) => {
  const [show, setShow]=useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const values = {
    show,
    handleClose,
    handleShow
  };
  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
