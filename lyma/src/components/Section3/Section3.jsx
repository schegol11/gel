import classes from "./Section3.module.scss";
import products from "../../assets/products.png";

export default function Section3() {
  return (
    <section className={classes.section3}>
      <img src={products} alt="" className={classes.bg} />
      <h2>THE QUEST FOR BETTER.</h2>
      <p>
        At LYMA, we're always searching for the perfect balance of science, <br />
        nature and technology. Every LYMA product has been designed to <br />
        work together. We know that when we discover the best, you'll <br />
        discover yours.
      </p>
    </section>
  );
}