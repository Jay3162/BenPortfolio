import React, {useState, useRef, useCallback} from "react";
import style from './project.module.css'; 
import {BsFillPlayCircleFill} from 'react-icons/bs';


export default function AudioFile ({ src, playSong, pauseSong, isLight }) {

  // controls the play/pause settings for each audio file
  // it's separated as a component to avoid each song being overwritten
    const [play, setPlay] = useState(false);
    const myRef = useRef(null);
  
    const PlaySong = () => {
      playSong(myRef);
      myRef.current.play();
    };
  
    const PauseSong = () => {
      pauseSong();
      myRef.current.pause();
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