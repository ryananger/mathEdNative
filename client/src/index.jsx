import React from "react";
import {createRoot} from "react-dom/client";
import './components/loadImages.js';
import App from './components/App.jsx';

const root = createRoot(document.getElementById("root"));

root.render(<App />);
