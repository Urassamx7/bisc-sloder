import styles from "./login.module.css";
import LoginImg from "../../images/logimg.png";
import LoginHeader from "../layout/loginHeader/lheader";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/bisc-sloder");
  };

  return (
    <div className={styles.main_container}>
      <LoginHeader />
      {/* Main Card que contém o formúlario e a imagem */}
      <div className={styles.form_container}>
        {/*Contém o formúlario */}
        <div className={styles.formulario}>
          <div className={styles.h2}>
            <h2>Login</h2>
          </div>
          <div className={styles.form_content}>
            <form action="#" className={styles.form}>
              <div className={styles.input}>
                <input
                  type="text"
                  placeholder="Nome, e-mail ou Número de telefone"
                />
              </div>
              <div className={styles.input}>
                <input type="password" placeholder="Password" />
              </div>
              <div className={styles.btn}>
                <button id={styles.forgot}>Forgot password?</button>
                <br />
                <button id={styles.login} onClick={goBack}>
                  Login
                </button>
                <button id={styles.signup}>Or Signin</button>
              </div>
            </form>
          </div>
        </div>
        {/*Contém a imagem à direita */}
        <div className={styles.img_container}>
          <div className={styles.bg_green}>
            <img src={LoginImg} alt="WIMIN" />
          </div>
        </div>
      </div>
    </div>
  );
}
