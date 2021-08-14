import "./education.scss";

export default function Education() {

    const data = [
        {
            id: 1,
            school: "University of Technology, Sydney",
            degree: "Master's degree, Engineering (Software)",
            duration: "2019 - 2021",
            gpa: "6.5/7.0",
            achievements: [
                "Distinction Average",
                "2021 Dean's List"
            ],
            img: "assets/s3/uts.png"
        },
        {
            id: 2,
            school: "University of Technology, Sydney",
            degree: "Bachelor of Engineering, ICT - Telecommunication",
            duration: "2011 - 2016",
            img: "assets/s3/uts.png"
        }
    ]

    return (
        <div className="education" id="education">
            <h1>Education</h1>
            <div className="container">
                    {data.map(d =>
                        <div className="card">
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
                    )}
            </div>
        </div>
    )
}
