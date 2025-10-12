import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Briefcase, Code, BookOpen, Layers, Star, Zap, Server, Database, GitBranch, Terminal } from 'lucide-react';

const portfolioData = {
  name: "OBATERU BOLUWATIFE ANDREW",
  title: "Full-stack Developer",
  summary: "A passionate Full-stack Developer specializing in building high-performance, responsive web applications using the Next.js and React ecosystem. Experienced in handling both front-end aesthetics with Tailwind CSS and secure back-end operations with technologies like Appwrite, MongoDB, and Google Cloud.",
  contact: {
    email: "boluwatifeobateru@gmail.com",
    linkedin: "#", // Replace '#' with actual LinkedIn URL
    github: "#",   // Replace '#' with actual GitHub URL
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Solidity", "Java"],
    frameworks: ["Next.js", "React", "Node.js", "Express.js", "Tailwind CSS"],
    databases: ["MongoDB", "Firebase", "Appwrite", "AWS"],
    tools: ["Git", "GitHub", "Figma", "REST APIs"],
  },
  experience: [
    {
      role: "Full-stack Developer",
      company: "Inovareun",
      duration: "June 2025 - Present",
      location: "Lagos, Nigeria",
      description: "Driving the development of Aura, an all-in-one platform for effortless remote onboarding. Led the implementation of automated checklists and secure document collection features.",
      stack: ["Next.js", "JavaScript", "Appwrite", "Google Cloud"],
    },
    {
      role: "Frontend Developer",
      company: "Shaakaarah agency",
      duration: "Dec 2024 - April 2025",
      location: "Lagos, Nigeria",
      description: "Built Algorithmics, successfully developing responsive and visually appealing user interfaces. Focused on delivering seamless user experiences across various devices.",
      stack: ["Next.js", "Tailwind CSS"],
    },
  ],
  projects: [
    {
      name: "Collabriss",
      stack: ["Next.js", "Appwrite", "Tailwind CSS", "Google Cloud"],
      description: "A full-stack platform leveraging Next.js for superior performance and SEO advantages, crucial for online stores. Utilized Next.js API Routes to create a secure environment for handling sensitive operations like payments and inventory management.",
      github: "#", // Replace '#' with actual GitHub URL
      live: "#",   // Replace '#' with actual Live URL
    },
    {
      name: "Dunkab Ventures",
      stack: ["Next.js", "MongoDB", "Tailwind CSS"],
      description: "An elegant e-commerce gateway designed to showcase and deliver quality goods. Engineered for a seamless and secure 'Shop Now' to doorstep journey, making it a trusted connection for home and kitchen essentials.",
      github: "#", // Replace '#' with actual GitHub URL
      live: "#",   // Replace '#' with actual Live URL
    },
  ],
};

// --- Utility Components ---

const Badge = ({ children, icon: Icon, className = "" }) => (
  <span className={`inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 ${className}`}>
    {Icon && <Icon size={12} className="text-indigo-400" />}
    {children}
  </span>
);

const Section = ({ title, icon: Icon, children, id }) => (
  <section id={id} className="mb-16 pt-8 md:pt-16">
    <h2 className="text-3xl font-extrabold text-white mb-6 border-b-2 border-indigo-500/50 pb-2 flex items-center gap-3">
      {Icon && <Icon className="text-indigo-400" size={24} />}
      {title}
    </h2>
    {children}
  </section>
);

// --- Main Components ---

const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-10 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white tracking-widest">
        {portfolioData.name.split(' ')[0]}.
      </div>
      <nav className="hidden md:flex space-x-6">
        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium"
          >
            {item}
          </a>
        ))}
      </nav>
      {/* Mobile Menu Placeholder (Not implemented for single-file, but kept for structure) */}
    </div>
  </header>
);


