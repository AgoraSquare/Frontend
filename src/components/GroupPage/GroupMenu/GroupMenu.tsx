import { IconButton } from '@material-ui/core';
import styles from '../../GroupsPage/GroupCategoryMenu/GroupCategoryMenu.module.scss';

export default function GroupMenu() {
    return (
        <div className={styles.groupMenu}>
            <ul className={styles.categoryList}>
                <li className={styles.selected}>New</li>
                <li>Funded</li>
                <li>Trending</li>
                <li>Denied</li>
            </ul>

            <IconButton>
                <img src="/filter.svg" width={25} height={25} alt="Filter icon" />
            </IconButton>
        </div>
    )
}
