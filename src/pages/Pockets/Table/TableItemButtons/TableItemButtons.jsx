import { useState } from 'react';

import { ElipseGreyIcon } from 'src/assets/icons';
import { Button } from 'src/components';

import { DeleteTransactionModal } from '../../TableModals';
import AddNewOrUpdateTransactionModal from '../../TableModals/AddNewOrUpdateTransactionModal';

import styles from './TableItemButtons.module.scss';

const TableItemButtons = ({ item }) => {
  const [isEditOpened, setIsEditOpened] = useState(false);
  const [isDeleteOpened, setIsDeleteOpened] = useState(false);

  const handleEditClose = () => setIsEditOpened(false);
  const handleDeleteClose = () => setIsDeleteOpened(false);

  const handleEdit = () => {
    setIsEditOpened(true);
  };

  const handleDelete = () => {
    setIsDeleteOpened(true);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Button onClick={handleDelete}>
          <ElipseGreyIcon />
        </Button>
      </div>
      <AddNewOrUpdateTransactionModal transaction={item} isOpened={isEditOpened} handleClose={handleEditClose} />
      <DeleteTransactionModal itemId={item.id} isOpened={isDeleteOpened} handleClose={handleDeleteClose} />
    </>
  );
};

export default TableItemButtons;
