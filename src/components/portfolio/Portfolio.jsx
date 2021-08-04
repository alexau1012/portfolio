import "./portfolio.scss"
import PortfolioList from "../porfolioList/PorfolioList"
import { useState } from "react"

export default function Portfolio() {

    const [selected, setSelected] = useState("featured")

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        },
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => 
                    <PortfolioList 
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}/>
                )}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces"
                        alt=""/>
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces"
                        alt=""/>
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces"
                        alt=""/>
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces"
                        alt=""/>
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces"
                        alt=""/>
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
