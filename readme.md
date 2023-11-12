# Anyware project


This is the backend server for the Anyware project. It handles the retrieval and management of announcements and quizzes data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- Retrieve all announcement data
- Retrieve all quiz data
- CRUD operations for announcements
- CRUD operations for quizzes

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed and running

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MostafaMahgoub/Anyware-Backend.git
2. **Install dependencies:**
   ```bash
   cd [Project dirctory]
   npm install
3. **Start the server :**
   ```bash
   npm start
*Make Sure to check both Mongo Server Port and Server Port*

## API Endpoints
### Retrieve all announcements
    GET /announcements
### Retrieve all quizzes
    GET /quizzes
### Create a new announcement
    POST /announcements
### Create a new quiz
    POST /quizzes
### Retrieve a specific announcement by ID
    GET /announcements/:id
### Retrieve a specific quiz by ID
    GET /quizzes/:id
### Update a specific announcement by ID
    PUT /announcements/:id
### Update a specific quiz by ID
    PUT /quizzes/:id
### Delete a specific announcement by ID
    DELETE /announcements/:id
### Delete a specific quiz by ID
    DELETE /quizzes/:id
    
## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

