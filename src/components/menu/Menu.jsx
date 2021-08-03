import "./menu.scss"
import "../menuItem/MenuItem";
import MenuItem from "../menuItem/MenuItem";

// eslint-disable-next-line
export default function Menu({ menuOpen, setMenuOpen }) {
    let menuItems = [
        "intro",
        "portfolio",
        "works",
        "testimonials",
        "contact"
    ]

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {
                    menuItems.map(item => <MenuItem key={item} name={item} setMenuOpen={setMenuOpen}/>)
                }
            </ul>
        </div>
    )
}
