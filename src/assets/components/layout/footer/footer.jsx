import styles from "./footer.module.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
export default function Footer() {
  return (
    <>
      <div className="up_line"></div>
      <footer className={styles.footer_container}>
        <div className={styles.footer_content}>
          <h1>Biscateiro</h1>

          <div className={styles.footer_content_content_item}>
            <div className={styles.social_media}>
              <h3>Para mais informações Contacte:</h3>
              <div className={styles.icon_space}>
                <FacebookShareButton
                  url={"https://www.facebook.com/"}
                  className="some-network__share-button"
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton
                  url={"https://www.linkedin.com/"}
                  className="some-network__share-button"
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton
                  url={"https://twitter.com/"}
                  className="some-network__share-button"
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={"https://wa.me/+258842821131"}
                  className="some-network__share-button"
                >
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
