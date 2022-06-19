process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
app.use(cors());
app.use(bodyParser.json());
const data = require('./data.json');

app.get('/vehicles', (req, res) => {
    const vehicles = data.vehicles;
    res.send(vehicles)
});

app.get('/vehicles/:id', (req, res) => {
    const vehicle = data.vehicles.filter(vehicle => vehicle.vehicleId == req.params.id);
    res.status(200);
    res.send(vehicle);
});

app.listen(9000, () => console.log('Server running on port 9000 !!'));