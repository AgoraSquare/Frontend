import router from 'next/router';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Search.module.scss';
import {useEffect} from 'react';

export default function Search() {
    useEffect(() => {
        if(window.innerWidth > 900)
            router.push('/feed');
    },[]);

    return (
        <div className={styles.search}>
            <Layout hideNavbar={false} hideLeftSide={false}>
                <div className={styles.searchSection}>
                    <header>
                        <form className={styles.searchBar}>
                            <input type="text" placeholder="Search" />
                            <i className="ri-search-2-fill ri-xl"></i>
                        </form>
                    </header>

                    <div className={styles.container}>
                        Search for people, groups...
                    </div>
                </div>
            </Layout>
        </div>
    )
}
