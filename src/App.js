import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ChangeLog from './pages/ChangeLog';
import NotFound from './pages/NotFound';

export default function App() {

  const [page, setPage] = React.useState(0);
  const log = window.location.hostname === `localhost` ? true : false;

  // const darkMood = () => {
  //   document.body.classList.remove(`moody`);
  //   localStorage.setItem(`mood`, `dark`);
  //   log && console.log(`MOOD: dark`);
  // }
  // const lightMood = () => {
  //   document.body.classList.add(`moody`);
  //   localStorage.setItem(`mood`, `light`);
  //   log && console.log(`MOOD: light`);
  // }

  // const handleMood = () => {
  //   const currentMood = localStorage.getItem(`mood`);
  //   if (currentMood === `dark`) lightMood();
  //   else darkMood();
  // }

  // const mood = localStorage.getItem(`mood`);
  // if (!mood || mood === `dark`) darkMood();
  // else lightMood();

  const checkPage = () => {
    if (window.location.pathname === "/") setPage(1);
    else if (window.location.pathname === "/work") setPage(2);
    else if (window.location.pathname === "/contact") setPage(3);
    else if (window.location.pathname === "/changelog") setPage(4);
    else setPage(0);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    log && console.log(`PAGE: ${page}, PATHNAME: ${window.location.pathname}`);
  }

  return (<>
    <Router>
      <Nav page={page} log={log} />
      <div id="navPad" />
      <Switch>
        <Route exact path="/" component={() => <Profile checkPage={checkPage} log={log} />} />
        <Route exact path="/work" component={() => <Work checkPage={checkPage} log={log} />} />
        <Route exact path="/contact" component={() => <Contact checkPage={checkPage} log={log} />} />
        <Route exact path="/changelog" component={() => <ChangeLog checkPage={checkPage} log={log} />} />
        <Route component={() => <NotFound checkPage={checkPage} log={log} />} />
      </Switch>
      <div id="footPad" />
      <Footer log={log} />
    </Router>
  </>)
}