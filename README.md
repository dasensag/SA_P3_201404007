# P4 Software Avanzado

Service orchestration with a simple ESB. Usage video: https://drive.google.com/file/d/1PcQWME38GsjrHny0bTfW4dRC0Gtxi5Cf/view?usp=sharing

### Microservices

* **Client:** Sends orders to restaurant, checks order and delivery status.
* **Restaurant:** Recieves orders from client and gives status. Can send orders to deliver.
* **Deliver:** Recieves orders to deliver from restaurant and gives status to client. Can notify when order is delivered.
* **ESB:** Routes requests between the other microservices.

## Requirements

The microservices and EBS are Node JS API with express. To use install the following dependencies:

* npm install express --save
* npm install simple-node-logger --save
* npm install body-parser --save
* npm install axios --save
* npm install randomstring --save

## Services 

### Client

**POST /order**

Creates a new order

**GET /order/{orderID}**

Checks order status

**GET /delivery/{orderID}**

Checks delivery status

### Restaurant 

**POST /order**

Recieves a new order

**GET /order/{orderID}**

Checks order status

**PUT /delivery/{orderID}**

Sends order to delivery

### Delivery

**POST /delivery**

Recieves a new delivery

**GET /delivery/{orderID}**

Checks delivery status

**PUT /delivery/{orderID}**

Marks order as delivered