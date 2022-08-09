import { useState, useEffect } from 'react';

import { Text } from 'src/components';

import CategoriesTableHeaderButtons from '../CategoriesTableHeaderButtons';

import styles from './CategoriesTableHeader.module.scss';
import monthList from './monthHelper';

const CategoriesTableHeader = () => {
  const [currrentYear, setCurrrentYear] = useState(0);
  const [currrentMonth, setCurrrentMonth] = useState(0);

  const dateDefine = () => {
    setCurrrentYear(new Date().getFullYear());
    setCurrrentMonth(new Date().getMonth());
  };

  useEffect(() => {
    dateDefine();
  });
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
