<!-- Made by- Asmita Kumari -->

# E-Krisshak-Frontend
<!-- explaining setup,functionalities, and deployment steps. -->



## Description

Hello Everyone, I am ASMITA KUMARI , a young learner and i am here with frontend part of my project called "E-Krisshak" , A farmer availability management system that helps to find a farmer for your field with their proper and detailed Personal, Professional and Contact information that helps you to choose them according to your requirements. I am making this project with the intension of helping the land-owners that can't find farmer for their field and many farmers that are seeking for work ,especially in INDIA.


This project is a React-based full-stack CRUD(Create, Read, Update, Delete) Web Application that interfaces with a Django backend and uses a MySQL database for persistent data storage with. The frontend communicates with the backend via RESTful APIs. This README outlines how to set up the project, its main functionalities, and steps for deployment of frontend of this project.

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Connection](#connection)
- [Functionalities](#functionalities)
- [Deployment](#deployment)

## Requirements

- Node.js 14 or higher
- npm (or yarn) for managing JavaScript packages
- Python 3.8 or higher for the Django backend
- MySQL server for the database

## Setup

### Backend Setup

Before setting up the React frontend, ensure the Django backend is properly configured. This project assumes you have an existing Django backend with a MySQL database.

1. *Clone the Backend Repository*

   Clone the Django project repository if you haven’t already:

   bash:
   git clone https://github.com/asmitak1234/E-Krisshak-backend.git
   cd ekrisshakbackend
   

2. *Create and Activate a Virtual Environment*

   bash:
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   

3. *Install Backend Dependencies*

   bash:
   pip install -r requirements.txt
   

4. *Configure MySQL Database*

   - Ensure MySQL is running.
   - Update the settings.py in the Django project to connect to your MySQL database.

5. *Apply Migrations and Run the Server*

   bash:
   python manage.py migrate
   python manage.py runserver
   

   The Django backend should be running on http://localhost:8000.

### Frontend Setup

1. *Clone the Frontend Repository*

   bash
   git clone https://github.com/asmitak1234/E-Krisshak-Frontend.git
   cd your-react-repo
   

2. *Install Frontend Dependencies*

   bash
   npm install  # or yarn install
   

3. *Environment Variables*

   Create a .env file in the root of your project to configure environment variables.
   Include this file in the .gitignore file.


4. *Start the Development Server*

   bash
   npm start  # or yarn start
   

   The React app should be running on http://localhost:3000 and will communicate with the Django backend.

## Connection 

- *Frontend-Backend*: Frontend and Backend is connected by Axios library.

## Functionalities

- *User Interface*: A responsive and dynamic user interface built with React.
- *API Integration*: Fetches and posts data to/from the Django backend using RESTful API endpoints.
- *Form Handling*: User input and form submissions are handled with proper validation mechanisms.
- *User Authentication*: Handles user authentication (login, signup) through API calls to the Django backend.
- *Navigation*: Users can navigate to different web pages(Home , List , Manage) through Side Navigation Bar.
- *CRUD Operations*: Perform create, read, update, and delete operations on the main resources.

## Deployment

### Frontend Deployment

1. *Build the Production Version*

   Run the following command to create a production build of the React app:

   bash
   npm run build  # or yarn build
   

   This will create a build directory with the static files ready for deployment.

2. *Serve the Static Files with Django*

   - Copy the contents of the build directory to your Django project’s static files directory.
   - Update your Django settings.py to serve static files. Ensure the following is configured:

     python
     STATICFILES_DIRS = [os.path.join(BASE_DIR, 'path_to_build_directory')]
     

3. *Deploy with Gunicorn and Nginx*

   - *Install Gunicorn*:

     bash
     pip install gunicorn
     

   - *Run Gunicorn*:

     bash
     gunicorn --bind 0.0.0.0:8000 my_project.wsgi
     

   - *Set Up Nginx*:

     Configure Nginx to serve the static files and proxy API requests to Django. Example configuration:

     nginx
     server {
         listen 80;
         server_name your_domain_or_ip;

         location / {
             root /path/to/your/repo/frontend/build;
             try_files $uri /index.html;
         }

         location /api/ {
             proxy_pass http://127.0.0.1:8000;
             proxy_set_header Host $host;
             proxy_set_header X-Real-IP $remote_addr;
             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
             proxy_set_header X-Forwarded-Proto $scheme;
         }
     }
     

4. *Set Up SSL (Optional but Recommended)*

   Secure your application by setting up SSL using a service like Let’s Encrypt.

5. *Monitor and Maintain*

   - Use process managers like supervisord or systemd to manage the Gunicorn service.
   - Regularly update dependencies and monitor logs for any issues.
