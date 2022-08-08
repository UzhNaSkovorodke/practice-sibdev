import { useState } from 'react';
import { useSelector } from 'react-redux';

import { EmptyList } from 'src/components';

import { AddNewCategoryModal } from '../TableModals';

import styles from './CategoriesTable.module.scss';
import CategoriesTableBody from './CategoriesTableBody';
import CategoriesTableGeneral from './CategoriesTableGeneral';
import CategoriesTableHeader from './CategoriesTableHeader';
import AddCategoryButton from './CategoriesTableHeader/AddCategoryButton';

const CategoriesTable = () => {
  const [isOpened, setIsOpened] = useState(false);
  const categories = useSelector((state) => state.categories.list);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <div className={styles.wrapper}>
      <CategoriesTableHeader />
      <div className={styles.categoriesTableBodyWrapper}>
        <CategoriesTableGeneral />
        <div className={styles.rightColumnCategories}>
          {!!categories.length ? (
            <CategoriesTableBody />
          ) : (
            <>
              <EmptyList height={407} text="Категория" onClick={handleOpen} />
              <AddNewCategoryModal isOpened={isOpened} handleClose={handleClose} />
            </>
          )}
          {!!categories.length && <AddCategoryButton />}
        </div>
      </div>
    </div>
  );
};

export default CategoriesTable;
