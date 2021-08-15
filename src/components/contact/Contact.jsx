import { useState } from "react";
import "./contact.scss"
import { Mail, LinkedIn, GitHub } from "@material-ui/icons"

export default function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <div className="details">
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>alexaumh@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <span>
                            <a href="https://www.linkedin.com/in/alex-au-97592379/" target="_blank" rel="noreferrer">
                                https://www.linkedin.com/in/alex-au-97592379/
                            </a>
                        </span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon"/>
                        <span>
                            <a href="https://github.com/alexau1012" target="_blank" rel="noreferrer">
                                alexau1012
                            </a>
                        </span>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                    {message && <span>Thanks, I'll reply ASAP.</span>}
                </form>
            </div>
        </div>
    )
}