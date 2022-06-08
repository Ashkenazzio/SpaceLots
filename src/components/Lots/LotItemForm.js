import { useRef, useState } from 'react';
import Input from '../UI/Input';
import styles from './LotItemForm.module.css';

const LotItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 9
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount:'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '0',
          max: '9',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className={styles.btn}>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-9)</p>}
    </form>
  );
};

export default LotItemForm;
