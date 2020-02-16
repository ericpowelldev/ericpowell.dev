import React from 'react';

export const Notify = React.createContext();

export function NotifyProvider({ children }) {
  const [alert, setAlert] = React.useState(null);
  const [render, setRender] = React.useState(`notify`);

  React.useEffect(() => {
    if (alert && alert !== null) {
      setRender(`notify show ${alert.status}`);
      const timer = setTimeout(() => setRender(`notify hide ${alert.status}`), alert.time);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const notify = (status = `info`, message = `This is a notification message...`, time = 5000) => {
    setAlert({ status: status, message: message, time: time });
  }

  return (
    <Notify.Provider value={notify}>
      {children}
      {alert && alert !== null ?
        <div className={render} onClick={() => setRender(`notify hide ${alert.status}`)}>
          <h4>{alert.message}</h4>
        </div> : null
      }
    </Notify.Provider>
  )
}