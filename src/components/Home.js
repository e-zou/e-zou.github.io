// Libraries
import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// components
import SplashObject from "./SplashObject.js";
import ProjectCard from "./ProjectCard.js";

// Styling
import '../styles/Home.css';

// project images
import p1 from '../images/project-kst.png';
import p2 from '../images/project-hack.png';
import p3 from '../images/project-muddy-paws.png';
import p4 from '../images/project-dashboard.png';

gsap.registerPlugin(ScrollTrigger)

// Home Page items
function Home({ projectcard }) {

    // Animations
    // let t1 = gsap.timeline({ delay: 0.3});


    useEffect(()=> {
        // t1.from('.h1-splash', {y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.4}, 'Start');
        // t1.staggerFrom('.h2-splash', 1, {y: 30, ease: Power3.easeOut, opacity:0 }, 0.2, 'Start');
        gsap.from(".h1-splash", {
            x: -100,
            opacity: 0,
            duration: 3,
            scrollTrigger: ".h1-splash",
            ease: Power3.easeOut,
            delay: 0.4,
            once: false,
        })
        gsap.from(".h2-splash", {
            x: -100,
            opacity: 0,
            duration: 3,
            scrollTrigger: ".h2-splash",
            ease: Power3.easeOut,
            delay: 0.4,
            once: false,
        });

        gsap.from("h3", {
            x: -100,
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: "h3",
                once: false,
            },
            ease: Power3.easeOut,
            delay: 0.2,
        });

        // Project Images
        gsap.from("#kst-img1", {
            x: -100,
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: "#kst-img1",
                once: false,
            },
            ease: Power3.easeOut,
            delay: 0.4,
        });

        gsap.from("#kst-img2", {
            x: -100,
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: "#kst-img2",
                once: false,
            },
            ease: Power3.easeOut,
            delay: 0.6,
        });

        gsap.from("#kst-img3", {
            x: -100,
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: "#kst-img3",
            },
            ease: Power3.easeOut,
            delay: 0.4,
        });

        gsap.from("#kst-img4", {
            x: -100,
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: "#kst-img4",
            },
            ease: Power3.easeOut,
            delay: 0.6,
        });
        
    }, [])


    return (
        <div class="home first flex flex-d-col center">
            <div class="flag flex center">
                <div class="flag-title flex center flex-d-col">
                    <h1 class="h1-splash">
                        Emily Zou
                    </h1>
                    <h2 class="h2-splash">
                        aspiring UX researcher who seeks to <br/> always grow and learn
                    </h2>
                </div>
                <Canvas class="flag-bg">
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <perspectiveCamera position={[75, window.innerWidth / window.innerHeight, 0.1, 1000]} />
                    <SplashObject position={[0, 0, 0]} />
                </Canvas>
               
            </div>
            <section class="projects" id="#projects">
                <h3>
                    Projects
                </h3>
                <div class="projects-row flex flex-d-row space-between">
                    <ProjectCard 
                        imgLink={p1}
                        id="kst-img1"
                        title="Kelly Strayhorn"
                        tags={['user research', 'project management']}
                        link={process.env.PUBLIC_URL + '/project-kst'}
                    />
                    <ProjectCard 
                        class="hi"
                        imgLink={p2}
                        id="kst-img2"
                        title="Hack to the Future"
                        tags={['leadership', 'product thinking', 'visual design']} 
                        link={process.env.PUBLIC_URL + '/project-hack'}
                    />
                </div>
                <div class="projects-row flex flex-d-row space-between">
                    <ProjectCard 
                        imgLink={p3}
                        id="kst-img3"
                        title="Muddy Paws Adventure"
                        tags={['front-end dev','react']} 
                    />
                    <ProjectCard 
                        imgLink={p4}
                        id="kst-img4"
                        title="Adidas Dashboard"
                        tags={['user research', 'rapid prototyping', 'interaction design']} 
                    />
                </div>
            </section>
        </div>
    );

}
export default Home