import classes from "./Section6.module.scss";
import vogue from "../../assets/vogue.png";
import forbes from "../../assets/forbes.png";
import telegraph from "../../assets/telegraph.png";
import ft from "../../assets/ft.png";
import dailymail from "../../assets/dailymail.png";

export default function Section6() {
  return (
    <section className={classes.section6}>
      <div className={`${classes.item} ${classes.cut}`}>
        <p>"Miracle pills. The days of<br />taking a cocktail of hit and<br />miss vitamins are over."</p>
        <img src={vogue} alt="Vogue" />
      </div>

      <div className={classes.item}>
        <p>"Your one stop solution to<br />feeling energised and focused."</p>
        <img src={forbes} alt="Forbes" />
      </div>

      <div className={classes.item}>
        <p>"A revelation. Not just<br />about looking better and<br />feeling better. LYMA is<br />about real health benefits."</p>
        <img src={telegraph} alt="The Daily Telegraph" />
      </div>

      <div className={classes.item}>
        <p>"Experts are queuing up to<br />praise LYMA."</p>
        <img src={ft} alt="Financial Times" />
      </div>

      <div className={`${classes.item} ${classes.cut}`}>
        <p>"The A-list secret<br />health hack."</p>
        <img src={dailymail} alt="Daily Mail" />
      </div>
    </section>
  );
}