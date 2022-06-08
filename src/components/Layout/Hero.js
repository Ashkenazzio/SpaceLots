import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h2>Can't find an appartment in Tel Aviv?</h2>
        <p>
          Do you ever get the feeling that planet Earth is just too much? we
          know. <br/>Why not expanding your horizons? Purchase an extraterrestrial plot
          of land today, and secure your new home for tomorrow! What do you say? It won't cost you a LOT!
        </p>
      </div>
    </section>
  );
};

export default Hero;
