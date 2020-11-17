import React from 'react';

import classes from './LandingPageCards.module.css';
import Card from '../Card';

const landingPageCards = (props) => {
  return (
    <div className={classes.landingPageCards}>
      <a href='/'><Card>Manage Organizations</Card></a>
      <a href='/'><Card>Manage Users</Card></a>
      <a href='/'><Card>View Sessions</Card></a>
    </div>
  );
}

export default landingPageCards;