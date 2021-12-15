import styles from './Board.module.scss';

export default function Board() {
    return (
        <div className={styles.board}>
            <h4>DAO Board</h4>

            <div className={styles.banner}>
                Advertise here.
            </div>
        </div>
    )
}
