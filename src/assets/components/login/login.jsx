import styles from "./login.module.css";
export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.login_header}>
        <h1>Biscateiro</h1>
      </div>
      <div>
        <div>
          <h2>Login</h2>
        </div>
        <form action="#">
          <div className={styles.input_name}>
            <label htmlFor="">Username or e-mail:</label>
            <input type="text" minLength="8" maxLength="20" />
          </div>
          <div className={styles.input_passwd}>
            <label htmlFor="">Password:</label>
            <input type="password" minLength='8'/>
          </div>
        </form>
      </div>
    </div>
  );
}
