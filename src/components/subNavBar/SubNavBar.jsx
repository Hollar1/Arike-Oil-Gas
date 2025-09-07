import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../subNavBar/subNavBar.module.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SubNavBar({ children }) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    }
  };
  return (
    <div className={styles.parent_wrapper}>
      
      <nav>
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleGoBack} />
        <h3>{children}</h3>
        <div></div>
      </nav>
    </div>
  );
}

export default SubNavBar;
