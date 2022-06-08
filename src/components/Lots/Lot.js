import { useContext } from 'react';

import styles from './Lot.module.css';
import LotItemForm from './LotItemForm';
import CartContext from '../../Store/cart-context';

const Lot = (props) => {
  const lotImage = require(`../../assets/${props.id}.jpg`);
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.lot}>
      <img alt={props.name} src={lotImage} />
      <div className={styles['card-content']}>
        <div className={styles.text}>
          <h3 className={styles.title}>{props.name}</h3>
          <p className={styles.desc}>{props.desc}</p>
        </div>
        <span className={styles.price}>{price}</span>
        <LotItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Lot;
