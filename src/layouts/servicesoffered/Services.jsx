import React from 'react';
import Data from './Data'
import Card from '../common/Card';

const Services = () => {
    return (
        <>
            <section id="services">
                <div className="container">
                    <h1 class="text-center">Services</h1>
                    <div className="row">
                        {Data.map((obj, id) => {
                            return <Card key={id} title={obj.title} description={obj.description} iconClass={obj.iconClass} />;
                        })}
                    </div>
                </div>

            </section>
        </>
    );
};

export default Services;
