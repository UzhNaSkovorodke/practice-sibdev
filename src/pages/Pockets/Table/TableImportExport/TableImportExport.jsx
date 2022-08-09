import { ExportIcon, ImportIcon } from 'src/assets/icons';
import { Button, Box, Text } from 'src/components';

export const TableImportExport = () => {
  return (
    <div style={{ display: 'flex' }}>
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
  );
};
