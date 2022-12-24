# Module-3

Javascript Password Generator

## Description

A password is randomly generated based on criteria that the user provides when prompted.

When the user clicks the "Generate Password" they are first promoted for password length. If outside the range of 8-128 characters, the user is prompted to once again enter a password length within the range. The prompt will loop until the user enters a valid number.

The program then prompts the user to define if they would like to include numbers, characters, uppercase and/or lowercase letters. If the user selects none to all criteria, the program will ask it to select at least each one and will loop back through the prompts.

When all parameters have been defined, the password will appear within the password box.

Technologies Used: HTML5, CSS3, JavaScript

## Acceptance Criteria

    GIVEN I need a new, secure password
    WHEN I click the button to generate a password
    THEN I am presented with a series of prompts for password criteria
    WHEN prompted for password criteria
    THEN I select which criteria to include in the password
    WHEN prompted for the length of the password
    THEN I choose a length of at least 8 characters and no more than 128 characters
    WHEN prompted for character types to include in the password
    THEN I choose lowercase, uppercase, numeric, and/or special characters
    WHEN I answer each prompt
    THEN my input should be validated and at least one character type should be selected
    WHEN all prompts are answered
    THEN a password is generated that matches the selected criteria
    WHEN the password is generated
    THEN the password is written to the page.

## Application Demonstration


## Web Site Link

https://masynnay.github.io/Password-Generator/