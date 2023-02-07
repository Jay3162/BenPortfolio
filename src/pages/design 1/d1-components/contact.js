import react, {useState, useRef, useEffect} from 'react';
// import Navbar from './navbar/navbar';
import style from './contact.module.css';
import emailjs from 'emailjs-com';

export default function Contact({isLight}) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [msg, setMsg] = useState();
    const [msgSent, setMsgSent] = useState(false);
    // prepare message, email and sender name with emailjs api details
    const handleSubmit = async(e) => {
        e.preventDefault();

        if (name && email && msg) {
            const serviceId = "service_2k4kqmo";
            const templateId = "template_qt5wg93";
            const userId = "KWantKlTXgtwPmxv1";

            const templateParams = {
                name,
                email,
                phone,
                msg
            };

            emailjs.init(userId);

            // send request to emailjs api 
            emailjs.send(serviceId, templateId, templateParams)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error);
                });
            setName(""); 
            setEmail("");
            setPhone("");
            setMsg("");
            console.log("success");
            setMsgSent(true);
        }
    }
    return (
        <div className={style["container"]} data-testid="contact-form">
            <h2>Get In Touch</h2>
            <div className={style["wrapper"]}>
                <div></div>
                <form className={style["form"]} onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                    className={style["input-bar"]} 
                    onChange={(e) => setName(e.target.value)} 
                    id="name"
                    style=
                    {{
                        borderBottomColor: isLight ? "rgb(26, 27, 29)" : "#ccc",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        backgroundColor: "transparent",
                        color: isLight ? "rgb(26, 27, 29)" : "#ccc",
                        transition: "500ms ease-in-out",
                    }}
                    required
                    ></input>
                    <label htmlFor="email">Email</label>
                    <input 
                    className={style["input-bar"]} 
                    onChange={(e) => setEmail(e.target.value)} 
                    id="email"
                    style=
                    {{
                        borderBottomColor: isLight ? "rgb(26, 27, 29)" : "#ccc",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        backgroundColor: "transparent",
                        color: isLight ? "rgb(26, 27, 29)" : "#ccc",
                        transition: "500ms ease-in-out",
                    }}
                    required
                    ></input>
                    <label htmlFor="message">Message</label>
                    <textarea 
                    className={style["message-bar"]} 
                    onChange={(e) => setMsg(e.target.value)} 
                    id="message"
                    style=
                    {{
                        borderBottomColor: isLight ? "rgb(26, 27, 29)" : "#ccc",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        backgroundColor: "transparent",
                        color: isLight ? "rgb(26, 27, 29)" : "#ccc",
                    }}
                    required
                    ></textarea>
                    <button 
                    className={style["submit"]} 
                    type="submit"
                    style={{
                        borderColor: isLight ? "rgb(26, 27, 29)" : "#ccc",
                        color: isLight ? "rgb(26, 27, 29)" : "#ccc",
                        backgroundColor: isLight ? "#ccc" : "rgb(26, 27, 29)"

                    }}
                    >submit</button>
                    {msgSent ? <h2>SENT!</h2> : <div></div>}
                </form>
                <div></div>
                <div className={style["map"]}></div>
                <div></div>
            </div>
            
        </div>
    )
}