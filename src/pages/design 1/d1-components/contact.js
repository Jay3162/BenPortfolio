import react, {useState} from 'react';
import style from './contact.module.css';
import emailjs from 'emailjs-com';
import { BsInstagram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

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
                {/* <div></div>
                <div className={style["map"]}></div> */}
                <div></div>
                <div className={style["social-wrapper"]}>

                    <h3><a 
                    href="https://www.instagram.com/_ben.parker/?igshid=YmMyMTA2M2Y%3D"
                    className={style["insta-link"]}
                    ><BsInstagram/></a></h3>
                    <h3>@_ben.parker</h3>
                    <h3></h3>
                    <h3><HiOutlineMail/></h3>
                    <h3>solbluemusic@gmail.com</h3>
                </div>

                <div></div>
            </div>
            
        </div>
    )
}