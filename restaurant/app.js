const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios');
const app = express()
const port = 4001

const log = require('simple-node-logger').createSimpleLogger('restaurant.log');

// create application/json parser
var jsonParser = bodyParser.json()

// order database
var order_count = 0
var orders = {}

app.post('/order', jsonParser, function (req, res) {
    order_count++;
    order = { 'order_id': order_count, 'product': req.body.product, 'status':'Preparing' }
    orders[order_count] = order;

    log.info('POST /order ', order);

    res.json(order);
})

app.get('/order/:orderId', jsonParser, (req, res) => {
    log.info('GET /order/', req.params.orderId, ' ', orders[req.params.orderId]);

    res.json(orders[req.params.orderId]);
})

app.put('/order/:orderId', jsonParser, (req, res) => {
    var json = JSON.stringify({ 'order_id': req.params.orderId });
    axios.post('http://localhost:5001/delivery', json, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        orders[req.params.orderId]['status'] = 'Sended to delivery';
        log.info('Delivery APP: POST /delivery ', response.data);
        log.info('PUT /order/', req.params.orderId, ' ', orders[req.params.orderId]);
        res.json(orders[req.params.orderId]);
    });
})

app.listen(port, () => {
    log.info('Restaurant APP started on port ', port);
})