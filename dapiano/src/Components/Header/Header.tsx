import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>DaPiano</h1>
      <p>Created with 🎶 and 🥁 by Anjan Bharadwaj</p>
      <p>
        Check out this project on{" "}
        <a href="https://github.com/anjanbharadwaj/DaWebsite">GitHub</a>
      </p>
    </div>
  );
};
export default Header;
