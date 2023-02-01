import React, {useRef, useState, useEffect} from 'react';
import Contact from './d1-components/contact';
import About from './d1-components/about/about';
import style from './design1.module.css';
import Project from './d1-components/project/project';
import Services from './d1-components/services/services';
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineFundProjectionScreen, AiOutlineContacts} from 'react-icons/ai';
import {MdDesignServices} from 'react-icons/md';

// images
import anjel_band from './photos/IMG_3266.jpg';
import anjel_jam from './photos/IMG_2981.jpg';
import charlie from './photos/IMG_3268.jpg';
import charlie_thumb from './photos/IMG_6835.jpg';
import harry_thomas from './photos/IMG_3241 2.jpg';
// audio
import anjel from './music/Anjel - Is It Fair_.wav';
import charlie_jones from './music/2 - Tragic Therapy.wav';
import speed_light from './music/5 - Speed of Light.wav';
import charlie_hooked from './music/Charlie Jones · Charlie Jones - Hooked on a Feelin.mp3';
import i_know from './music/I Know When the Musics too Loud.wav';
import medicine from './music/Medicine MASTER 24_44 141222.wav';
import anybody from './music/Harry Thomas - Anybody beat.mp3';
import dont_tell from './music/Harry Thomas - Dont Tell Me.mp3';

const projFiles = [
    {
        "title" : "Anjel",
        "text" : "Anjel: Angel are a young west London band. When they asked me to work with them they hadn’t even recorded their first demo. This track is called “Is It fair?” I worked with them from the first recording session to the final master. Role: Sound Engineer, Producer, Mix Engineer, Mastering Engineer.",
        "song" : 
        {
            "anjel" : anjel
        },
        "image" : 
        { 
            "anjel_band" : anjel_band,
            // "anjel_jam" : anjel_jam
        }
    },
    {
        "title" : "Charlie Jones",
        "text" : "Charlie Jones: Charlie is a former X factor finalist who has spent his career in different bands. He came to me at the start of the relaunch of his solo career wanting to forge a new sound. We have worked together on several tracks, creating a radio-ready dance-centric sound for him. The first of these tracks “Hooked on a Feelin’” was released in September 2022. Role: Songwriter, Producer, Mix Engineer.",
        "song" : 
        {
            "charlie_jones" : charlie_jones, 
            "speed_light" : speed_light,
            "charlie_hooked" : charlie_hooked,
            "i_know" : i_know,
            "medicine" : medicine
        },
        "image" : 
        {
            "charlie" : charlie,
            // "charlie_thumb" : charlie_thumb
        }
    }, 
    {
        "title": "Harry Thomas",
        "text": "Harry Thomas: Harry is a DJ who has recently tried his hand in production. He came to me to help him with the final touches of his EP “Don’t Tell Me”, as he prepared it for release. Role: Producer, Mix Engineer, Mastering Engineer",
        "song" : {
            "Anybody" : anybody,
            "Don't Tell" : dont_tell
        },
        "image" : {
            "harry" : harry_thomas
        }
    }
]

export default function Design1() {
    const contactRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const serviceRef = useRef(null);

    // 

    const handleContact = (e) => {
        e.preventDefault();
        if (!contactRef.current) return;
        contactRef.current.scrollIntoView({behaviour: "smooth"});
    }

    const handleHome = (e) => {
        e.preventDefault();
        if (!homeRef.current) return;
        homeRef.current.scrollIntoView({behaviour: "smooth"});
    }

    const handleAbout = (e) => {
        e.preventDefault();
        if (!aboutRef.current) return;
        aboutRef.current.scrollIntoView({behaviour: "smooth"});
    }

    const handleProject = (e) => {
        e.preventDefault();
        if (!projectRef.current) return;
        projectRef.current.scrollIntoView({ behaviour: "smooth"});
    }

    const handleServices = (e) => {
        e.preventDefault();
        if (!serviceRef.current) return;
        serviceRef.current.scrollIntoView({ behaviour: "smooth"});
    }

     return (
        <div className={style["container"]}>
            <header className={style["header"]}>
                <div className={style["navbar"]}>
                    <span className={style["nav-el"]} onClick={handleHome}>Home</span>
                    <span className={style["nav-el-sml"]} onClick={handleHome}><AiOutlineHome/></span>
                    <span className={style["nav-el"]} onClick={handleAbout}>About</span>
                    <span className={style["nav-el-sml"]} onClick={handleAbout}><AiOutlineInfoCircle/></span>
                    <span className={style["nav-el"]} onClick={handleProject} data-testid="contact-btn">Projects</span>
                    <span className={style["nav-el-sml"]} onClick={handleProject} data-testid="contact-btn"><AiOutlineFundProjectionScreen/></span>
                    <span className={style["nav-el"]} onClick={handleServices}>Services</span>
                    <span className={style["nav-el-sml"]} onClick={handleServices}><MdDesignServices/></span>
                    <span className={style["nav-el"]} onClick={handleContact}>Contact</span>
                    <span className={style["nav-el-sml"]} onClick={handleContact}><AiOutlineContacts/></span>

                </div>
            </header>
            <main className={style["main-wrapper"]} ref={homeRef}>
                <div></div>
                <div className={style["title-wrapper"]}>
                    <h1 className={style["title"]}>Hello, I'm Ben Parker</h1>
                </div>
                <div className={style["user-image"]}></div>
                <div></div>
            </main>
            <div ref={aboutRef}>
                <About/>
            </div>
            <div ref={projectRef}>
                <Project projFiles={projFiles[0]}/>
            </div>
            <div>
                <Project projFiles={projFiles[1]}/>
            </div>
            <div>
                <Project projFiles={projFiles[2]}/>
            </div>

            <div ref={serviceRef}>
                <Services/>
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </div>
    )
}