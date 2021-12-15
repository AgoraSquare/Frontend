import styles from './BackDrop.module.scss';

export default function BackDrop({ children, onClick }: { children: any, onClick: () => void }) {
    return (
        <div className={styles.backdrop} onClick={() => {
            document.body.style.overflow = "";
            onClick()
        }}>
            {children}
        </div>
    )
}
