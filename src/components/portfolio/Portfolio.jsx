import "./portfolio.scss";
import PortfolioList from "../porfolioList/PorfolioList";
import { useState, useEffect } from "react";
import { webPortfolio,
    iosPortfolio,
    scriptingPortfolio,
    researchPortfolio } from "../../dataPortfolio";

export default function Portfolio() {

    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "ios",
            title: "IOS App"
        },
        {
            id: "scripting",
            title: "Scripting"
        },
        {
            id: "research",
            title: "Research"
        },
    ];

    useEffect(() => {
        switch(selected) {
            case "web":
                setData(webPortfolio);
                break;
            case "ios":
                setData(iosPortfolio);
                break;
            case "scripting":
                setData(scriptingPortfolio);
                break;
            case "research":
                setData(researchPortfolio);
                break;
            default:
                setData(webPortfolio);
        }
    }, [selected]);
    
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => 
                    <PortfolioList 
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                        key={item.id}    
                    />
                )}
            </ul>
            <div className="container">
                {data.map((d) => 
                    <div className="item" key={d.id}>
                        <img src={d.img}
                            alt=""/>
                        <h3>{d.title}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}
