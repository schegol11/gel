import classes from "./Section5.module.scss";
import founder from "../../assets/founder.png";

export default function Section5() {
  return (
    <section className={classes.section5}>
      <img src={founder} alt="Founder" className={classes.bg} />
      
      <div className={classes.text}>
        <h2>Meet our founder.</h2>
        <p>
          Lucy's story is one you really need to read; it<br />
          changed an industry forever.
        </p>
        <a href="#">READ MORE</a>
      </div>
    </section>
  );
}