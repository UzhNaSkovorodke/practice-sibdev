import { useDispatch } from 'react-redux';

import { Modal, Button, Text } from 'src/components';
import { deleteTransaction } from 'src/store/slices/transactionsSlice';

import styles from './DeleteTransactionModal.module.scss';

const DeleteTransactionModal = ({ itemId, isOpened, handleClose }) => {
  const dispatch = useDispatch();

  const handleDeleteTransaction = () => {
    dispatch(
      deleteTransaction({
        transactionId: itemId,
        callback: handleClose,
      })
    );
  };

  return (
    <Modal isOpened={isOpened} handleClose={handleClose}>
      <div className={styles.deleteTextWrapper}>
        <Text as="h1" color="primary">
          Удалить операцию?
        </Text>
      </div>
      <Button radius={0} height={53} bgColor="error" variant="brand" onClick={handleDeleteTransaction}>
        <Text weight={700} size="xl" color="contrast">
          Удалить
        </Text>
      </Button>
    </Modal>
  );
};

export default DeleteTransactionModal;
