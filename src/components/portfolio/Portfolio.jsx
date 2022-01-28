import React from 'react';
import PortfolioData from './PortfolioData'
import CardImgBtn from '../common/card/CardImgBtn';


const Portfolio = () => {
    return (
        <>
            <section id="portfolio">
                <div className="container mt-3">
                    <h1 className="text-center">Portfolio</h1>
                    <div className="row">
                        {PortfolioData.map((obj, id) => {
                            return <CardImgBtn key={id} title={obj.title} description={obj.description} btnTitle={obj.btnTitle} imgSrc={obj.imgSrc} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
