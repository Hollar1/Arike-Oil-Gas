import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../signUp/signUp.module.scss";
function SignUp() {
  const navigate = useNavigate();
  return (
    <div className={styles.parent_wrapper}>
      <SubNavBar children={"Sign Up"} />
      <div className={styles.wrapper}>
        <header>
          <h3>Create Account</h3>
          <p>Please sign up to start your gas order.</p>
        </header>

        <section className={styles.sec_01}>
          <div>
            <Input label_text={"Full Name"} placeholder={"Enter your name"} />
          </div>

          <div>
            <Input label_text={"Email"} placeholder={"Example@you.com"} />
          </div>

          <div>
            <Input label_text={"Phone Number"} placeholder={"0800000000"} />
          </div>

          <div>
            <Input label_text={"Password"} placeholder={"Create password"} />
          </div>

          <div>
            <Input
              label_text={"House Number/Name"}
              placeholder={"For delivery"}
            />
          </div>

          <div>
            <Input label_text={"Street"} placeholder={"Enter street"} />
          </div>
          <div>
            <Input label_text={"Area"} placeholder={"Enter area"} />
          </div>
          <div>
            <Input label_text={"LGA"} placeholder={"Enter L.G.A"} />
          </div>
        </section>

        <section className={styles.sec_03}>
          <Button children={"Login"} />
        </section>
        <section className={styles.sec_04}>
          <p>Already have an account?</p>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </section>
      </div>
    </div>
  );
}

export default SignUp;
