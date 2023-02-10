import React, {useState, useRef} from "react";
import style from './project.module.css'; 
import {BsFillPlayCircleFill} from 'react-icons/bs';


export default function AudioFile ({ src, isLight, playingAudio, setPlayingAudio }) {

  // controls the play/pause settings for each audio file
  // it's separated as a component to avoid each song being overwritten
    const [play, setPlay] = useState(false);
    const myRef = useRef(null);
    
  
    const PlaySong = () => {
      myRef.current.play();
      setPlay(true);
      setPlayingAudio(myRef);
      // test current playing ref against the globally shared ref to ensure that songs don't play over each other
      if (myRef.current !== playingAudio.current) {
        // console.log("different")
        playingAudio.current.pause();
      }
      // console.log(playingAudio)
      // console.log(playingAudio.current)
      // console.log("play", myRef.current)
    };
  
    const PauseSong = () => {
      myRef.current.pause();
      setPlay(false);
      // console.log(playingAudio)
      // console.log(playingAudio.current)
      // console.log("pause", myRef)
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