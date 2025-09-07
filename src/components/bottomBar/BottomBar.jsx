import { useLocation, useNavigate } from "react-router-dom";
import styles from "../bottomBar/bottomBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { faHouse, faUser } from "@fortawesome/free-regular-svg-icons";

function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the current pathname, e.g., "/profile"
  const currentPath = location.pathname;

  // Function to check if a given route is active
  const isActive = (path) => currentPath === path;

  return (
    <div className={styles.parent_wrapper}>
      <nav>
        <label
          style={{ color: isActive("/") ? "#137fec" : null }}
          onClick={() => navigate("/")}
        >
          <FontAwesomeIcon
            icon={faHouse}
            fontSize={19}
            color={isActive("/") ? "#137fec" : null}
          />
          Home
        </label>

        <label
          style={{ color: isActive("/order") ? "#137fec" : null }}
          onClick={() => navigate("/order")}
        >
          <FontAwesomeIcon
            icon={faGasPump}
            fontSize={19}
            color={isActive("/order") ? "#137fec" : null}
          />
          Order
        </label>

        <label
          style={{ color: isActive("/cylinder") ? "#137fec" : null }}
          onClick={() => navigate("/cylinder")}
        >
          <FontAwesomeIcon
            icon={faRightLeft}
            fontSize={19}
            color={isActive("/cylinder") ? "#137fec" : null}
          />
          Cylinder
        </label>

        <label
          style={{ color: isActive("/profile") ? "#137fec" : null }}
          onClick={() => navigate("/profile")}
        >
          <FontAwesomeIcon
            icon={faUser}
            fontSize={19}
            color={isActive("/profile") ? "#137fec" : null}
          />
          Profile
        </label>
      </nav>
    </div>
  );
}

export default BottomBar;
