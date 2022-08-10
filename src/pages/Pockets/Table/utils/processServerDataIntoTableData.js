import { Text, Box } from 'src/components';

import TableItemButtons from '../TableItemButtons';

const processServerDataIntoTableData = (serverData) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return serverData.map((item) => {
    const isIncome = item.category?.category_type === 'income';
    let dateItem = new Date(item.transaction_date).toLocaleString('ru', options).slice(0, -3).split(' ');
    dateItem[1] = dateItem[1].substring(0, 3);
    dateItem = dateItem.join(' ');

    return {
      date: (
        <Text weight={400} color={isIncome ? 'success' : 'white'}>
          {dateItem}
        </Text>
      ),
      category: (
        <Text align="center" color={isIncome ? 'success' : 'white'}>
          {item.category?.name || 'Доход'}
        </Text>
      ),
      amount: (
        <div style={{ display: 'flex' }}>
          <Text weight={400} color={isIncome ? 'success' : 'white'}>
            {String(Math.round(Number(item.amount)))}
          </Text>
          <Box ml={30}>
            <TableItemButtons key={item.id} item={item} />
          </Box>
        </div>
      ),
    };
  });
};

export default processServerDataIntoTableData;
