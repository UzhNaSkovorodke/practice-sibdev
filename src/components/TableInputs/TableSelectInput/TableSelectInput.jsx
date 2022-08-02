import { useState } from 'react';

import { ArrowIcon } from 'src/assets/icons';

import styles from './TableSelectInput.module.scss';

const TableSelectInput = ({ value, isError, emptyListText, placeholder, selectOptions, onChange }) => {
  const [isShow, setisShow] = useState(false);
  const [chosenOption, setchosenOption] = useState();

  const toggleIsOpen = () => {
    setisShow(!isShow);
  };
  return (
    <div className={styles.inputWrapper}>
      <ArrowIcon className={styles.input__icon} />
      <button
        value={chosenOption}
        disabled={!selectOptions.length}
        id="myButton"
        className={styles.myButton}
        onClick={toggleIsOpen}
      >
        {chosenOption || placeholder}
      </button>
      {isShow && (
        <ul id="optionWrapper" className={styles.optionWrapper}>
          {selectOptions.map((item) => {
            const onItemClick = (event) => {
              onChange(event);
              setchosenOption(item.name);
              setisShow(!isShow);
            };
            return (
              <li key={item.id} value={item.id} className={styles.choosedOption} onClick={onItemClick}>
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TableSelectInput;
