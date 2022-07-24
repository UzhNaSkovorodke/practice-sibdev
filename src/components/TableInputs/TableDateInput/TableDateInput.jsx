import { useState } from 'react';
import ReactCalendar from 'react-calendar';
import './TableDateInputCalendar.css';

import { CalenderIcon, VectorIcon } from 'src/assets/icons';
import { Text, Popover } from 'src/components';
import { defaultInputStyles } from 'src/components/DefaultInput/DefaultInput';
import { classnames } from 'src/utils';

import TableDateInputDeterminate from '../TableDateDeterminate/TableDateInputDeterminate';
import { defaultTableInputStyles } from '../TableDefaultInput/TableDefaultInput';

import styles from './TableDateInput.module.scss';

const TableDateInput = ({ isError, min, max, value, onChange }) => {
  const [isOpened, setIsOpened] = useState(false);

  const dateAraay = value?.split('-').reverse();
  Number(dateAraay[0]) > 9
    ? (dateAraay[0] = String(dateAraay[0].split(''))[0] + String(dateAraay[0].split(''))[2])
    : (dateAraay[0] = String(dateAraay[0].split(''))[2]);
  dateAraay[1] = TableDateInputDeterminate(dateAraay[1]);
  let date = dateAraay.join(' ');
  if (date === ' ') date = '';

  const toggleOpen = () => setIsOpened(!isOpened);
  const handleClose = () => setIsOpened(false);

  const handleOnChangeDate = (date) => {
    onChange(date.toLocaleDateString().split('.').reverse().join('-'));
    setIsOpened(false);
  };

  return (
    <Popover
      isOpened={isOpened}
      handleClose={handleClose}
      content={
        <ReactCalendar
          locale="ru-RU"
          value={value ? new Date(value) : new Date()}
          minDate={new Date(min)}
          maxDate={new Date(max)}
          onChange={handleOnChangeDate}
        />
      }
    >
      <button
        className={classnames([
          defaultTableInputStyles.input,
          styles.button,
          [defaultInputStyles.input__error, isError],
        ])}
        onClick={toggleOpen}
      >
        <div className={styles.textPosition}>
          <CalenderIcon />
          <Text color={value ? 'white' : 'default'} size="m">
            {date || 'Дата'}
          </Text>
          <VectorIcon className={styles.inputIcon} />
        </div>
      </button>
    </Popover>
  );
};

export default TableDateInput;
