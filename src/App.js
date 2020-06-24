import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './utils/Global';
import { NotifyProvider } from './utils/Notify';
import { ModalProvider } from './utils/Modal';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ChangeLog from './pages/ChangeLog';
import NotFound from './pages/NotFound';

export default function App() {
  return (<>
    <Router>
      <GlobalProvider>
        <NotifyProvider>
          <ModalProvider>
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
          </ModalProvider>
        </NotifyProvider>
      </GlobalProvider>
    </Router>
  </>)
}