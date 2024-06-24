# Project blogApp

Brief description of what the project does and its purpose.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project utilizes several technologies and functionalities to create a dynamic web application. Below is an overview of the key functionalities and their purposes within the project.

### Frontend Framework: React

**Purpose**: React is a JavaScript library for building user interfaces. It enables the creation of reusable UI components that manage their own state, making the application more efficient and easier to maintain.

### Backend Service: Appwrite

**Purpose**: Appwrite is an open-source backend server that simplifies the development of web and mobile applications with APIs for authentication, database, storage, and more.

- **Authentication**: Manages user authentication, allowing users to sign up, log in, and log out securely. It ensures that only authenticated users can access protected resources.
  
- **Database and Collection**: Stores structured data such as user profiles and posts. The database organizes data into collections, providing efficient querying and retrieval.

- **File Storage (Bucket)**: Stores and serves files, such as images for posts, ensuring reliable storage and fast retrieval.

### State Management: Redux Toolkit

**Purpose**: Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It provides tools and best practices to manage application state in a predictable and maintainable way.

- **AuthSlice**: Manages authentication-related state, including user status (logged in or out) and user data (profile information).

### Routing: React Router

**Purpose**: React Router is a popular routing library for React applications. It enables navigation between different pages or views within a single-page application (SPA).

- **Routing Configuration**: Defines routes for various parts of the application, such as home page, login, signup, post management, etc. It ensures that users can navigate seamlessly between different sections of the application.

### Form Handling: React Hook Form

**Purpose**: React Hook Form is a library for managing forms in React applications. It provides a straightforward way to capture form data, handle validation, and manage form state.

- **Form Components**: Used in components like `SignUp`, `Login`, and `PostForm` to capture user input, validate it, and submit it to Appwrite for processing.

### Rich Text Editing: TinyMCE

**Purpose**: TinyMCE is a powerful, customizable rich text editor that allows users to create and edit content with formatting options.

- **RTE Component**: Integrated into `RTE` component to provide a rich text editing experience for creating and editing posts. It includes features like text formatting, image insertion, and more.

### Styling: Tailwind CSS

**Purpose**: Tailwind CSS is a utility-first CSS framework for building custom designs without writing traditional CSS.

- **Responsive and Custom Styling**: Used throughout the application to ensure consistent styling and responsiveness across different screen sizes and devices.

### Pages and Components

**Purpose**: Pages (`HomePage`, `LoginPage`, `SignUpPage`, `AddPostPage`, `EditPostPage`, `PostPage`, `AllPostsPage`) and components (`Header`, `Footer`, `PostCard`, `Input`, `Select`, `Logo`, etc.) work together to provide a complete user experience.

- **Pages**: Represent different views and functionalities of the application, such as viewing posts, editing posts, logging in, signing up, etc.

- **Components**: Reusable UI elements that are used across multiple pages to maintain consistency and modularity in the application's design.


## Technologies Used

The key technologies, frameworks, and libraries used in the project are:

- **React**: JavaScript library for building user interfaces.
- **Appwrite**: Open-source backend server providing APIs for authentication, database, and storage.
- **Redux Toolkit**: State management library for predictable state containers in JavaScript apps.
- **React Router**: Declarative routing for React applications.
- **React Hook Form**: Library for managing form state and validation in React.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs.
- **TinyMCE**: Rich text editor for creating and editing content with formatting options.

## Features

The main features and functionalities of the project are:

- User authentication (signup, login, logout)
- CRUD operations for posts (create, read, update, delete)
- Rich text editing with image support
- Responsive design using Tailwind CSS
- Secure file storage and retrieval

## Setup Instructions

The step-by-step instructions on how to set up the project locally. Include prerequisites, installation steps, and necessary configurations.

### Prerequisites

- Node.js and npm installed locally


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vtsl-patel/blogApp.git
   cd blogApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables (e.g., Appwrite API keys, TinyMCE API key).

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

Provide instructions and examples on how to use the application :

1. **Sign Up/Login**: Navigate to the signup or login page and follow the prompts to create an account or log in.
2. **Create/Edit Posts**: Use the form to create or edit posts, including rich text editing capabilities with TinyMCE.
3. **View/Delete Posts**: Navigate to the home page to view all posts. Authors can delete their own posts.

## Contributing

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure all tests pass.
3. Open a pull request with a detailed description of the changes and their purpose.

## License

No License, feel free to use it for educational purposes. :)

---
