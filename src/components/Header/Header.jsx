import React, { useState } from 'react'
import "./header.css"
export default function Header() {



    
    window.addEventListener("scroll",function () {
        const header=document.querySelector(".header");
        if(this.scrollY >=200) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
      
      })


    const[Toogle,showMenu]=useState(false);
    const[activeNav,setActiveNav]=useState("#home");
  return (
    
   <header className="header">
    <nav className="nav container">
       <a href="index.html" className='nav__logo'>Pukar</a> 

       <div className={Toogle ?"nav__menu show-menu":"nav__menu"}>
        <ul className="nav__list grid">
            <li className="nav__item">
                <a href="#home" onClick={()=>setActiveNav("#home") } className={activeNav==="#home"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-estate nav__icon">
                        
                    </i>
                    Home
                </a>
            </li>

            <li className="nav__item">
                <a href="#about"onClick={()=>setActiveNav("#about") } className={activeNav==="#about"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-user nav__icon">

                    </i>About
                </a>
            </li>
            <li className="nav__item">
                <a href="#skills" onClick={()=>setActiveNav("#skills") } className={activeNav==="#skills"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-file nav__icon">

                    </i>
                    Skills
                </a>
            </li>
            <li className="nav__item">
                <a href="#project" onClick={()=>setActiveNav("#project") } className={activeNav==="#project"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-file nav__icon">

                    </i>
                    Projects
                </a>
            </li>
            <li className="nav__item">
                <a href="#services" onClick={()=>setActiveNav("#services") } className={activeNav==="#services"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-briefcase-alt nav__icon">

                    </i>Services
                </a>
            </li>
            <li className="nav__item">
                <a href="#portfolio" onClick={()=>setActiveNav("#portfolio") } className={activeNav==="#portfolio"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-scenery nav__icon">

                    </i>
                    Portfolio
                </a>
            </li>
            <li className="nav__item">
                <a href="#contact" onClick={()=>setActiveNav("#contact") } className={activeNav==="#contact"?"nav__link active-link":"nav__link"}>
                    <i className="uil uil-message nav__icon">

                    </i>
                    Contact
                </a>
            </li>
        </ul>
<i className="uil uil-times nav__close" onClick={()=>showMenu(!Toogle)}></i>
       </div>
       <div className="nav__toggle" onClick={()=>showMenu(!Toogle)}>
    <i className="uil uil-apps"></i>
</div>
    </nav>
    
   </header>
  )
}