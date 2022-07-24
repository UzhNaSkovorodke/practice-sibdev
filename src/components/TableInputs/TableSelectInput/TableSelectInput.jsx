import { ArrowIcon } from 'src/assets/icons';
import { defaultInputStyles } from 'src/components/DefaultInput/DefaultInput';
import { classnames } from 'src/utils';

import { defaultTableInputStyles } from '../TableDefaultInput/TableDefaultInput';

import styles from './TableSelectInput.module.scss';

const TableSelectInput = ({ value, isError, emptyListText, placeholder, selectOptions, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <ArrowIcon className={styles.input__icon} />
      <select
        value={value}
        disabled={!selectOptions.length}
        className={classnames([
          defaultTableInputStyles.input,
          styles.selector,
          [defaultInputStyles.input__error, isError],
          [styles.defaultOption, !value],
        ])}
        onChange={onChange}
      >
        {selectOptions.length > 0 ? (
          <>
            <option value="" className={styles.choosedOption}>
              {placeholder}
            </option>
            {selectOptions.map((item) => (
              <option key={item.id} value={item.id} className={styles.choosedOption}>
                {item.name}
              </option>
            ))}
          </>
        ) : (
          <option className={styles.defaultOption}>{emptyListText}</option>
        )}
      </select>
    </div>
  );
};

export default TableSelectInput;
