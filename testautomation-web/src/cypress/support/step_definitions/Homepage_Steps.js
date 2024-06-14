import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import Home_PageObject from '../page_objects/Home_PageObject.js';

const homePage = new Home_PageObject();

Then(`I should be successfully logged in`, () => {
    homePage.loginSuccess();
});

When(`I click on the sign out button on the homepage`, () => {
    homePage.clickSignOutButton();
});
