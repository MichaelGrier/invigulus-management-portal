import React from 'react';

import invigulusLogo from '../../../assets/images/Logo.PNG';
import classes from './Logo.module.css';

const logo = (props) => {
  return(
    <div className={classes.logo}>
      <a href={'/'}><img src={invigulusLogo} alt="Invigulus Logo" /></a>
    </div>
  );
};

export default logo;
