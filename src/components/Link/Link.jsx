import { Link as RouterLink } from 'react-router-dom';

import { Text } from 'src/components';

import styles from './Link.module.scss';

const Link = ({ to, target, textSize, children }) => (
  <RouterLink className={styles.link} target={target} to={to}>
    <Text size={textSize} color="brand">
      {children}
    </Text>
  </RouterLink>
);

export default Link;
