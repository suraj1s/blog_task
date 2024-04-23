# Blog App

## Backend (Django):

- Utilizes Django REST Framework (DRF) with JWT authentication to ensure secure user access and authorization.
- Implements CRUD operations for blog posts using a SQLite database for efficient data management.
- Implements protected routes for enhanced security, ensuring that only authorized users can access certain endpoints.
- Employs JWT authentication tokens and cookies for secure user access, enhancing authentication and authorization processes.

## Frontend (React):

- Developed with Create React App, prioritizing responsiveness and ease of maintenance.
- Features custom components for seamless browsing, including post display, editing, and creation.
- Enhances user experience with integrated search functionality and infinite scroll, utilizing debouncing for search optimization and infinite scroll for enhanced performance.
- Employs Redux Toolkit for streamlined state management, ensuring efficient data handling.
- Utilizes JWT authentication tokens and cookies for secure access.
- Utilizes RTK Query for optimized interaction with the backend API, enhancing performance through caching and efficient data fetching.
- Implements proper cached data validation and revalidation techniques to ensure data accuracy.
- Utilizes API interceptors to automatically obtain new access tokens using refresh tokens when they expire, ensuring uninterrupted user access and security.

## Note:

### Please sign up and then sign in to start creating, editing, and deleting blogs. Test with different users to explore the app's full functionality!

## Edit and Delete Permissions:

### Only the author of a blog post can edit and delete it, ensuring data integrity and security.

# Setup Process

# Clone the repository

```bash
git clone https://github.com/suraj1s/blog_task.git
cd ./blog_task  # Navigate to the project directory
```

# For server

# Setting up the server

```bash
cd ./server  # Navigate to the server directory
python3 -m venv env  # Create a virtual environment
source env/bin/activate  # Activate the virtual environment
pip install -r requirements.txt  # Install required Python packages
python manage.py makemigrations  # Create database migrations
python manage.py migrate  # Apply migrations to the database
python manage.py runserver  # Run the Django server
```

# Setting up the client

```bash
cd ../client # Navigate back to the main project directory and then to the client directory
npm install # Install dependencies
npm run dev # Start the development server for the React app
```
