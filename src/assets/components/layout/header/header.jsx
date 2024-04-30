import style from "./header.module.css";
import biscateiro from "../../../images/imagebisc1.png";
export default function Header() {
  return (
    <div className={style.container_nav}>
      <header>
        <div className={style.bisc}>
          <h1>Biscateiro</h1>
        </div>
        <div className={style.div_starter_btn}>
          <button id={style.open_btn}>Entrar</button>
          <button id={style.signup_btn}>Cadastre-se gratuitamente</button>
        </div>
      </header>
      <div className={style.bottom_line}></div>

      <div className={style.handle_container}>
        <div className={style.quick_access}>
          <div className={style.content_description}>
            <p>São mais de 500 trabalhadores</p>
            <h2>
              Encontre o trabalhador <br />
              dos seus sonhos
            </h2>
          </div>
          <div className={style.rounded_white}></div>
          <div className={style.handle_to_search}>
            <div className={style.input_search}>
              <input
                type="text"
                placeholder="   Procure por nome, serviço, profissão"
              />
              <button id="search">Pesquisar</button>
            </div>

            <div className={style.btn_quick_search}>
              <button id="web-dev-btn">Web Developer</button>
              <button id="Designer-btn">Designer</button>
              <button id="lawyer-btn">Advogado</button>
            </div>
          </div>
        </div>

        <section className={style.bisc_img}>
          <img src={biscateiro} alt="Biscateiro" />
        </section>
      </div>
    </div>
  );
}
