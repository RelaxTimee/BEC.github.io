import './Home.css';
import { FaCalendarAlt, FaFortAwesome, FaMicrophone } from 'react-icons/fa';
import { FaHandsHoldingCircle } from 'react-icons/fa6';
import { GoGoal } from 'react-icons/go';
import { HiMiniRocketLaunch } from 'react-icons/hi2';
import { GiChampions } from 'react-icons/gi';

const aboutCards = [
  {
    title: 'Vision',
    icon: <GoGoal />,
    text: 'Connect attendees with broader opportunities and perspectives in entrepreneurship through interactions across universities, faculties, and backgrounds.',
  },
  {
    title: 'Mission',
    icon: <HiMiniRocketLaunch />,
    text: 'Create a space where people from diverse backgrounds can exchange experiences, ideas, and knowledge that may lead to future collaborations.',
  },
  {
    title: 'Goal',
    icon: <GiChampions />,
    text: 'Become a leading institute that empowers individuals to build opportunities for a sustainable future through meaningful connections.',
  },
];

const services = [
  {
    title: 'Student Community',
    icon: <FaHandsHoldingCircle />,
    text: 'Build a strong network of university students from diverse institutions and backgrounds.',
  },
  {
    title: 'Collaborative Environment',
    icon: <GoGoal />,
    text: 'Foster collaboration among institutions and connect individuals with shared interests.',
  },
  {
    title: 'Knowledge Sharing',
    icon: <HiMiniRocketLaunch />,
    text: 'Exchange experiences, ideas, and knowledge through interactive sessions and activities.',
  },
];

const guestOrganizations = [
  {
    logo: '/logo/ptt.png',
    alt: 'PTT Public Company Limited',
    role: 'Chief New Business and Sustainability Officer',
    organization: 'PTT Public Company Limited',
  },
  {
    logo: '/logo/logo-arun-plus.svg',
    alt: 'ARUN PLUS',
    role: 'Chairman',
    organization: 'ARUN PLUS Company Limited',
  },
  {
    logo: '/logo/MAT.png',
    alt: 'Marketing Association of Thailand',
    role: 'President',
    organization: 'Marketing Association of Thailand',
  },
  {
    logo: '/logo/MTEC.png',
    alt: 'MTEC',
    role: 'Committee Member',
    organization: 'National Metal and Materials Technology Center (MTEC)',
  },
  {
    logo: '/logo/TEA.png',
    alt: 'Thai Energy Academy',
    role: 'Executive Committee Member',
    organization: 'Thai Energy Academy',
  },
];

const speakers = [
  {
    name: 'Mr. Kongphat Phaiboonnukulkij',
    image: '/Speakers/1.png',
    topic: 'Workshop: Design Thinking, BMC, and Value Propositions',
    experience:
      'CEO and CIO of Videnvaren+, architecture consultant at EGS-plan International GmbH, co-founder and CTO of Phytavaren Technology, and architectural innovation specialist.',
  },
  {
    name: 'Mr. Harit Hatwong',
    image: '/Speakers/2.png',
    topic: 'Workshop: Pitching Technique and Pitch Deck',
    experience:
      'Founder and managing director of INNOVATORS CO., LTD., marketing and sales director at Baan Pradubdaow cadet tutor school, and COO/co-founder of Pok Pok Food Delivery Platform.',
  },
];

const judges = [
  {
    name: 'Mr. Podsawee Wanatham',
    image: '/Judge/3.png',
    experience:
      'CEO and founder of THE STATION GROUP HOLDINGS CO., LTD., co-CEO of BUALOITECH CO., LTD., CTO and co-founder roles across several technology companies, and founder of LEARNING CODE STATION.',
  },
  {
    name: 'Mr. Tanadon Wanitnunttada',
    image: '/Judge/4.png',
    experience:
      'Co-founder, CEO, lead product designer, UX/UI designer, business analyst, motion graphic designer, project manager, and experience designer across product and creative teams.',
  },
  {
    name: 'Mr. Nontouch Srisuksa',
    image: '/Judge/5.png',
    experience:
      'Head of IT Strategy and Planning at Krungsri Consumer, PMO director at True Digital Group, transformation and PMO leader, and guest speaker across universities and industry events.',
  },
];

const agenda = [
  ['12:30 - 13:00', 'Registration', 'Participant registration and welcome desk.'],
  ['13:00 - 13:30', 'Ice Breaking', 'Activities that help participants get to know each other.'],
  ['13:30 - 15:00', 'Speaker 1', 'The first speaker session.'],
  ['15:00 - 15:15', 'Break', 'A short break for participants.'],
  ['15:15 - 16:45', 'Speaker 2', 'The next speaker session.'],
  ['16:45 - 17:00', 'Ending Ceremony', 'Closing remarks and sponsor appreciation.'],
  ['17:00 - 17:30', 'Networking', 'Open networking time for attendees.'],
];

