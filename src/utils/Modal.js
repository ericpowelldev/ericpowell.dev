import React from 'react';
export const Modal = React.createContext();

export function ModalProvider({ children }) {
  const [modalState, setModalState] = React.useState(false);

  // Function to open the modal
  const modal = (data, index) => {
    setModalState({ open: true, data: data, index: index });
  }

  // Return the Modal.Provider and wrap it around the contents of App.js
  return (
    <Modal.Provider value={modal}>
      
      {children}
    </Modal.Provider>
  )
}