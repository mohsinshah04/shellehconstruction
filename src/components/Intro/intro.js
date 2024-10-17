import React from 'react';
import './intro.css';
import bg from '../../assets/ShellehMain.png';

const Intro = () => {
    return (
        <section id="intro">
            <img src={bg} alt="Profile" className="bg" />
            <div className="sloganContainer">
                <h1 className="slogan">Let's build a better future, starting today</h1>
            </div>
        </section>
    );
}

export default Intro;
