import React, { useState } from 'react';
import { FormControl, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
const searchInit = ''

function Header(props) {
    const [search, setSearch] = useState(searchInit);
    const handleChange = (e) => {
        const { value } = e.target;
        // const value = e.target.value;
        // const name = e.target.name;
        const newSearch = { ...search, value }
        setSearch(newSearch);
        props.onSearch(newSearch)
    }
    return <>
        {props.isHomePage ?
            (
                <>
                    <div className="main-menu">
                        <Navbar expand="lg" >
                            <Navbar.Brand href="/">H</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Form className="w-100">
                                    <FormControl
                                        type="text"
                                        placeholder="Search stories by title, url or author"
                                        className="mr-sm-2 w-100"
                                        name="search"
                                        onChange={handleChange} />
                                </Form>
                            </Navbar.Collapse>
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link">By Algolia</a>
                                </li>
                            </ul>
                        </Navbar>
                    </div>
                </>

            ) : (
                <>
                    <div className="main-menu">
                        <Navbar expand="lg" >
                            <Navbar.Brand href="/">H</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">

                            </Navbar.Collapse>
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link">By Algolia</a>
                                </li>
                            </ul>
                        </Navbar>
                    </div>
                </>
            )}


    </>


}

export default Header;