import "./menuItem.scss"

export default function MenuItem({ name, setMenuOpen }) {

    const selectName = (name) => {
        return name === "skills" ? "education": name;
    }

    return (
        <div className="menuItem">
            <li onClick={() => setMenuOpen(false)}>
                <a href={"#" + selectName(name)}>{name}</a>
            </li>
        </div>
    )
}
