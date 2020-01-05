import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function App() {

  const [page, setPage] = React.useState(0);

  return (
    <Router>
      <Nav page={page} setPage={setPage} />
      <div className="pad" />
      <Route exact path="/" component={() => <Profile setPage={setPage} />} />
      <Route exact path="/work" component={() => <Work setPage={setPage} />} />
      <Route exact path="/contact" component={() => <Contact setPage={setPage} />} />
      <div className="pad" />
      <Footer setPage={setPage} />
    </Router>
  )
}