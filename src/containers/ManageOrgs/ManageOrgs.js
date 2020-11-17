import React from 'react';

import classes from './ManageOrgs.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import OrgTable from '../../components/DataTables/Orgs/OrgTable';

function ManageOrgs() {

  return (
    <div>
      <NavBar />
      <main className={classes.main}>
        <h1 className={classes.header}>Manage Organizations</h1>
        <div className={classes.tableWrap}>
          <OrgTable />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ManageOrgs;