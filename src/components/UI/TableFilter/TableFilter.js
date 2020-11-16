import React from 'react'

import classes from './TableFilter.module.css';

const TableFilter = ({filter, setFilter}) => {
  return (
    <span>
      Search: {' '}
      <input
        className={classes.TableFilter}
        value={filter || ''}
        onChange={e => setFilter(e.target.value)}
      />
    </span>
  )
}

export default TableFilter;