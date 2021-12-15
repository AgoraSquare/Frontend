import styles from './VaultCard.module.scss';

export default function VaultCard({ title }: { title: string }) {
    return (
        <div className={styles.vaultCard}>
            <header>
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.amount}>$1,578,007.26</h4>
            </header>

            <ul className={styles.cryptoStats}>
                <li>
                    <img src="/eth_icon.svg" alt="Ethereum icon" width={22} height={22}/>
                    <ProgressBar progress="40%" />
                </li>

                <li>
                    <img src="/wBTC.svg" alt="wBTC icon" width={22} height={22}/>
                    <ProgressBar progress="55%" />
                </li>

                <li>
                    <img src="/xdai.svg" alt="xDai icon" width={22} height={22}/>
                    <ProgressBar progress="20%" />
                </li>
            </ul>
        </div>
    )
}


const ProgressBar = ({ progress }: { progress: string }) => {
    return (
        <div className={styles.progressBar}>
            <div className={styles.completed} style={{width: progress}}></div>
        </div>
    )
}