import React from "react";
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';

const Homepage = () => {
    return (
        <>
            <div class="hcontainer1">
                <div>
                    <div><h1 style={{display:"block", textAlign:"center"}}>H<i style={{color:"red", display:"inline"}}>i</i>! 👋</h1><i style={{display:"inline",textAlign:"right"}}>I’m <i className="namefont"> G V M N R !</i></i></div>
                    <h4 className="textbelow">a creative and versatile web designer with a keen <i style={{textShadow:"1px 1px 10px red"}}>👀</i> for detailing</h4>
                </div>
                <img src="/HD.png" alt="Signal Issue" className="img1" />
                <div className="smsclasstone" style={{ background: "red", zIndex: "100", color: "whitesmoke", backgroundColor: "rgba(52, 48, 48, 0.8)", width: "3rem", height: "3rem", position: "fixed", right: "3rem", bottom: "3rem", paddingTop: ".2rem", textAlign: "center", alignContent: "center", borderRadius: "50% 50% 50% 0px" }}>
                    <SmsTwoToneIcon />
                </div>
            </div>
        </>
    )
}

export default Homepage;