const sponsors = [
  { src: '/logo/SEA_Bridge.png', alt: 'SEA Bridge sponsor logo', size: 'large' },
  { src: '/logo/RABBIT.png', alt: 'Rabbit sponsor logo' },
  { src: '/logo/chang.png', alt: 'Chang sponsor logo' },
  { src: '/logo/Tao.png', alt: 'Tao Kae Noi sponsor logo' },
  { src: '/logo/b2s.png', alt: 'B2S sponsor logo' },
];

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const PersonCard = ({ person, type }) => (
  <article className="speaker-card relative w-72 h-96 rounded-lg overflow-hidden group shadow-lg">
    <img
      src={person.image}
      alt={`${person.name} ${type}`}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="speaker-overlay-panel absolute inset-0 bg-black bg-opacity-70 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 p-4 flex flex-col justify-end text-white">
      <h4 className="text-lg font-bold">{person.name}</h4>
      {person.topic && <p className="text-sm text-yellow-200">{person.topic}</p>}
      <p className="text-xs mt-2 text-gray-200 leading-relaxed">{person.experience}</p>
    </div>
  </article>
);

const Home = () => {
  return (
    <main id="home" className="home-section">
      <div className="hero-background"></div>

      <section className="hero-content" aria-labelledby="hero-title">
        <div className="logo-main">
          <img src="/Logo.png" alt="BangRak Entrepreneur Club logo" className="logo-image" />
        </div>

        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-part">BANGRAK</span>
          <span className="hero-title-part">ENTREPRENEUR</span>
          <span className="hero-title-part">CLUB</span>
        </h1>

        <p className="hero-description">
          A student-led entrepreneurship community where people from diverse backgrounds exchange ideas,
          build networks, and create opportunities for future collaborations.
        </p>

        <div className="hero-cta">
          <button className="join-scu-btn" type="button" onClick={() => scrollToSection('about')}>
            About us
          </button>
        </div>
      </section>

      <div className="floating-elements" aria-hidden="true">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="section-header">
            <h2 className="section-title">
              Who are <span className="highlight">we?</span>
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="about-main">
            <div className="about-icon" aria-hidden="true">
              <FaFortAwesome />
            </div>
            <h3 className="about-subtitle">BangRak Entrepreneur Club (BEC)</h3>
            <p className="about-description">
              We are a group of students building a community that empowers entrepreneurship,
              organizes training, and inspires young entrepreneurs.
            </p>
          </div>

          <div className="about-cards">
            {aboutCards.map((card) => (
              <article className="about-card" key={card.title}>
                <div className="card-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h4 className="card-title">{card.title}</h4>
                <p className="card-text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="services-container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="guest-speaker" className="speakers-section">
        <div className="speakers-container">
          <div className="section-header">
            <h2 className="section-title">
              Guest <span className="highlight">Speaker</span>
            </h2>
            <div className="title-underline"></div>
          </div>

          <div className="bg-gradient-to-br from-black/40 to-yellow-900/10 border border-yellow-200/20 rounded-lg p-8 md:p-12 mt-8 backdrop-blur-lg shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FaMicrophone className="text-base" aria-hidden="true" />
                  <span>Topic Session: How Business Innovators Think?</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-8 drop-shadow-lg">
                  Dr. Buranin Rattanasombat
                </h3>

                <div className="space-y-6">
                  {guestOrganizations.map((item) => (
                    <div className="guest-org-row" key={`${item.role}-${item.organization}`}>
                      <div className="w-16 h-14 flex items-center justify-center">
                        <img src={item.logo} alt={item.alt} className="h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-yellow-600 text-base leading-tight mb-1">
                          {item.role}
                        </div>
                        <div className="text-sm text-white/70 leading-tight">{item.organization}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 w-full lg:w-80">
                <div className="w-full h-96 rounded-lg overflow-hidden relative shadow-2xl group transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent z-10"></div>
                  <img
                    src="/Speakers/3.png"
                    alt="Dr. Buranin Rattanasombat guest speaker portrait"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="speakers" className="speakers-section py-16">
        <div className="speakers-container max-w-6xl mx-auto px-4">
          <div className="section-header text-center mb-10">
            <h2 className="section-title text-3xl font-bold">Speakers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            {speakers.map((speaker) => (
              <PersonCard person={speaker} type="speaker" key={speaker.name} />
            ))}
          </div>
        </div>
      </section>

      <section id="judges" className="speakers-section py-16">
        <div className="speakers-container max-w-6xl mx-auto px-4">
          <div className="section-header text-center mb-10">
            <h2 className="section-title text-3xl font-bold">Judges</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {judges.map((judge) => (
              <PersonCard person={judge} type="judge" key={judge.name} />
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="agenda-section">
        <div className="agenda-container">
          <div className="section-header">
            <h2 className="section-title">
              <FaCalendarAlt aria-hidden="true" className="section-title-icon" />
              Event Agenda
            </h2>
          </div>

          <div className="agenda-timeline">
            {agenda.map(([time, title, description]) => (
              <article className="timeline-item" key={`${time}-${title}`}>
                <div className="timeline-time">{time}</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{title}</h4>
                  <p className="timeline-description">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="sponsors-section">
        <div className="sponsors-container">
          <div className="section-header">
            <h2 className="section-title">Our Sponsors</h2>
          </div>

          <div className="sponsors-grid">
            {sponsors.map((sponsor) => (
              <div className="sponsor-item" key={sponsor.alt}>
                <div className={sponsor.size === 'large' ? 'sponsor-logo-small' : 'sponsor-logo'}>
                  <img src={sponsor.src} alt={sponsor.alt} className="sponsor-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">
            Copyright 2025 BangRak Entrepreneur Club Unite. All rights reserved. Designed and
            developed by Pawit Panyasuphapong (Team).
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
