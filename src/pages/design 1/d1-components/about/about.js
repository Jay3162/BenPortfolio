import react from 'react';
import style from './about.module.css';

export default function About({isLight}) {
    return (
        <div className={style["container"]}>
            {/* <h2>Sample Title</h2> */}
            <div className={style["wrapper"]}>
                <div></div>
                <div className={style["text-wrapper"]}>
                    <p className={style["text"]}>
                        …My real name is Ben Parker. I’m a songwriter, music producer, and mix and mastering 
                        Engineer from London (Sound Engineering & Music Production BA).
                    </p>
                    <p className={style["text"]}>
                        From song writing to mastering, scratch demos to release ready tracks, grunge to house
                        to indie: whether you’re a band wanting to record your fist demo, a singer looking for
                        someone to make the songs you’ve written come to life, or a DJ looking for a final 
                        mastering polish on your latest single; as a qualified sound engineer and producer, 
                        I can help your music come to life.
                    </p>
                    <p className={style["text"]}>
                        Here are a few examples of different artists I’ve worked with:
                    </p>
                </div>
                <div></div>
                <div className={style["image"]}></div>
                <div></div>
            </div>
        </div>
    )
}