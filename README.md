# P3 Software Avanzado

Service choreography.

### Usage example video

https://drive.google.com/file/d/1ji8cVz5Zj16bnPK2lcYBcM4B38wdkIC2/view?usp=sharing

### Microservices

* **Client:** Sends orders to restaurant, checks order and delivery status.
* **Restaurant:** Recieves orders from client and gives status. Can send orders to deliver.
* **Delivery:** Recieves orders to deliver from restaurant and gives status to client. Can notify when order is delivered.

## Requirements

The microservices are Node JS API with express. To use install the following dependencies:

* npm install express --save
* npm install simple-node-logger --save
* npm install body-parser --save
* npm install axios --save
* npm install randomstring --save

# Services 

## Client

**POST /order**

Creates a new order

**GET /order/{orderID}**

Checks order status

**GET /delivery/{orderID}**

Checks delivery status

## Restaurant 

**POST /order**

Recieves an order

**GET /order/{orderID}**

Checks order status

**PUT /delivery/{orderID}**

Sends order to delivery

## Delivery

**POST /delivery**

Recieves an order for delivery

**GET /delivery/{orderID}**

Returns delivery status

**PUT /delivery/{orderID}**

Updates delivery status to _delivered_