import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal, Text, Button, Box, TableAmountInput, TableDateInput, TableSelectInput } from 'src/components';
import { addNewTransaction, updateTransaction } from 'src/store/slices/transactionsSlice';

import styles from './AddNewOrUpdateTransactionModal.module.scss';

const AddNewOrUpdateTransactionModal = ({ transaction, isOpened, handleClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  const [transactionType, setTransactionType] = useState(transaction?.category ? 'expense' : 'income');
  const [date, setDate] = useState(transaction?.transaction_date || '');
  const [amount, setAmount] = useState(transaction?.amount || '');
  const [category, setCategory] = useState(transaction?.category?.id || '');

  const [isDateError, setIsDateError] = useState(false);
  const [isCategoryError, setIsCategoryError] = useState(false);
  const [isAmountError, setIsAmountError] = useState(false);

  const resetForm = () => {
    setDate('');
    setAmount('');
    setCategory('');
    setIsDateError(false);
    setIsAmountError(false);
    setIsCategoryError(false);
  };

  const changeTransactionType = (type) => {
    setTransactionType(type);
    if (!transaction) resetForm();
  };

  const onCloseModal = () => {
    handleClose();
    if (!transaction) resetForm();
  };

  const changeToIncome = () => changeTransactionType('income');
  const changeToExpense = () => changeTransactionType('expense');

  const handleDateChange = (value) => {
    setIsDateError(false);
    setDate(value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setIsAmountError(false);
  };

  const handleCategoryChange = (event) => {
    try {
      const rawCategory = event.target.value;
      if (Number.isNaN(rawCategory)) throw new Error('category is NaN');
      setCategory(rawCategory);
      setIsCategoryError(false);
    } catch {
      setIsCategoryError(true);
    }
  };

  const validateForm = () => {
    let isError = false;

    if (!date) {
      setIsDateError(true);
      isError = true;
    }
    if (!amount || Number(amount) === 0) {
      setIsAmountError(true);
      isError = true;
    }
    if ((category === -1 || !category) && transactionType === 'expense') {
      setIsCategoryError(true);
      isError = true;
    }
    return isError;
  };

  const handleCreateTransaction = () => {
    if (validateForm()) return;

    if (transaction) {
      dispatch(
        transactionType === 'expense'
          ? updateTransaction({
              data: {
                category,
                transaction_date: date,
                amount: Number(amount),
                transaction_type: 'expense',
              },
              transactionId: transaction.id,
              callback: handleClose,
            })
          : updateTransaction({
              data: {
                category,
                transaction_date: date,
                amount: Number(amount),
                transaction_type: 'income',
              },
              transactionId: transaction.id,
              callback: handleClose,
            })
      );
      return;
    }

    dispatch(
      addNewTransaction({
        data: {
          category,
          transaction_date: date,
          amount,
          transaction_type: transactionType,
        },
        callback: onCloseModal,
      })
    );
  };

  return (
    <Modal isOpened={isOpened} title="Добавить операцию" handleClose={onCloseModal}>
      <div className={styles.buttonsWrapper}>
        <Button variant="chip" bgColor={transactionType === 'income' ? 'brand' : 'dark'} onClick={changeToIncome}>
          <Box pt={5} pr={5} pb={5} pl={5}>
            <Text color={transactionType === 'income' ? 'contrast' : 'neon'}>Доход +</Text>
          </Box>
        </Button>{' '}
        <Box mr={0}>
          <Button
            variant="chipRevert"
            bgColor={transactionType === 'expense' ? 'brand' : 'dark'}
            onClick={changeToExpense}
          >
            <Box pt={5} pr={5} pb={5} pl={5}>
              <Text color={transactionType === 'expense' ? 'contrast' : 'neon'}>Расход -</Text>
            </Box>
          </Button>
        </Box>
      </div>
      <div className={styles.inputsContainer}>
        <TableDateInput isError={isDateError} max={new Date()} value={date} onChange={handleDateChange} />
        {transactionType === 'expense' && (
          <TableSelectInput
            placeholder="Категория"
            selectOptions={categories}
            emptyListText="Нет категорий"
            isError={isCategoryError}
            value={category}
            onChange={handleCategoryChange}
          />
        )}
        <TableAmountInput
          radius="chipRevert"
          isError={isAmountError}
          value={Math.round(amount)}
          placeholder="Сумма"
          onChange={handleAmountChange}
        />
      </div>
      <Box mb={48}>
        <Button radius={1000} height={53} variant="brand" onClick={handleCreateTransaction}>
          <Text weight={700} size="xl" color="contrast">
            Добавить
          </Text>
        </Button>
      </Box>
    </Modal>
  );
};

export default AddNewOrUpdateTransactionModal;
