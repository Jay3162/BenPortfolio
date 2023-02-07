import React, {useRef, useState} from 'react';

// page section links
import Contact from './d1-components/contact';
import About from './d1-components/about/about';
import style from './design1.module.css';
import Project from './d1-components/project/project';
import Services from './d1-components/services/services';
import Artist from './d1-components/artist/artist';

// react icon imports
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineFundProjectionScreen, AiOutlineContacts} from 'react-icons/ai';
import {MdDesignServices} from 'react-icons/md';
import { BsMusicNote } from 'react-icons/bs';

// images
import anjel_band from './photos/IMG_3266.jpg';
import anjel_jam from './photos/IMG_2981.jpg';
import charlie from './photos/IMG_3268.jpg';
import charlie_thumb from './photos/IMG_6835.jpg';
import harry_thomas from './photos/IMG_3241 2.jpg';
// audio
import anjel from './d1-components/music/Anjel - Is It Fair_.wav';
import charlie_jones from './d1-components/music/2 - Tragic Therapy.wav';
import speed_light from './d1-components/music/5 - Speed of Light.wav';
import charlie_hooked from './d1-components/music/Charlie Jones · Charlie Jones - Hooked on a Feelin.mp3';
import i_know from './d1-components/music/I Know When the Musics too Loud.wav';
// import medicine from './d1-components/music/Medicine MASTER 24_44 141222.wav';
import anybody from './d1-components/music/Harry Thomas - Anybody beat.mp3';
import dont_tell from './d1-components/music/Harry Thomas - Dont Tell Me.mp3';

// easily update project files by editing this object
const projFiles = [
    {
        "title" : "Anjel",
        "text" : "Anjel: Angel are a young west London band. When they asked me to work with them they hadn’t even recorded their first demo. This track is called “Is It fair?” I worked with them from the first recording session to the final master.",
        "info" : "Role: Sound Engineer, Producer, Mix Engineer, Mastering Engineer.",
        "song" : 
        {
            "anjel" : anjel
        },
        "songName" : {
            "anjel": "Is It Fair"
        },
        "image" : 
        { 
            "anjel_band" : anjel_band,
            // "anjel_jam" : anjel_jam
        }
    },
    {
        "title" : "Charlie Jones",
        "text" : "Charlie Jones: Charlie is a former X factor finalist who has spent his career in different bands. He came to me at the start of the relaunch of his solo career wanting to forge a new sound. We have worked together on several tracks, creating a radio-ready dance-centric sound for him. The first of these tracks “Hooked on a Feelin’” was released in September 2022.",
        "info" : "Role: Songwriter, Producer, Mix Engineer.",
        "song" : 
        {
            "charlie_jones" : charlie_jones, 
            "speed_light" : speed_light,
            "charlie_hooked" : charlie_hooked,
            "i_know" : i_know,
        },
        "songName" : {
            "charlie_jones" : "Tragic Therapy", 
            "speed_light" : "Speed of Light",
            "charlie_hooked" : "Hooked on a Feeling",
            "i_know" : "I Know",
        },
        "image" : 
        {
            "charlie" : charlie,
            // "charlie_thumb" : charlie_thumb
        }
    }, 
    {
        "title": "Harry Thomas",
        "text": "Harry Thomas: Harry is a DJ who has recently tried his hand in production. He came to me to help him with the final touches of his EP “Don’t Tell Me”, as he prepared it for release.",
        "info" : "Role: Producer, Mix Engineer, Mastering Engineer",
        "song" : {
            "Anybody" : anybody,
            "Don't Tell" : dont_tell
        },
        "songName" : {
            "Anybody" : "Anybody Beat",
            "Don't Tell" : "Don't Tell Me"
        },
        "image" : {
            "harry" : harry_thomas
        }
    },
]


