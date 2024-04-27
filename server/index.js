const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const https  = require('https');
const http   = require('http');
const fs     = require('fs');
const cors   = require('cors');
const path   = require('path');
const router = express.Router();
const app    = express();

const dist = path.join(__dirname, '../client/dist');

// var options = {
//   key:  fs.readFileSync(process.env.HTTPS_KEY),
//   cert: fs.readFileSync(process.env.HTTPS_CERT)
// };

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(dist));
app.use(router);

const PORT = 4001;
http.createServer(app).listen(PORT);
// https.createServer(options, app).listen(443);
console.log(`Server listening at http://localhost:${PORT}`);
