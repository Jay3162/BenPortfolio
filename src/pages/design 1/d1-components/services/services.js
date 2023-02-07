import react, {useState, useEffect, useRef} from 'react';
import styles from './services.module.css';
import {AiFillEdit} from 'react-icons/ai';
import { BsMusicNoteList } from 'react-icons/bs';
import {SiAudiomack} from 'react-icons/si';


export default function Services() {


    return (
        <div className={styles["container"]}>
            <div className={styles["wrapper"]}>
                <h1>Services</h1>
            </div>
            <div className={styles["inner-wrapper"]}>
                <div></div>
                <div>
                    <h2>Songwriting</h2>
                    <div className={styles["tab"]}>
                        <p><BsMusicNoteList/></p>
                    </div>
                    <p className={styles["text"]}>

                    </p>
                </div>
                <div></div>
                <div>
                    <h2>Production</h2>
                    <div className={styles["tab"]}>
                        <p><AiFillEdit/></p>
                    </div>
                    <p className={styles["text"]}>

                    </p>
                </div>
                <div></div>
                <div>
                    <h2>Mixing and Mastering</h2>
                    <div className={styles["tab"]}>
                        <p><SiAudiomack/></p>
                    </div>
                    <p className={styles["text"]}>

                    </p>
                </div>
                <div></div>
            </div>

        </div>
    )
}