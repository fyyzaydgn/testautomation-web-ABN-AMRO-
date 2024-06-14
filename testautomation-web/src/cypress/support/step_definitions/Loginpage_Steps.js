import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Login_PageObject from '../page_objects/Login_PageObject';

const loginPage = new Login_PageObject();

Given(`I navigate to the Login Page`, () => {
    loginPage.navigateToLoginPage();
});

When('I enter {string} and {string}', (email, password) => {
    loginPage.enterValidCredential(email, password);
});

When(`I click on the login button`, () => {
   loginPage.clickLoginButton();
});

Then(`I should not be logged after unsuccessful login attempt`, () => {
    loginPage.checkUnsuccessfulLogin();
 });

Given(`I am logged in as {string} with the following password {string}`, (email, password) => {
    loginPage.navigateToLoginPage();
    loginPage.enterValidCredential(email, password);
    loginPage.clickLoginButton();
});

Then(`I should be on the login page`, () => {
    loginPage.verifyLoginPage();
});
 