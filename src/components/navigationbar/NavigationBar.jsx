import React, {useState, useEffect} from 'react';

const NavigationBar = () => {

    const[navBar, setNavBar] = useState(false)

    const changeNavBarBackground = ()=> {
        if(window.scrollY>80){
            setNavBar(true)
        }
        else{
            setNavBar(false)
        }

    }
    window.addEventListener('scroll', changeNavBarBackground);
    
    return (
        <>
            <nav className={`${navBar ? 'navbar active' : 'navbar'} fixed-top navbar-expand-lg navbar-dark navbarScroll`}>
                <div className="container">
                    <a className="navbar-brand" href="abc">Brad</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavigationBar;
