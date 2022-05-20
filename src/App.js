import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./utils/Global";
import { NotifyProvider } from "./utils/Notify";

import Mazeletter from "./components/Mazeletter";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ChangeLog from "./components/ChangeLog";
import Lost from "./components/Lost";

export default function App() {
  return (
    <>
      <Router>
        <GlobalProvider>
          <NotifyProvider>
            <Mazeletter />
            <Nav />
            <div id="nav-pad" />
            <Routes>
              <Route exact path="/" element={<Profile />} />
              <Route exact path="/home" element={<Profile />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/work" element={<Work />} />
              <Route exact path="/portfolio" element={<Work />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/changelog" element={<ChangeLog />} />
              <Route element={<Lost />} />
            </Routes>
            <div id="foot-pad" />
            <Footer />
          </NotifyProvider>
        </GlobalProvider>
      </Router>
    </>
  );
}
