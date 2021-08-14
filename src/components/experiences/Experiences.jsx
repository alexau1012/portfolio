import "./experiences.scss"
import experiences from "../../data/dataExperiences";

export default function Experiences() {

  const monthYearFromDate = (date) => {
    return date.toString().slice(4, 7) + " " + date.toString().slice(10, 15);
  }
  
    return (
        <div className="experiences" id="experiences">
            <h1>Work Experiences</h1>
            <div className="container">
                {experiences.map((d) => 
                    <div className={"c" + d.id + " card"} key={d.id}>
                        <div className="top">
                            <h2>{d.title}</h2>
                            <h3><span>{d.company}</span>, {d.location}</h3>
                            <p>
                              {monthYearFromDate(new Date(d.startDate))} - {d.endDate === "" ? "Present" : monthYearFromDate(new Date(d.endDate))}
                            </p>
                        </div>
                        <div className="center">
                            <ul>
                                {d.responsibilies.map((responsiblity, idx) => <li key={idx}>{responsiblity}</li>)}
                            </ul>
                        </div>
                        <div className="bottom">
                            <img 
                                src="assets/linkedin.png"
                                className="icon"
                                alt=""
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
