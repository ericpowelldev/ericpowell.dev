import React from 'react';

/** Global Context Object */
export const Global = React.createContext();

/** Global Context Provider */
export function GlobalProvider({ children }) {
  const [page, setPage] = React.useState(`profile`);

  /** Function to console log only on localhost
   * @param {String} message - Message to display in the console log
   * @param {Object} data - (Optional) Data to display in the console log after the message
   * @return {Console} Returns a console.log() with the params passed in
  */
  const log = (message = ``, data = ``) => {
    if (window.location.hostname === `localhost`) {
      if (message === `` && data === ``) return console.log();
      else if (data === ``) return console.log(message);
      else return console.log(message, data);
    }
  }

  /** Function to check which page is active to render the page properly */
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

  /** Global context for the app */
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