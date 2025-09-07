import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../cylinder/cylinder.module.scss";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

function Cylinder() {
  const navigate = useNavigate();
  return (
    <div className={styles.parent_wrapper}>
      <header>
        <SubNavBar children={"Cylinder"} />
      </header>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <article>
            <h3>Exchange Your Cylinder</h3>
            <p>
              Enjoy fast, hassle-free swaps, a range of cylinder sizes, and
              affordable refill prices. Bring your empty cylinder to our
              exchange point, or have it ready if you're expecting a delivery.
            </p>
            <Button children={"Find Nearest Exchange Point"} />
          </article>

          <article>
            <h3>Make a Deposit For Our Cylinder</h3>
            <p>
              Make a one time-time refundable deposit. Enjoy extended use and a
              full refund upon return. Perfect for first-time users or temporary
              needs.
            </p>
          </article>
        </section>

        <section className={styles.sec_02}>
          <table>
            <thead>
              <tr>
                <th>Cylinder Sizes</th>
                <th>Deposit Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3kg</td>
                <td>₦3,000</td>
                <td
                  onClick={() => {
                    navigate("/pay-deposit");
                  }}
                >
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
              <tr>
                <td>5kg</td>
                <td>₦3,000</td>
                <td>
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
              <tr>
                <td>7kg</td>
                <td>₦7,000</td>
                <td>
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
              <tr>
                <td>10kg</td>
                <td>₦10,000</td>
                <td>
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
              <tr>
                <td>12kg</td>
                <td>₦12,000</td>
                <td>
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
              <tr>
                <td>15kg</td>
                <td>₦15,000</td>
                <td>
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
              <tr>
                <td>20kg</td>
                <td>₦20,000</td>
                <td>
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
              <tr>
                <td>25kg</td>
                <td>₦25,000</td>
                <td>
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
              <tr>
                <td>30kg</td>
                <td>₦20,000</td>
                <td>
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
              <tr>
                <td>40kg</td>
                <td>₦20,000</td>
                <td>
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
              <tr>
                <td>50kg</td>
                <td>₦20,000</td>
                <td>
                  <Button children={"Make Deposit"} />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={styles.sec_03}>
          No hidden charges. Full refund when you return cylinder.
        </section>
      </div>
    </div>
  );
}

export default Cylinder;
