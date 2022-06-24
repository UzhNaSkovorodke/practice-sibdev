import { Box, Text } from 'src/components';

import styles from './MainPagesLayout.module.scss';

const MainPagesLayout = ({ pageName, leftColumnChildren, rightColumnChildren }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <Box mb={32}>
          <Text as="h1" color="default">
            {pageName}
          </Text>
        </Box>
        {leftColumnChildren}
      </div>
      <div className={styles.rightColumn}>{rightColumnChildren}</div>
    </div>
  );
};

export default MainPagesLayout;
