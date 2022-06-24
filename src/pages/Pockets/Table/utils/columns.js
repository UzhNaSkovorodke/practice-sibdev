import { Text } from 'src/components';

import TableHeaderAddTransactionButton from '../TableHeaderAddTransactionButton';

const columns = [
  {
    Header: (
      <Text color="primary" weight={600} size="xs" align="center">
        ДАТА
      </Text>
    ),
    accessor: 'date',
  },
  {
    Header: (
      <Text color="primary" weight={600} size="xs" align="center">
        КАТЕГОРИЯ
      </Text>
    ),
    accessor: 'category',
  },
  {
    Header: (
      <Text color="primary" weight={600} size="xs" align="center">
        СУММА
      </Text>
    ),
    accessor: 'amount',
  },
  {
    Header: <TableHeaderAddTransactionButton />,
    accessor: 'buttons',
  },
];

export default columns;
