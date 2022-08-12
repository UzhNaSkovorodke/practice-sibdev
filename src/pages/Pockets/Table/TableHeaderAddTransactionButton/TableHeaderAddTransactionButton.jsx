import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ElipseBrandIcon, FootButtonIcon, WhitePlusIcon } from 'src/assets/icons';
import { Button } from 'src/components';

import { AddNewTransactionModal } from '../../TableModals';

import styles from './TableHeaderAddTransactionButton.module.scss';

const TableHeaderAddTransactionButton = () => {
  const transactions = useSelector((state) => state.transactions.list);
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = () => {
    setIsOpened(false);
  };

  const openModal = () => setIsOpened(true);

  if (!transactions.length) return null;

  return (
    <>
      <Button onClick={openModal}>
        <div className={styles.ButtonIconWrapper}>
          <FootButtonIcon className={styles.FootButtonIcon} />
          <ElipseBrandIcon className={styles.ElipseBrandIcon} />
          <WhitePlusIcon className={styles.WhitePlusIcon} />
        </div>
      </Button>
      <AddNewTransactionModal isOpened={isOpened} handleClose={handleClose} />
    </>
  );
};

export default TableHeaderAddTransactionButton;
