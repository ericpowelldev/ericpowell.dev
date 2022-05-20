import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/nav.css";
import "./styles/footer.css";
import "./styles/profile.css";
import "./styles/work.css";
import "./styles/contact.css";
import "./styles/changelog.css";
import "./styles/lost.css";

const root = document.getElementById("root");
const app = ReactDOM.createRoot(root);
app.render(<App />);
