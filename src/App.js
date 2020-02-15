import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotifyProvider } from './NotifyContext';
import { GlobalContext } from './GlobalContext';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ChangeLog from './pages/ChangeLog';
import NotFound from './pages/NotFound';

const log = window.location.hostname === `localhost` ? true : false;

export default function App() {
  const [page, setPage] = React.useState(0);

  // Check which page is active to render things properly
  const checkPage = () => {
    if (window.location.pathname === `/`) setPage(1);
    else if (window.location.pathname === `/home`) setPage(1);
    else if (window.location.pathname === `/profile`) setPage(1);
    else if (window.location.pathname === `/work`) setPage(2);
    else if (window.location.pathname === `/portfolio`) setPage(2);
    else if (window.location.pathname === `/contact`) setPage(3);
    else if (window.location.pathname === `/changelog`) setPage(4);
    else setPage(0);
    window.scrollTo({ top: 0, left: 0, behavior: `smooth` });
    // log && console.log(`PAGE: ${page}, PATHNAME: ${window.location.pathname}`);
  }

  // Create global context object
  const ctx = {
    log: log,
    page: page,
    checkPage: checkPage,
  }

  // Return the router with its page routes and context
  return (<>
    <Router>
      <NotifyProvider>
        <GlobalContext.Provider value={ctx}>
          <Nav />
          <div id="navPad" />
          <Switch>
            <Route exact path="/" component={() => <Profile />} />
            <Route exact path="/home" component={() => <Profile />} />
            <Route exact path="/profile" component={() => <Profile />} />
            <Route exact path="/work" component={() => <Work />} />
            <Route exact path="/portfolio" component={() => <Work />} />
            <Route exact path="/contact" component={() => <Contact />} />
            <Route exact path="/changelog" component={() => <ChangeLog />} />
            <Route component={() => <NotFound />} />
          </Switch>
          <div id="footPad" />
          <Footer />
        </GlobalContext.Provider>
      </NotifyProvider>
    </Router>
  </>)
}