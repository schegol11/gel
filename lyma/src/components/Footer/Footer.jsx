import classes from "./Footer.module.scss";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.top}>
        <div className={classes.col}>
          <h4>SUPPLEMENT</h4>
          <a href="#">Benefits</a>
          <a href="#">Formula</a>
          <a href="#">Immunity</a>
          <a href="#">Journal</a>
          <a href="#">Reviews</a>
          <a href="#">Buy</a>
        </div>
        {/* ... остальные колонки точно так же меняют классы на classes.col ... */}
        <div className={classes.col}>
          <h4>LYMA LASER</h4>
          <a href="#">LYMA Laser</a>
          <a href="#">Active Mist</a>
          <a href="#">Priming Serum</a>
          <a href="#">Technology</a>
          <a href="#">Results</a>
          <a href="#">Journal</a>
          <a href="#">Reviews</a>
          <a href="#">Buy</a>
        </div>
        <div className={classes.col}>
          <h4>ABOUT</h4>
          <a href="#">About</a>
          <a href="#">Journal</a>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Warranty</a>
        </div>
        <div className={classes.col}>
          <h4>ACCOUNT</h4>
          <a href="#">Activate</a>
          <a href="#">My subscription</a>
          <a href="#">Add extras</a>
          <a href="#">My orders</a>
          <a href="#">Account details</a>
          <a href="#">Payment method</a>
          <a href="#">Login details</a>
        </div>

        <div className={`${classes.col} ${classes.newsletter}`}>
          <h4>NEWSLETTER</h4>
          <p>Subscribe to our newsletter.</p>
          <div className={classes.form}>
            <input type="text" placeholder="LYMA Newsletter" />
            <button>SIGN UP</button>
          </div>
        </div>
      </div>

      <div className={classes.bottom}>
        <div className={classes.socials}>
          <img src={youtube} alt="YT" />
          <img src={linkedin} alt="IN" />
          <img src={facebook} alt="FB" />
          <img src={instagram} alt="IG" />
          <img src={pinterest} alt="PIN" />
        </div>
        <p className={classes.copy}>© LYMA Life Ltd. 2021</p>
      </div>
    </footer>
  );
}