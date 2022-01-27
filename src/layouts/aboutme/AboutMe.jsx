import React from 'react';
import about from '../../assets/images/about.jpeg'

const AboutMe = () => {
    return (
        <>
            <section id="about">
                <div class="container mt-4 pt-4">
                    <h1 class="text-center">About Me</h1>
                    <div class="row mt-4">
                        <div class="col-lg-4">
                            <img src={about} class="imageAboutPage" alt="" />
                        </div>

                        <div class="col-lg-8">
                            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <ul>
                                        <li>Name: David Parker</li>
                                        <li>Age: 28</li>
                                        <li>Occupation: Web Developer</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul>
                                        <li>Name: David Parker</li>
                                        <li>Age: 28</li>
                                        <li>Occupation: Web Developer</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;
