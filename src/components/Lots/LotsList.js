import styles from './LotsList.module.css';
import Lot from './Lot';

const SPACE_LOTS = [
  {
    id: 'l1',
    name: 'Lot on the Moon',
    desc: "Your backyard! The moon is safe and close to everything you need!",
    price: 18.9,
  },
  {
    id: 'l2',
    name: 'Lot on Mars',
    desc: "Mars is super popular these years! Don't You want to be super popular too?",
    price: 22.9,
  },
  {
    id: 'l3',
    name: 'Lot on Venus',
    desc: 'The ideal place to get a nice tan. Definitely bring your sunglasses.',
    price: 16.5,
  },
  {
    id: 'l4',
    name: 'Lot on Jupiter',
    desc: 'Highly recommended for those looking for some peace and quiet. If you can manage getting there. And colonizing it.',
    price: 28.7,
  },
];

const LotsList = () => {
  const lotsList = SPACE_LOTS.map((lot) => (
    <Lot
      key={lot.id}
      id={lot.id}
      name={lot.name}
      desc={lot.desc}
      price={lot.price}
    />
  ));

  return (
    <section>
      <ul className={styles.lots}>{lotsList}</ul>
    </section>
  );
};

export default LotsList;
