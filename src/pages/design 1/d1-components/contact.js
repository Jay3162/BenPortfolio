import react, {useState, useRef} from 'react';
// import Navbar from './navbar/navbar';
import style from './contact.module.css';

export default function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    return (
        <div className={style["container"]} data-testid="contact-form">
            {/* <Navbar/> */}
            <div className={style["wrapper"]}>
                <div></div>
                <form className={style["form"]}>
                    <label>Name</label>
                    <input className={style["input-bar"]}></input>
                    <label>Email</label>
                    <input className={style["input-bar"]}></input>
                    <label>Message</label>
                    <textarea className={style["message-bar"]}></textarea>
                    <button className={style["submit"]}>Send</button>
                </form>
                <div className={style["map"]}></div>
                <div></div>
            </div>
            
        </div>
    )
}