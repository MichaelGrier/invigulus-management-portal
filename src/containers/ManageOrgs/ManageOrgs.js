import React from 'react';
import {useTable} from 'react-table';
import Table from 'react-bootstrap/Table';

import classes from './ManageOrgs.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

function ManageOrgs() {
  const data = React.useMemo(
    () => [
      {
        name: 'Technical Traning Inc.',
        id: 'TTI',
        city: 'Phoenix',
        contactName: 'Daniel Yergen',
        contactEmail: 'dyergen@tti.com',
        contactPhone: '451-345-6785'
      },
      {
        name: 'Learn YYC',
        id: 'LYC',
        city: 'Calgary',
        contactName: 'Susanna Clarke',
        contactEmail: 'susannaclarke@learnyyc.ca',
        contactPhone: '403-465-9675'
      },
      {
        name: 'Oakland School District',
        id: 'OSD',
        city: 'Oakland',
        contactName: 'David Burns',
        contactEmail: 'davidburns@oakland.schools.edu',
        contactPhone: '587-234-0898'
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'org_name', // accessor is the "key" in the data
      },
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'City',
        accessor: 'city'
      },
      {
        Header: 'Contact Name',
        accessor: 'contactName'
      },
      {
        Header: 'Contact Email',
        accessor: 'contactEmail'
      },
      {
        Header: 'Contact Phone',
        accessor: 'contactPhone'
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data})

  return (
    <div>
      <NavBar />
      <main className={classes.main}>
        <h1 className={classes.header}>Manage Organizations</h1>
        <div className={classes.tableWrap}>
          <Table {...getTableProps()} striped bordered hover>
            <thead>
              {// Loop over the header rows
              headerGroups.map(headerGroup => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {// Loop over the headers in each row
                  headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {// Render the header
                      column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
              {// Loop over the table rows
              rows.map(row => {
                // Prepare the row for display
                prepareRow(row)
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {// Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {// Render the cell contents
                          cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ManageOrgs;