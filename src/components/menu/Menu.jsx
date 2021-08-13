import "./menu.scss"
import MenuItem from "../menuItem/MenuItem";

// eslint-disable-next-line
export default function Menu({ menuOpen, setMenuOpen }) {
    let menuItems = [
        "intro",
        "portfolio",
        "works",
        "experiences",
        "education",
        "skills",
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
