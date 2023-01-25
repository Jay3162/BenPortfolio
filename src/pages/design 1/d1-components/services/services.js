import react from 'react';
import styles from './services.module.css'

export default function Services() {
    return (
        <div className={styles["container"]}>
            <div className={styles["wrapper"]}>
                <p>Services</p>
            </div>
            <div className={styles["inner-wrapper"]}>
                <div></div>
                <div>
                    <div className={styles["tab"]}></div>
                    <p className={styles["text"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Vivamus ornare pharetra sapien. Phasellus ut pretium elit, 
                     in rhoncus neque.
                    </p>
                </div>
                <div></div>
                <div>
                    <div className={styles["tab"]}></div>
                    <p className={styles["text"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Vivamus ornare pharetra sapien. Phasellus ut pretium elit, 
                     in rhoncus neque.
                    </p>
                </div>
                <div></div>
                <div>
                    <div className={styles["tab"]}></div>
                    <p className={styles["text"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Vivamus ornare pharetra sapien. Phasellus ut pretium elit, 
                     in rhoncus neque.
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    )
}