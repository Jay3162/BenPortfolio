import React, {useRef, useState, useEffect} from 'react';
import Contact from './d1-components/contact';
import About from './d1-components/about/about';
import style from './design1.module.css';
import Project from './d1-components/project/project';
import Services from './d1-components/services/services';
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineFundProjectionScreen, AiOutlineContacts} from 'react-icons/ai';
import {MdDesignServices} from 'react-icons/md';


export default function Design1() {
    const contactRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const serviceRef = useRef(null);

    // 

    const handleContact = (e) => {
        e.preventDefault();
        if (!contactRef.current) return;
        contactRef.current.scrollIntoView({behaviour: "smooth"});
    }

    const handleHome = (e) => {
        e.preventDefault();
        if (!homeRef.current) return;
        homeRef.current.scrollIntoView({behaviour: "smooth"});
    }

    const handleAbout = (e) => {
        e.preventDefault();
        if (!aboutRef.current) return;
        aboutRef.current.scrollIntoView({behaviour: "smooth"});
    }

    const handleProject = (e) => {
        e.preventDefault();
        if (!projectRef.current) return;
        projectRef.current.scrollIntoView({ behaviour: "smooth"});
    }

    const handleServices = (e) => {
        e.preventDefault();
        if (!serviceRef.current) return;
        serviceRef.current.scrollIntoView({ behaviour: "smooth"});
    }

     return (
        <div className={style["container"]}>
            <header className={style["header"]}>
                <div className={style["navbar"]}>
                    <span className={style["nav-el"]} onClick={handleHome}>Home</span>
                    <span className={style["nav-el-sml"]} onClick={handleHome}><AiOutlineHome/></span>
                    <span className={style["nav-el"]} onClick={handleAbout}>About</span>
                    <span className={style["nav-el-sml"]} onClick={handleAbout}><AiOutlineInfoCircle/></span>
                    <span className={style["nav-el"]} onClick={handleProject} data-testid="contact-btn">Projects</span>
                    <span className={style["nav-el-sml"]} onClick={handleProject} data-testid="contact-btn"><AiOutlineFundProjectionScreen/></span>
                    <span className={style["nav-el"]} onClick={handleServices}>Services</span>
                    <span className={style["nav-el-sml"]} onClick={handleServices}><MdDesignServices/></span>
                    <span className={style["nav-el"]} onClick={handleContact}>Contact</span>
                    <span className={style["nav-el-sml"]} onClick={handleContact}><AiOutlineContacts/></span>

                </div>
            </header>
            <main className={style["main-wrapper"]} ref={homeRef}>
                <div></div>
                <div className={style["title-wrapper"]}>
                    <h1 className={style["title"]}>Hello, I'm Ben Parker</h1>
                </div>
                <div className={style["user-image"]}></div>
                <div></div>
            </main>
            <div ref={aboutRef}>
                <About/>
            </div>
            <div ref={projectRef}>
                <Project/>
            </div>
            <div ref={serviceRef}>
                <Services/>
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </div>
    )
}