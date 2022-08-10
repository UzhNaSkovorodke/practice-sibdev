import { useState, useEffect } from 'react';

import { Text } from 'src/components';

import CategoriesTableHeaderButtons from '../CategoriesTableHeaderButtons';

import styles from './CategoriesTableHeader.module.scss';
import monthList from './monthHelper';

const CategoriesTableHeader = () => {
  const date = new Date();
  const [currrentYear, setCurrrentYear] = useState(date.getFullYear());
  const [currrentMonth, setCurrrentMonth] = useState(date.getMonth());

  return (
    <div className={styles.wrapper}>
      <Text size="l" color="white" weight={700}>
        Статистика
      </Text>
      <div className={styles.operateButtonsWrapper}>
        <CategoriesTableHeaderButtons date={monthList[currrentMonth]} />
        <CategoriesTableHeaderButtons date={String(currrentYear)} />
      </div>
    </div>
  );
};

export default CategoriesTableHeader;
