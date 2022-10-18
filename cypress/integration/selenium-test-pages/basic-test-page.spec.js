import formatUrl from "../../utils/formatUrl";
import { SELENIUM_TEST_PAGES, HTML } from "../../constants";
import * as selectors from '../../selectors'

describe ('basic test page', () => {
    before ('load the main page', () => {
        cy.visit(
            formatUrl(
                SELENIUM_TEST_PAGES.BASE_URL,
                SELENIUM_TEST_PAGES.PATHNAMES.BASIC_WEB_PAGE,
                HTML
            )
        );
    });
    it('should asssert the number of paragraphs', () =>{
        cy.get(selectors.SELENIUM_TEST_PAGES.BASIC_TEST_PAGE.PARAGRAPH)
        .should('have.length', 4)
    });
    it('should assert the h1 text using cypress find method', () => {
        cy.get(selectors.SELENIUM_TEST_PAGES.BASIC_TEST_PAGE.PAGE_BODY)
        .find('h1')
        .should('have.text', 'Basic Web Page Example')
    });
    it('should assert the text of the first paragraph', () => {
        cy.get(selectors.SELENIUM_TEST_PAGES.BASIC_TEST_PAGE.PARAGRAPH)
        .first()
        .invoke('text')
        .should('include','Very simple web pages have a structure illustrated by this page. And elements can have id and class attributes for styling and locating')
    });
});