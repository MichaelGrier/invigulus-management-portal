import React from 'react';

import classes from './ManageUsers.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import UserTable from '../../components/DataTables/Users/UserTable';

function ManageUsers() {
  return (
    <div>
      <NavBar />
      <main className={classes.main}>
        <h1 className={classes.header}>Manage Users</h1>
        <div className={classes.tableWrap}>
          <UserTable />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ManageUsers;