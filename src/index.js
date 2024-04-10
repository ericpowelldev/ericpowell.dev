// -------------------------------- DEPENDENCIES -------------------------------- //

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./static/styles/reset.css";
import "./static/styles/index.css";
import "./static/styles/header.css";
import "./static/styles/footer.css";
import "./static/styles/profile.css";
import "./static/styles/work.css";
import "./static/styles/contact.css";
import "./static/styles/changelog.css";
import "./static/styles/lost.css";

// -------------------------------- RENDER -------------------------------- //

const root = document.getElementById("root");
const app = ReactDOM.createRoot(root);
app.render(<App />);
