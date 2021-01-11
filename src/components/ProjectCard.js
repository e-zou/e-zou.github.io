// Routing
import { Link, withRouter } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

// ScrollTrigger
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Styling
import '../styles/ProjectCard.css';

gsap.registerPlugin(ScrollTrigger)

// Project card from home page


function ProjectCard({ imgLink, title, tags, link, id}) {
    useEffect(()=> {


        
    }, [])
    
    return (
        <div class="project-card">
            <div class="project-image-wrapper">
                <img src={imgLink} id={id} class="project-image" alt="project image"></img>
            </div>
            <div class="project-info">
                <h1 class="project-title">{title}</h1>
                <div class="project-tag-wrapper flex flex-d-row">
                    {tags.map(tag => (
                        <div class="tag flex center">
                            <div class="h5-tag">{tag}</div>
                        </div>
                    ))}
                </div>
                { link ? 
                    <Link class="link" to={link}>
                        <h4 class="highlight-box">
                            <span class="highlight"></span>
                            View case study
                        </h4>
                    </Link>
                    :
                    <Link class="link" to={link}>
                        <h4 class="highlight-box">
                            <span class="highlight"></span>
                            Coming Soon
                        </h4>
                    </Link>
                }
                
            </div>
        </div>
    );

}
export default ProjectCard