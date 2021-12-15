import { Button } from '@material-ui/core';
import { Dispatch, SetStateAction } from 'react';
import styles from './Menu.module.scss';

export default function Menu({currentOption,setCurrentOption}:{currentOption:number,setCurrentOption:Dispatch<SetStateAction<number>>}) {
    console.log("Menu Rendered");
    return (
        <ul className={styles.menu}>
            <li>
                <Button variant="text" 
                className={`${currentOption === 0 && styles.selected} ${styles.btn}`}
                onClick={() => setCurrentOption(0)}
                disableRipple
                >Posts</Button>
            </li>
            <li>
                <Button variant="text" 
                className={`${currentOption === 1 && styles.selected} ${styles.btn}`}
                onClick={() => setCurrentOption(1)}
                disableRipple
                >Collectibles</Button>
            </li>
            <li>
                <Button variant="text" 
                className={`${currentOption === 2 && styles.selected} ${styles.btn}`}
                onClick={() => setCurrentOption(2)}
                disableRipple
                >Groups</Button>
            </li>
            <li>
                <Button variant="text" 
                className={`${currentOption === 3 && styles.selected} ${styles.btn}`}
                onClick={() => setCurrentOption(3)}
                disableRipple
                >Activities</Button>
            </li>
        </ul>
    )
}
