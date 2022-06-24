import { useState } from 'react';

import { AddIcon } from 'src/assets/icons';
import { Button, Box, Text } from 'src/components';

import { AddNewCategoryModal } from '../../TableModals';

const AddCategoryButton = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = () => {
    setIsOpened(false);
  };

  const openModal = () => setIsOpened(true);

  return (
    <>
      <Button variant="ghost" onClick={openModal}>
        <Box mr={12}>
          <Text color="brand" size="xxs">
            Добавить
          </Text>
        </Box>
        <AddIcon />
      </Button>
      <AddNewCategoryModal isOpened={isOpened} handleClose={handleClose} />
    </>
  );
};

export default AddCategoryButton;
