export default abstract class BasePage {
  /* Elements */

  get logoIcon() {
    return cy.get('header').find('a').first();
  }

  /**
   * Navigate to Home Page
   */
  navigateToHomePage(menu: string): this {
    this.logoIcon.click();
    return this;
  }

  /**
   * Navigate to Left Navigation Menu Item
   */
  navigateToLeftMenuItem(menu: string): this {
    cy.get('.main-header').should('be.visible').should('contain', menu).click();
    return this;
  }
}
