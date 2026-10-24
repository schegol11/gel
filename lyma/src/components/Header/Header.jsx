import classes from "./Header.module.scss";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.left}>
        <a href="#">SUPPLEMENT</a>
        <a href="#">LASER</a>
        <a href="#">REVIEWS</a>
        <a href="#">JOURNAL</a>
        <a href="#">ABOUT</a>
      </nav>

      <img src={logo} alt="Lyma" className={classes.logo} />

      <div className={classes.right}>
        <a href="#">HELP & SUPPORT</a>
        <a href="#">ACTIVATE</a>
        <a href="#">ACCOUNT</a>
        <button className={classes.buy}>BUY</button>
      </div>
    </header>
  );
}