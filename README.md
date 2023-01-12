# todo-app

# Setup Docs For Todo-app

### Step 1:

Clone the repository: \
https://github.com/sulavpradhan/todo-app-api.git

### Step 2:

Enter the project directory and install all the dependencies using npm or yarn.
npm i or yarn

### Step 3:

Set the environment variables. Use the .env.example file as a refrence for creating the env file.

### Step 4:

Use the command yarn start or npm start to start the server.

### Step 5:

Go to url ---- to see the website.

# API Documentation

### get-todo

Request type: GET <br> Route: /todo/get-todo <br>
This API renders a page that shows all the todos.

### get-done-todo

Request type: GET <br> Route:`/todo/get-done-todo` <br>This API renders a page that shows all the todos that have been completed.

### get-upcomming-todo

Request type: GET <br> Route:`/todo/get-upcomming-todo` <br>This API renders a page that shows all the todos of the future.

### create-todo

Request type: POST <br> Route: /todo/create-todo <br>
This API allows the user to save new todos.<br>
The body of the request must contain all the data regarding the todo. It should look something like this.
`{name:"todo name",desription:"todo description",date:"2023-11-11T20:20"} `<br>
The date must be greater than the current date.

### update-todo

Request type: POST <br> Route: `/todo/update-todo`<br>This API allows the user to make changes to existing todos.<br>
The id of the todo to be edited must be in the query parameters of the request as \_id.
`{_id:"todo id"}`<br>
The updates to the todo must be in the body of the request. Let us consider that you want to change the name of the todo then the body will look something like this:<br>
{name:"new name"}

### delete-todo

Request type: POST <br> Route: /todo/delete-todo/:id
<br>This API allows the user to delete existing todos.
