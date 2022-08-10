import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

import { EmptyList } from 'src/components';

import { AddNewTransactionModal } from '../TableModals';

import styles from './Table.module.scss';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableHeaderAddTransactionButton from './TableHeaderAddTransactionButton';
import TableTitle from './TableTitle';
import { columns, processServerDataIntoTableData } from './utils';

const Table = () => {
  const [isOpened, setOpened] = useState(false);
  const transactions = useSelector((state) => state.transactions.list);
  const data = useMemo(() => processServerDataIntoTableData(transactions), [transactions]);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const handleOpen = () => setOpened(true);
  const handleClose = () => setOpened(false);

  return (
    <div className={styles.wrapper}>
      <TableTitle />
      <table {...getTableProps()} className={styles.table}>
        <TableHeader headerGroups={headerGroups} />
        {!!transactions.length && (
          <TableBody rows={rows} getTableBodyProps={getTableBodyProps} prepareRow={prepareRow} />
        )}
      </table>
      {!transactions.length && (
        <>
          <EmptyList bgColor="hsla(228, 56%, 98%, 1)" height={418} onClick={handleOpen} text="Расход" />
          <AddNewTransactionModal isOpened={isOpened} handleClose={handleClose} />
        </>
      )}
      <div className={styles.iconsWrapper}>
        <div className={styles.addButtonsWrapper}>
          <TableHeaderAddTransactionButton />
        </div>
      </div>
    </div>
  );
};

export default Table;
