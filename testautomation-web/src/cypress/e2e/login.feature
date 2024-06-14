@smoke @regression
Feature: Login to the Application

    @login
    Scenario Outline: Login to the Application with Valid Credentials

        Given I navigate to the Login Page
        When I enter "<email>" and "<password>"
        And I click on the login button
        Then I should be successfully logged in

      Examples:
        | email                   | password    |
        | admin@admin.com         | 2020        |
        | biancunha@gmail.com     | 123456      |
        | growdev@growdev.com.br  | growdev123  |

    @unsuccessful_login
    Scenario Outline: Unsuccessful Login Attempt with Invalid Credentials

        Given I navigate to the Login Page
        When I enter "<email>" and "<password>"
        And I click on the login button
        Then I should not be logged after unsuccessful login attempt

        Examples:
        | email                   | password    |
        | qwerty123@example.com   | >£#$½½½     |
