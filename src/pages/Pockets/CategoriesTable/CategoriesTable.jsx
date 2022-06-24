import { useState } from 'react';
import { useSelector } from 'react-redux';

import { EmptyList } from 'src/components';

import { AddNewCategoryModal } from '../TableModals';

import styles from './CategoriesTable.module.scss';
import CategoriesTableBody from './CategoriesTableBody';
import CategoriesTableHeader from './CategoriesTableHeader';

const CategoriesTable = () => {
  const [isOpened, setIsOpened] = useState(false);
  const categories = useSelector((state) => state.categories.list);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <div className={styles.wrapper}>
      <CategoriesTableHeader />
      {!!categories.length ? (
        <CategoriesTableBody />
      ) : (
        <>
          <EmptyList height={407} text="Категория" onClick={handleOpen} />
          <AddNewCategoryModal isOpened={isOpened} handleClose={handleClose} />
        </>
      )}
    </div>
  );
};

export default CategoriesTable;
