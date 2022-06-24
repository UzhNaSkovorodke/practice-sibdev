import { Text, Box, Link } from 'src/components';

import styles from './LoginPagesLayout.module.scss';

const LoginPagesLayout = ({ pageName, title, description, sublink, children }) => (
  <div className={styles.pageWrapper}>
    <div className={styles.wrapper}>
      <Box mb={40}>
        <Text as="h2" align="center">
          {pageName}
        </Text>
      </Box>
      <Box mb={8}>
        <Text as="h4">{title}</Text>
      </Box>
      <Box mb={20}>
        <Text>{description}</Text>
      </Box>
      <form className={styles.form}>{children}</form>
      <div className={styles.sublink}>
        <Text>{sublink.title}</Text>
        <Link to={sublink.link}>{sublink.text}</Link>
      </div>
    </div>
  </div>
);

export default LoginPagesLayout;
