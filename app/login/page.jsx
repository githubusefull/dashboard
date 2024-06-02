import styles from "../ui/dashboard/login/login.module.css";
import LoginForm from "../ui/dashboard/login/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;