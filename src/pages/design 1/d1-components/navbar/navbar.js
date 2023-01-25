import react from 'react';
import style from './navbar.module.css';

export default function Navbar() {
    return (
        <div>
            <header className={style["header"]}>
                <div className={style["navbar"]}>
                    <span className={style["nav-el"]}>Home</span>
                    <span className={style["nav-el"]}>About</span>
                    <span className={style["nav-el"]}>Projects</span>
                    <span className={style["nav-el"]}>Contact</span>
                </div>
            </header>
        </div>
    )
}