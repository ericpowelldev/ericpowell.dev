import React from 'react';

/** Notify Context Object */
export const Notify = React.createContext();

/** Notify Context Provider */
export function NotifyProvider({ children }) {
  const [alert, setAlert] = React.useState(null);
  const [alertStyle, setAlertStyle] = React.useState(`notify`);

  // Called when the alert state changes
  React.useEffect(() => {
    if (alert && alert !== null) {
      setAlertStyle(`notify show ${alert.status}`);
      const timer = setTimeout(() => setAlertStyle(`notify hide ${alert.status}`), alert.time);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  /** Function that creates a notification to display to the user
   * @param {String} message - Notification message to display to the user
   * @param {String} status - Type & display style of the notification - [`info`, `success`, `warning`, `error`]
   * @param {Number} time - (Optional) Timeout in milliseconds to display the notification
   * @return {Component} Returns the notification component to display to the user
  */
  const notify = (message = `This is a notification message...`, status = `info`, time = 5000) => {
    setAlert({ message: message, status: status, time: time });
  }

  // Return the Notify.Provider and wrap it around the contents of App.js
  return (
    <Notify.Provider value={notify}>

      {alert && alert !== null ?
        <div className={alertStyle} onClick={() => setAlertStyle(`notify hide ${alert.status}`)}>
          <h4>{alert.message}</h4>
        </div> : null}

      {children}
    </Notify.Provider>
  )
}