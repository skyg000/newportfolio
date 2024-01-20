"use client"
import React, { useEffect, useState } from 'react';
import About from '../pages/about/page'
import Skill from '../pages/skill/page'
import Work from '../pages/work/page'
import Footer from '../pages/footer/page'
import Contact from '../pages/contact/page'
import Typingtext from '../comp/Typingtext'
import scrollSt from '../pages/scroll/scroll.module.scss'
const HomePage = () => {
    const [activeMenu, setActiveMenu] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll('section');

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveMenu(index);
                }
            });

            if (scrollPosition === 0) {
                setActiveMenu(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (index) => {
        const sections = document.querySelectorAll('section');
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const menuItems = ['Home','About', 'Skill', 'Project', 'Contact'];

    return (
        <div>
            <header id="header" className={scrollSt.header}>
                {menuItems.map((menu, index) => (
                    <a key={index} onClick={() => scrollToSection(index)} className={activeMenu === index ? 'on' : ''}>
                        {menu}
                    </a>
                ))}
            </header>
            <main>
                <section>
                    <div className="intro">
                        <h1 className='htxt'>
                            <Typingtext />
                        </h1>
                        <img src='https://media4.giphy.com/media/w1zeVDr2HDd2otR8gE/giphy.gif?cid=ecf05e47ybhu9hnfbf6vpj8ze1ljcroygj5p8yn3uj6ndvmx&ep=v1_gifs_search&rid=giphy.gif&ct=g' className='arrgif' />
                    </div>
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="skill">
                    <Skill />
                </section>
                <section id="work">
                    <Work />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <Footer />
            </main>
        </div>
    );
};

export default HomePage;