import { useSelector } from 'react-redux';

import { Box, Text } from 'src/components';
import { classnames } from 'src/utils';

import styles from './TransactionsSection.module.scss';

const TransactionsSection = () => {
  const totalExpenses = useSelector((state) => state.transactions.totalExpenses);
  const totalIncome = useSelector((state) => state.transactions.totalIncome);
  let currentDate = new Date()
    .toLocaleDateString('ru-RU', {
      month: 'long',
      year: 'numeric',
    })
    .split(' ')
    .slice(0, 2)
    .join(' ');

  currentDate = currentDate[0].toUpperCase() + currentDate.slice(1);

  return (
    <div className={styles.wrapper}>
      <Box mb={24}>
        <Text size="xxl" align="center" weight={700}>
          {currentDate}
        </Text>
      </Box>
      <div className={classnames([styles.tableItem, styles.tableItem__active])}>
        <Text size="l">Доход</Text>
        <Text size="l" weight={700}>
          {!!Number(totalIncome) ? totalIncome : '⸻'}
        </Text>
      </div>
      <div className={classnames([styles.tableItem])}>
        <Text size="l">Расход</Text>
        <Text size="l" weight={700} color="brand">
          {!!Number(totalExpenses) ? totalExpenses : '⸻'}
        </Text>
      </div>
      <div className={styles.coolFieldWrapper}>
        <Text size="l" align="center">
          Приколдесное поле
        </Text>
      </div>
    </div>
  );
};

export default TransactionsSection;
