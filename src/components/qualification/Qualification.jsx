import React, { useState } from 'react';
import './qualification.css';

export default function Qualification() {
    const [activeTab, setActiveTab] = useState(1); // State to track the active tab

    return (
        <section className="qualification section" id='portfolio'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {/* Education Tab */}
                    <div
                        className={activeTab === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => setActiveTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    {/* Experience Tab */}
                    <div
                        className={activeTab === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => setActiveTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education Content */}
                    <div
                        className={activeTab === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
                    >

                        {/* Bachelor's Degree */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                Bachelor of Science in Information Technology (BSc. IT)
                                </h3>
                                <span className="qualification__subtitle">
                                    Infomax College of IT & Management
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2022-present
                                </div>
                            </div>
                        </div>



                        {/* +2 Education */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Higher Secondary Education Board (HSEB) <span>Science</span></h3>
                                <span className="qualification__subtitle">Srijana Secondary School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2018-2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>




                        {/* Secondary Education */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    Secondary Education Examination (SEE)
                                </h3>
                                <span className="qualification__subtitle">
                                    Srijana Community Secondary School 
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2018 Batch
                                </div>
                            </div>
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>

                    {/* Experience Content */}
                    <div
                        className={activeTab === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
                    >
                        {/* Example Experience */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">No experience</h3>
                                <span className="qualification__subtitle">searching for internship</span>
                                <div className="qualification__calender">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}