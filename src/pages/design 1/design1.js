import React from 'react';
import style from './design1.module.css';

export default function Design1() {
    return (
        <div className={style["container"]}>
            <header className={style["header"]}>
                <div className={style["navbar"]}>
                    <span className={style["nav-el"]}>Home</span>
                    <span className={style["nav-el"]}>About</span>
                    <span className={style["nav-el"]}>Projects</span>
                    <span className={style["nav-el"]}>Contact</span>
                </div>
            </header>
            <main>
                Ben Parker
            </main>
            <footer></footer>
        </div>
    )
}