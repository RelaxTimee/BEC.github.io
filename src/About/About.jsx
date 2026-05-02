import "./About.css";

const About = () => {
    return (
    <section id="about" className="about-section">
        <div className="about-container">
            <div className="section-header">
                <h2 className="section-title">Who are <span className="highlight">we?</span></h2>
                <div className="title-underline"></div>
            </div>

            <div className="about-main">
                <div className="about-icon">BEC</div>
                <h3 className="about-subtitle">BangRak Entrepreneur Club (BEC)</h3>
                <p className="about-description">
                    We are a student-led community that empowers entrepreneurship, organizes training,
                    and connects people with shared interests.
                </p>
            </div>

            <div className="about-cards">
                <div className="about-card">
                    <div className="card-icon">Vision</div>
                    <h4 className="card-title">Vision</h4>
                    <p className="card-text">
                        An activity institute that connects attendees to broaden their opportunities and 
                        perspective through interactions with individuals from diverse universities, faculties, 
                        and backgrounds.
                    </p>
                </div>
                <div className="about-card">
                    <div className="card-icon">Mission</div>
                    <h4 className="card-title">Mission</h4>
                    <p className="card-text">
                        The area allows individuals from diverse backgrounds to exchange experiences and 
                        knowledge, potentially leading to future collaborations.
                    </p>
                </div>
                <div className="about-card">
                    <div className="card-icon">Goal</div>
                    <h4 className="card-title">Goal</h4>
                    <p className="card-text">
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
