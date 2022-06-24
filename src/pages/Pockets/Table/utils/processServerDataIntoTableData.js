import { Text } from 'src/components';

import TableItemButtons from '../TableItemButtons';

const processServerDataIntoTableData = (serverData) => {
  return serverData.map((item) => {
    const isIncome = item.category.category_type === 'income';

    return {
      date: (
        <Text weight={600} color={isIncome ? 'success' : 'primary'}>
          {item.transaction_date.split('-').reverse().join('.')}
        </Text>
      ),
      category: (
        <Text align="center" color={isIncome ? 'success' : 'primary'}>
          {item.category.name}
        </Text>
      ),
      amount: (
        <Text weight={600} color={isIncome ? 'success' : 'primary'}>
          {item.amount}
        </Text>
      ),
      buttons: <TableItemButtons key={item.id} item={item} />,
    };
  });
};

export default processServerDataIntoTableData;
