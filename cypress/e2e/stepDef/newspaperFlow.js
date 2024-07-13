import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Newspaper from "../../PageObjects/pageActions/newspaperFlow";
Given ('The user navigates to the app newspaper',()=>{
 cy.visit('https://app.papernest.com/onboarding?anonymous&anonymousId=test&id_text=1&destination=newspaper')
});
When ('A new page appears with a pop in asking to start the flow and clicks on "commencer"',()=>{
 Newspaper.clickCommencer();
});
And ('The user completes the arrival date field on page 1',()=>{
 Newspaper.fillDate();

});
And ('The user enters old and new adresses on page 2',()=>{
 Newspaper.enterAdress();
});
And ('The user sees "La Poste" offers on the offer page',()=>{
 Newspaper.pageOffersPoste();
});
And ('The user completes client information with test data on the client info page',()=>{
 Newspaper.fillInfoForm();
});
And ('The uszer selects "Je reçois le code par mail" and clicks on "Suivant"',()=>{
 Newspaper.recevoirCode();
});
And ('The users sees a summary of Client informations',()=>{
 Newspaper.summuryPage();
});
And ('The user reaches the final page of payment',()=>{
 Newspaper.paymentPage();
});