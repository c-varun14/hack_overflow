import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={`${styles.navbar} flex`}>
      <img className={styles.logo} />
      <div className={styles.links}>
        <span>About</span>
        <span>Programs</span>
        <span>Departments</span>
        <span>Admissions</span>
      </div>
    </section>
  );
};

export default Navbar;
