import React, { useState } from "react";
import { Link as ScrollLink, Element, scroller } from "react-scroll";
import Homepage from "./HomePage";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import FAQs from "./FAQs";
import Contact from "./Contact";
import { RiMenu5Line } from "react-icons/ri";
import { GiCrossedSabres } from "react-icons/gi";
import LocationSearchingTwoToneIcon from '@mui/icons-material/LocationSearchingTwoTone';

const HeaderFiles = () => {
    const [menubar, setMenubar] = useState(true);
    const [srchbar, setsrchbar] = useState(true);
    const [searchValue, setSearchValue] = useState('');


    const menuClicked = () => {
        setMenubar(!menubar);
    };

    const searchActive = () => {
        setsrchbar(!srchbar);
    };

    const srchcontent = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = (e) => {
        // Mapping search value to section names
        const sectionMapping = {
            'home': 'home',
            'skills': 'skills',
            'projects': 'projects',
            'services': 'services',
            'faqs': 'faqs',
            'contact': 'contact',
        };

        // If the search value matches a section, scroll to it
        const section = sectionMapping[searchValue.toLowerCase()];
        if (section) {
            scroller.scrollTo(section, {
                smooth: true,
                duration: 500,
            });
        }
        else if(e.target.value <= 0){
            setsrchbar(!srchbar);
        }
    };

    return (
        <>
            <header>
                <nav className="libuttons">
                    <div className="logo-container">
                        <img src="/GVMNRLogo.png" alt="Signal Issue" className="logo first-logo" />
                        <img src="/GVMNRLogos.png" alt="Signal Issue" className="logo second-logo" />
                    </div>
                    <div className="search">
                        {srchbar ? (
                            <LocationSearchingTwoToneIcon onClick={searchActive} />
                        ) : (
                            <div>
                                <input
                                    type="text"
                                    style={{ width: "20rem", paddingLeft: "2rem" }}
                                    onChange={srchcontent}
                                    onBlur={handleSearch}
                                    autoFocus
                                />
                                <button onClick={handleSearch}>Search</button>
                            </div>
                        )}
                    </div>
                    <div className="navbtn">
                        <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
                        <ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
                        <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
                        <ScrollLink to="faqs" smooth={true} duration={500}>FAQs</ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
                        <span className="HeaderIcon">
                            {menubar ? (
                                <RiMenu5Line fontSize={20} onClick={menuClicked} />
                            ) : (
                                <GiCrossedSabres fontSize={20} onClick={menuClicked} />
                            )}
                        </span>
                    </div>
                </nav>
            </header>

            {/* Page Content with Scroll Targets */}
            <main>
                <Element name="home"><Homepage /></Element>
                <Element name="skills"><Skills /></Element>
                <Element name="projects"><Projects /></Element>
                <Element name="services"><Services /></Element>
                <Element name="faqs"><FAQs /></Element>
                <Element name="contact"><Contact /></Element>
            </main>
        </>
    );
};

export default HeaderFiles;
