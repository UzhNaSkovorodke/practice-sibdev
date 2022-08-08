import { ExportIcon, ImportIcon } from 'src/assets/icons';
import { Box, Text, Button } from 'src/components';

import styles from './TableTitle.module.scss';

const TableTitle = () => {
  return (
    <Box mt={24} mb={21} ml={19}>
      <div className={styles.TableTitleWrapper}>
        <Text size="l" weight={700} color="white">
          Операции
        </Text>
        <Box ml={89}>
          <Button variant="operate" radius={1000}>
            <Box mr={8} mt={2} ml={6}>
              <ImportIcon />
            </Box>
            <Text weight={400} size="s" color="neon">
              Импорт
            </Text>
          </Button>
        </Box>
        <Box ml={7}>
          <Button variant="operate" radius={1000}>
            <Box mr={8} mt={2} ml={6}>
              <ExportIcon />
            </Box>
            <Text weight={400} size="s" color="neon">
              Экспорт
            </Text>
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default TableTitle;
