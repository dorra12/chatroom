# Chat App

This app will handle 3 entities :

- users
- messages
- rooms
  Every ententy will have its own service

This app will have 3 main pages :

- login
- register
- discord like interface for chatting :
  - rooms selection on the left
  - users list on the right
  - chat messages + textare in the center

# Begining

We create the "rooms" component and the "discord" page.
We defined the routing to link the url "/discord" to the componenent
We include the "rooms" component in the discord component

Then we moved on to the service related to the rooms : RoomsService.

Next step was to use the service in the component.
As the function called is an http request, it return an "Observable".
Therefor, we need to susbscribe it this function to get any result from the server.

# Login steps

1. create a "connect(username, password)" that is doing the POST to the same user URL
2. Generate the page connectComponent
3. a. Define the route
4. b. Create a link to that route in the navbar
5. Create a HTML form
   Use ngModel to sync the variable
   Create a function that will be launch when the form is submitted (ngSubmit)
   Handle the form submission
