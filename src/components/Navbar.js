import React from 'react'
import { Link } from 'react-router-dom';
import { CiBellOn } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" to="/">Joboared</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Find Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Reports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">My Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Projects</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className='nav-item'>
                                <Link className='nav-link' to="/"><CiBellOn />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/"><MdFavoriteBorder />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/"><FaRegEnvelope />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
