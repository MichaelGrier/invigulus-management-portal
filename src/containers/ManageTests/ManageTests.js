import React from 'react';

import classes from './ManageTests.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import TestTable from '../../components/DataTables/Tests/TestTable';

function ManageTests() {
  return (
    <div>
      <NavBar />
      <main className={classes.main}>
        <h1 className={classes.header}>Manage Tests</h1>
        <div className={classes.tableWrap}>
          <TestTable />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ManageTests;