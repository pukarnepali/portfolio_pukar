import React, { useState } from 'react';
import './service.css';

export default function Services() {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Developer</h3>
                    </div>
                    <span className="services__button" onClick={toggleModal}>
                        View more <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {isModalOpen && (
                        <div className="services__modal active-modal">
                            <div className="services__modal-content">
                                <i
                                    className="uil uil-times services__modal-close"
                                    onClick={toggleModal}
                                ></i>
                                <h3 className="services__modal-title">My Services</h3>
                                <p className="services__modal-description">
                                Having completed several internships, I am now seeking industry-based opportunities to expand my skills and gain practical experience.
                                </p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <span className="services__modal-info">
                                            Mobile App Development
                                        </span>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <span className="services__modal-info">
                                            UI/UX Design
                                        </span>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <span className="services__modal-info">
                                            App Integration Services
                                        </span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}