import { Box, Text } from 'src/components';

import { TableImportExport } from '../TableImportExport/TableImportExport';

import styles from './TableTitle.module.scss';

const TableTitle = () => {
  return (
    <Box mt={24} mb={21} ml={19}>
      <div className={styles.TableTitleWrapper}>
        <Text size="l" weight={700} color="white">
          Операции
        </Text>
        <TableImportExport />
      </div>
    </Box>
  );
};

export default TableTitle;
