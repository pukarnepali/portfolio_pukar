import React from 'react';
import './Myproject.css';
import ovs1 from "../../assets/image.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";


export default function MyProject() {
    return (
        <div>
            <div className="projects__content">
                <div className="projects__box">
                    <div className="projects__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="projects__text">
                            <h3 className="projects__name">Todo App</h3>
                            <p className="projects__subtitle">
                            A simple yet efficient task management app that helps users organize their daily tasks and stay productive. Built with Flutter and Firebase, this app offers real-time syncing and task reminders, making it easy to manage to-dos across multiple devices.                            </p>
                            <ul className="skills-list">
                                <li>Flutter</li>
                                <li>Firebase</li>

                            </ul>
                        </div>
                        <img src={ovs1} alt="Todo App" className="projects__img" />
                    </div>

                </div>


            </div>


            <div className="projects__content">
                <div className="projects__box">
                    <div className="projects__data">
                        <img src={p2} alt="BarberQueue" className="projects__img" />

                        <i className="bx bx-badge-check"></i>
                        <div className="projects__text">
                            <h3 className="projects__name">BarberQueue</h3>
                            <p className="projects__subtitle">
                            A mobile application designed to streamline the barber appointment process. Users can view available slots, book appointments, and receive reminders. With Firebase integration, the app supports real-time updates and seamless appointment management for both customers and barbers.                            </p>

                            <ul className="skills-list">
                                <li>Flutter</li>
                                <li>Firebase</li>

                            </ul>
                        </div>

                    </div>

                </div>


            </div>


            <div className="projects__content">
                <div className="projects__box">
                    <div className="projects__data">

                        <i className="bx bx-badge-check"></i>
                        <div className="projects__text">
                            <h3 className="projects__name">WhatsApp Clone</h3>
                            <p className="projects__subtitle">
                            A messaging app that replicates the core features of WhatsApp, allowing users to send text messages, voice messages, and share media. Built with Flutter and Firebase, it supports real-time messaging, notifications, and user authentication, ensuring a smooth and engaging chat experience.                            </p>

                            <ul className="skills-list">
                            <li>Flutter</li>
                            <li>Firebase</li>

                            </ul>

                        </div>
                        <img src={p3} alt="WhatsApp Clone" className="projects__img" />

                    </div>

                </div>


            </div>

            <div className="projects__content">
                <div className="projects__box">
                    <div className="projects__data">
                    <img src={p4} alt="Shoely" className="projects__img" />
                    <i className="bx bx-badge-check"></i>
                        <div className="projects__text">
                            <h3 className="projects__name">Ecommerce App</h3>
                            <p className="projects__subtitle">
                            A comprehensive e-commerce platform enabling users to browse products, add them to a cart, and complete purchases. Developed with Flutter and Firebase, this app features secure user authentication, real-time product updates, and smooth payment processing for a seamless shopping experience.
                            </p>
                            <ul className="skills-list">

                            <li>Flutter</li>
                            <li>Firebase</li>


                            </ul>

                        </div>

                    </div>

                </div>


            </div>


        </div>
    );
}