export default function Design1() {
    // refs for each navbar element
    const contactRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const serviceRef = useRef(null);
    const artistRef = useRef(null);

    const [isLight, setIsLight] = useState(false);

    // inverts the main color layout of the site
    const handleLight = (e) => {
        e.preventDefault();
        setIsLight(!isLight);
    }
 
    // Each of these functions scroll the page to the div containing the target ref
    const handleContact = (e) => {
        e.preventDefault();
        if (!contactRef.current) return;
        contactRef.current.scrollIntoView({behavior: "smooth"});
    }

    const handleHome = (e) => {
        e.preventDefault();
        if (!homeRef.current) return;
        homeRef.current.scrollIntoView({behavior: "smooth"});
    }

    const handleAbout = (e) => {
        e.preventDefault();
        if (!aboutRef.current) return;
        aboutRef.current.scrollIntoView({behavior: "smooth"});
    }

    const handleProject = (e) => {
        e.preventDefault();
        if (!projectRef.current) return;
        projectRef.current.scrollIntoView({ behavior: "smooth"});
    }

    const handleServices = (e) => {
        e.preventDefault();
        if (!serviceRef.current) return;
        serviceRef.current.scrollIntoView({ behavior: "smooth"});
    }

    const handleArtist = (e) => {
        e.preventDefault();
        if (!artistRef.current) return;
        artistRef.current.scrollIntoView({ behavior: "smooth"});
    }

     return (
        <div className={style["container"]} 
            style={{
                backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
                color: isLight ? 'rgb(26, 27, 29)' : '#ccc',
            }}
        >
            <header className={style["header"]}>
                <div className={style["navbar"]}>
                    <span className={style["nav-el"]} onClick={handleHome}>Home</span>
                    <span className={style["nav-el-sml"]} onClick={handleHome}><AiOutlineHome/></span>
                    <span className={style["nav-el"]} onClick={handleAbout}>About</span>
                    <span className={style["nav-el-sml"]} onClick={handleAbout}><AiOutlineInfoCircle/></span>
                    <span className={style["nav-el"]} onClick={handleProject}>Projects</span>
                    <span className={style["nav-el-sml"]} onClick={handleProject}><AiOutlineFundProjectionScreen/></span>
                    <span className={style["nav-el"]} onClick={handleArtist}>Artist</span>
                    <span className={style["nav-el-sml"]} onClick={handleArtist}><BsMusicNote/></span>
                    <span className={style["nav-el"]} onClick={handleServices}>Services</span>
                    <span className={style["nav-el-sml"]} onClick={handleServices}><MdDesignServices/></span>
                    <span className={style["nav-el"]} onClick={handleContact} data-testid="contact-nav">Contact</span>
                    <span className={style["nav-el-sml"]} onClick={handleContact} data-testid="contact-nav-sml"><AiOutlineContacts/></span>
                </div>
            </header>
            <main 
            className={style["main-wrapper"]} 
            ref={homeRef}
            style=
            {{
                backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
                color: isLight ? 'rgb(26, 27, 29)' : '#ccc'
            }}
            >
                <div></div>
                <div className={style["title-wrapper"]}>
                    <h2 className={style["title"]}>Hello, I'm Solblue...</h2>
                    <button 
                    className={style["light-btn"]} 
                    onClick={handleLight}
                    style=
                    {{
                        backgroundColor: isLight ? "#ccc" : "rgb(26, 27, 29)",
                        color: isLight ? "rgb(26, 27, 29)" : "#ccc",
                        borderRadius: "10px",
                        borderColor: isLight ? "rgb(26, 27, 29)" : "#ccc",
                        borderStyle: "solid", 
                        padding: "1vh 2vw",
                        fontSize: "2vw",
                    }}
                    >{isLight ? "Switch to Dark" : "Switch to Light"}</button>
                    {/* <h3>Ben Parker - Sound Engineering & Music Production (BA)</h3>
                    <h3>Music Producer, Mixing Engineer & Mastering Engineer</h3> */}
                </div>
                <div></div>
                <div className={style["user-image"]}></div>
                <div></div>
            </main>
            <div 
            style=
            {{
                backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
                color: isLight ? 'rgb(26, 27, 29)' : '#ccc'
            }} 
            ref={aboutRef}>
                <About isLight={isLight}/>
            </div>
            
            {/* manually pass the project files into the project component, defining the specific index of each project */}
            <div 
            ref={projectRef}
            style=
            {{
                backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
                color: isLight ? 'rgb(26, 27, 29)' : '#ccc'
            }}>
                <h1>Projects</h1>
                <Project projFiles={projFiles[0]} isLight={isLight}/>
            </div>
            <div
            style=
            {{
                backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
                color: isLight ? 'rgb(26, 27, 29)' : '#ccc'
            }}>
                <Project projFiles={projFiles[1]} isLight={isLight}/>
            </div>
            <div
            style=
            {{
                backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
                color: isLight ? 'rgb(26, 27, 29)' : '#ccc'
            }}>
                <Project projFiles={projFiles[2]} isLight={isLight}/>
            </div>

            
            <div 
            ref={artistRef}
            style=
            {{
                backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
                color: isLight ? 'rgb(26, 27, 29)' : '#ccc'
            }}>
                <Artist isLight={isLight}/>
            </div>

            <div 
            ref={serviceRef}
            style=
            {{
                backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
                color: isLight ? 'rgb(26, 27, 29)' : '#ccc'
            }}>
                <Services isLight={isLight}/>
            </div>

            <div 
            ref={contactRef }
            data-testid="contact-page"
            style=
            {{
                backgroundColor: isLight ? '#ccc' : 'rgb(26, 27, 29)',
                color: isLight ? 'rgb(26, 27, 29)' : '#ccc'
            }}>
                <Contact isLight={isLight}/>
            </div>
        </div>
    )
}