import { IconButton } from '@material-ui/core';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Gif } from '../../../types/Gif';
import styles from './GifPicker.module.scss';

type GifPickerProps = {
    setShow: Dispatch<SetStateAction<boolean>>;
    setGif: Dispatch<SetStateAction<string>>;
}
export default function GifPicker({ setShow, setGif }: GifPickerProps) {
    console.log("GifPicker Rendered");
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: process.env.NEXT_PUBLIC_GIFY_API_KEY
                }
            });
            setGifs(res.data.data);
        }

        if (searchValue === '') {
            fetchData();
        }
    }, [searchValue]);

    const search = async () => {
        const res = await axios("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: process.env.NEXT_PUBLIC_GIFY_API_KEY,
                q: searchValue
            }
        });

        setGifs(res.data.data);
    }

    return (
        <>
            <div className={styles.gifPicker}>
                <div className={styles.topBar}>
                    <form className={styles.searchBox} onSubmit={(e) => {
                        e.preventDefault();
                        search();
                    }}>
                        <input type="text" placeholder="Search for GIFs" value={searchValue} onChange={(e) => {
                            setSearchValue(e.target.value);
                        }} />
                        <img src="/search.svg" alt="search" onClick={search} />
                    </form>

                    <IconButton className={styles.closeBtn} onClick={() => {
                        document.body.style.overflow = "";
                        setShow(false);
                    }}>
                        <img src="/close.svg" alt="Close Icon" width={30} height={30} />
                    </IconButton>
                </div>

                <div className={styles.gifGrid}>
                    {gifs.map((gif) => (
                        <div key={uuid()} className={styles.gif} onClick={() => {
                            setGif(gif.images.original.url);
                            document.body.style.overflow = "";
                            setShow(false);
                        }}>
                            <img src={gif.images.original.url} alt="Its a gif" loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.overlay} onClick={() => {
                document.body.style.overflow = "";
                setShow(false);
            }} />
        </>
    )
}
