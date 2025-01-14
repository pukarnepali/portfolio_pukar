import React from 'react'
import "./footer.css"
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Pukar</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">about</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">portfolio</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/aakashpnepali/?hl=en" className="footer__social-link" target='_blank'><i className="ui uil-instagram"></i></a>

                    <a href="https://www.linkedin.com/" className="footer__social-link" target='_blank'><i className="uil uil-linkedin"></i></a>
                    <a href="https://github.com/pukarnepali" className="footer__social-link" target='_blank'><i className="uil uil-github-alt"></i></a>
                    <a href="https://wa.me/9846907684" className="footer__social-link" target='_blank'><i className="ui uil-whatsapp-alt"></i></a>


                </div>
                <span className="footer__copy">&#169;Pukar Nepali. All rights reserved</span>
            </div>

        </footer>
    )
}