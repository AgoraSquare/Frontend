import { IconButton, ListItemText, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import useResize from '../../../utils/useResize';
import MenuModal from '../../MenuModal/MenuModal';
import styles from './GroupCategoryMenu.module.scss';

export default function GroupCategoryMenu() {
    const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
    const [typesAnchorEl, setTypesAnchorEl] = useState<null | HTMLElement>(null);
    const [flag] = useResize(599);

    const handleTypesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTypesAnchorEl(event.currentTarget);
    }

    const handleTypesClose = () => {
        setTypesAnchorEl(null);
    }

    const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setFilterAnchorEl(event.currentTarget);
    }

    const handleFilterClose = () => {
        setFilterAnchorEl(null);
    }

    return (
        <div className={styles.groupCategoryMenu}>
            <ul className={styles.categoryList}>
                {flag ? <IconButton className={`${styles.selected} ${styles.typesBtn}`} onClick={handleTypesClick}>
                    All
                </IconButton>
                    : <li className={styles.selected}>All</li>}
                <li className={styles.mobileItem}>Public</li>
                <li className={styles.mobileItem}>Private</li>
                <li className={styles.mobileItem}>Non-Profit</li>
                <li className={styles.mobileItem}>Government</li>
                <li className={styles.mobileItem}>Semi-Exclusive</li>
            </ul>

            <MenuModal anchorEl={typesAnchorEl} handleClose={handleTypesClose}>
                <MenuItem onClick={handleTypesClose}>
                    <ListItemText primary="All" />
                </MenuItem>

                <MenuItem onClick={handleTypesClose}>
                    <ListItemText primary="Public" />
                </MenuItem>

                <MenuItem onClick={handleTypesClose}>
                    <ListItemText primary="Private" />
                </MenuItem>

                <MenuItem onClick={handleTypesClose}>
                    <ListItemText primary="Non-Profit" />
                </MenuItem>

                <MenuItem onClick={handleTypesClose}>
                    <ListItemText primary="Government" />
                </MenuItem>

                <MenuItem onClick={handleTypesClose}>
                    <ListItemText primary="Semi-Exclusive" />
                </MenuItem>
            </MenuModal>

            <IconButton onClick={handleFilterClick}>
                <img src="/filter.svg" width={25} height={25} alt="Filter icon" />
            </IconButton>

            <MenuModal anchorEl={filterAnchorEl} handleClose={handleFilterClose}>
                <MenuItem onClick={handleFilterClose}>
                    <ListItemText primary="All" />
                </MenuItem>

                <MenuItem onClick={handleFilterClose}>
                    <ListItemText primary="Active" />
                </MenuItem>

                <MenuItem onClick={handleFilterClose}>
                    <ListItemText primary="Funding Proposals" />
                </MenuItem>

                <MenuItem onClick={handleFilterClose}>
                    <ListItemText primary="Member Proposals" />
                </MenuItem>

                <MenuItem onClick={handleFilterClose}>
                    <ListItemText primary="Trade Proposals" />
                </MenuItem>
            </MenuModal>
        </div>
    )
}