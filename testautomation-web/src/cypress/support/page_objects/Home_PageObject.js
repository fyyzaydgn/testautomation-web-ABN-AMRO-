/// <reference types="cypress" />

const HOMEPAGE_TEXT = '.div-container:contains("Lorem ipsum egestas posuere")'
const USER_ICON = '.fa-user-circle'
const FOOTER_TEXT = 'footer p:contains("Thank you for participating!")'
const SIGN_OUT_BUTTON = '#logout'

class Home_PageObject {

    loginSuccess(){
        cy.get(HOMEPAGE_TEXT).should('be.visible');
        cy.get(USER_ICON).should('be.visible');
        cy.get(FOOTER_TEXT).should('exist')
        const menuSection = ['Home', 'Products', 'Contact'];
            menuSection.forEach(section=>{
                cy.contains('div', section).should('be.visible');
            })
    }
    
    clickSignOutButton(){
        cy.get(USER_ICON).click();
        cy.get(SIGN_OUT_BUTTON).click();
    }
    
}

export default Home_PageObject;