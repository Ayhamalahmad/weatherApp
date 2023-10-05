# create read update delete

This is a simple user management web application that allows you to add, edit, and delete user information. You can access the web app through this [link](https://ayhamalahmad.github.io/task-10-add-user/).

## Features

- **Add User**: Fill in the user information fields and click the "Save" button to add a new user to the table.

- **Edit User**: Click the "edit" button in a user's row to populate the input fields with their information. After editing, click the "Save" button to update the user's data in the table.

- **Delete User**: Click the "Delete" button in a user's row to confirm deletion. Once confirmed, the user will be removed from the table.

## Usage

1. **Add User**:
   - Fill in the user information fields (Name, Email, Phone, Password).
   - Click the "Save" button.
   - If any of the input fields are empty, a message will appear, and the user won't be added until all fields are filled.

2. **Edit User**:
   - Click the "edit" button in the user's row.
   - Edit the user's information in the input fields.
   - Click the "Save" button to update the user's data in the table.

3. **Delete User**:
   - Click the "Delete" button in the user's row to initiate the deletion process.
   - A confirmation window will appear.
   - Click the "Delete" button in the confirmation window to delete the user from the table.
   - Click the "Cancel" button to cancel the deletion.


## Development

The web app is developed using SCSS (Sass), HTML, and JavaScript for its functionality. The main elements and event listeners are defined in the JavaScript code.

### SCSS (Sass) Styles
- The styling for the web app is written in SCSS (Sass) and organized into various modules and components.

```scss
@use "../sass/pages/globalpage" as *;
@use "../sass/utils/variables" as *;
@use "../sass/utils/mixins" as *;
@use "../sass/components/buttons" as *;
@use "../sass/layout/grid" as *;
@use "../sass/layout/form" as *;
@use "../sass/layout/table" as *;
@use "../sass/layout/confrim-pupop" as *;
```

### HTML Structure
- The user interface is built using HTML and includes input fields for user information and a table to display user data.
- Buttons for adding, saving, updating, and canceling actions are also included in the HTML structure.

### CSS Styling
- CSS styles are applied to create a visually appealing and responsive layout.

### JavaScript Logic
- JavaScript handles user interactions, including adding, editing, and deleting users.
- User input validation ensures that all required fields are filled before adding a user.
- When editing a user, the input fields are populated with the user's existing information for easy editing.
- The web app provides feedback to the user through messages and confirmation dialogs.
- The table rows are updated when editing a user's data, and users can be deleted with confirmation.


