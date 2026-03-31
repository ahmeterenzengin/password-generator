## GENERATE YOUR PASSWORD
**Generate Your Password** is a website where you can create secure passwords between 8 and 12 characters long.
##  Research Problem
In this digital age where passwords are easily cracked, users generally use insecure and guessable passwords, or reuse previously used secure passwords, which can create security vulnerabilities.
##  Motivation
The main motivation behind developing this project is to enable users to quickly create secure passwords, leading to a safer and more comfortable digital life. As our motto says, "Never use an insecure password again."
##  Control Flow
The application follows a straightforward, client-side execution path:
1. User Input: The user enters their desired password length (restricted between 8 and 12 characters) into the input field.
2. Event Listener: The user clicks the "Generate passwords" button, triggering the `create()` function.
3. Checks: The script checks if the input is a valid number and falls within the required 8-12 range.
   If invalid: An alert is shown to the user prompting them to enter a valid number.
   If valid: The flow continues to the generation step.
4. Password Generation: The `createPassword(length)` function runs twice. It uses a `for` loop to randomly select characters from a predefined array (containing uppercase, lowercase, numbers, and symbols) using `Math.random()`.
5. Output: The two generated passwords are injected into the DOM and displayed in the respective output boxes on the UI.

##  Implementation Strategy
This project is built using core web technologies,HTML,CSS and JavaScript, following a modular approach to separate structure, styling, and logic:
HTML (`index.html`): Provides the semantic structure of the application. It includes input validation attributes (`min="8" max="12" required`) to ensure correct data entry before it even reaches the script.
CSS (`index.css`): Handles the visual presentation using a modern, dark-themed UI. Flexbox is utilized for aligning the password output boxes, and a custom font ("Karla") is imported from Google Fonts for better typography.
JavaScript (`index.js`): Manages the core logic and DOM manipulation. 
     A constant array `characters` holds all possible characters.
     Reusable functions (`getRandomElement` and `createPassword`) ensure the code is DRY (Don't Repeat Yourself).
     Conditional statements (`if/else`) are used for strict input validation to prevent errors or extremely long password generation requests.

##  Deployment
This project is uploaded and deployed directly from this public GitHub repository using GitHub Pages. The project strictly uses the topics and outlines discussed up to the mid-term point.It was also deployed to the internet using the NetLify website.Here's the link:https://generate-your-passwords.netlify.app/
