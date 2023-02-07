import react, {useEffect, useState, useRef} from 'react';
import style from '../project/project.module.css';
import AudioFile from './audio';

export default function Project({projFiles, isLight}) {
    const songs = Object.entries(projFiles.song).reduce((obj, [key, value], i) => {
        obj[key] = {
            name: projFiles.songName[key],
            src: value,
        };
        return obj;
    }, {});

    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                <div className={style["inner-wrapper"]}>
                    <div></div>
                    <div className={style["proj-left"]}>
                        <h2 className={style["title"]}>{projFiles.title}</h2>
                        <p className={style["proj-text"]}>{projFiles.text}</p>
                        <div className={style["audio-wrapper"]}>
                            {Object.values(songs).map((song, i) => {
                                    return (
                                        <div key={i}>
                                            
                                            <AudioFile 
                                            src={song.src}
                                            isLight={isLight}
                                            data-testid="audio-file"
                                            /> 
                                            <h3>{song.name}</h3>
                                        </div>
                                    )
                            })}
                        </div>
                    </div>
                    <div></div>
                    <div className={style["proj-right"]}>
                        {Object.values(projFiles.image).map((img, ind) => {
                                return (
                                    // <div className={style["carousel-main"]}>
                                    //     <div className={style["carousel-item"]}>
                                            <img 
                                            className={style["proj-right-img"]} 
                                            key={ind}  
                                            src={img} 
                                            />
                                    //     </div>
                                    // </div>
                                    // <img className={style["proj-right-img"]} key={ind} src={img} />
                                )
                            })}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}