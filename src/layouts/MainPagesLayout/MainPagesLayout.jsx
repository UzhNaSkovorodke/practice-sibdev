import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Text } from 'src/components';
import { getTotalAmounts } from 'src/store/slices/transactionsSlice';

import styles from './MainPagesLayout.module.scss';

const MainPagesLayout = ({ pageName, leftColumnChildren }) => {
  const dispatch = useDispatch();

  const totalExpenses = useSelector((state) => state.transactions.totalExpenses);
  const totalIncome = useSelector((state) => state.transactions.totalIncome);

  useEffect(() => {
    dispatch(getTotalAmounts());
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <div className={styles.headerWrapper}>
          <Box mb={32}>
            <Text as="h1" color="white">
              {pageName}
            </Text>
          </Box>
          <Box>
            <Text weight={700} size="xxl" color="white">
              {String(Number(totalIncome) - Number(totalExpenses))}
            </Text>
            <Text size="xs" color="whiteOpacity">
              На счету
            </Text>
          </Box>
        </div>
        {leftColumnChildren}
      </div>
    </div>
  );
};

export default MainPagesLayout;
