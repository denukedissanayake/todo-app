#### How to run the Application

First, clone the repo(https://github.com/denukedissanayake/todo-app):

Open the project from the text editor. Open one terminal in the project root directory and other terminal in the backend directory(```backend``` directory contains REAST-API code base).

Install the dependancies in both directories.

Add ```.env.local``` file in the project root directory and ```.env``` file in the backend directory.

#### Databse Migartion

Create a MySQL databse in the local environment (Database name - database_todo_app) or create a database and add the database name in the backend/config/config.json file

```
{
  "development": {
    "database": "<Databse_name>",
  }
}
```

Enter the username and password of the MySQL database for root access

```
{
  "development": {
    "username": "<username>",
    "password": "<password>",
  }
}
```

Run the command ```sequelize db:migrate``` in the terminal open in the backend directory. This will deploy the database tables to the created database. (If 'error: -bash: sequelize: command not found' comes try install sequelize globally ```npm install -g sequelize-cli```)

To add intial set of values to database run command ```sequelize db:seed --seed 20220613174334-task-seeder```. (This is not mandetory. A user can be created and then tasks can be added using the application). 


#### Run the Application

Terminal in project 'backend' directory ```npm run start:dev```

Terminal in project root directory ```npm run dev```

#### Run Test Cases

Terminal in project root directory ```npm run test```


#### How to use the application

First Signup the user and then Login (If initial values are added as pervious steps, will be able to see some task even before signup)

Only loggedin user can Add, Edit or Delete a task

Non-Logged users can only view tasks and change task status 

