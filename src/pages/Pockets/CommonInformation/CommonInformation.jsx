import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text, Box } from 'src/components';
import { getTotalAmounts } from 'src/store/slices/transactionsSlice';
import { getUserInfo } from 'src/store/slices/userActions';

import styles from './CommonInformation.module.scss';
import TransactionsSection from './TransactionsSection';

const CommonInformation = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    dispatch(getTotalAmounts());
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Box pb={60}>
        {!!username && (
          <Text size="xxl" weight={700}>
            {`Привет, ${username}!`}
          </Text>
        )}
      </Box>
      <TransactionsSection />
    </div>
  );
};

export default CommonInformation;
