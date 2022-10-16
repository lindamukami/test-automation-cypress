import formatUrl from "../../utils/formatUrl";
import { SELENIUM_TEST_PAGES, HTML, PHP } from "../../constants";
import * as selectors from '../../selectors'

describe('Form validatation', () => {
    before('load the javascript validation test page', () => {
        cy.visit(
            formatUrl(
                SELENIUM_TEST_PAGES.BASE_URL,
                SELENIUM_TEST_PAGES.PATHNAMES.BASIC_JAVA_SCRIPT_VALIDATION_PAGE,
                HTML
            )
        );  
    });
    it('should check the value of the first item', () => {
        cy.get(selectors.SELENIUM_TEST_PAGES.BASIC_JAVASCRIPT_VALIDATION_TEST_PAGE.INPUT_FIELD)
        .type('Hello world')
        cy.get(selectors.SELENIUM_TEST_PAGES.BASIC_JAVASCRIPT_VALIDATION_TEST_PAGE.INPUT_SUBMIT)
        .click()
        .url()
        .should(
            'include',
            formatUrl(
                SELENIUM_TEST_PAGES.BASE_URL,
                SELENIUM_TEST_PAGES.PATHNAMES.THE_FORM_PROCESSOR_PAGE,
                PHP
            )
        );
    });
});