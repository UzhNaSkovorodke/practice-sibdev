import { Text } from 'src/components';

const columns = [
  {
    Header: (
      <Text color="primary" weight={400} size="s" align="center">
        Дата
      </Text>
    ),
    accessor: 'date',
  },
  {
    Header: (
      <Text color="primary" weight={400} size="s" align="center">
        Категория
      </Text>
    ),
    accessor: 'category',
  },
  {
    Header: (
      <Text color="primary" weight={400} size="s" align="center">
        Сумма
      </Text>
    ),
    accessor: 'amount',
  },
];

export default columns;
