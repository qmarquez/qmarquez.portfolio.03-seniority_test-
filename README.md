# [PERSONAL PROJECT] [03] Vi-datec seniority test.

Dummy email client app

Heroku app: [dummy_mailer](https://dummy-mailer.herokuapp.com/)

NOTE: i'm counscient that i use through all app magic strings for draft, sent and mail types.

## Test state

### General

- [X] Use Angular for UI rendering and Redux for state management(NGRX).
- [X] Follow the ​Eva Design guidelines​. It may make use of existing implementations likeNebular​.
- [X] Be responsive down to mobile phone screen sizes.
- [X] Use CSS flexbox / CSS grid for structuring and positioning elements
- [ ] Use an TSLint config and a npm command to lint all files.
- [X] Have a README file.
- [X] Be stored in GitHub or GitLab.
- [X] Be hosted in ​Heroku​, ​Now ​or ​AWS

### Login screen

- [X] Disallow empty fields.
- [X] Disallow invalid emails.
- [X] Reject email + password combinations as invalid, other than: {Email: user@vi-datec.com, Password: test}
- [X] Proceed to the ​Inbox ​section of the ​Main ​screen once logged in.

### Main

- [X] On the left, the navigation menu allows switching between the ​Inbox​, ​Drafts ​and ​Sent sections.
- [X] On the right, a list of emails is displayed according to the current section.
- [X] The list must initially show 20 messages and have a way to show all messages through pagination or infinite scroll.
- [X] While in the ​Inbox ​and ​Sent ​sections, clicking on an email opens the ​View ​screen.
- [X] While in the ​Drafts ​section, clicking on a draft opens the ​Compose ​screen.
- [X] Clicking the plus button on the bottom right opens the ​Compose ​screen.
- [X] Bonus points if the list can be searched by email and name.

### View/compose

- [X] On the left, the navigation menu allows switching between the ​Inbox​, ​Drafts ​and ​Sent sections of the ​Main ​screen.
- [X] On the right, the screen contains a form with the fields: ​To​, ​Subject ​and ​Body​.
- [X] In the ​View ​screen, all three fields are read only and the Send button is hidden.
- [ ] The ​To ​field is auto-completed from the email data.
- [X] While composing an email, the app must save a draft every 10 seconds.
- [X] The ​Drafts ​section of the ​Main ​screen must only show the last draft of every unsent message.
- [X] After clicking the send button the message should appear in the ​Sent ​section and disappear from the ​Drafts ​section.

### Bonus

- [ ] Include ​Storybook​ as documentation of your components
- [X] Use a real backend, preferably NesJS or another NodeJS framework
- [X] Dockerize your app
- [ ] Use ​@ngrx/entity​ library
