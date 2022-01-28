import React from 'react';
import ServicesData from './ServicesData'
import CardFA from '../common/card/CardFA';

const Services = () => {
    return (
        <>
            <section id="services">
                <div className="container">
                    <h1 className="text-center">Services</h1>
                    <div className="row">
                        {ServicesData.map((obj, id) => {
                            return <CardFA key={id} title={obj.title} description={obj.description} iconclassName={obj.iconClass} />;
                        })}
                    </div>
                </div>

            </section>
        </>
    );
};

export default Services;
