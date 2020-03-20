import React from 'react';
export const Global = React.createContext();

export function GlobalProvider({ children }) {
  const [page, setPage] = React.useState(`profile`);

  // Create a log function to console log only on localhost
  const log = (msg = ``, obj = ``) => {
    if (window.location.hostname === `localhost`) {
      if (msg === `` && obj === ``) return console.log();
      else if (obj === ``) return console.log(msg);
      else return console.log(msg, obj);
    }
  }

  // Check which page is active to render things properly
  const checkPage = () => {
    if (window.location.pathname === `/`) setPage(`profile`);
    else if (window.location.pathname === `/home`) setPage(`profile`);
    else if (window.location.pathname === `/profile`) setPage(`profile`);
    else if (window.location.pathname === `/work`) setPage(`work`);
    else if (window.location.pathname === `/portfolio`) setPage(`work`);
    else if (window.location.pathname === `/contact`) setPage(`contact`);
    else if (window.location.pathname === `/changelog`) setPage(`changelog`);
    else setPage(`404`);
    window.scrollTo({ top: 0, left: 0, behavior: `smooth` });
    log(`PAGE: ${page}, PATHNAME: ${window.location.pathname}`);
  }

  // Create global context object
  const ctx = {
    log: log,
    page: page,
    checkPage: checkPage,
  }

  // Return the Global.Provider and wrap it around the contents of App.js
  return (
    <Global.Provider value={ctx}>
      {children}
    </Global.Provider>
  )
}