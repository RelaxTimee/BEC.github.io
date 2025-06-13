import React from 'react';
import './Home.css';



const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="hero-background"></div>

            <div className="hero-content">
                {/* SCU Logo Circle */}
                <div className='logo-main' style={{ animation: 'slideInUp 1s ease-out 0.1s both' }}>
                    <img src="/Logo.png" alt="SCU Logo" className="logo-image" />
                </div>

                {/* Main Title */}
                <h1 className="hero-title">
                    BANGRAK ENTREPRENEUR CLUB
                </h1>

                {/* Description */}
                <p className="hero-description">
                    The area allows individuals from diverse backgrounds to exchange
                    experiences and knowledge, potentially leading to future collaborations.
                </p>

                {/* CTA Button */}
                <div className="hero-cta">
                    <button className="join-scu-btn">
                        About us
                    </button>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
            </div>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="about-container">
                    <div className="section-header">
                        <h2 className="section-title">Who are <span className="highlight">we?</span></h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="about-main">
                        <div className="about-icon">👥</div>
                        <h3 className="about-subtitle">BangRak Entrepreneur Club (BEC)</h3>
                        <p className="about-description">
                            We're a group of students building a community that empowers entrepreneurship, organizes training and inspired young entrepreneur.
                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card">
                            <div className="card-icon">🎯</div>
                            <h4 className="card-title">Vision</h4>
                            <p className="card-text">
                                The institute that connects attendees to broaden their opportunities and
                                perspective in entrepreneurship through interactions with individuals from diverse universities, faculties, and background.
                            </p>
                        </div>
                        <div className="about-card">
                            <div className="card-icon">🚀</div>
                            <h4 className="card-title">Mission</h4>
                            <p className="card-text">
                                The area allows individuals from diverse backgrounds to
                                exchange experiences and knowledge, potentially leading to future collaborations.
                            </p>
                        </div>
                        <div className="about-card">
                            <div className="card-icon">🏆</div>
                            <h4 className="card-title">Goal</h4>
                            <p className="card-text">
                                Become a leading institute that empowers individuals to
                                build opportunities for a sustainable future by incubation meaningful connections.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services-section">
                <div className="services-container">
                    <div className="section-header">
                        <h2 className="section-title">🤝 What We Offer</h2>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">👥</div>
                            <h4 className="service-title">Student Community</h4>
                            <p className="service-text">
                                Build a strong network of university students from diverse institutions and backgrounds.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🤝</div>
                            <h4 className="service-title">Collaborative Environment</h4>
                            <p className="service-text">
                                Foster collaboration among institutions and connect individuals with shared interests.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💡</div>
                            <h4 className="service-title">Knowledge Sharing</h4>
                            <p className="service-text">
                                Exchange experiences, ideas, and knowledge through interactive sessions and activities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section id="speakers" className="speakers-section">
                <div className="speakers-container">
                    <div className="section-header">
                        <h2 className="section-title">🎤 Speakers</h2>
                    </div>

                    {/* Scrollable container */}
                    <div className="speakers-scroll-container">
                        <div className="speakers-grid">
                            <div className="speaker-card">
                                <div className="speaker-image">👤</div>
                                <div className="speaker-info">
                                    <h4 className="speaker-name">Ms. Supansa Charoensuk</h4>
                                    <p className="speaker-topic">Topic: Building Your Personal Brand</p>
                                    <p className="speaker-description">
                                        Marketing strategist and branding expert, founder of BrandSpark, helping young entrepreneurs grow their online presence.
                                    </p>
                                    <button className="learn-more-btn">Learn More →</button>
                                </div>
                            </div>

                            <div className="speaker-card">
                                <div className="speaker-image">👨‍💼</div>
                                <div className="speaker-info">
                                    <h4 className="speaker-name">Mr. Kongphat Phaiboonnukulkij</h4>
                                    <p className="speaker-topic">Topic: How to start the business</p>
                                    <p className="speaker-description">
                                        An innovative architect and inventor, serving as the Chief Executive Officer
                                        and Chief Innovation Officer of Videnvaren+.
                                    </p>
                                    <button className="learn-more-btn">Learn More →</button>
                                </div>
                            </div>

                            <div className="speaker-card">
                                <div className="speaker-image">👨‍🔬</div>
                                <div className="speaker-info">
                                    <h4 className="speaker-name">Dr. Thanakorn Srisuk</h4>
                                    <p className="speaker-topic">Topic: Innovation in Tech Startups</p>
                                    <p className="speaker-description">
                                        Tech startup mentor and university lecturer, passionate about fostering innovation and entrepreneurship in Thailand.
                                    </p>
                                    <button className="learn-more-btn">Learn More →</button>
                                </div>
                            </div>

                            <div className="speaker-card">
                                <div className="speaker-image">👩‍💻</div>
                                <div className="speaker-info">
                                    <h4 className="speaker-name">Ms. Natcha Wongchai</h4>
                                    <p className="speaker-topic">Topic: Women in Entrepreneurship</p>
                                    <p className="speaker-description">
                                        Co-founder of Tech4All, empowering women in tech and business, and advocate for diversity in the startup ecosystem.
                                    </p>
                                    <button className="learn-more-btn">Learn More →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Agenda Section */}
            <section id="agenda" className="agenda-section">
                <div className="agenda-container">
                    <div className="section-header">
                        <h2 className="section-title">📅 Event Agenda</h2>
                    </div>

                    {/* ตรวจสอบว่ามี agenda หรือไม่ */}
                    {true ? ( // เปลี่ยน false เป็นเงื่อนไขเช็คข้อมูลจริง เช่น agendaList.length > 0
                        <div className="agenda-timeline">
                            <div className="timeline-item">
                                <div className="timeline-time">12:30 - 13:00</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">Registration</h4>
                                    <p className="timeline-description">Registration.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-time">13:00 - 13:30</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">Ice breaking</h4>
                                    <p className="timeline-description">To facilitate ice breaking activities, allowing participants to get to know each other better.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-time">13:30 - 15:00</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">Speaker 1</h4>
                                    <p className="timeline-description">The first speaker sharing their session.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-time">15:00 - 15:15</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">Break</h4>
                                    <p className="timeline-description">Take a break for 15 minutes.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-time">15:15 - 16:45</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">Speaker 2</h4>
                                    <p className="timeline-description">The next speaker sharing their session.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-time">16:45 - 17:00</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">Ending Ceremony</h4>
                                    <p className="timeline-description">To deliver the closing speech and thank our sponsors.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-time">17:00 - 17:30</div>
                                <div className="timeline-content">
                                    <h4 className="timeline-title">Networking</h4>
                                    <p className="timeline-description">Networking time.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={{
                            textAlign: "center",
                            color: "#d4af37",
                            background: "rgba(0,0,0,0.2)",
                            padding: "2rem",
                            borderRadius: "12px",
                            marginTop: "2rem"
                        }}>
                            ไม่มี Event Agenda ในขณะนี้
                        </div>
                    )}
                </div>
            </section>

            {/* Location Section */}
            {false ? (
                <section id="location" className="location-section">
                    <div className="location-container">
                        <div className="section-header">
                            <h2 className="section-title">📍 Event Location</h2>
                        </div>

                        <div className="location-content">
                            <div className="location-info">
                                <h3 className="location-name">TrueSpace สยามสแควร์ ซอย 2</h3>
                                <p className="location-address">234 232/4-5 สยามสแควร์ ซอย 2 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330</p>

                                <div className="location-features">
                                    <div className="feature-item">
                                        <span className="feature-icon">🏢</span>
                                        <span>State-of-the-art facilities</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">🚇</span>
                                        <span>Easy access via public transportation</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">🅿️</span>
                                        <span>Ample parking available</span>
                                    </div>
                                </div>

                                <button className="directions-btn">
                                    Get Directions 🗺️
                                </button>
                            </div>

                            <div className="location-map">
                                <div className="map-placeholder">
                                    <span className="map-icon">🗺️</span>
                                    <p>Interactive Map</p>
                                    <small>TrueSpace สยามสแควร์ ซอย 2</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div style={{
                    textAlign: "center",

                }}>

                </div>
            )}

            {/* Sponsors Section */}
            <section id="sponsors" className="sponsors-section">
                <div className="sponsors-container">
                    <div className="section-header">
                        <h2 className="section-title"> Our Sponsors</h2>
                    </div>

                    <div className="sponsors-grid">

                        <div className="sponsor-item">
                            <div className="sponsor-logo-small">
                                <img src="/public/logo/SEA_Bridge.png" alt="" className='sponsor-img' />
                            </div>
                        </div>

                        <div className="sponsor-item">
                            <div className="sponsor-logo">
                                <img src="/public/logo/RABBIT.png" alt="" className='sponsor-img' />
                            </div>
                        </div>
                        <div className="sponsor-item">
                            <div className="sponsor-logo">
                                <img src="/public/logo/chang.png" alt="" className='sponsor-img' />
                            </div>
                        </div>
                        <div className="sponsor-item">
                            <div className="sponsor-logo">
                                <img src="/public/logo/Tao.png" alt="" className='sponsor-img' />
                            </div>
                        </div>
                        <div className="sponsor-item">
                            <div className="sponsor-logo">
                                <img src="/public/logo/b2s.png" alt="" className='sponsor-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <p className="footer-text">© 2025 BangRak Entrepreneur Club Unite. All rights reserved.</p>
                </div>
            </footer>

        </section>
    );
};

export default Home;