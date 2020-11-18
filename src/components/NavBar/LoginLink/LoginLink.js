import React from 'react';
import {Link} from 'react-router-dom';

import classes from './LoginLink.module.css';

const loginLink = (props) => {
  return (
    <Link to={{pathname:'/login'}} className={classes.loginLink}>{props.children}</Link>
  );
}

export default loginLink;