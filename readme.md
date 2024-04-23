# Blog App

## Backend (Django):

- Utilizes Django rest framework with JWT authentication for secure user access.
- Implements CRUD operations for blog posts with a SQLite database.

## Frontend (React):

- Initialized with Create React App, focusing on responsiveness and maintainability.
- Components designed for displaying blog posts, viewing single posts, and creating/editing posts.
- Integration of search functionality and infinite scroll for optimized user experience.
- State management with redux tool kit
- Interacts with the backend API through rtk query for perfomation and ccashing .

### NOTE: Plese signup and then signin to start creating, editig and deleting blogs.Test with different users

### Only the author can Edit and Delete the Blog

# Setup Process

## Clone the repo

```bash
git clone https://github.com/suraj1s/blog_task.git
cd ./blog_task
```

# For server

```bash
cd ./server
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

# For client

```bash
cd ./client
npm install
npm run dev
```
