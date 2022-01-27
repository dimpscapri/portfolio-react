import React from 'react';
import portfolioImage1 from '../../assets/images/portfolioImage1.jpg'
import portfolioImage2 from '../../assets/images/portfolioImage2.jpg'
import portfolioImage3 from '../../assets/images/portfolioImage3.jpg'
import portfolioImage4 from '../../assets/images/portfolioImage4.jpg'

const Portfolio = () => {
    return (
        <>
            <section id="portfolio">
                <div className="container mt-3">
                    <h1 className="text-center">Portfolio</h1>
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card">
                                <img className="card-img-top" src={portfolioImage1} alt="Card image" style={{width:"100%"}} />
                                <div className="card-body">
                                    <h4 className="card-title">YouTube Clone</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src={portfolioImage4} alt="Card image" style={{width:"100%"}}  />
                                <div className="card-body">
                                    <h4 className="card-title">Quiz App</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src={portfolioImage3} alt="Card image" style={{width:"100%"}}  />
                                <div className="card-body">
                                    <h4 className="card-title">Product Landing Page</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src={portfolioImage4} alt="Card image" style={{width:"100%"}}  />
                                <div className="card-body">
                                    <h4 className="card-title">Messaging Service</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src={portfolioImage3} alt="Card image" style={{width:"100%"}}  />
                                <div className="card-body">
                                    <h4 className="card-title">Twitter Clone</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card portfolioContent">
                                <img className="card-img-top" src={portfolioImage4} alt="Card image" style={{width:"100%"}} />
                                <div className="card-body">
                                    <h4 className="card-title">Blog App</h4>
                                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
