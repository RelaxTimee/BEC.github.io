import React from "react";
import "./About.css";

const About = () => {
    return (
    <section id="about" class="about-section">
        <div class="about-container">
            <div class="section-header">
                <h2 class="section-title">Who are <span class="highlight">we?</span></h2>
                <div class="title-underline"></div>
            </div>

            <div class="about-main">
                <div class="about-icon">👥</div>
                <h3 class="about-subtitle">Social Connections University Unit (SCU)</h3>
                <p class="about-description">
                    We are a group of students committed to building a community for university students that
                    fosters collaboration among institutions and connects individuals with shared interests.
                </p>
            </div>

            <div class="about-cards">
                <div class="about-card">
                    <div class="card-icon">🎯</div>
                    <h4 class="card-title">Vision</h4>
                    <p class="card-text">
                        An activity institute that connects attendees to broaden their opportunities and 
                        perspective through interactions with individuals from diverse universities, faculties, 
                        and backgrounds.
                    </p>
                </div>
                <div class="about-card">
                    <div class="card-icon">🚀</div>
                    <h4 class="card-title">Mission</h4>
                    <p class="card-text">
                        The area allows individuals from diverse backgrounds to exchange experiences and 
                        knowledge, potentially leading to future collaborations.
                    </p>
                </div>
                <div class="about-card">
                    <div class="card-icon">🏆</div>
                    <h4 class="card-title">Goal</h4>
                    <p class="card-text">
                        Become a leading institute that empowers individuals to build opportunities for a 
                        sustainable future by fostering meaningful connections.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}
export default About;