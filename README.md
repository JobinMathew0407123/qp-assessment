Grocery Store API
Overview
This API provides functionalities for managing grocery items in a store. It allows both administrators and users to perform various actions related to grocery items.

Admin Responsibilities
Add New Grocery Items: Admins can add new grocery items to the system, including specifying the name, price, and inventory level of the item.

View Existing Grocery Items: Admins can view the list of existing grocery items in the system, along with their details such as name, price, and inventory level.

Remove Grocery Items: Admins have the ability to remove grocery items from the system if they are no longer available.

Update Details of Existing Grocery Items: Admins can update the details of existing grocery items, such as changing the name, price, or inventory level.

Manage Inventory Levels: Admins can manage the inventory levels of grocery items, including increasing or decreasing the available quantity.

User Responsibilities
View Available Grocery Items: Users can view the list of available grocery items in the store, along with their details such as name, price, and inventory level.

Book Multiple Grocery Items in a Single Order: Users have the ability to book multiple grocery items in a single order. They can specify the quantity of each item they want to purchase and proceed to place the order.

Endpoints
The API provides the following endpoints:

GET /api/grocery-items: Retrieves the list of available grocery items.
POST /api/grocery-items: Adds a new grocery item to the system.
PUT /api/grocery-items/:id: Updates the details of an existing grocery item.
DELETE /api/grocery-items/:id: Removes a grocery item from the system.
POST /api/orders: Places an order for multiple grocery items.
Usage
To use the API, send HTTP requests to the appropriate endpoints using your preferred method (e.g., cURL, Postman). Ensure that you have appropriate permissions and provide necessary data in the request body as required.

Getting Started
Clone this repository.
Install dependencies using npm install.
Start the server using npm start.
Use the provided endpoints to interact with the API.
Technologies Used
Node.js
Express.js
MongoDB 

Contributing
Contributions are welcome! Please feel free to submit issues or pull requests.
