import { ExportIcon, ImportIcon } from 'src/assets/icons';
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

        <div style={{ display: 'flex' }}>
          <Box ml={89}>
            <TableImportExport icon={<ImportIcon />} textValue="Импорт" />
          </Box>
          <Box ml={7}>
            <TableImportExport icon={<ExportIcon />} textValue="Экспорт" />
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default TableTitle;
