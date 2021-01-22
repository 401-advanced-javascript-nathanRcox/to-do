# LAB - Class 31 - 34

## Project: React To-do List Manager

### Author: Nathan Cox

### Links and Test Objects

- [Front-end on GH-Pages](https://401-advanced-javascript-nathanrcox.github.io/to-do/)
- [Back-end on Heroku](https://nrc-api-server.herokuapp.com/)

### Resources

### Setup

#### Phase 1 (lab 31) Hooks API: User & Developer Stories

- [x] As a user, I would like an easy way to add a new to do item using an online interface.
- [x] As a user, I would like my to-do items to have an assignee, due date, difficulty meter, status and the task itself.
- [x] As a user, I would like to delete to-do items that are no longer needed.
- [x] As a user, I would like to mark to-do items as completed.
- [ ] As a user, I would like to edit an existing to do item.

---

- [x] Convert the architecture from Class-based Components into Functional Components.
- [x] Apply styling and layout using React Bootstrap Components.
- [x] Ensure the current functionality works unchanged.
- [x] Manage state using the useState() hook.
- [x] Use a useEffect() hook to change the title of the browser with the complete/incomplete counts.
- [x] Use a useEffect() hook to pre-load the seeded to-do items.
- [x] Match the provided mockup for the design.
- [x] Each item in the list should show the text of the item as well as the assignee.
- [x] When clicked, toggle the “complete” status of the item.
- [x] Items should be styled differently when complete/incomplete making their status visually obvious.

#### Phase 2 (lab 32) Custom Hooks: User & Developer Stories

- [x] As a user, I would like to be able to add, update, and delete to-do items.
- [x] As a user, I would like my to-do items to be permanently stored, so that I can re-access them at any time, using any device.

- [x] On application start, display all of the to-do items from the API/Database.
- [x] When adding an item, issue a POST request to the API server.
- [x] When marking items complete, issue a PUT request to the API server for the item.
- [x] When deleting items, issue a DELETE request to the API server for the item.

- [x] Add a new data model for to-do items as noted in the Business Requirements document, and deploy it to Heroku.
- [x] Use the useEffect() hook to pre-load the to-do items from the API on application start.
- [x] Replace the current form change/submit handlers with the useForm() custom hook to manage the “Add Item” form.
- [x] Create a new custom hook called useAjax() to abstract the API calls. Use this hook in your component to make the calls to the server.
- This hook should:
  - [x] Accept the URL to the API server, the REST method and, when relevant, the BODY (JSON) of the request.
  - [x] Handle CORS settings, content-type, headers and possibly authentication.
  - [x] You should use axios to perform the actual AJAX calls.

#### Phase 3 (lab 33) Context API: User & Developer Stories

- [x] As a user, I would like to see my to-do items a few at a time so that I don’t have to wade through them all.
- [ ] As a user, I would like my default view to only be “Incomplete” Items so that I can quickly determine what I have to do.
- [ ] As a user, I would like my list sorted by difficulty so that I can more easily prioritize.
- [ ] As a user, I would like the option to change my default preferences with regards to how many Items I see per page, which items are filtered, and how they are sorted.

- [x] Show a maximum of a certain number of items per screen.
- [ ] Hide or show completed items in the list.
- [ ] Sort the items based on any of the keys (i.e. difficulty).
- [ ] Implement this using context.

- [x] Create a context for managing application settings and provide this at the application level.
- [ ] Display or hide completed items (boolean).
- [ ] Number of items to display per screen (number).
- [ ] Default sort field (string).

- [x] Only display the first n items in the list, where n is the number to display per screen in your context.
- [x] If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
- [x] If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.

#### Phase 4 (lab 34) `<Login />` and `<Auth />`: User & Developer Stories

- [ ] As a user, I want to provide a way for other users to create new accounts.
- [ ] As a user, I want to provide a way for all users to login to their account.
- [ ] As a user, I want to make sure that my to-do items are only viewable to users that have logged in with a valid account.
- [ ] As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new to-do items.
- [ ] As a user, I want to ensure that only users who are allowed to “update”, based on their user type, may mark to-do items as complete.
- [ ] As a user, I want to ensure that only users who are allowed to “delete”, based on their user type, may delete new to-do items.

---

- [ ] Provide an account registration screen.
  - [ ] Requires: Username, Password, Email.
  - [ ] Optionally: A drop-down to select a user “Role” so that you can easily simulate user types.
- [ ] Provide an account login screen.
  - Accepts Username and Password.
- [ ] On successful login, store the token as a cookie.
- [ ] If a user returns and has a valid login cookie, bypass the login screen and consider them “Logged In."

- [ ] Implement <Login /> and <Auth /> components with Context.
- [ ] Link to the Login screen in your main menu.
- [ ] Hide the entire interface until the user has logged in.
- [ ] Implement the following RBAC rules:
  - [ ] Logged-in users with ‘read’ permissions can see the summary/count.
- [ ] Logged-in users with ‘read’ permissions can see the list of to-do items.
- [ ] logged-in users with ‘update’ permissions can click the records to mark them as complete.
- Logged-in users with ‘create’ permissions can create new items.
- Logged-in users with ‘delete’ permissions can delete items.

#### `.env` requirements (where applicable)

#### How to initialize/run your application (where applicable)

`npm start`

#### How to use your library (where applicable)

### Tests

- To run tests, type npm test in the command line from the root directory.
- Any tests of note?: N/A thus far.
- Describe any tests that you did not complete, skipped, etc.: All, for now.

### UML

![To-do UML (Lab 31)](./assests/toDoUml.png)
