@regression @signout
Feature: Sign out from the Application

Scenario: Sign out from the application
    Given I am logged in as "admin@admin.com" with the following password "2020"
    When I click on the sign out button on the homepage
    Then I should be on the login page
