import styles from "../navBar/navBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import logo from "../../assets/images/Logo_02.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  const navigate = useNavigate();
  const [openBars, setOpenBars] = useState(false);
  const handleOpenBars = () => {
    setOpenBars(!openBars);
  };
  return (
    <div className={styles.parent_wrapper}>
      <nav>
        <div>
          <img src={logo} alt="" />
        </div>

        <div onClick={handleOpenBars}>
          <FontAwesomeIcon
            icon={openBars ? faXmark : faBars}
            fontSize={25}
            color={openBars ? "red" : "#0000CD"}
          />
        </div>
      </nav>
      {openBars && (
        <section className={styles.sec_01}>
          <button
            onClick={() => {
              navigate("/about-us");
            }}
          >
            About Us
          </button>
          <button
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            Contact Us
          </button>
          <button
            onClick={() => {
              navigate("/career");
            }}
          >
            Job Vacancy
          </button>
          {/* <button>Contact Us</button>
          <button>Contact Us</button> */}
        </section>
      )}
    </div>
  );
}

export default NavBar;
