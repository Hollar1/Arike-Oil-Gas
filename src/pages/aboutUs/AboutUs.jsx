import BottomBar from "../../components/bottomBar/BottomBar";
import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../aboutUs/aboutUs.module.scss";
import banner_img from "../../assets/images/company_sticker.jpg"
function AboutUs() {
  return (
    <div className={styles.parent_wrapper}>
        <SubNavBar children={"About Us"}/>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
            <img src={banner_img} alt="" />
        </section>
      </div>
      <BottomBar/>
    </div>
  );
}

export default AboutUs;
