import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import SubNavBar from "../../components/subNavBar/SubNavBar";
import styles from "../login/login.module.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className={styles.parent_wrapper}>
      <SubNavBar children={"Login"} />
      <div className={styles.wrapper}>
        <header>
          <h3>Welcome Back</h3>
          <p>Please log in to continue your gas order. </p>
        </header>

        <section className={styles.sec_01}>
          <div>
            <Input label_text={"Email"} placeholder={"You@sample.com"} />
          </div>
          <div>
            <Input label_text={"Email"} placeholder={"Enter your password"} />
          </div>
        </section>
        <section className={styles.sec_02}>
          <button>Forgot Password?</button>
        </section>
        <section className={styles.sec_03}>
          <Button children={"Login"} />
        </section>
        <section className={styles.sec_04}>
          <p>Don't have an account?</p>
          <button
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Sign Up
          </button>
        </section>
      </div>
    </div>
  );
}

export default Login;
