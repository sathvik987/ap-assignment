
import "./searchbar.css";
import VideoLogo from "./assets/ic_videoseries.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, Fragment } from "react";

function SearchBar() {
    const [showFullSearch, toggleShowFullSearch] = useState(false);
    const [showMobileSearch, toggleShowMobileSearch] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1060) {
                toggleShowFullSearch(true);
            } else {
                toggleShowFullSearch(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let searchBar;
    if (showMobileSearch) {
        searchBar =
            <Fragment>
                <FontAwesomeIcon className="back-btn" onClick={() => toggleShowMobileSearch(false)} icon={faArrowLeft} />
                <input type="text" placeholder="Search for video series" className="mobile-search-input" />
            </Fragment>;
    } else {
        searchBar =
            <Fragment>
                <img src={VideoLogo} className="video-logo" alt="" />
                {
                    showFullSearch ?
                        <InputGroup className="search-input">
                            <InputGroup.Text className="filter">
                                <NavDropdown title="All" >
                                    <NavDropdown.Item>All</NavDropdown.Item>
                                    <NavDropdown.Item>Vedant - Upanishads</NavDropdown.Item>
                                    <NavDropdown.Item>Vedant - Bhagavad Gita</NavDropdown.Item>
                                    <NavDropdown.Item>Other Scriptures</NavDropdown.Item>
                                    <NavDropdown.Item>Other Scriptures</NavDropdown.Item>
                                    <NavDropdown.Item>Life Questions</NavDropdown.Item>
                                </NavDropdown></InputGroup.Text>
                            <Form.Control placeholder="Search for video series" />
                            <InputGroup.Text className="search-icon"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup> : ""
                }

                <div className="right-div">
                    {
                        !showFullSearch ? <FontAwesomeIcon className="mobile-search-btn" onClick={() => toggleShowMobileSearch(true)} icon={faSearch} /> : ""
                    }
                    <Button variant="primary" className="login-btn" size="sm">Login</Button>{' '}
                </div>
            </Fragment>;
    }

    return (
        <div className="search-bar">
            {searchBar}
        </div>
    );
}

export default SearchBar;