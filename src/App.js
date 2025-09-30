import React from 'react';

// --- Icon Components (Inlined SVGs for single-file setup) ---
const LogoIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="4">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#fde047', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2dd4bf', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M85,95H25c-8.3,0-15-6.7-15-15V25c0-8.3,6.7-15,15-15h60c8.3,0,15,6.7,15,15v55C100,88.3,93.3,95,85,95z" stroke="url(#logoGradient)" />
    <circle cx="35" cy="45" r="5" fill="currentColor" stroke="none" />
    <path d="M25,65 Q40,75 55,65" strokeWidth="3" />
    <path d="M70,50H90" />
    <circle cx="70" cy="35" r="5" />
    <circle cx="70" cy="65" r="5" />
    <path d="M70,35 V25" />
    <path d="M70,65 V75" />
    <path d="M70,50 C60,50 60,35 70,35" />
    <path d="M70,50 C60,50 60,65 70,65" />
  </svg>
);


const GitHubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// --- New Icons for Services ---
const CodeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const SmartphoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const PenToolIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>
  </svg>
);


// --- Main App Component ---
export default function App() {
  // --- Data for your Agency/Services ---
  // ¡Personaliza esta sección con tu propia información!
  const companyInfo = {
    name: "CodeGen",
    headline: "Transforming Ideas into Exceptional Software Solutions with AI",
    subheadline: "We specialize in custom web, mobile and desktop application development that drives your business and blog growth.",
    email: "correo",
    // Set to real URLs if you have them, otherwise keep null so anchors are not rendered with invalid hrefs
    github: null,
    linkedin: null,
  };

  const services = [
    {
      icon: <CodeIcon className="w-10 h-10 mb-4 text-teal-400" />,
      title: "Web Development",
      description: "We create fast, responsive, and scalable web applications using the latest market technologies."
    },
    {
      icon: <SmartphoneIcon className="w-10 h-10 mb-4 text-teal-400" />,
      title: "Mobile Development",
      description: "We design and develop native and hybrid mobile apps for Android, focused on the user experience."
    },
    {
      icon: <SmartphoneIcon className="w-10 h-10 mb-4 text-teal-400" />,
      title: "Desktop Development",
      description: "We design scalable desktop modern apps with lastest technologies."
    },
    {
      icon: <SmartphoneIcon className="w-10 h-10 mb-4 text-teal-400" />,
      title: "AI Integrations",
      description: "We design integrations for your existing and new apps, chatbots and machine learning analysis."
    },
    {
      icon: <PenToolIcon className="w-10 h-10 mb-4 text-teal-400" />,
      title: "UI/UX Design",
      description: "We bring your ideas to life with intuitive and attractive interfaces that guarantee an unforgettable user experience."
    }
  ];

  const portfolio = [
    {
      title: "E-commerce App",
      description: "A B2C e-commerce platform with payment integrations, inventory management, and sales analytics for our client TechCorp.",
      tags: ["React", "Node.js", "Stripe", "MongoDB", "AWS"],
      liveUrl: null, // use null instead of '#'
      repoUrl: null,
      imageUrl: "https://placehold.co/600x400/1a202c/718096?text=E-commerce+App"
    },
    {
      title: "Colaborators Management",
      description: "A learning management system (LMS) with video courses, progress tracking, and discussion forums for an EdTech startup.",
      tags: ["Vue.js", "Firebase", "Node.js", "TailwindCSS"],
      liveUrl: null,
      repoUrl: null,
      imageUrl: "https://placehold.co/600x400/1a202c/718096?text=Educational+Platform"
    }
  ];

  const technologies = [
    "JavaScript (ES6+)", "C#", ".NET", "Java", "React", "React Native", "Node.js",
    "MongoDB", "REST APIs", "AWS", "Docker", "Git & GitHub"
  ];

  // --- JSX Structure ---
  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-normal tracking-tight">
      <Header companyInfo={companyInfo} />
      <main>
        <Hero companyInfo={companyInfo} />
        <Services services={services} />
        <Portfolio portfolio={portfolio} />
        <AboutUs />
        <Technologies technologies={technologies} />
        <Contact email={companyInfo.email} />
      </main>
      <Footer companyInfo={companyInfo} />
    </div>
  );
}


// --- Section Components ---

