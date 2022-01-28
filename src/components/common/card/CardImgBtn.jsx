import React from 'react';

const CardImgBtn = (props) => {
    return (
        <>
            <div className="col-lg-4 mt-4">
                <div className="card">
                    <img src={props.imgSrc} className="card-img-top" alt="image3" style={{ width: "100%" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="abc" className="btn btn-primary">{props.btnTitle}</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardImgBtn;
