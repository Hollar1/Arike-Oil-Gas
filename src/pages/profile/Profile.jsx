import styles from "../profile/profile.module.scss";
import male_icon from "../../assets/icons/male_icon.webp";
import female_icon from "../../assets/icons/female_icon.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import BottomBar from "../../components/bottomBar/BottomBar";
import {
  faCircleQuestion,
  faCreditCard,
  faMap,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faChevronCircleRight,
  faChevronRight,
  faClockRotateLeft,
  faGear,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SubNavBar from "../../components/subNavBar/SubNavBar";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className={styles.parent_wrapper}>
      <SubNavBar children={"Profile"} />
      <div className={styles.wrapper}>
      
        <section className={styles.sec_01}>
          <img src={male_icon} alt="" />
          <b>Ayeni Olatunde</b>
          <p>ayenihola@yahoo.com</p>
          <div>
            <FontAwesomeIcon icon={faPen} color="white" fontSize={13} />
          </div>
        </section>

        <section className={styles.sec_02}>
          <h3>Account</h3>

          <article>
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <p>Personal Information</p>
              <span>Edit your personal information</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </article>

          <article>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <p>Delivery Address</p>
              <span>Manage your delivery address</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </article>

          <article>
            <div>
              <FontAwesomeIcon icon={faClockRotateLeft} />
            </div>
            <div
              onClick={() => {
                navigate("/order-history");
              }}
            >
              <p>Oder History</p>
              <span>View your past orders</span>
            </div>
            <div>
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </article>

          <article>
            <div>
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <div>
              <p>Payment Methods</p>
              <span>Manage your payment method</span>
            </div>
            <div>
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </article>

          <h3>Settings</h3>

          <article>
            <div>
              <FontAwesomeIcon icon={faGear} />
            </div>
            <div>
              <p>Application Settings</p>
              <span>Adjust app preferences</span>
            </div>
            <div>
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </article>

          <article>
            <div>
              <FontAwesomeIcon icon={faCircleQuestion} />
            </div>
            <div>
              <p>Help & Support</p>
              <span>Get help and Support</span>
            </div>
            <div>
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </article>
        </section>
      </div>
      <BottomBar />
    </div>
  );
}

export default Profile;
