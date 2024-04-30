import styles from "./main.module.css";
import sorridente from "../../images/portrait-man-posing-while-smiling-Photoroom1.png";
import moca from "../../images/testimony-2x-6977acfa5102a08c106be173a13473aa6ac88f0989c6a6ea965fd8aad43a5c5f1.png";
import engenieers from "../../images/industrial-designers-working-3d-model-Photoroom1.png";
export default function Main() {
  return (
    <main className={styles.main_container}>
      <div className={styles.letter_content}>
        Estamos ao seu lado para apoiar na sua busca <br />
        por trabalhadores qualificados
      </div>
      <div className={styles.rounded_green}></div>
      <div className={styles.newsletter}>
        <div className={styles.main_img}>
          <img src={sorridente} alt="Primeira img" />
        </div>
        <div className={styles.text}>
          <h3>
            Plataforma de <span>Biscates</span> gratuita
          </h3>
          <p>
            Funciona assim: os empregadores contratam nossa plataforma de
            biscates para conduzir processos seletivos. Quem pada pelo serviço
            são eles, então você não precisa se preocupar.
          </p>
        </div>
      </div>
      <div className={`${styles.newsletter} ${styles.optional}`}>
        <div className={styles.main_img}>
          <img src={moca} alt="segunda img" />
        </div>
        <div className={`${styles.text} ${styles.text_opt}`}>
          <h3>Crie uma conta e seja contratado</h3>
          <p>
            Você está pronto para embarcar em uma jornada emocionante e repleta
            de oportunidades?
          </p>
          <p>
            Se <span className={styles.yes}>Sim</span>,{" "}
            <span>Crie uma conta</span>{" "}
          </p>

          <button className={styles.create_acc}>Crie uma conta</button>
        </div>
      </div>
      <div className={styles.pre_footer}>
        <div className={styles.text}>
          <p>
            Você precisa de ajuda com tarefas domésticas, reparos ou qualquer
            serviço específico? Não procure mais! Com o aplicativo Biscateiro,
            você pode encontrar prestadores de serviço qualificados em sua área
            com facilidade.
          </p>

          <button>Procurar trabalhadores</button>
        </div>
        <div className={styles.main_img}>
          <img src={engenieers} alt="terceira img" />
        </div>
      </div>
    </main>
  );
}
