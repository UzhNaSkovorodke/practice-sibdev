import { useSelector } from 'react-redux';

import { Text } from 'src/components';

import AddCategoryButton from './AddCategoryButton';
import styles from './CategoriesTableHeader.module.scss';

const CategoriesTableHeader = () => {
  const categories = useSelector((state) => state.categories.list);

  return (
    <div className={styles.wrapper}>
      <Text as="h3" color="default">
        Категории
      </Text>
      {!!categories.length && <AddCategoryButton />}
    </div>
  );
};

export default CategoriesTableHeader;
