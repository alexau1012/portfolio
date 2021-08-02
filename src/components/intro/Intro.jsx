import "./intro.scss"

export default function intro() {
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
                    <h3>Software Engineer<span></span></h3>
                </div>                
                <a href="portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>            
        </div>
    )
}
