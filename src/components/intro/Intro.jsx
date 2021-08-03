import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef()

    useEffect(() => {
        console.log(textRef)
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Full Stack", "Testing"]
        })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile-picture.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Alex Au</h1>
                    <h3>Software Engineer - <span ref={textRef}></span></h3>
                </div>                
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>            
        </div>
    )
}
