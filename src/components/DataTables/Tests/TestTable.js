import React, {useMemo, useState, useEffect} from 'react';
import {
  useTable, 
  useSortBy, 
  useGlobalFilter, 
  usePagination,
  useRowSelect
} from 'react-table';
import Table from 'react-bootstrap/Table';
import axios from '../../../axios';
import {Link} from 'react-router-dom';

import {COLUMNS} from './columns';
import TableFilter from '../../UI/TableFilter/TableFilter';

import classes from './TestTable.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretUp} from '@fortawesome/free-solid-svg-icons';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import Checkbox from '../../UI/Checkbox/Checkbox';
import SmallButton from '../../UI/SmallButton/SmallButton';

const TestTable = () => {
  const [tests, setTests] = useState([])

  // get data from api
  useEffect(() => {
    axios.get('/tests').then(res => {
      //console.log(res.data.result.Items);
      const pathToData = res.data.result.Items
      const loadedData = [];

      // push data objects into an array
      for (const Item in pathToData) {
        loadedData.push({
          id: pathToData[Item].id,
          itemId: pathToData[Item].itemId,
          itemType: pathToData[Item].itemType,
          testOrgId: pathToData[Item].testOrgId,
          description: pathToData[Item].description,
          tds: pathToData[Item].tds,
          created: pathToData[Item].created,
          updated: pathToData[Item].updated
        });
      }
      //console.log(loadedData);
      setTests(loadedData);
    });
  }, []);

  // memoize data to ensure it is not duplicated on each render
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tests, [tests]);

  // create table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    selectedFlatRows,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns: columns,
      data: data
    },
    // add sorting, filtering, pagination and row select
    useGlobalFilter,  useSortBy, usePagination, useRowSelect,
    // add a column for checkbox to tables
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'selection',
            Header: 'select',
            Cell: ({row}) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            )
          },
          ...columns
        ]
      });
    }
  );

  // destructure global filter and page index from state object
  const {globalFilter, pageIndex} =  state;

  // data from selected row is stored here
  let selectedRow = selectedFlatRows
  console.log(selectedRow);

  return (
    <>
      <div className={classes.toolBarWrap}>
        {/* render filter field, with globalFilter and setGlobalFilter passed as props */}
        <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <Link to={{pathname: '/add-test'}}><SmallButton>Add New</SmallButton></Link>
      </div>

      {/* render table */}
      <Table {...getTableProps()} striped bordered hover>
        <thead>
          {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  // render headers w/ sort functionality
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>  
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />) : ''}
                    </span>
                  </th>
                ))} 
              </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              // render table rows
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
      <div>
        {/* render pagination buttons */}
        <button
          className={classes.pageButton} 
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >Previous</button>
        <span className={classes.pageNum}>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          className={classes.pageButton} 
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >Next</button>
      </div>
      <br/>
      <SmallButton>&nbsp;&nbsp;Edit&nbsp;&nbsp;</SmallButton>
      <SmallButton>Delete</SmallButton>
    </>
  );
}
export default TestTable