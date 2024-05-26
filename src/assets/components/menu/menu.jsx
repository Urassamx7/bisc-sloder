import styles from "./menu.module.css";
export default function Menu() {
  return (
    <>
      <section className={styles.section_grid_container}>
        <div className={styles.letter_content}>
          <h2 >Bora encontrar o biscateiro dos seus sonhos?</h2>
          <div className={styles.underline_div}></div>
        </div>



        <div className={styles.grid_card_container}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <aside className={styles.aside}>
          <div className={styles.paragraph}>
            <p>Crie conta</p>
            <p>Preencha</p>
            <p>Busque</p>
            <p>Biscateiro</p>
            <p>empresas</p>
          </div>
          <button>Criar Conta</button>
          <div className={styles.img_aside}>
            <img src="" alt="Aside" />
          </div>
        </aside>
        </div>
        
        <div className={styles.ad_container}>
          <img src="" alt="Anúncio" />
        </div>
        <div className={styles.data_info}>
          Encontre alguns biscateiros na área de tecnologia
          <div className={styles.underline_div}></div>
        </div>
        <div className={styles.filter_container}>
          <div className={styles.search_filter}>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
