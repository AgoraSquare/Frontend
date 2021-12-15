import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.logoSection}>
                <img src="/footer_logo.svg" alt="Logo"  />
                <p>©Agora 2021 <br /> All rights reserved</p>
            </section>

            <section className={styles.options}>
                <div className={styles.col}>
                    <h4>Develop With Us</h4>
                    <p>Github</p>
                    <p>Docs</p>
                </div>

                <div className={styles.col}>
                    <h4>Company</h4>
                    <p>About us</p>
                    <p>Privacy Policy</p>
                </div>

                <div className={styles.col}>
                    <h4>Help</h4>
                    <p>Contact support</p>
                    <p>FAQs</p>
                </div>
            </section>

            <section className={styles.socials}>
                <h4>Our Socials</h4>
                <div className={styles.socialIcons}>
                    <img src="/twitter.svg" alt="Twitter Icon" width={30} height={30} />
                    <img src="/linkedin.svg" alt="Linkedin Icon" width={30} height={30} />
                    <img src="/insta.svg" alt="Instagram Icon" width={30} height={30} />
                    <img src="/telegram.svg" alt="Telegram Icon" width={30} height={30} />
                </div>
            </section>
        </footer>
    )
}