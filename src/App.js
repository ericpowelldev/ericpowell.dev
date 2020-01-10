import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Work from './pages/Work';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  
  const [page, setPage] = React.useState(0);
  const log = true;

  const checkPage = () => {
    log && console.log(window.location.pathname);
    if (window.location.pathname === "/") setPage(1);
    else if (window.location.pathname === "/work") setPage(2);
    else if (window.location.pathname === "/contact") setPage(3);
    else setPage(404);
  }

  return (<>
    <Router>
      <Nav page={page} />
      <div id="navPad" />
      <Switch>
        <Route exact path="/" component={() => <Profile checkPage={checkPage} log={log} />} />
        <Route exact path="/work" component={() => <Work checkPage={checkPage} log={log} />} />
        <Route exact path="/contact" component={() => <Contact checkPage={checkPage} log={log} />} />
        <Route component={() => <NotFound checkPage={checkPage} log={log} />} />
      </Switch>
      <div id="footPad" />
      <Footer />
    </Router>
  </>)
}