import { Box, Text } from 'src/components';
import { BalanceInformation } from 'src/pages/Pockets/CommonInformation/BalanceInformation/BalanceInformation';

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
            <BalanceInformation />
          </Box>
        </div>
        {leftColumnChildren}
      </div>
    </div>
  );
};

export default MainPagesLayout;
