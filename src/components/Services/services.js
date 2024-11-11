import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section id="servicesPage">
      <div id="servicesContent">
        <h1 className="servicesTitle">Our Services</h1>
        <p className="servicesDescription">
          We are committed to providing exceptional construction services tailored to meet our clients' needs. Our expertise ensures that every project is handled with precision and professionalism. Our services include:
        </p>

        {/* Services Section */}
        <div className="services">

          {/* Residential Construction */}
          <div className="serviceBox">
            <h2>Residential Construction</h2>
            <ul>
              <li>Custom Home Building</li>
              <li>Renovations</li>
              <li>Additions</li>
            </ul>
            <p>
              Our residential construction services include custom home building, renovations, and additions. We work closely with homeowners to bring their visions to life while ensuring quality craftsmanship and attention to detail.
            </p>
          </div>

          {/* Commercial Construction */}
          <div className="serviceBox">
            <h2>Commercial Construction</h2>
            <ul>
              <li>Office Buildings</li>
              <li>Retail Spaces</li>
              <li>Industrial Projects</li>
            </ul>
            <p>
              We specialize in commercial construction projects, from office buildings to retail spaces. Our team is equipped to handle large-scale projects while maintaining a focus on quality, safety, and timely completion.
            </p>
          </div>

          {/* Project Management */}
          <div className="serviceBox">
            <h2>Project Management</h2>
            <ul>
              <li>Resource Coordination</li>
              <li>Timeline Management</li>
              <li>Stakeholder Communication</li>
            </ul>
            <p>
              Our project management services ensure that every phase of your construction project runs smoothly. We coordinate resources, manage timelines, and communicate effectively with all stakeholders to deliver successful outcomes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
