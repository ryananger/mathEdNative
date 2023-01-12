import React from "react";
import {createRoot} from "react-dom/client";
import './util/loadImages.js';
import App from './components/App.jsx';

const root = createRoot(document.getElementById("root"));

setTimeout(function() {
  root.render(<App />);
}, 100)
