# LAB - Class 31 - 34

## Project: React To-do List Manager

### Author: Nathan Cox

### Links and Test Objects

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

- [ ] Add a new data model for to-do items as noted in the Business Requirements document, and deploy it to Heroku.
- [ ] Use the useEffect() hook to pre-load the to-do items from the API on application start.
- [ ] Replace the current form change/submit handlers with the useForm() custom hook to manage the “Add Item” form.
- [ ] Create a new custom hook called useAjax() to abstract the API calls. Use this hook in your component should make the calls to the server.
- This hook should:
  - [ ] Accept the URL to the API server, the REST method and, when relevant, the BODY (JSON) of the request.
  - [ ] Handle CORS settings, content-type, headers and possibly authentication.
  - [ ] You should use axios to perform the actual AJAX calls.

#### `.env` requirements (where applicable)

<!-- i.e.

- `PORT` - Port Number
- `MONGODB_URI` - URL to the running mongo instance/db -->

#### How to initialize/run your application (where applicable)

`npm start`

#### How to use your library (where applicable)

### Tests

- To run tests, type npm test in the command line from the root directory.
- Any tests of note?: N/A thus far.
- Describe any tests that you did not complete, skipped, etc.: All, for now.

### UML

![To-do UML (Lab 31)](./assests/toDoUml.png)
