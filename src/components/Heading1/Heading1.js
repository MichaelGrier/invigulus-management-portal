import React from 'react';

import classes from './Heading1.module.css';

const heading1 = (props) => {
  return (
    <h1 className={classes.Heading1} for="test">{props.children}</h1>
  );
}

export default heading1;