// Styling
import '../styles/ProjectHack.css';

// Links
import { Link, withRouter } from "react-router-dom";


// Images 
import p1 from '../images/hack/1.png';
import p2 from '../images/hack/2.png';
import p3 from '../images/hack/3.png';
import p4 from '../images/hack/4.png';
import p5 from '../images/hack/5.png';
import p6 from '../images/hack/6.png';
import p7 from '../images/hack/7.png';

// Animations
import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


// Hack to the Future Project Page
function ProjectHack() {
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
        <div class="first project-hack flex flex-d-col center">
            {/* Header Page */}
            <div class="project-hack-wrapper splash flex center">
                <div class="splash-wrapper flex flex-d-col center">
                    <h3 class="overview-title">
                        Overview
                    </h3>
                    <div class="overview-info flex flex-row space-between">
                        <div class="info-left">
                            <h1>
                                Hack to the Future                            
                            </h1>
                            <p>
                                The WiCS club at the University of Virginia holds an annual hackathon each year. It’s a new tradition that was started a couple of years ago, and there’s still a lot to put together. Without any documentation and barely any money from previous years, the co-directors were tasked to recruit and train a new team, raise funds, and establish procedures and templates for the coming years. 
                            </p>
                            <div class="project-tag-wrapper flex flex-d-row">
                                <div class="tag flex center">
                                    <div class="h5-tag">leadership</div>
                                </div>
                                <div class="tag flex center">
                                    <div class="h5-tag">product thinking</div>
                                </div>
                                <div class="tag flex center">
                                    <div class="h5-tag">visual design</div>
                                </div>
                            </div>
                            <Link class="link" to="https://www.cavalierdaily.com/article/2019/04/hack-to-the-future-gives-opportunity-to-build-innovative-and-futuristic-projects">
                                <h4 class="highlight-box">
                                    <span class="highlight"></span>
                                    View article
                                </h4>
                            </Link>
                        
                        </div>
                        <div class="info-right">
                            <div class="info-detail">
                                <p class="bold">Role</p>
                                <p>Co-director, Project Manager, Head Visual Designer, Mentor</p>
                            </div>
                            <div class="info-detail">
                                <p class="bold">Team</p>
                                <p>Women in Computer Science Hackathon Team, Gabrielle DepFilipo, Emily Zou</p>
                            </div>
                            <div class="info-detail">
                                <p class="bold">Timeline</p>
                                <p>December - April 2019, 4 months</p>
                            </div>                            
                            <div class="info-detail">
                                <p class="bold">Tools</p>
                                <p>Google Drive, Slack, Figma, Google Drawings, DSLR camera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Goals & Priorities */}
            <section class="section-info flex flex-d-col flex-center">
                <h3>Goals & Priorities</h3>

                <div class="box1 flex flex-d-row space-between">
                    <div class="goals-info">
                        <h1>
                            1. Focusing on Diversity
                        </h1>
                        <p>
                            The main goal of the Women in Computer Science Club is to continue the recruitment of women in the STEM field. Because our hackathon team is a division of this club, anything that we design have to put women and minorities at the forefront.
                        </p>
                        
                    </div>
                    <div class="img-wrapper flex center">
                        <img src={p1} alt="people working on laptops"></img>
                    </div>
                </div>

                <div class="box2">
                    <h1> 
                        2. Building a Team 
                    </h1>
                    <p>
                        Both of us co-directors have no experience in leading a hackathon, so we must do careful research and recruit the right kinds of people to do the jobs that we need to get done. In addition, we must make sure team understands the smaller picture of a hackathon, but also the bigger picture of funneling women into STEM.
                    </p>
                </div>
                

                <div class="box3">
                    <h1> 
                        3. Raising Money
                    </h1>
                    <p>
                        Without money, it would not be possible to host a traditional hackathon. We have to consider costly items such as free food, shirts, and stickers for hundreds of people and marketing materials.  
                    </p>
                </div>

            </section>

            {/* Obstacles & Solutions */}
            <section class="section-info ">
                <h3>Obstacles & Solutions</h3>

                <div class="solution">
                    <div class="number-and-content flex flex-d-row">
                        <div class="number">
                            <h1>01</h1>
                        </div>
                        <div class="content">
                            <h1>
                                How can we lower the barrier to entry for computer science?
                            </h1>
                            <p>
                                While most clubs at UVA have complicated applications in which students compete with past history, we opted out of that process. We did this because that would discourage people with no experience from applying, which tends to be women and people of color. We didn’t want to perpetuate a system of inequality when selecting our team. 
                            </p>
                        </div>
                    </div>

                    <div class="number-and-content flex flex-d-row">
                        <div class="number">
                            <h1>02</h1>
                        </div>
                        <div class="content">
                            <h1>
                                How do we make sure our team members have what they need?                             
                            </h1>
                            <p>
                                One downside of letting anyone apply is that a lot of people are inexperienced and will need guidance. In order to combat this, Gabby and I custom created many templates, guides, and resources for new members to learn from. 
                            </p>
                        </div>
                    </div>

                    <div class="number-and-content flex flex-d-row">
                        <div class="number">
                            <h1>03</h1>
                        </div>
                        <div class="content">
                            <h1>
                                How can we get funding within four months? 
                            </h1>
                            <p>
                                There’s a very short time for getting funding, so we focused on UVA alumni. We also developed plans to divide and conquer so that every day, someone was emailing a recruiter. Some emails were definitely cold emails, but surprisingly, some people responded. In addition, I wrote two unique and different templates that anyone could use. 
                            </p>
                        </div>
                    </div>

                    <div class="number-and-content flex flex-d-row">
                        <div class="number">
                            <h1>04</h1>
                        </div>
                        <div class="content">
                            <h1>
                                How do we differentiate from other hackathons at UVA? 
                            </h1>
                            <p>
                                UVA has another hackathon group that we must account for. After all, we share the hackathon space and companies with them. We wanted to adopt a collaborative approach when marketing and fundraising. We didn’t want a situation where we stifle each other for funds and resources because companies did not understand that we were a different group. Hence, we set up liasons for both clubs and cross-promoted materials for each club. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section class="section-info ">
                <div class="gallery-row">
                    <h1>Workspace</h1>
                    <div class="gallery-picture-row flex flex-d-row space-between">
                        <img src={p2} alt="virtual workspace"></img>
                        <img src={p3} alt="physical workspace"></img>
                    </div>
                </div>
                <div class="gallery-row">
                    <h1>New Documentation</h1>
                    <div class="gallery-picture-row flex flex-d-row space-between">
                        <img src={p4} alt="template budget sheet"></img>
                        <img src={p5} alt="template email"></img>
                    </div>
                </div>
                <div class="gallery-row">
                    <h1>Day of Event</h1>
                    <div class="gallery-picture-row flex flex-d-row space-between">
                        <img src={p6} alt="willow tree employee mentoring"></img>
                        <img src={p7} alt="hackathon team posing with banner"></img>
                    </div>
                </div>
            </section>

            {/* Reflection */}
            <div class="full-bleed dark flex center">
                <div class="section-info dark-section-wrapper">
                    <h3>Reflection</h3>
                    <div class="dark-text-wrapper">
                        <h1>
                            Looking Back
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
export default ProjectHack