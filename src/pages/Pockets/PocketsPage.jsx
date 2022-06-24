import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MainPagesLayout } from 'src/layouts';
import { getCategories } from 'src/store/slices/categoriesSlice';
import { getTransactions } from 'src/store/slices/transactionsSlice';

import CategoriesTable from './CategoriesTable';
import CommonInformation from './CommonInformation';
import styles from './PocketsPage.module.scss';
import Table from './Table';

const PocketsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTransactions());
  }, [dispatch]);
  return (
    <MainPagesLayout
      pageName="Карманы"
      leftColumnChildren={
        <div className={styles.leftColumnWrapper}>
          <Table />
          <CategoriesTable />
        </div>
      }
      rightColumnChildren={<CommonInformation />}
    />
  );
};

export default PocketsPage;
