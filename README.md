### `Live Application`
Open [https://quizapp-woad.vercel.app/](https://quizapp-woad.vercel.app/) to see the deployed Application. 


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `Implementation`
The Following Image represents the component tree for this application
![image](https://github.com/vinaysuyal/quizapp/assets/47267619/062dfbf4-1651-4dea-8c56-da6d5233b69b)

The App component contains a state called test state, representing the current test state. When the test state value is 0, the User has to enter the email and when the test state value is 1, it implies that the user has already provided the e-mail address and can now take the test.

The preText Component contains email input and validations for the email.

The Quiz Component is the component where questions would be displayed and contains a navigation panel for navigation to a different question. It has a total of three components used within it
 1. A Timer Component for displaying a time left.
 2. A Question Component for displaying the current Question.
 3. A Navigation Component for navigation to a different question

![image](https://github.com/vinaysuyal/quizapp/assets/47267619/31713a29-2216-4c08-8964-42a7a8ddcc36)

The Quiz Component can be opened in two modes - "Quiz" and "Report". When opened in Quiz mode, a timer is displayed along with a series of questions for the user. 
When opened in Report mode, the User's report of the test is shown, displaying the score of the user along with the correct answer to the questions (see screenshot below):
![image](https://github.com/vinaysuyal/quizapp/assets/47267619/ff5c14a7-559e-4264-a1ef-b5fa658c352d)

Thus Quiz Component and Question Component are also being reused for displaying report after test ends.

### `Challenges`
While working on this project, a key challenge is to effectively display both the user's selected answer and the correct answer. This is essential for providing clear feedback to the user, highlighting any incorrect responses they may have given.

In the process of tackling this challenge, I explored various methods employed by other quiz websites to achieve this feature. After thorough research, I found inspiration from the way Udemy implements this functionality in their quizzes. Drawing from their approach, I have incorporated similar enhancements into this project to ensure a seamless and informative user experience.











