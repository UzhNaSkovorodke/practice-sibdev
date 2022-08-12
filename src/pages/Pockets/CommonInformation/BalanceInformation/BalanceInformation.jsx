import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Text } from 'src/components';
import { balanceRequest } from 'src/store/slices/balanceSlice';

export const BalanceInformation = () => {
  const dispatch = useDispatch();
  const countNumb = useSelector((state) => state.balance.balance);

  useEffect(() => {
    dispatch(balanceRequest());
  }, [dispatch]);

  return (
    <div>
      <Text weight={700} size="xxl" color="white">
        {String(Math.round(Number(countNumb)))}
      </Text>
      <Text size="xs" color="whiteOpacity">
        На счету
      </Text>
    </div>
  );
};
