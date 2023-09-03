import BasePage from './BasePage';
class FormsPage extends BasePage {
  get practiceFormButton() {
    return cy.contains('span', 'Practice Form').click();
  }

  /**
   * Click Practice Form
   */
  clickPracticeForm() {
    this.practiceFormButton.click();
    return this;
  }
}
export default new FormsPage();
