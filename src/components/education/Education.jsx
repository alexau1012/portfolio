import "./education.scss";
import data from "../../data/dataEducation";

export default function Education() {
    return (
        <div className="education" id="education">
            <h1>Education</h1>
            <div className="container">
                    {data.map(d =>
                        <div className="card">
                            <div className="info">
                                <h2>{d.school}</h2>
                                <h3>{d.degree}</h3>
                                <h4>{d.duration}</h4>
                                <h5>
                                    {d.gpa ? `GPA: ${d.gpa}` : ""}
                                </h5>
                                <ul>
                                    {d.achievements?.map(da =>     
                                        <li>{da}</li>
                                    )}
                                </ul>
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}
