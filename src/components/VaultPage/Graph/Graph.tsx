import styles from './Graph.module.scss';

export default function Graph() {
    return (
        <div className={styles.graph}>
            <div className={styles.textContainer}>
                <strong>Agora&apos;s Dao vaults</strong>
                <h3 className={styles.amount}>$1,590,486.85</h3>
                <small>3 Tokens</small>
            </div>
            <div className={styles.imageContainer}>
                <img src="/vault_graph.svg" alt="Graph" />
            </div>
        </div>
    )
}
