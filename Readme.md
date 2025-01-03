# CRUD Application with MongoDB, Node.js, and Multer

This project demonstrates a CRUD (Create, Read, Update, Delete) application using MongoDB and Node.js. Additionally, it incorporates the `multer` middleware for handling image uploads with features for single, multiple, and mixed field uploads.

## Features

- **Create, Read, Update, Delete Operations:**
  Perform CRUD operations on data stored in a MongoDB database.

- **Image Uploads with Multer:**
  - Single image upload
  - Multiple image uploads
  - Uploads with multiple fields containing images

## Technologies Used

- **Backend:** Node.js (Express.js framework)
- **Database:** MongoDB
- **Middleware:** Multer (for handling file uploads)

## Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root of the project and configure the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   ```

4. **Run the Server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

## API Endpoints

### 1. **Create Data with Image Upload**
   - **Method:** POST  
   - **Endpoint:** `/api/data`
   - **Description:** Create new data and upload images.
   - **Headers:**
     ```json
     {
       "Content-Type": "multipart/form-data"
     }
     ```
   - **Body:**
     - Single Image:
       ```
       image (file)
       ```
     - Multiple Images:
       ```
       images (files)
       ```
     - Multiple Fields:
       ```
       field1Image (file)
       field2Image (file)
       ```

### 2. **Read Data**
   - **Method:** GET  
   - **Endpoint:** `/api/data`
   - **Description:** Retrieve all data.

### 3. **Update Data**
   - **Method:** PUT  
   - **Endpoint:** `/api/data/:id`
   - **Description:** Update specific data by ID.
   - **Body:**
     ```json
     {
       "name": "Updated Name",
       "description": "Updated Description"
     }
     ```

### 4. **Delete Data**
   - **Method:** DELETE  
   - **Endpoint:** `/api/data/:id`
   - **Description:** Delete specific data by ID.

## Folder Structure

```
project-folder
├── models
│   └── DataModel.js       # Mongoose schema and model
├── routes
│   └── dataRoutes.js      # API routes
├── uploads                # Folder for storing uploaded images
├── app.js                 # Entry point of the application
├── package.json           # Project dependencies
└── .env                   # Environment variables
```

## Dependencies

- **Node.js Modules:**
  - `express`
  - `mongoose`
  - `dotenv`
  - `multer`

## Usage Notes

- Ensure the `uploads` folder exists in the project root for storing images.
- MongoDB must be running locally or accessible via the provided URI.

## License

This project is licensed under the MIT License.
