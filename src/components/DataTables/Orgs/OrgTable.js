import React, {useMemo} from 'react';
import {useTable} from 'react-table';

import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './columns';

export const OrgTable = () => {
  // memoize data to ensure it is not duplicated on each render
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  // create table instance
  const tableInstance = useTable({
    columns: columns,
    data: data
  })

  return (
    <div>

    </div>
  );
}