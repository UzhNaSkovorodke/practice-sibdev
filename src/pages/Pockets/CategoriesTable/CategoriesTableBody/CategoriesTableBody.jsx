import { useSelector } from 'react-redux';

import { Text } from 'src/components';
import { classnames } from 'src/utils';

import styles from './CategoriesTableBody.module.scss';

const CategoriesTableBody = () => {
  const categories = useSelector((state) => state.categories.list);

  return (
    <>
      <div className={styles.headerWrapper}>
        <Text weight={700}>Расходы</Text>
        <div className={styles.rightColumnItemText}>
          <Text weight={700}>Сумма</Text>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        {categories.map((item) => {
          return (
            <div key={item.id} className={styles.categoryItem}>
              <div className={styles.categoryItemColumn}>
                <Text color="default">{item.name}</Text>
              </div>
              <div className={classnames([styles.rightColumnItem, styles.categoryItemColumn])}>
                <div className={styles.rightColumnItemText}>
                  <Text color="default" align="right">
                    {item.transactions_sum}
                  </Text>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoriesTableBody;
