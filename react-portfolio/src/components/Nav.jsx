// import Link from react-router-dome to create navigable links
import { Link } from 'react-router-dom';
// import nav links
import NavBar from '/UI/NavBar';

export default function Nav() {
    // NavBar component will render the links in the links prop
    return (
        <NavBar
            links={[
                <Link key={1} className="nav-link" to="/">About Me</Link>, //About page is homepage
                <Link key={2} className="nav-link" to="/portfolio">Portfolio</Link>,
                <Link key={2} className="nav-link" to="/contact">Contact</Link>,
                <Link key={2} className="nav-link" to="/resume">Resumé</Link>,

            ]}
        />
    );
}