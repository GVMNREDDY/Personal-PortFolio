import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

const Skills = () => {
    return (
        <>
            <div className="Scontainer1">
                <div class="Sparent1">
                    <div class="Schild Schild1" style={{ width: "29vw", height: "60vh", display: "flex", flexDirection: "column" }}>
                        <div class="content1">FrontEnd</div>
                        <h1 style={{textAlign:"center"}} className="classlabel">Front_End</h1>
                        <div style={{width:"20vw",display:"flex",justifyContent:"space-between",boxSizing:"border-box"}}><h4>Html</h4><div style={{display:"inline",padding:"20px"}}> <IoStar className="ratingstar"/> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> </div></div>
                        <div style={{width:"20vw",display:"flex",justifyContent:"space-between",boxSizing:"border-box"}}><h4>Css</h4><div style={{display:"inline",padding:"20px"}}><IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> </div></div>
                        <div style={{width:"20vw",display:"flex",justifyContent:"space-between",boxSizing:"border-box"}}><h4>Java Script</h4><div style={{display:"inline",padding:"20px"}}> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> </div></div>
                        <div style={{width:"20vw",display:"flex",justifyContent:"space-between",boxSizing:"border-box"}}><h4>React.js</h4><div style={{display:"inline",padding:"20px"}}> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> </div></div>
                        <div style={{width:"20vw",display:"flex",justifyContent:"space-between",boxSizing:"border-box"}}><h4>BootStrap</h4><div style={{display:"inline",padding:"20px"}}> <IoStar className="ratingstar" /> <IoStarOutline /> <IoStarOutline /> <IoStarOutline /> <IoStarOutline /></div></div>
                    </div>
                    <div class="Schild Schild2" style={{ width: "30vw", height: "60vh", display: "flex", flexDirection: "column" }}>
                        <div class="content1">DataBase</div>
                        <h1 style={{textAlign:"center"}} className="classlabel">DataBases</h1>
                        <div style={{width:"20vw",display:"flex",justifyContent:"space-between",boxSizing:"border-box"}}><h4>Sql</h4><div style={{display:"inline",padding:"20px"}}> <IoStar className="ratingstar"/> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> </div></div>
                        <div style={{width:"20vw",display:"flex",justifyContent:"space-between",boxSizing:"border-box"}}><h4>SpringBoot</h4><div style={{display:"inline",padding:"20px"}}> <IoStar className="ratingstar" /> <IoStarOutline /> <IoStarOutline /> <IoStarOutline /> <IoStarOutline /> </div></div>
                    </div>
                    <div class="Schild Schild3" style={{ width: "30vw", height: "60vh", display: "flex", flexDirection: "column" }}>
                        <div class="content1">BackEnd</div>
                        <h1 style={{textAlign:"center"}} className="classlabel">Back_End</h1>
                        <div style={{width:"20vw",display:"flex",justifyContent:"space-between",boxSizing:"border-box"}}><h4>Java</h4><div style={{display:"inline",padding:"20px"}}> <IoStar className="ratingstar"/> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> </div></div>
                        <div style={{width:"20vw",display:"flex",justifyContent:"space-between",boxSizing:"border-box"}}><h4>Python</h4><div style={{display:"inline",padding:"20px"}}> <IoStar className="ratingstar"/> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStar className="ratingstar" /> <IoStarOutline /> </div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;