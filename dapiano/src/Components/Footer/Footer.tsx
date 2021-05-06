import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>Created with 🎶 and 🥁 by Anjan Bharadwaj</p>
      <p>
        Check out this project on{" "}
        <a href="https://github.com/anjanbharadwaj/DaWebsite">GitHub</a>
      </p>
    </div>
  );
};
export default Footer;
