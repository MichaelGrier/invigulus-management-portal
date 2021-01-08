# Invigulus Management Portal
A Frontend React application which I created during my practicum at [Invigulus](https://invigulus.com/). This application leverages a RESTful API to allow Invigulus employees to perform full CRUD operations on all of their backend data.

**_note: this application utilizes a private api and is intended for use by invigulus employees only. as such, only invigulus employees will be able to log in and use this application. i am posting the code here as an example of my work, with express permission from Invigulus_**

[ajoubert655](https://github.com/ajoubert655) contributed the following components to this project:
- OrgForm
- EditOrgForm
- Alert
- Accordions

### What I Learned:
- Authentication, reset password, and change password functionality using Amazon Cognito
- Using global state to track authentication status and user objects
- Passing global state and helper functions as props
- Ensuring login state persists through page reloads
- Creating private route components with react-router
- Rendering public and private routes conditionally, based on authentication status
- Setting axios headers with auto-generated bearer tokens
- Creating data tables with filter, sort, select and pagination functionality using react-table
- Exporting selected data objects to a CSV file using react-csv
- Using selected data objects to populate multiple data-tables simultaneously