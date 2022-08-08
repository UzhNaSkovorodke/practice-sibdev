import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text, Button, Box } from 'src/components';
import { getTotalAmounts } from 'src/store/slices/transactionsSlice';

import styles from './CategoriesTableGeneral.module.scss';

const CategoriesTableGeneral = () => {
  const dispatch = useDispatch();

  const totalExpenses = useSelector((state) => state.transactions.totalExpenses);
  const totalIncome = useSelector((state) => state.transactions.totalIncome);

  useEffect(() => {
    dispatch(getTotalAmounts());
  });
  return (
    <div className={styles.leftColumnCategories}>
      <Box ml={16}>
        <Text size="xs" weight={400} color="whiteOpacity">
          Общее
        </Text>
      </Box>
      <Box mt={16}>
        <Button radius={1000} variant="longOperate">
          <div>
            <Box ml={16}>
              <Text size="s" weight={400} color="whiteOpacity">
                Доход
              </Text>
            </Box>
          </div>
          <div className={styles.leftColumnIconWrapper}>
            <Text size="xxl" color="brand" align="left">
              +
            </Text>
            <Box mr={8}>
              <Text weight={500} size="xl" color="white">
                {String(Math.round(Number(totalIncome)))}
              </Text>
            </Box>
          </div>
        </Button>
      </Box>
      <Box mt={8}>
        <Button radius={1000} variant="longOperate">
          <div>
            <Box ml={16}>
              <Text size="s" weight={400} color="whiteOpacity">
                Расход
              </Text>
            </Box>
          </div>
          <div className={styles.leftColumnIconWrapper}>
            <Box ml={3}>
              <Text size="xxl" color="brand" align="left">
                -
              </Text>
            </Box>
            <Box mr={8}>
              <Text weight={500} size="xl" color="white">
                {String(Math.round(Number(totalExpenses)))}
              </Text>
            </Box>
          </div>
        </Button>
      </Box>
      <Box mt={40}>
        <div className={styles.circleDiagramWrapper}>
          <Text weight={400} size="xs">
            Нет данных
          </Text>
        </div>
      </Box>
    </div>
  );
};
export default CategoriesTableGeneral;
