# POKEMASTER  
Pokemon and Users managment system, developed with NestJs an a MongoDB Database. 

## RUNNING
To launch the application, you must have both [docker and docker-compose](https://www.docker.com/) installed.

Inside the project root directory, run the following command:  
**docker-compose up -d**  
Once the process is complete, you can start using the application.  

## ACCESSING
You can now make requests to the application, with postman or any other tool you are  
familiar with.

You can check the endpoints available opening the documentation provided by **Swagger UI**   
on the address:  
**http://localhost:3000/docs**

## LOGIN
The first thing you need to do is login to the application, or else you wont be able  
to access any endpoints.

For that, you must make a **POST** request to the **http://localhost:3000/auth/login** endpoint.  
In this request, you must send the body:  

`{
  "username": "admin",
  "password": "adminpass"
}`  

The application will then give you an access token, which you must use as a  
Bearer Token Authorization in all the following requests.

For instance, on a system shell you can use [cURL](https://curl.se/) to try it:
`curl http://localhost:3000/user -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."`

In postman, you can add the token in the Authorization tab, choosing the Bearer Token type.

## USING
Now you have access to all the endpoints, and can manage your users and pokemon,  
so it's time to catch them all.