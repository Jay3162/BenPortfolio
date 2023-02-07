import React, {useState, useRef} from "react";
import style from './project.module.css'; 
import {BsFillPlayCircleFill} from 'react-icons/bs';


export default function AudioFile ({ src, isLight }) {

    const [play, setPlay] = useState(false);
    const myRef = useRef(null);
  
    const PlaySong = () => {
      myRef.current.play();
      setPlay(true);
    };
  
    const PauseSong = () => {
      myRef.current.pause();
      setPlay(false);
    };
  
    return (
      <div className={style["btn-wrapper"]}>
        <audio ref={myRef} src={src}/>
        {play ? (
          <button 
          className={style["proj-btn"]} 
          onClick={PauseSong}
          style={{
            backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
            color: isLight ? 'rgb(26, 27, 29)' : '#ccc',
            borderColor: isLight ? 'rgb(26, 27, 29)' : '#ccc'
        }}
          >
            Pause
          </button>
        ) : (
          <button 
          className={style["proj-btn"]} 
          onClick={PlaySong}
          style={{
            backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
            color: isLight ? 'rgb(26, 27, 29)' : '#ccc',
            borderColor: isLight ? 'rgb(26, 27, 29)' : '#ccc'
        }}
          >
            <BsFillPlayCircleFill className={style["play-btn"]}/>
          </button>
        )}
      </div>
    );
  };