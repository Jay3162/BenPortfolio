import react, {useEffect, useState, useRef} from 'react';
import style from '../project/project.module.css';
import anjel from './music/Anjel - Is It Fair_.mp3';

export default function Project() {
    const new_song = new Audio(anjel);
    const [play, setPlaying] = useState(false);
    const myRef = useRef();

    const projFiles = [{
        "proj1" : {
            "title" : "Anjel",
            "text" : "Anjel: Angel are a young west London band. When they asked me to work with them they hadn’t even recorded their first demo. This track is called “Is It fair?” I worked with them from the first recording session to the final master. Role: Sound Engineer, Producer, Mix Engineer, Mastering Engineer.",
            "song" : new_song,
            "image" : ""
        },
        "proj2" : {
            "title" : "",
            "text" : "",
            "song" : "",
            "image" : ""
        }
        
    }]

    const PlaySong = () => {
        myRef.current.play();
        setPlaying(true);

    }
    const PauseSong = () => {
        myRef.current.pause();
        setPlaying(false);

    }

    const project = (e) => {
        return (
                <div>{projFiles.map((obj, id) => {
                    return (
                            <div className={style["proj-left"]}>
                                <h2 className={style["title"]}>{obj.title}{console.log(obj)}</h2>
                                <p className={style["proj-text"]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus ornare pharetra sapien. Phasellus ut pretium elit,
                                in rhoncus neque. Fusce a dapibus nunc. Aliquam sit amet
                                enim elementum, molestie est at, semper lectus. Nullam 
                                molestie orci sed nibh condimentum, id sodales velit auctor. 
                                </p>
                                <div className={style["btn-wrapper"]}>
                                    <audio ref={myRef} src={anjel}/>
                                    {play ? 
                                    <button className={style["proj-btn"]} onClick={PauseSong}>Pause</button> : 
                                    <button className={style["proj-btn"]} onClick={PlaySong}>Play</button>}
                                    
                                    <button className={style["proj-btn"]}>button</button>
                                </div>
                            </div>
                    )
                })}
                    {/* <h2 className={style["title"]}>Project 1</h2>
                    <p className={style["proj-text"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ornare pharetra sapien. Phasellus ut pretium elit,
                    in rhoncus neque. Fusce a dapibus nunc. Aliquam sit amet
                    enim elementum, molestie est at, semper lectus. Nullam 
                    molestie orci sed nibh condimentum, id sodales velit auctor. 
                    </p>
                    <div className={style["btn-wrapper"]}>
                        <audio ref={myRef} src={anjel}/>
                        {play ? 
                        <button className={style["proj-btn"]} onClick={PauseSong}>Pause</button> : 
                        <button className={style["proj-btn"]} onClick={PlaySong}>Play</button>}
                        
                        <button className={style["proj-btn"]}>button</button>
                    </div> */}
                </div>
        )
    }

    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                <div className={style["inner-wrapper"]}>
                    <div></div>
                    <div className={style["proj-left"]}>
                        {projFiles.map((obj, id) => {
                            return (
                                    <div>
                                        <h2 className={style["title"]}>{obj.proj1.title}</h2>
                                        <p className={style["proj-text"]}>
                                            {obj.proj1.text} 
                                        </p>
                                        <div className={style["btn-wrapper"]}>
                                            <audio ref={myRef} src={anjel}/>
                                            {play ? 
                                            <button className={style["proj-btn"]} onClick={PauseSong}>Pause</button> : 
                                            <button className={style["proj-btn"]} onClick={PlaySong}>Play</button>}
                                            
                                            <button className={style["proj-btn"]}>button</button>
                                        </div>
                                    </div>)
                        })}
                        {/* <h2 className={style["title"]}>Project 1</h2>
                        <p className={style["proj-text"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Vivamus ornare pharetra sapien. Phasellus ut pretium elit,
                          in rhoncus neque. Fusce a dapibus nunc. Aliquam sit amet
                           enim elementum, molestie est at, semper lectus. Nullam 
                           molestie orci sed nibh condimentum, id sodales velit auctor. 
                        </p>
                        <div className={style["btn-wrapper"]}>
                            <audio ref={myRef} src={anjel}/>
                            {play ? 
                            <button className={style["proj-btn"]} onClick={PauseSong}>Pause</button> : 
                            <button className={style["proj-btn"]} onClick={PlaySong}>Play</button>}
                            
                            <button className={style["proj-btn"]}>button</button>
                        </div> */}
                    </div>
                    <div className={style["proj-right"]}></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}