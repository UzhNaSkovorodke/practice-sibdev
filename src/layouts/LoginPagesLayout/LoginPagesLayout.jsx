import { Text, Box, Link } from 'src/components';

import styles from './LoginPagesLayout.module.scss';

const LoginPagesLayout = ({ pageName, title, sublink, children }) => (
  <div className={styles.pageWrapper}>
    <div className={styles.wrapper}>
      <Box mb={16} mt={28}>
        <Text as="h2" align="center" color="white" size="xxl">
          {pageName}
        </Text>
      </Box>
      <Box mb={32}>
        <Text weight="400" size="m" color="whiteOpacity" align="center">
          {title}
        </Text>
      </Box>
      <form className={styles.form}>{children}</form>
      <div className={styles.sublink}>
        <Text size="m">{sublink.title}</Text>
        <Link textSize="m" to={sublink.link}>
          {sublink.text}
        </Link>
      </div>
    </div>
  </div>
);

export default LoginPagesLayout;
