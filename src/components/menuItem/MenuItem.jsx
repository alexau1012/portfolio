import "./menuItem.scss"

export default function MenuItem({ name, setMenuOpen }) {
    return (
        <div className="menuItem">
            <li onClick={() => setMenuOpen(false)}>
                <a href={"#" + name}>{name}</a>
            </li>
        </div>
    )
}
