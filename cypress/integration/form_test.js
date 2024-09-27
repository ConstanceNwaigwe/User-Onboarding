


describe('User App', () => {
    beforeEach(() => {
        cy.visit('')
    });

    const submitButton = () => cy.get('button[id="submitBtn"]');
    const userNameInput = () => cy.get('input[name="username"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const termsInput = () => cy.get('input[name="terms"]');

    it("the proper elements exist", () => {
        userNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsInput().should('exist');
        submitButton().should('exist');
    });

    describe("filling in inputs", () => {
        it('submit button is disabled', () => {
            submitButton().should('be.disabled')
            submitButton().should('not.be.enabled')
        });
    
        it('can type inside the text input', () => {
            userNameInput()
            .should('have.value', "")
            .type("Dark Queen The Third")
            .should('have.value', "Dark Queen The Third")
        });
    
        it("can type inside the author input", () => {
            emailInput()
              .should("have.value", "")
              .type("darkqueen3@email.com")
              .should("have.value", "darkqueen3@email.com")
          });

          it("can type inside the author input", () => {
            passwordInput()
              .should("have.value", "")
              .type("AJHjdbdj123jsj6")
              .should("have.value", "AJHjdbdj123jsj6")
          });

          
    
        it('submit button enables when form is filled out', () => {
            submitButton().should('not.be.enabled')
            userNameInput().type('Dark King the fourth')
            emailInput().type('thedarkking4@email.com')
            passwordInput().type('ksbd1shfGSS5')
            termsInput().click()
            submitButton().should('be.enabled')
        })
      });

})