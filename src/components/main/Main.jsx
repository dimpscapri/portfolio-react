import React from 'react';
import Header from '../header/Header';
import NavigationBar from '../navigationbar/NavigationBar';
import  '../../assets/styles/style.css'
import AboutMe from '../aboutme/AboutMe';
import Services from '../servicesoffered/Services';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';


const Main = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <AboutMe></AboutMe>
            <Services></Services>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Main;
