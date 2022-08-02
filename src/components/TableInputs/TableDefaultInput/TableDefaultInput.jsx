import { VectorIcon } from 'src/assets/icons';
import { defaultInputStyles } from 'src/components/DefaultInput/DefaultInput';
import { classnames } from 'src/utils';

import styles from './TableDefaultInput.module.scss';

export { styles as defaultTableInputStyles };

const TableDefaultInput = ({
  type = 'text',
  textAlign = 'center',
  isError,
  value,
  placeholder,
  maxLength,
  extraClasses,
  onChange,
  radius,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <VectorIcon className={styles.inputIcon} />
      <input
        type={type}
        value={value}
        maxLength={maxLength}
        className={classnames([
          styles.input,
          extraClasses,
          [defaultInputStyles.input__error, isError],
          styles[`input__align-${textAlign}`],
          styles[`input-border__${radius}`],
        ])}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TableDefaultInput;
