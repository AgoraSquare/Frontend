import styles from '../../../styles/Vaults.module.scss';
import Layout from '../../../components/Layout/Layout';
import Graph from '../../../components/VaultPage/Graph/Graph';
import VaultCard from '../../../components/VaultPage/VaultCard/VaultCard';
import { v4 as uuid } from 'uuid';
import Activities from '../../../components/GroupPage/Activities/Activities';
import Board from '../../../components/VaultPage/Board/Board';

export default function vaults() {
    return (
        <div className={styles.vaults}>
            <Layout hideLeftSide={false} hideNavbar={false}>
                <div className={styles.vaultContainer}>
                    <VaultSection />
                    <div className={styles.border} />
                    <div className={styles.rightSide}>
                        <Activities />
                        <Board />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

const Titles = ['Treasury', 'Environmental', 'Philanthropy', 'Philanthropy'];

const VaultSection = () => {
    return (
        <div className={styles.vaultSection}>
            <Graph />

            <div className={styles.grid}>
                {Array(4).fill(0).map((_, idx) => (
                    <VaultCard title={Titles[idx]} key={uuid()} />
                ))}
            </div>
        </div>
    )
}
