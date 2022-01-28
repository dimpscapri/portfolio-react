import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="col-lg-4 mt-4">
                <div className="card servicesText">
                    <div className="card-body">
                        <i className={`fas servicesIcon ${props.iconClass}`}></i>
                        <h4 className="card-title mt-3">{props.title}</h4>
                        <p className="card-text mt-3">
                            {props.description}
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
