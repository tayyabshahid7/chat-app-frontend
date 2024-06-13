# Real-Time Chat Application

This is a simple real-time chat application built using the MERN stack with Cassandra as the database. It allows users to register, login, and send/receive messages in real-time. TailwindCSS is used for styling the application.

## Features

- User Registration
- User Login
- Real-time Messaging
- Responsive UI with TailwindCSS

## Technologies Used

- **Frontend**: React, TailwindCSS

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. **Frontend Setup**:

   Navigate to the `frontend` directory and install the dependencies:

    ```bash
    cd chat-app-frontend
    npm install
    ```
   
   Create **.env** file and add ``REACT_APP_API_URL=http://localhost:5001`` inside it.
   

### Running the Application

1. **Start the Frontend Server**:

   In the `frontend` directory, run the following command:

    ```bash
      npm start
    ```

   The frontend should be running on `http://localhost:3000` and the backend on `http://localhost:5001`.

## Usage

1. **Register**: Navigate to the registration page and create a new account.
2. **Login**: Use the credentials to log in.
3. **Chat**: Start sending and receiving messages in real-time.