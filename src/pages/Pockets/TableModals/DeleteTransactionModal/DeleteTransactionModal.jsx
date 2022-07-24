import { useDispatch } from 'react-redux';

import { Modal, Button, Text, Box } from 'src/components';
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
        <Text as="h1" color="white">
          Удалить операцию?
        </Text>
      </div>
      <Text size="m" weight={400} color="white" opacity="blur">
        Вы не сможете отменить действие
      </Text>
      <div className={styles.deleteButtonsWrapper}>
        <Box ml={83} mr={4}>
          <Button radius={1000} height={53} bgColor="dark" variant="delete" onClick={handleDeleteTransaction}>
            <Text weight={500} size="xl" color="brand">
              Назад
            </Text>
          </Button>
        </Box>
        <Box mr={83} ml={4}>
          <Button radius={1000} height={53} bgColor="error" variant="delete" onClick={handleDeleteTransaction}>
            <Text weight={500} size="xl" color="contrast">
              Удалить
            </Text>
          </Button>{' '}
        </Box>
      </div>
    </Modal>
  );
};

export default DeleteTransactionModal;
