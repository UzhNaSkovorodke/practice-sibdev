import { Button, Box, Text } from 'src/components';

export const TableImportExport = (param) => {
  return (
    <Button variant="operate" radius={1000}>
      <Box mr={8} mt={2} ml={6}>
        {param.icon}
      </Box>
      <Text weight={400} size="s" color="neon">
        {param.textValue}
      </Text>
    </Button>
  );
};
