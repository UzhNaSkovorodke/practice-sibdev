import { useState } from 'react';

import { ElipseIcon, PlusIcon } from 'src/assets/icons';
import { Button, Text, Box } from 'src/components';

import { AddNewCategoryModal } from '../../TableModals';

import styles from './CategoriesTableHeader.module.scss';

const AddCategoryButton = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = () => {
    setIsOpened(false);
  };

  const openModal = () => setIsOpened(true);

  return (
    <>
      <Button onClick={openModal}>
        <div className={styles.addButtonWrapper}>
          <Text color="brand" size="s" weight={400}>
            Добавить категорию
          </Text>
          <Box mr={8} mt={6} ml={6}>
            <ElipseIcon />
          </Box>
          <div>
            <PlusIcon className={styles.plusIcon} />
          </div>
        </div>
      </Button>
      <AddNewCategoryModal isOpened={isOpened} handleClose={handleClose} />
    </>
  );
};

export default AddCategoryButton;
