import { gender } from '../../support/constanst';
import BasePage from './BasePage';

class PracticeFormPage extends BasePage {
  /* Elements */

  get firstName() {
    return cy.get('#firstName');
  }

  get lastName() {
    return cy.get('#lastName');
  }

  get userEmail() {
    return cy.get('#userEmail');
  }

  get mobileNumber() {
    return cy.get('#userNumber');
  }

  get address() {
    return cy.get('#currentAddress');
  }

  get submitButton() {
    return cy.get('#submit');
  }

  get closeButton() {
    return cy.get('#closeLargeModal');
  }

  /* Methods to fill out or select required fields */

  fillOutFirstName(value: string) {
    this.firstName.type(value);
    return this;
  }

  fillOutLastName(value: string) {
    this.lastName.type(value);
    return this;
  }

  fillOutUserEmail(value: string) {
    this.userEmail.type(value);
    return this;
  }

  selectGender() {
    return cy.contains('label', gender.MALE).click({ force: true });
  }

  fillOutMobileNumber(value) {
    this.mobileNumber.type(value);
  }

  fillOutAddress(value: string) {
    this.address.type(value);
  }

  /* Method contains methods to fill out the Student Registration Form */
  fillOutStudentRegistrationForm(
    firstName: string,
    lastName: string,
    userEmail: string,
    mobileNumber: number,
    address: string
  ) {
    this.fillOutFirstName(firstName);
    this.fillOutLastName(lastName);
    this.fillOutUserEmail(userEmail);
    this.selectGender();
    this.fillOutMobileNumber(mobileNumber);
    this.fillOutAddress(address);
  }

  /* Method to click Submit button after filling out the Student Registration Form */
  clickSubmitButton() {
    this.submitButton.click({ force: true });
  }

  /* Method to wait for 5 seconds and take a screenshot */
  waitForFiveSecondsAndTakeAScreenShot() {
    cy.wait(5000); // Wait for 5 seconds
    cy.screenshot('/Users/zaferbarut/Desktop/NTT/NTT Data Test Automation Assigment/cypress/screenshots');
  }
  /* Method to close the pop up */
  closeThePopupWindow() {
    this.closeButton.scrollIntoView();
    this.closeButton.should('be.visible').click();
  }
}
export default new PracticeFormPage();
