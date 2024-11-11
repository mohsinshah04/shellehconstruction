import React from 'react';
import './services.css';

const Services = () => {
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
        </section>
    );
};

export default Services;