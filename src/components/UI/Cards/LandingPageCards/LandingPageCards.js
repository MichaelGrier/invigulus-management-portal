import React from 'react';
import {Link} from 'react-router-dom';

import classes from './LandingPageCards.module.css';
import Card from '../Card';

const landingPageCards = (props) => {
  return (
    <div className={classes.landingPageCards}>
      <Link to={{pathname:'/manage-orgs-and-tests'}}><Card>Manage Organizations and Tests</Card></Link>
      <Link to={{pathname:'/manage-users'}}><Card>Manage Users</Card></Link>
      <Link to={{pathname:'/view-sessions'}}><Card>View Sessions</Card></Link>
    </div>
  );
}

export default landingPageCards;