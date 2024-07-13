Feature: User informs magazine about a moving

 As a user i want to inform the magazine about my moving

 Scenario: User enters the "newspaper" flow
  Given The user navigates to the app newspaper
  When A new page appears with a pop in asking to start the flow and clicks on "commencer"
  And The user completes the arrival date field on page 1
  And The user enters old and new adresses on page 2
  And The user sees "La Poste" offers on the offer page
  And The user completes client information with test data on the client info page
  And The uszer selects "Je reçois le code par mail" and clicks on "Suivant"
  And The users sees a summary of Client informations
  And The user reaches the final page of payment