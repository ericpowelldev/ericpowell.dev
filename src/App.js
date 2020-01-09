import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Work from './pages/Work';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const log = false;

export default function App() {

  const [page, setPage] = React.useState(0);

  const checkPage = () => {
    log && console.log(window.location.pathname);
    if (window.location.pathname === "/") setPage(0);
    else if (window.location.pathname === "/work") setPage(1);
    else if (window.location.pathname === "/contact") setPage(2);
    else setPage(3);
  }

  return (<>
    <Router>
      <Nav page={page} />
      <div className="pad" />
      <Switch>
        <Route exact path="/" component={() => <Profile checkPage={checkPage} />} />
        <Route exact path="/work" component={() => <Work checkPage={checkPage} />} />
        <Route exact path="/contact" component={() => <Contact checkPage={checkPage} />} />
        <Route component={() => <NotFound checkPage={checkPage} />} />
      </Switch>
      <div className="pad" />
      <Footer />
    </Router>
  </>)
}