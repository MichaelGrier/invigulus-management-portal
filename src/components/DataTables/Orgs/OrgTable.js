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
import {Link, withRouter, useHistory} from 'react-router-dom';

import {COLUMNS} from './columns';

import TableFilter from '../../UI/TableFilter/TableFilter';

import classes from './OrgTable.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretUp} from '@fortawesome/free-solid-svg-icons';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import Checkbox from '../../UI/Checkbox/Checkbox';
import SmallButton from '../../UI/SmallButton/SmallButton';
//import {Link} from 'react-router-dom';

const OrgTable = () => {
  const [orgs, setOrgs] = useState([])
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  // get data from api
  useEffect(() => {
    axios.get('/orgs').then(res => {
      console.log(res.data.result.Items);
      const pathToData = res.data.result.Items
      const loadedData = [];
      
      //push data object into an array of kvps
      for (const Item in pathToData) {
        loadedData.push({
          // org info
          description: pathToData[Item].description,
          id: pathToData[Item].id,
          itemId: pathToData[Item].itemId,
          itemType: pathToData[Item].itemType,
          city: pathToData[Item].address[0].city,
          // // primary contact data
          firstName: pathToData[Item].contact[0].firstName,
          lastName: pathToData[Item].contact[0].lastName,
          email: pathToData[Item].contact[0].email,
          phone: pathToData[Item].contact[0].phone,
          //full contact data
          contact: pathToData[Item].contact,
          // address
          address: pathToData[Item].address,
          // configuration params
          configuration: pathToData[Item].configuration,
          // timestamps
          created: pathToData[Item].created,
          updated: pathToData[Item].updated
        });
      }
      //console.log(loadedData);
      setOrgs(loadedData);
    });
  
  }, []);

  // memoize data to ensure it is not duplicated on each render
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => orgs, [orgs]);

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

  // handle edit button click
  const HandleEditRequest = () => {
    // get properties to be passed to form and store in variable
    const itemToEdit = selectedRow[0].original;
    // initialize query parameters array
    const queryParams = [];

    // loop through itemToEdit, encode data, and push into queryParams as strings
    for (let i in itemToEdit) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(itemToEdit[i]));
    }
    // join queryParams strings and store in variable
    const queryString = queryParams.join('&');

    // pass queryString data to EditTestForm via router
    history.push({
      pathname: '/edit-org',
      search: '?' + queryString
    });
  }

  const handleDeleteRequest = () => {
    // get id of test to be deleted from selectedRow object
    let itemToDelete = selectedRow[0].original.id
    
    // make axios call, then reload page
    axios.delete(`/orgs/${itemToDelete}`)
         .then(response => {
          console.log(response);
          window.location.reload();
         })
         .catch(error => alert(error));
  }

  return (
    <>
      {/* render filter field, with globalFilter and setGlobalFilter passed as props */}
      <div className={classes.toolBarWrap}>
        {/* render filter field, with globalFilter and setGlobalFilter passed as props */}
        <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <Link to={{pathname: '/add-org'}}><SmallButton>Add New</SmallButton></Link>
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
      <SmallButton clicked={HandleEditRequest}>&nbsp;&nbsp;Edit&nbsp;&nbsp;</SmallButton>
      <SmallButton clicked={handleDeleteRequest}>Delete</SmallButton>
    </> 
  );
}
export default withRouter(OrgTable);