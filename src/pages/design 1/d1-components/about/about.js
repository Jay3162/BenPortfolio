import react from 'react';
import style from './about.module.css';

export default function About() {
    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                <div></div>
                <p className={style["text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ornare pharetra sapien. Phasellus ut pretium elit, in rhoncus neque. Fusce 
                    a dapibus nunc. Aliquam sit amet enim elementum, molestie est at, semper lectus. 
                    Nullam molestie orci sed nibh condimentum, id sodales velit auctor. Aliquam varius 
                    metus vel odio ultrices, sagittis porttitor massa aliquet.
                </p>
                <div className={style["image"]}></div>
                <div></div>
            </div>
        </div>
    )
}