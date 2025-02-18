import React from "react";
import { SiWhatsapp, SiYoutube, SiDiscord, SiFacebook, SiInstagram } from "react-icons/si";

const Contact = () => {
    return (
        <>
            <div class="Ccontainer1">
                {/* <h1>Contact</h1> */}
                <div class="FooterIcons">
                    <p className="footptag"><SiWhatsapp fontSize={35} /></p>
                    <p className="footptag"><SiYoutube fontSize={35} /></p>
                    <p className="footptag"><SiDiscord fontSize={35} /></p>
                    <p className="footptag"><SiFacebook fontSize={35} /></p>
                    <p className="footptag"><SiInstagram fontSize={35} /></p>
                </div>
            </div>
        </>
    )
}

export default Contact;