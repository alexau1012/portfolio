import "./experiences.scss"
import experiences from "../../dataExperiences";

export default function Testimonials() {

  const monthYearFromDate = (date) => {
    return date.toString().slice(4, 7) + " " + date.toString().slice(10, 15);
  }
  
    return (
        <div className="testimonials" id="testimonials">
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
                        <div className="center">{d.desc}</div>
                        <div className="bottom">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img 
                                src={d.img}
                                className="user"
                                alt=""
                            />
                            <img src={d.icon} className="right" alt="" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
