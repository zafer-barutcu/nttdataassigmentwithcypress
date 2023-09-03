import BasePage from './BasePage';

class HomePage extends BasePage {
  /* Elements */
  get logoIcon() {
    return cy.get('header').find('a').first();
  }

  /**
   * Navigate to Top Menu Item
   */
  navigateToTopMenuItem(menu: string): this {
    cy.contains('h5', menu).click();
    return this;
  }
}
export default new HomePage();
