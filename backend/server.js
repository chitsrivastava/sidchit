process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
app.use(cors());
app.use(bodyParser.json());

app.get('/vehicles', async (req, res) => {
    let response;
    await axios.get("https://protected-earth-05809.herokuapp.com/vehicle")
        .then(apiResponse => {
            response = apiResponse.data;
        })
        .catch(error => { console.log('\n\n/vechile \n\nError ==> ', error) })
    res.status(200)
    res.send(response)
});

app.get('/vehicles/:id', async (req, res) => {
    await axios.get("https://protected-earth-05809.herokuapp.com/vehicle/id/" + req.params.id)
        .then(apiResponse => {
            response = apiResponse.data;
        })
        .catch(error => { console.log('\n\n/vechile \n\nError ==> ', error) })
    res.status(200);
    res.send(response);
});

app.listen(9000, () => console.log('Server running on port 9000 !!'));