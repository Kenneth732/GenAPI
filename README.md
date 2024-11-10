# QuickAPI

- QuickAPI is an easy-to-use API builder and management platform that allows users to upload a db.json file and auto-generate RESTful API endpoints for interacting with the data. Ideal for rapid prototyping and quickly creating APIs, QuickAPI simplifies the process of building and managing APIs for developers and businesses alike.

### Features

- Automatic CRUD API Generation: Automatically generates API endpoints (GET, POST, PUT, DELETE) based on the uploaded db.json schema.

- Dynamic API Routes: Routes are generated dynamically based on the structure of the data in the db.json file.

- Easy Data Integration: Upload your data in db.json format to instantly generate and test your API.

- Fast Prototyping: Quickly create APIs for data-driven applications and integrate with your frontend projects.

- Frontend Integration: Built with React for easy consumption of the auto-generated API from your frontend application.

- Local Testing: Test the generated API with any frontend framework or Postman.


### Tech Stack

- Backend: Node.js, Express

- Frontend: React

- Data Format: JSON (db.json)

- API Documentation: Swagger UI (for auto-generated documentation)


### Getting Started

- These instructions will help you set up and run QuickAPI locally.

### Prerequisites

- Make sure you have the following installed:

- Node.js (v14 or above)
```
- npm (usually installed with Node.js)
```

### Installation

- 1. Clone the repository:
```
git clone https://github.com/yourusername/quickapi.git
cd quickapi
```
- 2. Install the backend dependencies:

- Navigate to the backend directory and install the required dependencies:
```
cd backend
npm install
```

- 3. Install the frontend dependencies:

- Navigate to the frontend directory and install the required dependencies:
```
cd frontend
npm install
```


- Running the Project

- 1. Start the backend:

- In the backend directory, run the following command:
```
npm start
```
- This will start the Express server on http://localhost:5000.


- 2. Start the frontend:

- In the frontend directory, run:
```
npm start
```
- This will launch the React development server on http://localhost:3000.



### Usage

- 1. Upload a db.json file:

- In the frontend, go to the upload section and choose your db.json file.

- The db.json file should contain an array of objects, where each key represents a collection (e.g., users, posts).

```
Example db.json:

{
  "users": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
  ],
  "posts": [
    { "id": 1, "title": "My first post", "content": "This is my first post!" }
  ]
}

```
- 2. Automatically Generated API:

- After uploading, the platform will auto-generate API routes for each collection. For example, for the above db.json, the following routes will be created:
```
GET /api/users - Retrieve all users.
```
```
POST /api/users - Create a new user.
```
```
GET /api/users/:id - Retrieve a user by ID.
```
```
PUT /api/users/:id - Update a user by ID.
```
```
DELETE /api/users/:id - Delete a user by ID.

```


- 3. Testing API in Frontend:

- You can now use the generated API in your React frontend application to fetch and display data.


### Example React code to fetch users:
```
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

- 4. API Documentation:

- Access the auto-generated Swagger API documentation by visiting http://localhost:5000/api-docs in your browser. This will give you a detailed description of all the available routes and how to use them.




### Contributing

- We welcome contributions! If you have suggestions or improvements, feel free to open an issue or submit a pull request. Here are some ways you can help:

- Fix bugs or improve existing features.

- Add new features to enhance the platform.

- Improve the documentation.


- Steps to contribute:

- 1. Fork the repository


- 2. Create a new branch


- 3. Commit your changes


- 4. Push your branch to your fork


- 5. Open a pull request



## License

- This project is licensed under the MIT License - see the LICENSE file for details.

