import styles from "../order/order.module.scss";
import cylinder_pic from "../../assets/images/cylinder_3kg_.png";
import Button from "../../components/button/Button";
import NavBar from "../../components/navBar/NavBar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Order() {
  const navigate = useNavigate();
  return (
    <div className={styles.parent_wrapper}>
      <NavBar />
      <div className={styles.wrapper}>
        <section className={styles.sec_00}>
          <div>
            <select name="" id="">
              <option value="">Select Size</option>
              {/* <option value="">3kg</option>
              <option value="">5kg</option>
              <option value="">7kg</option>
              <option value="">10kg</option>
              <option value="">12kg</option> */}
              <option value="">15kg</option>
              <option value="">20kg</option>
              <option value="">25kg</option>
              <option value="">30kg</option>
              <option value="">40kg</option>
              <option value="">50kg</option>
            </select>
          </div>
        </section>
        <section className={styles.sec_01}>
          <article>
            <div>
              <img src={cylinder_pic} alt="" />

              <b>3kg Cylinder</b>
              <p>From ₦12,000</p>
              <Button
                children={"Order Now"}
                onClick={() => {
                  navigate("/checkout");
                }}
              />
            </div>

            <div>
              <img src={cylinder_pic} alt="" />

              <b>5kg Cylinder</b>
              <p>From ₦18,000</p>
              <Button children={"Order Now"} />
            </div>

            <div>
              <img src={cylinder_pic} alt="" />

              <b>10kg Cylinder</b>
              <p>From ₦23,000</p>
              <Button children={"Order Now"} />
            </div>

            <div>
              <img src={cylinder_pic} alt="" />

              <b>12kg Cylinder</b>
              <p>From ₦27,000</p>
              <Button children={"Order Now"} />
            </div>

            <div>
              <img src={cylinder_pic} alt="" />

              <b>10kg Cylinder</b>
              <p>From ₦23,000</p>
              <Button children={"Order Now"} />
            </div>

            <div>
              <img src={cylinder_pic} alt="" />

              <b>12kg Cylinder</b>
              <p>From ₦27,000</p>
              <Button children={"Order Now"} />
            </div>
          </article>
          <section className={styles.sec_02}>
            <button>View More Sizes & Prices</button>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Order;
