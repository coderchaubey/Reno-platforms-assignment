import Link from "next/link"

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-logo">School App</div>
            <ul className="navbar-links">
            <Link href="/">Home</Link>
            <Link href="/addSchool">Add School</Link>
            <Link href="/showSchools">Show School</Link>
            </ul>
        </nav>
    )
}