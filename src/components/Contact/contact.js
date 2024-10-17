import React, {useRef} from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_s6qzuij', 'template_0rr7ksp', form.current, {
            publicKey: '1sbX5g73u7qNp0Eae',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            e.target.reset();
            alert('Email Sent');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Our Services</h1>
                <p className="clientDesc">We are committed to providing exceptional construction services tailored to meet our clients' needs. Our expertise ensures that every project is handled with precision and professionalism. Our services include:</p>

                {/* Services Section */}
                <div className="services">
                    <div className="serviceBox">
                        <h2>Residential Construction</h2>
                        <p>Our residential construction services include custom home building, renovations, and additions. We work closely with homeowners to bring their visions to life while ensuring quality craftsmanship and attention to detail.</p>
                    </div>
                    <div className="serviceBox">
                        <h2>Commercial Construction</h2>
                        <p>We specialize in commercial construction projects, from office buildings to retail spaces. Our team is equipped to handle large-scale projects while maintaining a focus on quality, safety, and timely completion.</p>
                    </div>
                    <div className="serviceBox">
                        <h2>Project Management</h2>
                        <p>Our project management services ensure that every phase of your construction project runs smoothly. We coordinate resources, manage timelines, and communicate effectively with all stakeholders to deliver successful outcomes.</p>
                    </div>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Us</h1>
                <span className="contactDesc">Please fill out the form below to contact us with any questions.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                    <textarea className= 'msg' name="message" rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/mozee-motorsports/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className='link'/>
                        </a>
                        <a href="https://www.tiktok.com/@mozee.motorsports?_t=8mWbeQualFm&_r=1" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} className='link'/>
                        </a>
                        <a href="https://www.instagram.com/mozeemotorsports/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className='link'/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact