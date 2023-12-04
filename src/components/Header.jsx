import { Navbar } from 'flowbite-react';
import { HiChip } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';

function Header() {

    const handleHeaderClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (

        <Navbar fluid>
            <Navbar.Brand href="/">
                <span>
                    <HiChip className="inline-block mr-2 text-2xl text-white align-middle" />
                </span>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">About me</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link to="" onClick={handleHeaderClick}>
                    <Navbar.Link>
                        Home
                    </Navbar.Link>
                </Link>
                <Link to="/Contact" onClick={handleHeaderClick}>
                    <Navbar.Link>
                        Contact
                    </Navbar.Link>
                </Link>
                <Link to="/Extra" onClick={handleHeaderClick}>
                    <Navbar.Link>
                        Extra
                    </Navbar.Link>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
