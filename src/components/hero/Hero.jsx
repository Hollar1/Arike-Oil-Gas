import { useEffect, useState } from "react";
import styles from "../hero/hero.module.scss";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [changeBackground, setChangeBackground] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setChangeBackground(!changeBackground);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [changeBackground]);

  return (
    <div className={styles.parent_wrapper}>
      <div className={styles.wrapper}>
        <section
          className={changeBackground ? styles.section_A : styles.section_B}
        >
          <div>
            <h2>Fast & Reliable</h2>
            <h2>Cooking Gas Deliver</h2>
            <h2>to Your Doorstep</h2>
            <p>
              Order cooking gas online and get it delivered within 30 minutes!
            </p>
          </div>

          <aside
            onClick={() => {
              navigate("/order");
            }}
          >
            <Button children={"Shop Gas Now"} />
          </aside>
        </section>
      </div>
    </div>
  );
}

export default Hero;
