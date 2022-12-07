export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'production') 
            return "https://www.instagram.com/"; 
        else if (envi == 'staging')
            return "https://staging-website.com";
        else if (envi == 'qa')
            return "http://qa-website.com";
    }
}