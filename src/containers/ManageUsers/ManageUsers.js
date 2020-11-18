import React from 'react';

import classes from './ManageUsers.module.css';
import UserTable from '../../components/DataTables/Users/UserTable';

function ManageUsers() {
  return (
    <main className={classes.main}>
      <h1 className={classes.header}>Manage Users</h1>
      <div className={classes.tableWrap}>
        <UserTable />
      </div>
    </main>
  );
}

export default ManageUsers;