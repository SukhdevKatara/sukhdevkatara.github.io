import React from 'react'
import Auto_parts from "./projectImages/Auto_parts.png"
import Myntra from "./projectImages/Myntra.png"
import "./Project.css"
import { motion } from "framer-motion"

const data = [
    {
        img: Myntra,
        projectTitle: "Myntra_Clone",
        techStack: ["HTML","CSS","JavaScript"],
        description:"Myntra is a stylish and user-centric e-commerce platform that brings the latest fashion trends to your fingertips. This Myntra clone website is designed to offer a seamless and enjoyable online shopping experience.",
        githubLink: "https://github.com/MridulKatara/Myntra_Clone",
        appLink: "https://luminous-paletas-2b31d4.netlify.app/"
    },
    {
        img: Auto_parts,
        projectTitle: "Auto_parts",
        techStack: ["HTML","CSS","JavaScript","API","Firebase","RazorPay"],
        description: "Autoparts is an online e-commerce website where you will find wide varity of autoparts products for different automobiles. Many functionalities are provided in the web application like login/signup, cart and filtering the products with its category along with payment and full responsiveness.",
        githubLink: "https://github.com/MridulKatara/Auto_Parts-clone",
        appLink: "https://merry-meringue-c50ac4.netlify.app/"
    },
    {
        img: Myntra,
        projectTitle: "Myntra_Clone",
        techStack: ["HTML","CSS","JavaScript"],
        description: "Myntra is a stylish and user-centric e-commerce platform that brings the latest fashion trends to your fingertips. This Myntra clone website is designed to offer a seamless and enjoyable online shopping experience.",
        githubLink: "https://github.com/MridulKatara/Myntra_Clone",
        appLink: "https://luminous-paletas-2b31d4.netlify.app/"
    }, {
        img: Auto_parts,
        projectTitle: "Auto_parts",
        techStack: ["HTML","CSS","JavaScript","API","Firebase","RazorPay"],
        description: "Autoparts is an online e-commerce website where you will find wide varity of autoparts products for different automobiles. Many functionalities are provided in the web application like login/signup, cart and filtering the products with its category along with payment and full responsiveness.",
        githubLink: "https://github.com/MridulKatara/Auto_Parts-clone",
        appLink: "https://merry-meringue-c50ac4.netlify.app/"
    }
]




function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1" key={index}>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2" key={index}>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects