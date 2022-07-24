import { useRef, useEffect } from 'react';

import { CrossInBoxIcon } from 'src/assets/icons';
import { Box, Button, Text } from 'src/components';

import styles from './ModalLayout.module.scss';

/** Принимает функцию закрытия модального окна, объект со свойствами модального окна и дочерний элемент */
const ModalLayout = ({ title, handleClose, children }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const { current } = contentRef;
    if (!current) return;

    const clickHandler = (event) => {
      if (current.contains(event.target)) return;
      handleClose();
    };

    document.addEventListener('pointerdown', clickHandler);
    return () => document.removeEventListener('pointerdown', clickHandler);
  }, [handleClose]);

  return (
    <div className={styles.wrapper}>
      <div ref={contentRef} className={styles.layout}>
        <div className={styles.closeButton}>
          <Box mt={12} mr={20}>
            <Button variant="ghost" onClick={handleClose}>
              <CrossInBoxIcon />
            </Button>
          </Box>
        </div>
        {!!title && (
          <Box pt={48} pb={32}>
            <Text as="h2" size="xxl" color="white" align="center">
              {title}
            </Text>
          </Box>
        )}
        <div className={styles.childrenWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
