// Styling
import '../styles/ProjectKST.css';

// Images 
import p1 from '../images/kst/1.png';
import p2 from '../images/kst/2.png';
import p3 from '../images/kst/3.png';
import p4 from '../images/kst/4.png';
import p5 from '../images/kst/5.png';
import p6 from '../images/kst/6.png';

// Animations
import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


// KST Project Page
function ProjectKST() {

    // Animations
    useEffect(()=> {
        var sections = document.querySelectorAll(".section-info");

        // Project Images
        sections.forEach((section, index) => {
            gsap.from(section, {
                x: -100,
                opacity: 0,
                duration: 3,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse'
                },
                ease: Power3.easeOut,
                delay: 0.4,
            });
        });

    })

    return (
        <div class="first project-kst flex flex-d-col center">
            {/* Splash */}
            <div class="project-kst-wrapper splash flex center">
                <div class="splash-wrapper flex flex-d-col center">
                    <h3 class="overview-title">
                        Overview
                    </h3>
                    
                    <div class="overview-info flex flex-row space-between">
                        <div class="info-left">
                            <h1>
                                Kelly Strayhorn Theater
                            </h1>
                            <p>
                            The Kelly Strayhorn Theater is a local Pittsburgh theater that hosts and produces a variety of contemporary and experimental shows. In the midst of a pandemic, the theater team seeks ways to improve user engagement, community participation, donations. Our team was tasked to understand the theater problem space and then make proposals for changes. 
                            </p>
                            <div class="project-tag-wrapper flex flex-d-row">
                                <div class="tag flex center">
                                    <div class="h5-tag">User Research</div>
                                </div>
                                <div class="tag flex center">
                                    <div class="h5-tag">Project Management</div>
                                </div>
                            </div>
                        </div>
                        <div class="info-right">
                            <div class="info-detail">
                                <p class="bold">Role</p>
                                <p>Project manager, interviewer, researcher</p>
                            </div>
                            <div class="info-detail">
                                <p class="bold">Team</p>
                                <p>Steve Orchosky, Jailyn Zabala, Sabrina Zhai, Emily Zou</p>
                            </div>
                            <div class="info-detail">
                                <p class="bold">Timeline</p>
                                <p>October - December 2020, 2 months</p>
                            </div>                            
                            <div class="info-detail">
                                <p class="bold">Tools</p>
                                <p>Slack, Google Drive, Excel, Mural, Figma, Zoom, Wireframes CC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Research */}
            <section class="section-info">
                <h3>
                    Research
                </h3>
                <div class="flex flex-row space-between">
                    <div class="section-img-wrapper">
                        <img class="section-img" src={p1} alt="kst promotional dance"></img>
                    </div>
                    <div class="section-text">
                        <h1 class="flex center-vertical">
                            Background
                        </h1>
                        <p>
                            The Kelly Strayhorn Theater has a rich history of promoting and engaging with diversity in the East Liberty Community. Our team have to be careful in the types of participants that we recruit, making sure to account for a wide array of people. In addition, the coronavirus pandemic has made it crucial to not only understand how traditional theaters work but also the caveats of a virtual experience, so that we can integrate the best of both. 
                        </p>
                    </div>
                </div>
            </section>
            {/* Our Focus */}
            <section class="section-info flex flex-row space-between">
                <div class="section-text flex flex-d-col">
                    <h1>
                        Our Focus
                    </h1>
                    <p>
                        After conducting some preliminary findings and looking at competitor websites, we narrowed down the scope of our project so that we find ways to increase participation. In order to keep the theater thriving, we must find a way for the theater to work with the established community but also to expand to working with new members. 
                    </p>
                </div>
                <div class="section-img-wrapper">
                    <img class="section-img" src={p2} alt="kst promotional dance"></img>
                </div>
            </section>
            {/* User Research */}
            <div class="section-info full-bleed">
                <div class="user-research flex flex-d-row">
                    <img class="section-img" src={p3} alt="affinity diagram"></img>
                    <div class="user-research-text ">
                        <h1>
                            User Research
                        </h1>
                        <p>
                            For the user research, we used a Walk the Wall Method to generate insights. We also conducted semi-structured interviews with the Kelly Strayhorn clients and contextual inquiries with digital media consumers through zoom. In addition, we analyized competitor sites.
                        </p>
                        {/* <a href="highlight-box">Deliverable</a> */}
                    </div>
                </div>
                <div class="research-pictures flex flex-d-row space-around">
                    <img src={p4} alt="word document of research notes"></img>
                    <img src={p5} alt="zoom research meetings"></img>
                    <img src={p6} alt="person holding up phone from contextual inquiry"></img>
                </div>
            </div>
            {/* Insights */}
            <section class="section-info">
                <h3>Insights</h3>
                <div class="text-cards-wrapper flex flex-d-row flex-wrap space-between">
                    <div class="text-card">
                        <h1>
                            01
                        </h1>
                        <p>
                            Users prefer to engage with media that they can flexibly enjoy.
                        </p>
                        <p class="quote">
                            “When you are watching Tik Toks you can log off anytime.”
                        </p>
                    </div>

                    <div class="text-card">
                        <h1>
                            02
                        </h1>
                        <p>
                            Users usually dedicate their undivided attention when watching long-form media.                        
                        </p>
                        <p class="quote">
                            “I set aside time to watch everything because I don’t like to watch things half way”                        
                        </p>
                    </div>

                    <div class="text-card">
                        <h1>
                            03
                        </h1>
                        <p>
                            Users do other things to enhance their experience of watching show.                        
                            </p>
                        <p class="quote">
                            “Eating while watching...feels like no time is lost.”                        
                        </p>
                    </div>

                    <div class="text-card">
                        <h1>
                            04
                        </h1>
                        <p>
                            Users often primarily enjoy socializing after interacting with digital media. 
                        </p>
                        <p class="quote">
                            “We’ll talk about shows afterwards.”
                        </p>
                    </div>
                </div>
            </section>
            {/* Reflection */}
            <div class="full-bleed dark flex center">
                <div class="section-info dark-section-wrapper">
                    <h3>Next Steps</h3>
                    <div class="dark-text-wrapper">
                        <h1>
                            Designing a Solution
                        </h1>
                        <p>
                            Currently, our team is in the middle of transforming user insights into actionable plans and prototypes. We are going to use the method of speed dating to come up with prototypes for programs. By the end of December 2020, you will get to see this page fully fleshed out with not only the current methods, but also the final product and results. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default ProjectKST