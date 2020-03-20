import React from 'react';
export const Notify = React.createContext();

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

  // Create notify context for child components
  const notify = (message = `This is a notification message...`, status = `info`, time = 5000) => {
    setAlert({ message: message, status: status, time: time });
  }

  // Return the Notify.Provider and wrap it around the contents of App.js
  return (
    <Notify.Provider value={notify}>
      {alert && alert !== null ?
        <div className={alertStyle} onClick={() => setAlertStyle(`notify hide ${alert.status}`)}>
          <h4>{alert.message}</h4>
        </div> : null
      }
      {children}
    </Notify.Provider>
  )
}