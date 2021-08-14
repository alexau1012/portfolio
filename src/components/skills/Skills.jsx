import "./skills.scss";
import data from "../../data/dataSkills";

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="container">
                <div className="card">
                    <ul>
                        {data.map(d =>
                            <li>
                                <span>{d.category}: </span>{d.desc.join(", ")}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
