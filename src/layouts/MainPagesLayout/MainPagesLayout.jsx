import { Box, Text } from 'src/components';

import styles from './MainPagesLayout.module.scss';

const MainPagesLayout = ({ pageName, leftColumnChildren }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <div className={styles.headerWrapper}>
          <Box mb={32}>
            <Text as="h1" color="white">
              {pageName}
            </Text>
          </Box>
          <Box>
            <Text weight={700} size="xxl" color="white">
              300000
            </Text>
            <Text size="xs" color="whiteOpacity">
              На счету
            </Text>
          </Box>
        </div>
        {leftColumnChildren}
      </div>
    </div>
  );
};

export default MainPagesLayout;
