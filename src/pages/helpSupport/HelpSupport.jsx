import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../helpSupport/helpSupport.module.scss";

function HelpSupport() {
  return (
    <div className={styles.parent_wrapper}>
      <header>
        <SubNavBar />
      </header>
      <div className={styles.wrapper}></div>
    </div>
  );
}

export default HelpSupport;
