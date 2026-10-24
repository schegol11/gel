import classes from "./Section1.module.scss";
import bg from "../../assets/bg.png";

export default function Section1() {
  return (
    <section className={classes.section1}>
      <img src={bg} alt="" className={classes.bg} />

      <div className={classes.content}>
        <h1>THE FUTURE OF WELLNESS.</h1>
        <p>
          The perfect balance of science, nature and technology.<br />
          Prepare to look and feel your absolute best.
        </p>
        <div className={classes.buttons}>
          <button className={classes.btn}>SUPPLEMENT</button>
          <button className={classes.btn}>LASER</button>
        </div>
      </div>
    </section>
  );
}