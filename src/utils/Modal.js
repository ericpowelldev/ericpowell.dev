import React from 'react';

/** Modal Context Object */
export const Modal = React.createContext();

/** Modal Context Provider */
export function ModalProvider({ children }) {
  const [dialog, setDialog] = React.useState({ open: false });

  /** Function that creates a modal to display to the user
   * @param {String} state - Form state, type & display style of the modal
   * @param {Object} input - (Optional) Input data needed for the modal to render properly
   * @param {Array} actions - (Optional) Array of label:function pairs to render as buttons - { label: buttonLabel, fn: handleChange }
   * @param {Boolean} allowClose - (Optional) Boolean to allow the modal to be closed by the user manually
  */
  const open = (state = `default`, input = null, actions = [], allowClose = true) => {
    setDialog({ open: true, state: state, input: input, actions: actions, allowClose: allowClose });
  }

  /** Function to close the modal 
   * @param {Object} output - (Optional) Output data extracted from the modal
  */
  const close = (output = null) => {
    if (output) setDialog({ open: false, output: output });
    else setDialog({ open: false });
  }

  /** Modal context for the app */
  const modal = {
    open: open,
    close: close,
    state: dialog.state,
    input: dialog.input,
    output: dialog.output,
  }

  // Return the Modal.Provider and wrap it around the contents of App.js with the Modal Component
  return (
    <Modal.Provider value={modal}>

      {children}
    </Modal.Provider>
  )
}