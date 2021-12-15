import { Button, IconButton } from '@material-ui/core';
import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react-transition-group/node_modules/@types/react';
import { v4 as uuid } from 'uuid';
import styles from './Poll.module.scss';

export default function Poll({ setShow }: { setShow: Dispatch<SetStateAction<boolean>> }) {
    console.log("Poll rendered");
    const [noOfChoices, setNoOfChoices] = useState(2);

    return (
        <>
            <div className={styles.poll}>
                <ul className={styles.choices}>
                    {Array(noOfChoices).fill(0).map((_, idx) => (
                        <li key={uuid()}>
                            <input placeholder={`Choice ${idx + 1}`} />
                        </li>
                    ))}
                </ul>

                {noOfChoices < 4 && <div className={styles.addResponse} onClick={() => {
                    setNoOfChoices(noOfChoices + 1);
                }}>
                    <span>Add Response</span>
                    <IconButton>
                        <img src="/add.svg" alt="Add icon" width={25} height={25} />
                    </IconButton>
                </div>}

                <div className={styles.pollLength} style={noOfChoices == 4 ?{marginTop: "1rem"}: {}}>
                    <h5>Poll Length</h5>
                    <div className={styles.selectors}>
                        <select>
                            {Array(8).fill(0).map((_, idx) => (
                                <option key={uuid()} value={idx}>{idx}</option>
                            ))}
                        </select>

                        <select>
                            {Array(24).fill(0).map((_, idx) => (
                                <option key={uuid()} value={idx}>{idx}</option>
                            ))}
                        </select>

                        <select>
                            {Array(60).fill(0).map((_, idx) => (
                                <option key={uuid()} value={idx}>{idx}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <Button variant="outlined" className={styles.removePollBtn}>Remove Poll</Button>
            </div>
            <div className={styles.overlay} onClick={() => {
                document.body.style.overflow = "";
                setShow(false);
            }} />
        </>
    )
}
