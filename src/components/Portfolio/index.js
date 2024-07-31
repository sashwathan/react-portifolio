import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([
        // Example static portfolio items
        {
            name: "Garments website",
            description: "Website built using HTML, CSS, JS, and PHP",
            url: "http://example.com/project1",
            image: "http://example.com/project1.jpg"
        },
        {
            name: " React Social media app",
            description: "Social media app with CRUD operations and backend SQL connection",
            url: "http://example.com/project2",
            image: "http://example.com/project2.jpg"
        },
        {
            name: "React To-Do list app",
            description: "To-do list app with CRUD operations with MongoDB connection",
            url: "http://example.com/project2",
            image: "http://example.com/project2.jpg"
        },
        {
            name: "React To-Do list app",
            description: "To-do list app with CRUD operations with MongoDB connection",
            url: "http://example.com/project2",
            image: "http://example.com/project2.jpg"
        },
        {
            name: "React To-Do list app",
            description: "To-do list app with CRUD operations with MongoDB connection",
            url: "http://example.com/project2",
            image: "http://example.com/project2.jpg"
        },
        {
            name: "React To-Do list app",
            description: "To-do list app with CRUD operations with MongoDB connection",
            url: "http://example.com/project2",
            image: "http://example.com/project2.jpg"
        }
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => (
                        <div className="image-box" key={idx}>
                            <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" 
                            />
                            <div className="content">
                                <p className="title">{port.name}</p>
                                <h4 className="description">{port.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;
