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
            title: "Baseball",
            description:
                "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
            // icon: require("./Media/example1.svg"),
        },
        {
            title: "Just Another Text Editor",
            description:
                "Just Another Text Editor: This web application allows users to create and access notes and code snippets from any device, whether online or offline. Using service workers and the Cache API enables a fully functional offline experience. Users can access previously visited pages even when the app loses internet connectivity.",
            image: require("../assets/images/scrot1.png"),
            link: "https://github.com/JessePomeroy/text-editor"
        },
        {
            title: "Weights",
            description:
                "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
            // icon: require("./Media/example3.svg"),
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