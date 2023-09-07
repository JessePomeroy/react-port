import React, { useState } from "react";
import {
    FaRegArrowAltCircleLeft,
    FaRegArrowAltCircleRight,
    FaRegSquare
} from 'react-icons/fa';
import { CarouselItem } from "./carouselItem";

const ICON_SIZE = 20;

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            title: "HoriZen.FM",
            description:
                "Introducing Horizen.FM, the ultimate destination for personalized music recommendations! Our innovative web platform is designed to understand your unique taste and style, delivering the perfect song tailored just for you. With a simple and engaging interface, Horizen.FM prompts you with questions about your favorite genre, preferred language, and preferred nationality, allowing us to create a personalized music experience like no other.",
            image: require("../../assets/images/hzen.png"),
            link: "https://github.com/gustavomg21/Horizen.FM"
        },
        {
            title: "5 Day Forecast",
            description:
                "A weather forecast app utilizing openweathermap api to search and display current and 5 day forecast for a given city. requiring bootstrap, jquery and day.js.",
            image: require("../../assets/images/5day.PNG"),
            link: "https://github.com/JessePomeroy/5dayforecast"
        },
        {
            title: "nosql-nosocial",
            description:
                "A backend API for a social network that uses the NoSQL database that can handle large amounts of unstructured data. Using NoSQL, MongoDB and Mongoose users can operate a social network using the standard CRUD operations.",
            image: require("../../assets/images/nosql.png"),
            link: "https://github.com/JessePomeroy/nosql-nosocial"
        },
        {
            title: "Just Another Text Editor",
            description:
                "Just Another Text Editor: This web application allows users to create and access notes and code snippets from any device, whether online or offline. Using service workers and the Cache API enables a fully functional offline experience. Users can access previously visited pages even when the app loses internet connectivity.",
            image: require("../../assets/images/scrot1.png"),
            link: "https://github.com/JessePomeroy/text-editor"
        },
        {
            title: "Employee Tracker",
            description:
                "A content management system that operates in the command line to manage a company's employee database.",
            image: require("../../assets/images/employeetracker.png"),
            link: "https://github.com/JessePomeroy/employee-tracker"
        },
        {
            title: "Readme Generator",
            description:
                "A small readme generator app built with node.js that prompts the user through the console with inquirer and writes the responses to a readme file.",
            image: require("../../assets/images/readmegen.png"),
            link: "https://github.com/JessePomeroy/readme-generator"
        },
    ];
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }

        setActiveIndex(newIndex);
    };
    return (
        <div className="carousel">
            <div
                className="inner"
                style={{
                    transform: `translate(-${activeIndex * 100}%)`
                }}
            >
                {items.map((item) => {
                    return <CarouselItem item={item} width={"100%"} />;
                })}
            </div>

            <div className="carousel-buttons">
                <button
                    className="button-arrow"
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    <span class="material-symbols-outlined"><FaRegArrowAltCircleLeft size={ICON_SIZE} /></span>{" "}
                </button>
                <div className="indicators">
                    {items.map((item, index) => {
                        return (
                            <button
                                className="indicator-buttons"
                                onClick={() => {
                                    updateIndex(index);
                                }}
                            >
                                <span
                                    className={`material-symbols-outlined ${index === activeIndex
                                        ? "indicator-symbol-active"
                                        : "indicator-symbol"
                                        }`}
                                >
                                    <FaRegSquare size={ICON_SIZE} />
                                </span>
                            </button>
                        );
                    })}
                </div>
                <button
                    className="button-arrow"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    <span class="material-symbols-outlined"><FaRegArrowAltCircleRight size={ICON_SIZE} /></span>
                </button>
            </div>
        </div>
    );
};