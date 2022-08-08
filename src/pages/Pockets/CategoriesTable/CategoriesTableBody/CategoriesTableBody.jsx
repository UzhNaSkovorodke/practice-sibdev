import { useSelector } from 'react-redux';

import { Text, Box } from 'src/components';
import { classnames } from 'src/utils';

import styles from './CategoriesTableBody.module.scss';

const CategoriesTableBody = () => {
  const categories = useSelector((state) => state.categories.list);

  return (
    <>
      <div className={styles.headerWrapper}>
        <Text size="xs" weight={400}>
          Расходы по категориям
        </Text>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.categoryHeaderItem}>
          <div className={styles.categoryItemColumn}>
            <Box ml={11}>
              <Text size="s" color="whiteOpacity" weight={400}>
                Категория
              </Text>
            </Box>
          </div>
          <div className={classnames([styles.rightColumnItem, styles.categoryItemColumn])}>
            <div className={styles.categoryHeaderSumColumn}>
              <Box mr={16}>
                <Text size="s" color="whiteOpacity" align="right" weight={400}>
                  Сумма
                </Text>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        {categories.map((item) => {
          return (
            <div key={item.id} className={styles.categoryItem}>
              <div className={styles.categoryItemColumn}>
                <Box ml={11}>
                  <Text size="s" color="white" weight={400}>
                    {item.name}
                  </Text>
                </Box>
              </div>
              <div className={classnames([styles.rightColumnItem, styles.categoryItemColumn])}>
                <div className={styles.categorySumColumn}>
                  <Box mr={16}>
                    <Text size="s" color="white" align="right" weight={400}>
                      {String(Math.round(Number(item.transactions_sum)))}
                    </Text>
                  </Box>
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
