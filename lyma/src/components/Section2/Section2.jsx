import classes from "./Section2.module.scss";
import supp from "../../assets/supp.png";
import laser from "../../assets/laser.png";

export default function Section2() {
  return (
    <section className={classes.section2}>
      <div className={classes.card}>
        <img src={supp} alt="Supplement" />
        <div className={classes.content}>
          <h3>Supplement.</h3>
          <p>Nine powerful ingredients.<br />One ultimate formula.</p>
          <div className={classes.links}>
            <a href="#">DISCOVER</a>
            <a href="#">BUY</a>
          </div>
        </div>
      </div>

      <div className={classes.card}>
        <img src={laser} alt="Laser" />
        <div className={classes.content}>
          <h3>Laser.</h3>
          <p>Ultimate skin regeneration.<br />A new dawn for beauty.</p>
          <div className={classes.links}>
            <a href="#">DISCOVER</a>
            <a href="#">BUY</a>
          </div>
        </div>
      </div>
    </section>
  );
}