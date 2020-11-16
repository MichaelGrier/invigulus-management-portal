import React from 'react';

import classes from './FormContainer.module.css';

const formcontainer = (props) => {
  return (
    <div className={classes.FormContainer} for="FormContainer">
        <form>
            {props.children}
        </form>
    </div>
  );
}
export default formcontainer;