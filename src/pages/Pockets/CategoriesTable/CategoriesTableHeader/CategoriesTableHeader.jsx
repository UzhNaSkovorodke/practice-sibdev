import { LeftArrowIcon, RightArrowIcon } from 'src/assets/icons';
import { Text, Button, Box } from 'src/components';

import styles from './CategoriesTableHeader.module.scss';

const CategoriesTableHeader = () => {
  let currentMonth = new Date()
    .toLocaleDateString('ru-RU', {
      month: 'long',
    })
    .split(' ')
    .join(' ');
  let currentYear = new Date()
    .toLocaleDateString('ru-RU', {
      year: 'numeric',
    })
    .split(' ')
    .join(' ');
  return (
    <div className={styles.wrapper}>
      <Text size="l" color="white" weight={700}>
        Статистика
      </Text>
      <div className={styles.operateButtonsWrapper}>
        <Button variant="operate" radius={1000}>
          <Box mr={13}>
            <LeftArrowIcon />
          </Box>
          <Text color="white" weight={600} size="s">
            {currentMonth[0].toUpperCase() + currentMonth.slice(1)}
          </Text>
          <Box ml={13}>
            <RightArrowIcon />
          </Box>
        </Button>
        <Button variant="operate" radius={1000}>
          <Box mr={13}>
            <LeftArrowIcon />
          </Box>
          <Text color="white" weight={600} size="s">
            {currentYear}
          </Text>
          <Box ml={13}>
            <RightArrowIcon />
          </Box>
        </Button>
      </div>
    </div>
  );
};

export default CategoriesTableHeader;