const HeroSection = () => (
  <div className="pt-24 min-h-[70vh] flex items-center" id="about">
    <div className="grid md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-2">
        <p className="text-base text-indigo-400 font-semibold mb-2">Hello, I'm</p>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight mb-4">
          {portfolioData.name.split(' ')[0]} <span className="text-indigo-400">{portfolioData.name.split(' ')[1]}</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 flex items-center gap-2">
          <Briefcase size={20} className="text-gray-400" />
          {portfolioData.title}
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed mb-8">
          {portfolioData.summary}
        </p>
        <div className="flex space-x-4">
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-gray-300 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
            aria-label="Send Email"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
      <div className="hidden md:block md:col-span-1 flex justify-center">
        {/* Placeholder for professional avatar/image */}
        <div className="w-56 h-56 mx-auto rounded-full bg-indigo-500/20 ring-4 ring-indigo-500/50 flex items-center justify-center text-5xl font-bold text-indigo-400 shadow-2xl shadow-indigo-500/30">
          OB
        </div>
      </div>
    </div>
  </div>
);

const SkillsSection = () => (
  <Section title="Technical Skills" icon={Code} id="skills">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <SkillCategory title="Languages" icon={Terminal} skills={portfolioData.skills.languages} />
      <SkillCategory title="Frameworks & Libraries" icon={Layers} skills={portfolioData.skills.frameworks} />
      <SkillCategory title="Databases & BaaS" icon={Database} skills={portfolioData.skills.databases} />
      <SkillCategory title="Tools & Platforms" icon={GitBranch} skills={portfolioData.skills.tools} />
    </div>
  </Section>
);

const SkillCategory = ({ title, icon: Icon, skills }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition duration-500 transform hover:-translate-y-1 border border-gray-700">
    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
      <Icon size={20} className="text-indigo-400" /> {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} className="bg-gray-700/50 text-gray-300 ring-gray-600">
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

const ExperienceSection = () => (
  <Section title="Professional Experience" icon={Briefcase} id="experience">
    <div className="space-y-10 relative">
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-700 hidden sm:block"></div>
      {portfolioData.experience.map((job, index) => (
        <div key={index} className="flex relative pl-8 sm:pl-12 group">
          <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-indigo-500 ring-4 ring-gray-900 z-10 hidden sm:flex items-center justify-center">
            <Star size={12} className="text-white" />
          </div>
          <div className="flex-1 bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-indigo-500/30 transition duration-500 border border-gray-700">
            <p className="text-sm font-medium text-gray-400 mb-1">{job.duration} | {job.location}</p>
            <h3 className="text-2xl font-bold text-indigo-400 mb-1">{job.role}</h3>
            <h4 className="text-lg font-semibold text-white mb-3">{job.company}</h4>
            <p className="text-gray-300 mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <Badge key={tech} icon={Zap}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const ProjectsSection = () => (
  <Section title="Key Projects" icon={BookOpen} id="projects">
    <div className="grid md:grid-cols-2 gap-8">
      {portfolioData.projects.map((project, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col justify-between hover:shadow-indigo-500/30 transition duration-500 border border-gray-700">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <Badge key={tech} icon={Server}>{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-indigo-600 transition duration-300 flex items-center gap-2 font-medium"
            >
              <Github size={18} /> Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300 flex items-center gap-2 font-medium"
            >
              <Zap size={18} /> Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const ContactSection = () => (
    <Section title="Get In Touch" icon={Mail} id="contact">
        <div className="bg-gray-800 p-8 rounded-xl text-center border border-gray-700 shadow-xl">
            <p className="text-xl text-gray-300 mb-6">
                I am currently open to new Full-stack opportunities and collaborations. Let's build something impressive together.
            </p>
            <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02] active:scale-100"
            >
                <Mail size={20} className="mr-2" />
                Email Me Directly
            </a>
        </div>
    </Section>
);

const Footer = () => (
  <footer className="mt-20 py-8 border-t border-gray-700/50 text-center text-gray-500 text-sm">
    <p>&copy; {new Date().getFullYear()} {portfolioData.name.split(' ')[0]}. Built with React & Tailwind CSS.</p>
  </footer>
);

// --- Main Application Component ---

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
