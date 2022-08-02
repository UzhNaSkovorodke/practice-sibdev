import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Button, Modal, TableDefaultInput, Text } from 'src/components';
import { addNewCategory } from 'src/store/slices/categoriesSlice';

import styles from './AddNewCategoryModal.module.scss';

const AddNewCategoryModal = ({ isOpened, handleClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleOnChange = (event) => {
    if (event.target.value.match(/[,.[\]{}&$@^:;=<>]/)) return;
    setName(event.target.value);
  };

  const onCloseModal = () => {
    setName('');
    handleClose();
  };

  const handleAddNewCategory = () => {
    dispatch(
      addNewCategory({
        name,
      })
    ).then((res) => {
      if (!res?.error) onCloseModal();
    });
  };

  return (
    <Modal isOpened={isOpened} title="Добавить категорию" handleClose={onCloseModal}>
      <Box mb={32}>
        <div className={styles.inputsContainer}>
          <TableDefaultInput
            radius="common"
            value={name}
            placeholder="Введите название категории"
            onChange={handleOnChange}
          />
        </div>
      </Box>
      <Box mb={48}>
        <Button radius={1000} height={53} variant="brand" onClick={handleAddNewCategory}>
          <Text weight={700} size="xl" color="contrast">
            Добавить
          </Text>
        </Button>
      </Box>
    </Modal>
  );
};

export default AddNewCategoryModal;
