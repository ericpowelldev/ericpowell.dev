import React from 'react';

export const NotifyContext = React.createContext();

export function NotifyProvider({ children }) {
  const [alerts, setAlerts] = React.useState([]);

  console.log(`alerts:`, alerts);
  
  React.useEffect(() => {
    if (alerts && alerts.length > 0) {
      const timer = setTimeout(() => setAlerts([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  const handleAlert = (status, message) => {
    setAlerts([{ status: status, message: message }]);
  }

  const ctx = { handleAlert };

  return (
    <NotifyContext.Provider value={ctx}>
      {children}
      {alerts && alerts.length > 0 ?
        alerts.map((alert, i) => {
          return (
            <div key={i} id="notify" className={`show ${alert.status}`}>
              <p>{alert.message}</p>
            </div>
          )
        }) : null
      }
    </NotifyContext.Provider>
  )
}