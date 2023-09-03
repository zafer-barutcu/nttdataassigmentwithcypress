import FormsPage from './FormsPage';
import HomePage from './HomePage';
import { menu, urls } from '../../support/constanst';
import PracticeFormPage from './PracticeFormPage';

describe('NTT Data Test Automation Assigment', () => {
  before(() => {
    cy.visit('/');
  });

  it('Navigate to the website ', () => {
    cy.get('header > a > img').should('be.visible');
    cy.url().should('be.equal', Cypress.config('baseUrl'));
  });

  it('Click on Forms button ', () => {
    HomePage.navigateToTopMenuItem(menu.FORMS);
    cy.url().should('include', urls.FORMS);
  });

  it('Click Practice Form ', () => {
    FormsPage.navigateToLeftMenuItem(menu.FORMS);
    FormsPage.clickPracticeForm();
    cy.url().should('include', urls.PRACTICE_FORM);
  });

  it('Fill out Student Registration Form and click Submit button', () => {
    cy.fixture('test-data.json').then(fixtureData => {
      PracticeFormPage.fillOutStudentRegistrationForm(
        fixtureData.firstName,
        fixtureData.lastName,
        fixtureData.userEmail,
        fixtureData.mobileNumber,
        fixtureData.address
      );
      PracticeFormPage.clickSubmitButton();
    });
  });

  it('Wait for 5 seconds and take a screenshot', () => {
    PracticeFormPage.waitForFiveSecondsAndTakeAScreenShot();
  });

  it('close the pop up', () => {
    PracticeFormPage.closeThePopupWindow();
    cy.get('header > a > img').should('be.visible');
  });
});
