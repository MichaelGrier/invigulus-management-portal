import React from 'react';

import classes from './SourceModal.module.css';

const SourceModal = (props) => {
  return (
    <div className={classes.Modal}>
      {props.children}
    </div>
  );
}

export default SourceModal;