import { LeftArrowIcon, RightArrowIcon } from 'src/assets/icons';
import { Text, Button, Box } from 'src/components';

const CategoriesTableHeaderButtons = (date) => {
  return (
    <div>
      <Button variant="operate" radius={1000}>
        <Box mr={13}>
          <LeftArrowIcon />
        </Box>
        <Text color="white" weight={600} size="s">
          {date.date}
        </Text>
        <Box ml={13}>
          <RightArrowIcon />
        </Box>
      </Button>
    </div>
  );
};
export default CategoriesTableHeaderButtons;
