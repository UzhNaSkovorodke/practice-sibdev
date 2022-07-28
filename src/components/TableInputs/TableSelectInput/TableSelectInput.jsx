import { ArrowIcon } from 'src/assets/icons';

import styles from './TableSelectInput.module.scss';

const TableSelectInput = ({ value, isError, emptyListText, placeholder, selectOptions, onChange }) => {
  let isOpen = true;
  const buttonOnClick = (e) => {
    const optionWrapper = document.getElementById('optionWrapperId');
    if (isOpen === false) {
      optionWrapper.style.display = 'block';
      isOpen = true;
    } else {
      optionWrapper.style.display = 'none';
      isOpen = false;
    }
  };
  const onChangeCategory = (event) => {
    let param = selectOptions.find((x) => x.id === Number(event.target.id)).name;
    document.getElementById('myButton').innerText = param;

    const optionWrapper = document.getElementById('optionWrapperId');
    optionWrapper.style.display = 'none';
    isOpen = false;

    onChange(Number(event.target.id));
  };

  return (
    <div className={styles.inputWrapper}>
      <ArrowIcon className={styles.input__icon} />
      <button id="myButton" className={styles.myButton} onClick={buttonOnClick}>
        {placeholder}
      </button>
      <div id="optionWrapperId" className={styles.optionWrapper}>
        {selectOptions.length > 0 ? (
          <>
            <button className={styles.choosedOption} onClick={onChange}>
              {placeholder}
            </button>
            {selectOptions.map((item) => (
              <button key={item.id} id={item.id} className={styles.choosedOption} onClick={onChangeCategory}>
                {item.name}
              </button>
            ))}
          </>
        ) : (
          <div className={styles.defaultOption}>{emptyListText}</div>
        )}
      </div>
    </div>
  );
};

export default TableSelectInput;
