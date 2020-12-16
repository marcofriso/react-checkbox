# React Checkbox

## Instructions

Create a small React application, that has HTML form with the following fields:

- 4 checkboxes
- 1x Submit button
- 1x hidden input field

Then, on submitting the form:

- [x] 1. Prevent form submission if no checkbox has been ticked and also 
  present warning message (div / span / console...) to the user.
- [x] 2. If at least two checkbox have been ticked, redirect user to 'www.google.com'.

Additional Tasks:

- [x] 3. Provide two solutions: one using hooks and one without hooks
- [x] 4. Choose one of the solutions from previous point and upgrade it. 
   Upgrade is very simple - make separate `<Input />` component and use it instead of html inputs.
- [x] 5. Provide answer to the question: in general what benefit can hidden input provide to a form?

## Usage

- install: `npm i`
- run: `npm run start`

## 5.

A hidden input can contain some data that the user is not able to see in the browser window but is sent when the form is submitted. 
I imagine that could contain for example, data regarding the form, the number of submissions or data regarding the session.
If it is used within a React controlled component, however, I suspect that the property may not be useble. Additionally, being part of the DOM I wouldn't use it for sensitive data.