import "./testimonials.scss"

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <img src="assets/youtube.png" alt="" />
                    </div>
                    <div className="center">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </div>
                    <div className="bottom">
                        <h3>Alex</h3>
                        <h4>CEO of Alderfly</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