const Header = ({ companyInfo }) => (
  <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
    <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Changed href from '#' to '#hero' to provide a valid, accessible target */}
      <a href="#hero" className="flex items-center gap-3" aria-label="Go to top">
        <LogoIcon className="w-8 h-8 text-teal-400" />
        <span className="text-2xl font-bold text-teal-400">{companyInfo.name}</span>
      </a>
      <div className="hidden md:flex items-center space-x-6 font-medium">
        <a href="#services" className="hover:text-teal-400 transition-colors duration-300">Services</a>
        <a href="#portfolio" className="hover:text-teal-400 transition-colors duration-300">Portfolio</a>
        <a href="#about-us" className="hover:text-teal-400 transition-colors duration-300">About Us</a>
        <a href="#contact" className="bg-teal-500 text-gray-900 px-4 py-2 rounded-md hover:bg-teal-400 transition-colors duration-300">Contact Us</a>
      </div>
    </nav>
  </header>
);

const Hero = ({ companyInfo }) => (
  <section id="hero" className="py-24 md:py-32 bg-gray-900">
    <div className="container mx-auto px-6 md:px-12 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
        {companyInfo.headline}
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10">{companyInfo.subheadline}</p>
      <a href="#contact" className="inline-block bg-teal-500 text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-teal-400 transition-all duration-300 transform hover:scale-105">
        Get a Quote
      </a>
    </div>
  </section>
);

const Services = ({ services }) => (
  <section id="services" className="py-20 bg-gray-800">
    <div className="container mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our <span className="text-teal-400">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            {service.icon}
            <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const Portfolio = ({ portfolio }) => (
  <section id="portfolio" className="py-20">
    <div className="container mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our <span className="text-teal-400">Portfolio</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 text-teal-400">{project.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      <div className="mb-4">
        {project.tags.map((tag, i) => (
          <span key={i} className="inline-block bg-gray-700 text-teal-300 text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex justify-between items-center">
        {/* Conditionally render repo link only if repoUrl exists */}
        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center gap-2">
            <GitHubIcon className="w-5 h-5" />
            Code
          </a>
        ) : (
          <span className="text-gray-600 flex items-center gap-2 cursor-not-allowed opacity-70">
            <GitHubIcon className="w-5 h-5" />
            Code
          </span>
        )}

        {/* Conditionally render live link only if liveUrl exists */}
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center gap-2">
            View App
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        ) : (
          <span className="text-gray-600 flex items-center gap-2 cursor-not-allowed opacity-70">
            View App
            <ExternalLinkIcon className="w-5 h-5" />
          </span>
        )}
      </div>
    </div>
  </div>
);

const AboutUs = () => (
  <section id="about-us" className="py-20 bg-gray-800">
    <div className="container mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        About <span className="text-teal-400">Us</span>
      </h2>
      <div className="max-w-4xl mx-auto text-lg text-gray-400 space-y-4 text-center">
        <p>
          We are a team of developers, designers, and strategists passionate about technology. Our mission is to help businesses of all sizes reach their full potential through innovative and high-quality digital solutions.
        </p>
        <p>
          We believe in collaboration, transparency, and technical excellence. We work closely with our clients to understand their needs and deliver products that not only meet but exceed their expectations.
        </p>
      </div>
    </div>
  </section>
);

const Technologies = ({ technologies }) => (
  <section id="technologies" className="py-20">
    <div className="container mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Technologies We <span className="text-teal-400">Master</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md shadow-md font-medium">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = ({ email }) => (
  <section id="contact" className="py-20 bg-teal-900/20 text-center">
    <div className="container mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Start Your <span className="text-teal-400">Next Project</span>?
      </h2>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        We'd love to hear your idea. Contact us for a free, no-obligation consultation.
      </p>
      <a
        href={`mailto:${email}`}
        className="inline-block bg-teal-500 text-gray-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-teal-400 transition-all duration-300 transform hover:scale-105"
      >
        Let's Talk
      </a>
    </div>
  </section>
);


const Footer = ({ companyInfo }) => (
  <footer className="bg-gray-800 border-t border-gray-700 py-8">
    <div className="container mx-auto px-6 md:px-12 text-center text-gray-500">
      <div className="flex justify-center items-center gap-3 mb-4">
        <LogoIcon className="w-8 h-8 text-gray-400" />
        <span className="text-xl font-bold text-gray-400">{companyInfo.name}</span>
      </div>
      <div className="flex justify-center items-center space-x-6 mb-4">
        {companyInfo.github && (
          <a href={companyInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-transform duration-300 transform hover:scale-110">
            <GitHubIcon className="w-6 h-6" />
          </a>
        )}
        {companyInfo.linkedin && (
          <a href={companyInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-transform duration-300 transform hover:scale-110">
            <LinkedInIcon className="w-6 h-6" />
          </a>
        )}
        <a href={`mailto:${companyInfo.email}`} className="hover:text-teal-400 transition-transform duration-300 transform hover:scale-110">
          <MailIcon className="w-6 h-6" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
    </div>
  </footer>
);
