import { ArrowIcon } from 'src/assets/icons';
import { defaultInputStyles } from 'src/components/DefaultInput/DefaultInput';
import { classnames } from 'src/utils';

import { defaultTableInputStyles } from '../TableDefaultInput/TableDefaultInput';

import styles from './TableSelectInput.module.scss';

const TableSelectInput = ({ value, isError, emptyListText, placeholder, selectOptions, onChange }) => {
  let isOpenoptionWrapper = true;
  const settValue = (text, value) => {
    document.getElementById('myButton').innerText = text;
    document.getElementById('myButton').value = value;
  };

  const setoptionWrapper = () => {
    if (isOpenoptionWrapper === true) {
      document.getElementById('optionWrapper').style.display = 'none';
      isOpenoptionWrapper = false;
    } else {
      document.getElementById('optionWrapper').style.display = 'block';
      isOpenoptionWrapper = true;
    }
  };

  const changeCategory = (event) => {
    onChange(event.target.id);
    settValue(event.target.innerText, event.target.value);
    setoptionWrapper();
  };

  return (
    <div className={styles.inputWrapper}>
      <ArrowIcon className={styles.input__icon} />
      <button id="myButton" value={value} className={styles.myButton} onClick={setoptionWrapper}>
        {placeholder}
      </button>
      <ul id="optionWrapper" className={styles.optionWrapper}>
        {selectOptions.map((item, index) => (
          <li key={index} value={item.id} id={item.id} onClick={changeCategory} className={styles.choosedOption}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableSelectInput;
