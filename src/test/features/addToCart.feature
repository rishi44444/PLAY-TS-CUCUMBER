Feature: Product test

   Background:
     Given User navigation to the application 
     And User clicks on the login link

   Scenario: Add to cart
     When User enter the username as "<username>"
     And User enter the password as "<password>"
     And User clicks on the login button
     When User search for a "<book>"
     And User add the book to the cart
     And User click on the cart icon
     Then the cart bag should get updated

     Examples:
        | username  | password   | book             |
        | ortoni    | pass1234   | slayer           |
