import React, {useState, useRef} from 'react';
import style from './artist.module.css';
import { FaSpotify } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';
import emailjs from 'emailjs-com';
import saturday from './video/Lazy Saturday Set.mp4';

export default function Artist({isLight}) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [success, setSuccess] = useState("");
    const [playVid, setPlayVid] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        setPlayVid(!playVid);
        videoRef.current.play();
    }

    const handlePause = () => {
        setPlayVid(!playVid);
        videoRef.current.pause();
    }

    const handleClick = () => {
        setOpen(!open);
    }

    const handleHover = (e) => {
        if (isLight) {
            e.target.style.color = "rgb(26, 27, 29)" 
        } else {
            e.target.style.color = "#ccc"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_2k4kqmo";
        const templateId = "template_l5mre8v";
        const userId = "KWantKlTXgtwPmxv1";

        const params = {
            name,
            email,
            msg,
        }

        emailjs.init(userId);

        emailjs.send(serviceId, templateId, params)
            .then((resp) => {
                console.log(resp.text)
            }, ((error) => {
                console.log(error)
            }))
        setName("");
        setEmail("");
        setMsg("");
        setSuccess(true);
    }

    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                <div></div>
                <div className={style["inner-wrapper"]}>
                    <h1>Artist</h1>
                    <p>
                        I’m also an artist myself. I release music as Solblue and 
                        am half of a duo called Dividance. Check the links to both
                        Spotify pages here...
                    </p>
                    <div className={style["spot-wrapper"]}>
                        <a className={style["spot-link"]} href="https://open.spotify.com/artist/1OAh51aFmI0LooX5sq7EMv">
                            <FaSpotify/>
                        </a>
                        {/* <a className={style["spot-link"]} href="https://open.spotify.com/artist/1OAh51aFmI0LooX5sq7EMv">
                            <FaSpotify/>
                        </a> */}
                    </div>
                    {open ? 
                    <div 
                    className={style["dj-tab"]}
                    style=
                        {{
                            backgroundColor: isLight ? "#ccc" : "rgb(26, 27, 29)",
                            color: isLight ? "rgb(26, 27, 29)" : "#ccc",
                            borderColor: isLight ? "rgb(26, 27, 29)" : "#ccc"
                        }}>
                        <div 
                        className={style["close-wrapper"]}
                        style=
                        {{
                            color: isLight ? "rgb(26, 27, 29)" : "#ccc"
                        }}
                        >
                            <button 
                            className={style["close-btn"]} 
                            onClick={handleClick}
                            style=
                            {{
                                color: isLight ? "rgb(26, 27, 29)" : "#ccc"
                            }}
                            >
                                <TfiClose/>
                            </button>
                        </div>
                        <h2>Solblue - DJ Booking</h2>
                        <p>
                            I’ve played sets in esteemed venues across London, Marbella and Thailand,
                             specialising in euphoric melodies, break-beats and deep, soulful grooves.
                        </p>
                        <div className={style["lower-wrapper"]}>
                            <form className={style["form-wrapper"]} onSubmit={handleSubmit}>
                                <label>Name</label>
                                <input 
                                onChange={(e) => setName(e.target.value)}
                                style=
                                {{
                                    borderBottomColor: isLight ? "rgb(26, 27, 29)" : "#ccc"
                                }}
                                required
                                />
                                <label>Email</label>
                                <input 
                                onChange={(e) => setEmail(e.target.value)}
                                style=
                                {{
                                    borderBottomColor: isLight ? "rgb(26, 27, 29)" : "#ccc"
                                }}
                                required
                                />
                                <label>Message</label>
                                <textarea 
                                onChange={(e) => setMsg(e.target.value)}
                                style=
                                {{
                                    borderBottomColor: isLight ? "rgb(26, 27, 29)" : "#ccc"
                                }}
                                required
                                />
                                <button 
                                className={style["submit-btn"]}
                                style=
                                {{
                                    borderColor: isLight ? "rgb(26, 27, 29)" : "#ccc",
                                    backgroundColor: isLight ? "#ccc" : "rgb(26, 27, 29)",
                                    color: isLight ? "rgb(26, 27, 29)" : "#ccc"
                                }}
                                >submit</button>
                                {success ? <h2>SENT!</h2> : <div></div>}
                            </form>
                            
                            <div className={style["vid-wrapper"]}>
                                <video className={style["vid"]} ref={videoRef} src={saturday} controls></video>
                                {playVid ? <button 
                                className={style["play-btn"]} 
                                onClick={handlePause}
                                style=
                                {{
                                    borderColor: isLight ? "rgb(26, 27, 29)" : "#ccc",
                                    backgroundColor: isLight ? "#ccc" : "rgb(26, 27, 29)",
                                    color: isLight ? "rgb(26, 27, 29)" : "#ccc"
                                }}
                                >pause</button> :
                                <button 
                                className={style["play-btn"]} 
                                onClick={handlePlay}
                                style=
                                {{
                                    borderColor: isLight ? "rgb(26, 27, 29)" : "#ccc",
                                    backgroundColor: isLight ? "#ccc" : "rgb(26, 27, 29)",
                                    color: isLight ? "rgb(26, 27, 29)" : "#ccc"
                                }}
                                >play</button>}
                                <div></div>
                                    {/* <video ref={} src={}></video>
                                    {playVid ? <button></button> : <button></button>} */}
                            </div>
                        </div>
                        
                    </div> : 
                    <div></div>}
                    <button 
                    className={style["dj-btn"]} 
                    onClick={handleClick}
                    onMouseOver={handleHover}
                    style=
                    {{
                        color: isLight ? "rgb(26, 27, 29)" : "#ccc",
                        backgroundColor: isLight ? "#ccc" : "rgb(26, 27, 29",
                        borderColor: isLight? "rgb(26, 27, 29)" : "#ccc",
                    }}
                    >DJ Bookings</button>
                </div>
                <div></div>
            </div>
        </div>
    )
}