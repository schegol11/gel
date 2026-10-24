import classes from "./Section4.module.scss";
import bg from "../../assets/laser-bg.png";

export default function Section4() {
  return (
    <section className={classes.section4}>
      <img src={bg} alt="" className={classes.bg} />
      <div className={classes.content}>
        <h2>WELLNESS INNOVATION AT ITS<br />SCIENTIFIC BEST.</h2>
        <div className={classes.buttons}>
          <button className={classes.btn}>SUPPLEMENT</button>
          <button className={classes.btn}>LASER</button>
        </div>
      </div>
    </section>
  );
}