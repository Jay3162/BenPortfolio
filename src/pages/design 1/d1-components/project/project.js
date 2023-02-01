import react, {useEffect, useState, useRef} from 'react';
import style from '../project/project.module.css';
import AudioFile from './audio';

export default function Project({projFiles}) {
    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                {/* {projFiles.map((obj, index) => {
                    return (
                        <div className={style["inner-wrapper"]} key={index}>
                            <div></div>
                            <div className={style["proj-left"]}>
                                <h2 className={style["title"]}>{obj.title}</h2>
                                    <p className={style["proj-text"]}>{obj.text}</p>
                                    {Object.values(obj.song).map((song, i) => {
                                            return (
                                                <div className={style["btn-wrapper"]} key={i}>
                                                    <audio ref={myRef} src={song}/>
                                                    {play ? 
                                                    <button className={style["proj-btn"]} onClick={PauseSong} key={i}>Pause</button> : 
                                                    <button className={style["proj-btn"]} onClick={PlaySong} key={i}>Play</button>}
                                            </div>
                                            )
                                    })}
                            </div>
                            <div className={style["proj-right"]}>
                                {Object.values(obj.image).map((img, ind) => {
                                    return (
                                        <img className={style["proj-right-img"]} key={ind} src={img} />
                                    )
                                })}
                            </div>
                            <div></div>
                        </div>
                    )
                })} */}
                <div className={style["inner-wrapper"]}>
                    <div></div>
                    <div className={style["proj-left"]}>
                        <h2 className={style["title"]}>{projFiles.title}</h2>
                        <p className={style["proj-text"]}>{projFiles.text}</p>
                        <div className={style["audio-wrapper"]}>
                            {Object.values(projFiles.song).map((song, i) => {
                                    return (
                                        <div>
                                            <AudioFile key={i} src={song}/>
                                        </div>
                                        
                                    )
                            })}
                        </div>
                    </div>
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
                {/* <div className={style["inner-wrapper"]}>
                    <div></div> */}
                    {/* <div className={style["proj-left"]}>
                        {projFiles.map((obj, ind) => {
                            return (
                                    <div key={ind}>
                                        <h2 className={style["title"]}>{obj.title}</h2>
                                        <p className={style["proj-text"]}>
                                            {obj.text}
                                        </p>
                                        {Object.values(obj.song).map((song, i) => {
                                            return (
                                                <div className={style["btn-wrapper"]} key={i}>
                                                    <audio ref={myRef} src={song}/>
                                                    {play ? 
                                                    <button className={style["proj-btn"]} onClick={PauseSong} key={i}>Pause</button> : 
                                                    <button className={style["proj-btn"]} onClick={PlaySong} key={i}>Play</button>}
                                            </div>
                                            )
                                        })}
                                    </div>)
                        })}
                    </div> */}
                    {/* <div className={style["proj-right"]}>
                        {projFiles.map((obj, i) => {
                            return (
                                <div key={i}>{console.log(obj.image)}
                                    {Object.values(obj.image).map((img, ind) => {
                                        return (
                                            <img className={style["proj-right-img"]} key={ind} src={img} />
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div> */}
                    {/* <div></div>
                </div> */}
            </div>
        </div>
    )
}