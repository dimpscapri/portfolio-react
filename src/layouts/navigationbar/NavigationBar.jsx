import React from 'react';

const NavigationBar = () => {
    const header = document.querySelector('.navbar-dark');
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add('navbarDark');
        }
        else {
            header.classList.remove('navbarDark');
        }
    }

    // collapse navbar after click on small devices
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarSupportedContent')

    // navLinks.forEach((l) => {
    //     l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
    // })
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark navbarScroll">
                <div class="container">
                    <a class="navbar-brand" href="#">Brad</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavigationBar;
