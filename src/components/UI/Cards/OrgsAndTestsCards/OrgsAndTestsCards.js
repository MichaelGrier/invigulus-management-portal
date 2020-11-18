import React from 'react';
import {Link} from 'react-router-dom';

import classes from './OrgsAndTestsCards.module.css';
import Card from '../Card';

const orgsAndTestsCards = (props) => {
  return (
    <div className={classes.orgsAndTestsCards}>
      <Link to={{pathname:'/manage-orgs'}}><Card>Manage Organizations</Card></Link>
      <Link to={{pathname:'/manage-tests'}}><Card>Manage Tests</Card></Link>
    </div>
  );
}

export default orgsAndTestsCards;
