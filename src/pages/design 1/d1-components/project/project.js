import react from 'react';
import style from '../project/project.module.css';

export default function Project() {
    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                <div className={style["inner-wrapper"]}>
                    <div></div>
                    <div className={style["proj-left"]}>
                        <h2 className={style["title"]}>Project 1</h2>
                        <p className={style["proj-text"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Vivamus ornare pharetra sapien. Phasellus ut pretium elit,
                          in rhoncus neque. Fusce a dapibus nunc. Aliquam sit amet
                           enim elementum, molestie est at, semper lectus. Nullam 
                           molestie orci sed nibh condimentum, id sodales velit auctor. 
                        </p>
                        <div className={style["btn-wrapper"]}>
                            <button className={style["proj-btn"]}>button</button>
                            <button className={style["proj-btn"]}>button</button>
                        </div>
                    </div>
                    <div className={style["proj-right"]}></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}