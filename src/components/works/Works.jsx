import "./works.scss"
import { useState } from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Favors Tracker",
            desc:
                "A platform for users to record favors owed by and to another user.",
            tech: [
                "React", "MongoDB", "NodeJS", "ExpressJS", "Material UI"
            ],
            img:
                "assets/s3/favor-app.png",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            tech: [
                
            ],
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "./assets/globe.png",
            title: "What To Eat",
            desc:
                "An IOS app that helps undecisive eaters on what to eat based on their sentiment.",
            tech: [
                "Swift", "Storyboard", "XCode", "IOS", "Spoonacular API"
            ],
            img:
                "assets/s3/what-to-eat.png",
        },
    ];

    const handleClick = (direction) => {
        direction === "left" ? 
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) : 
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => 
                    <div className="container" key={d.id}>
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Technologies</span>
                                    <p>{d.tech.join(", ")}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt=""/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")}/>
        </div>
    )
}
