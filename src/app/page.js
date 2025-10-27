"use client"
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Briefcase, Code, BookOpen, Layers, Star, Zap, Server, Database, GitBranch, Terminal, Menu, X, Download } from 'lucide-react';
import Image from 'next/image';
import { portfolioData } from '@/app/data/portfolioData';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { SpotlightEffect } from '@/app/components/SpotlightEffect';
import { AOSInit } from '@/app/components/AOSInit';


const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Badge = ({ children, icon: Icon, className = "" }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-500/20 ${className}`}>
    {Icon && <Icon size={12} className="text-cyan-400" />}
    {children}
  </span>
);
const Section = ({ title, icon: Icon, children, id }) => (
    <section
      id={id}
      className="mb-16 pt-8 md:pt-16"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-extrabold text-white mb-8 border-b-2 border-cyan-500/30 pb-3 flex items-center gap-3">
        {Icon && <Icon className="text-cyan-400" size={28} />}
        {title}
      </h2>
      {children}
    </section>
  );

const HeroSection = () => (
  <div className="pt-24 min-h-[70vh] flex items-center" id="about">
    <div className="grid md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-2">
        <p className="text-base text-cyan-400 font-semibold mb-2">Hello, I&apos;m</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
          {portfolioData.name.split(' ')[0]} <span className="text-cyan-400">{portfolioData.name.split(' ')[1]}</span>.
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 flex items-center gap-2">
          <Briefcase size={20} className="text-gray-400" />
          A <span className="text-cyan-400/90">{portfolioData.title}</span>
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed mb-8">
          {portfolioData.summary}
        </p>
        <div className="flex space-x-4">
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
            aria-label="Send Email"
          >
            <Mail size={28} />
          </a>
          <a
            href={portfolioData.contact.cv}
            download="/boluwatife_obateru_cv.pdf" 
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
            aria-label="Download CV"
            title="Download CV"
          >
            <Download size={28} />
          </a>
        </div>
      </div>
      <div className="hidden md:block md:col-span-1 justify-center">
        {/* Placeholder for professional avatar/image */}
        <div className="w-64 h-64 mx-auto rounded-full bg-cyan-500/10 ring-8 ring-cyan-500/20 flex items-center justify-center text-6xl font-bold text-cyan-400 shadow-2xl shadow-cyan-500/20 animate-pulse">
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
  <div 
    className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700"
    data-aos="fade-up"
  >
    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
      <Icon size={20} className="text-cyan-400" /> {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} className="bg-slate-700/50 text-slate-300 ring-slate-600">
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

const ExperienceSection = () => (
    <Section title="Professional Experience" icon={Briefcase} id="experience">
      <div className="space-y-10 relative">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-700 hidden sm:block"></div>
        {portfolioData.experience.map((job, index) => (
          <div key={index} data-aos="fade-left" data-aos-delay={index * 100}>
            <div className="flex relative pl-8 sm:pl-12 group">
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-cyan-500 ring-4 ring-slate-900 z-10 hidden sm:flex items-center justify-center">
                <Star size={12} className="text-white" />
              </div>
              <div className="flex-1 bg-slate-800 p-6 rounded-xl shadow-xl hover:shadow-cyan-500/20 transition duration-500 border border-slate-700">
                <p className="text-sm font-medium text-gray-400 mb-1">{job.duration} | {job.location}</p>
                <h3 className="text-2xl font-bold text-cyan-400 mb-1">{job.role}</h3>
                <h4 className="text-lg font-semibold text-white mb-3">{job.company}</h4>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <Badge key={tech} icon={Zap}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );

const ProjectsSection = () => {
const initialProjectsToShow = 4;
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(initialProjectsToShow);
  const showAllProjects = visibleProjectsCount === portfolioData.projects.length;

  const handleToggleProjects = () => {
    if (showAllProjects) {
      setVisibleProjectsCount(initialProjectsToShow);
    } else {
      setVisibleProjectsCount(portfolioData.projects.length);
    }
  };

  const projectsToDisplay = portfolioData.projects.slice(0, visibleProjectsCount);

  return (
    <Section title="Key Projects" icon={BookOpen} id="projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projectsToDisplay.map((project) => (
          <div key={project.name} className="group bg-slate-800 rounded-xl shadow-xl overflow-hidden hover:shadow-cyan-500/20 transition-all duration-300 border border-slate-700 transform hover:-translate-y-1" data-aos="fade-up">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
          </div>
          <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <Badge key={tech} icon={Server}>{tech}</Badge>
                ))}
              </div>
              <div className="flex space-x-4">
                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-cyan-600 transition duration-300 flex items-center gap-2 font-medium"
                >
                  <Github size={18} /> Code
                </a> */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300 flex items-center gap-2 font-medium"
                >
                  <Zap size={18} /> Live Demo
                </a>
              </div>
          </div>
        </div>
      ))}
     
    </div>
        {portfolioData.projects.length > initialProjectsToShow && (
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={handleToggleProjects}
            className="text-white underline text-center cursor-pointer hover:text-cyan-400 transition-colors duration-300"
          >
            {showAllProjects ? 'View Less' : 'View All Projects'}
          </button>
        </div>
      )}
  </Section>
);}

const ContactSection = () => (
    <Section title="Get In Touch" icon={Mail} id="contact">
        <div className="bg-slate-800 p-8 rounded-xl text-center border border-slate-700 shadow-xl">
            <p className="text-xl text-gray-300 mb-6">
                I am currently open to new Full-stack opportunities and collaborations. Let&apos;s build something impressive together.
            </p>
            <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300 transform hover:scale-[1.02] active:scale-100"
            >
                <Mail size={20} className="mr-2" />
                Email Me Directly
            </a>
        </div>
    </Section>
);

// --- Main Application Component ---

const HomePage = () => {
  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen font-sans selection:bg-cyan-500/30">
      <AOSInit />
      <SpotlightEffect />
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

export default HomePage;
