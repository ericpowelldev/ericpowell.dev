import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './utils/Global';
import { NotifyProvider } from './utils/Notify';

import Mazeletter from './components/Mazeletter';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Work from './components/Work';
import Contact from './components/Contact';
import ChangeLog from './components/ChangeLog';
import Lost from './components/Lost';

export default function App() {
  return (<>
    <Router>
      <GlobalProvider>
        <NotifyProvider>
          <Mazeletter />
          <Nav />
          <div id="nav-pad" />
          <Switch>
            <Route exact path="/" component={() => <Profile />} />
            <Route exact path="/home" component={() => <Profile />} />
            <Route exact path="/profile" component={() => <Profile />} />
            <Route exact path="/work" component={() => <Work />} />
            <Route exact path="/portfolio" component={() => <Work />} />
            <Route exact path="/contact" component={() => <Contact />} />
            <Route exact path="/changelog" component={() => <ChangeLog />} />
            <Route component={() => <Lost />} />
          </Switch>
          <div id="foot-pad" />
          <Footer />
        </NotifyProvider>
      </GlobalProvider>
    </Router>
  </>)
}