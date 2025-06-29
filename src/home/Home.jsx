import React, { useState, useEffect } from 'react';
import { SiLine } from 'react-icons/si';
import './Home.css';
import { FaCalendarAlt, FaFortAwesome, FaMicrophone } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { GiChampions } from "react-icons/gi";
import { FaHandsHoldingCircle } from "react-icons/fa6";





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
                        <div className="about-icon"><FaFortAwesome /></div>
                        <h3 className="about-subtitle">BangRak Entrepreneur Club (BEC)</h3>
                        <p className="about-description">
                            We're a group of students building a community that empowers entrepreneurship, organizes training and inspired young entrepreneur.
                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card">
                            <div className="card-icon"><GoGoal /></div>
                            <h4 className="card-title">Vision</h4>
                            <p className="card-text">
                                The institute that connects attendees to broaden their opportunities and
                                perspective in entrepreneurship through interactions with individuals from diverse universities, faculties, and background.
                            </p>
                        </div>
                        <div className="about-card">
                            <div className="card-icon"><HiMiniRocketLaunch /></div>
                            <h4 className="card-title">Mission</h4>
                            <p className="card-text">
                                The area allows individuals from diverse backgrounds to
                                exchange experiences and knowledge, potentially leading to future collaborations.
                            </p>
                        </div>
                        <div className="about-card">
                            <div className="card-icon"><GiChampions /></div>
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
                        <h2 className="section-title"> What We Offer</h2>
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

            {/* Guest Speaker Content */}
            <section id="guest-speaker" className="speakers-section">
                <div className="speakers-container">
                    <div className="section-header">
                        <h2 className="section-title">Featured <span className="highlight">Speaker</span></h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="bg-gradient-to-br rounded-3xl p-12 mt-8 backdrop-blur-lg shadow-2xl">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            {/* Left Section */}
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    <FaMicrophone className="text-base" />
                                    <span>Topic Session: How Business Innovators Think?</span>  
                                </div>

                                <h3 className="text-4xl font-bold text-yellow-600 mb-8 drop-shadow-lg">
                                    Dr. Buranin Rattanasombat
                                </h3>  

                                {/* Organizations */}
                                <div className="space-y-6">
                                    {/* Row 1 */}
                                    <div className="flex flex-col md:flex-row gap-8 pb-6 border-b border-white/10">
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className="w-16 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                                PTT
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-yellow-600 text-base leading-tight mb-1">
                                                    Chief New Business and<br />Sustainability Officer
                                                </div>
                                                <div className="text-sm text-white/70 leading-tight">
                                                    PTT Public Company Limited
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className="w-16 h-14 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                                ARUN+
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-yellow-600 text-base leading-tight mb-1">
                                                    ประธานกรรมการ
                                                </div>
                                                <div className="text-sm text-white/70 leading-tight">
                                                    บริษัท อรุณพลัส จำกัด
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex flex-col md:flex-row gap-8 pb-6 border-b border-white/10">
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className="w-16 h-14 bg-gradient-to-br from-gray-600 to-gray-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                                MAT
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-yellow-600 text-base leading-tight mb-1">
                                                    President of
                                                </div>
                                                <div className="text-sm text-white/70 leading-tight">
                                                    Marketing Association of<br />Thailand
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className="w-16 h-14 bg-gradient-to-br from-gray-500 to-gray-400 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                                MTEC
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-yellow-600 text-base leading-tight mb-1">
                                                    กรรมการ
                                                </div>
                                                <div className="text-sm text-white/70 leading-tight">
                                                    ศูนย์เทคโนโลยีโลหะและวัสดุแห่งชาติ<br />(MTEC)
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg text-center leading-tight">
                                            <div>
                                                <div>ENERGY</div>
                                                <div className="text-xs">ACADEMY</div>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-yellow-600 text-base leading-tight mb-1">
                                                กรรมการบริหาร
                                            </div>
                                            <div className="text-sm text-white/70 leading-tight">
                                                สถาบันวิทยาการพลังงาน
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Speaker Photo */}
                            <div className="flex-shrink-0 w-full lg:w-80">
                                <div className="w-full h-96 rounded-2xl overflow-hidden relative shadow-2xl group transform perspective-1000 -rotate-y-3 hover:rotate-y-0 hover:scale-105 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent z-10"></div>
                                    <img
                                        src="/Speakers/2.png"
                                        alt="Dr. Buranin Rattanasombat"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Speakers Section */}
            <section id="speakers" className="speakers-section py-16 bg-white">
                <div className="speakers-container max-w-6xl mx-auto px-4">
                    <div className="section-header text-center mb-10">
                        <h2 className="section-title text-3xl font-bold"> Speakers</h2>
                    </div>

                    <div className="flex flex-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">

                        {/* Speaker Card */}
                        <div className="speaker-card relative w-72 h-96 rounded-xl overflow-hidden group shadow-lg">
                            {/* Speaker Image */}
                            <img
                                src="/Speakers/1.png"
                                alt="Dr. Thanakorn Srisuk"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 p-4 flex flex-col justify-end text-white">
                                <h4 className="text-lg font-bold">Mr. Kongphat Phaiboonnukulkij </h4>
                                <p className="text-sm">Workshop : Design Thinking, BMC, and Value Propositions.</p>
                                <p className="text-xs mt-1 text-gray-300">
                                    Work Experiences :
                                    CEO and CIO of Videnvaren+
                                    Architecture Consultant  of EGS-plan International GmbH
                                    Co-Founder and CTO of Phytavaren Technology
                                    Junior Architect of Corstorphine & Wright Architects
                                    Architectural Innovation Specialist and Delegate of COP28 SEforALL Affiliation
                                </p>
                            </div>
                        </div>
                        {/* Speaker Card */}
                        <div className="speaker-card relative w-72 h-96 rounded-xl overflow-hidden group shadow-lg">
                            {/* Speaker Image */}
                            <img
                                src="/Speakers/2.png"
                                alt="Dr. Thanakorn Srisuk"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 p-4 flex flex-col justify-end text-white">
                                <h4 className="text-lg font-bold">Mr. Harit Hatwong</h4>
                                <p className="text-sm">Workshop : Pitching Technique, and Pitch Deck.</p>
                                <p className="text-xs mt-1 text-gray-300">
                                    Work Experiences :
                                    Founder & Managing Director of INNOVATORS CO., LTD.
                                    Marketing & Sales Director of Baan Pradubdaow cadet tutor school
                                    COO and Co-founder of Pok Pok - Food Delivery Platform
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Agenda Section */}
            <section id="agenda" className="agenda-section">
                <div className="agenda-container">
                    <div className="section-header">
                        <h2 className="section-title"> Event Agenda</h2>
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
                                <img src="/logo/SEA_Bridge.png" alt="" className='sponsor-img' />
                            </div>
                        </div>

                        <div className="sponsor-item">
                            <div className="sponsor-logo">
                                <img src="/logo/RABBIT.png" alt="" className='sponsor-img' />
                            </div>
                        </div>
                        <div className="sponsor-item">
                            <div className="sponsor-logo">
                                <img src="/logo/chang.png" alt="" className='sponsor-img' />
                            </div>
                        </div>
                        <div className="sponsor-item">
                            <div className="sponsor-logo">
                                <img src="/logo/Tao.png" alt="" className='sponsor-img' />
                            </div>
                        </div>
                        <div className="sponsor-item">
                            <div className="sponsor-logo">
                                <img src="/logo/b2s.png" alt="" className='sponsor-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <p className="footer-text">© 2025 BangRak Entrepreneur Club Unite. All rights reserved. Designed and developed by Pawit Panyasuphapong (Team).
                    </p>
                </div>
            </footer>

        </section>
    );
};

export default Home;