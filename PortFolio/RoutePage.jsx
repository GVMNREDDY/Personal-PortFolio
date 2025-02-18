import React from "react";
import HeaderFiles from "./Header";
import BodyBackground from "./Body_Background.jsx";

const RoutingPortfolio = () => {
    return (
        <>
            <div>
                {/* <video autoPlay loop muted className="video-background">
                    <source src="/Astroids Rotating.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <HeaderFiles />
                <BodyBackground />
            </div>
        </>
    )
}

export default RoutingPortfolio;