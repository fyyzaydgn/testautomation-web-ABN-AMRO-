/// <reference types="cypress" />

const LOGINPAGE_HEADER_TEXT = 'h1:contains("Automation doesn\'t stop at testing, it\'s just a beginning!")'
const FOOTER_TEXT = 'footer p:contains("Thank you for participating!")'
const EMAIL_INPUT = '#email'
const PASSWORD_INPUT = '#password'
const LOGIN_BUTTON = '.btn-login'


class Login_PageObject {

    navigateToLoginPage(){
        cy.visit('/')
        cy.title().should("include","Single Page Application")
        cy.get(LOGINPAGE_HEADER_TEXT).should('exist')
        cy.get(FOOTER_TEXT).should('exist')
    }

    enterValidCredential(email, password){
        cy.get(EMAIL_INPUT).type(email)
        cy.get(PASSWORD_INPUT).type(password)
    }

    clickLoginButton(){
        cy.get(LOGIN_BUTTON).click();
    }

    checkUnsuccessfulLogin(){
        cy.get(LOGINPAGE_HEADER_TEXT).should('exist')

    }

    verifyLoginPage(){
        cy.get(LOGINPAGE_HEADER_TEXT).should('exist')
        cy.get(EMAIL_INPUT).should('be.visible')
        cy.get(PASSWORD_INPUT).should('be.visible')
        cy.get(LOGIN_BUTTON).should('be.visible')
    }
    
}

export default Login_PageObject;