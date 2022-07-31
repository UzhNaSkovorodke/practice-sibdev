import { useState } from 'react';

import { ArrowIcon } from 'src/assets/icons';
// import { defaultInputStyles } from 'src/components/DefaultInput/DefaultInput';
// import { classnames } from 'src/utils';

// import { defaultTableInputStyles } from '../TableDefaultInput/TableDefaultInput';

import styles from './TableSelectInput.module.scss';

const TableSelectInput = ({ value, isError, emptyListText, placeholder, selectOptions, onChange }) => {
  const [isShow, setisShow] = useState(false);
  const [chosenOption, setchosenOption] = useState();

  const toggleIsOpen = () => {
    isShow === true ? setisShow(false) : setisShow(true);
  };
  const changeCategory = (event) => {
    setchosenOption(event.target.textContent);
    setisShow(!isShow);
    onChange(event);
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
          {selectOptions.map((item, index) => (
            <li key={index} value={item.id} onClick={changeCategory} className={styles.choosedOption}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TableSelectInput;
