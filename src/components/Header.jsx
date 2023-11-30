import { Navbar } from 'flowbite-react';
import { HiChip } from "react-icons/hi";

function Header() {

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
                <Navbar.Link href="/">
                    Home
                </Navbar.Link>
                <Navbar.Link  href="#">
                    Projects
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
                <Navbar.Link href="#">
                    Extra
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
