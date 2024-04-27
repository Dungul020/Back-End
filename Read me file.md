The  back-end API project is a RESTful API developed using Node.js, Express, and MongoDB, designed to manage places with attributes such as Name, Description, Location, Open Hours, and Images.
 It supports CRUD operations and file uploads for images, with API documentation provided through Swagger.The project's technologies, including Node.js, Express.js, MongoDB, Mongoose, Multer, nodemon
 and Swagger, are highlighted, along with the authorship and licensing information.To set up and run the project, follow these steps:

1.Ensure you have Node.js installed on your system
2.you need a MongoDB account and a cluster set up. 
3.For Swagger documentation, you'll need a swagger.yaml file in your project root.
4.Make sure to installl all the dependencies .
5.Ensure your MongoDB connection string is correct and that your MongoDB Atlas cluster is running.
6. The project uses Multer for handling file uploads. Ensure you have a directory named uploads in your project root for storing uploaded files
7. The project uses the cors middleware to enable Cross-Origin Resource Sharing. Adjust the CORS settings as needed for your application's requirements.
8.To run the server on your Visual studio execute this  npm run dev
9.You can  view and interact with  API documentation by navigating to http://localhost:3000/api-docs in your web browser note my server is running on port 3000 so include your port number.
10.Check the folder named uploads for pictures uploaded by this server.






















 