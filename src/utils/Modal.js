import React from 'react';

/** Modal Context Object */
export const Modal = React.createContext();

/** Modal Context Provider */
export function ModalProvider({ children }) {
  const [dialog, setDialog] = React.useState({ open: false });

  /** Function that creates a modal to display to the user
   * @param {String} index - Type & display style of the modal
   * @param {Object} data - (Optional) Data needed for the modal to render properly
   * @param {Array} actions - (Optional) Array of label:function pairs to render as buttons - { label: buttonLabel, fn: handleChange }
   * @param {Boolean} allowClose - (Optional) Boolean to allow the modal to be closed by the user manually
   * @return {Component} Returns the modal component to display to the user
  */
  const open = (index = `default`, data = null, actions = [], allowClose = true) => {
    setDialog({ open: true, index: index, data: data, actions: actions, allowClose: allowClose });
  }

  /** Function to close the modal */
  const close = () => {
    setDialog({ open: false });
  }

  /** Modal context for the app */
  const modal = {
    open: open,
    close: close,
  }

  // Return the Modal.Provider and wrap it around the contents of App.js
  return (
    <Modal.Provider value={modal}>

      {children}
    </Modal.Provider>
  )
}