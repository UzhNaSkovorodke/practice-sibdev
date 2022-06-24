import { useState } from 'react';

import { EditIcon, TrashIcon } from 'src/assets/icons';
import { Button } from 'src/components';

import { UpdateTransactionModal, DeleteTransactionModal } from '../../TableModals';

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
        <Button variant="ghost" onClick={handleEdit}>
          <EditIcon />
        </Button>
        <Button variant="ghost" onClick={handleDelete}>
          <TrashIcon />
        </Button>
      </div>
      <UpdateTransactionModal item={item} isOpened={isEditOpened} handleClose={handleEditClose} />
      <DeleteTransactionModal itemId={item.id} isOpened={isDeleteOpened} handleClose={handleDeleteClose} />
    </>
  );
};

export default TableItemButtons;
