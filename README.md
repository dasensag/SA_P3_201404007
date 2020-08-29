# P4 Software Avanzado

SAO App simulating a crowdsourcing restaurant app.

It has three microservices apps:
* Restaurant
* Client
* Deliver

# Requirements

* npm install express --save
* npm install simple-node-logger --save
* npm install body-parser --save
* npm install axios --save
* npm install randomstring --save

# Client

POST /order

Creates a new order

GET /order/$orderID

Checks order status

GET /delivery/$orderID

Checks delivery status

# Restaurant 

POST /order

Recieves a new order

GET /order

Checks order status

PUT /order

Marks as sended to delivery

# Delivery

POST /delivery

Recieves a new delivery

GET /delivery

Checks delivery status

PUT /delivery

Marks as delivered