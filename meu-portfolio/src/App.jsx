import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Smartphone, Award, Briefcase, User, Lightbulb, Code, Server, Database, GitBranch, Download } from 'lucide-react';

// DADOS DO PORTFÓLIO - Fácil de editar
const portfolioData = {
  name: "Luan Vitorio Da Silva",
  title: "Desenvolvedor Backend Java | Full Stack",
  about: "Desenvolvedor Full Stack com foco em Java e Node.js, com experiência em arquiteturas baseadas em microsserviços, APIs REST, mensageria e cloud. Pós-graduando em Desenvolvimento Full Stack e graduando em Análise e Desenvolvimento de Sistemas. Atuo em projetos que envolvem desenvolvimento backend com Java 8+ e Spring Boot, além da criação e integração de APIs RESTful, testes automatizados (Mockito, Jest), versionamento com Git e deploy com Docker/Kubernetes.",
  objective: "Busco oportunidades como Desenvolvedor Backend Java ou Full Stack, em empresas que ofereçam ambiente colaborativo, plano de carreira e foco em inovação. Tenho como meta aplicar meus conhecimentos técnicos para criar soluções robustas e escaláveis, contribuindo diretamente com o crescimento da organização.",
  contact: {
    email: "contato.luandeveloper@gmail.com",
    phone: "(41) 98422-1038",
    linkedin: "https://www.linkedin.com/in/luan-vitorio-da-silva-66a820245/",
    github: "https://github.com/LuanvSilva", // Adicione seu link do github aqui
  },
  skills: [
    { name: 'Java 8+', level: 85, type: 'Backend' },
    { name: 'Spring Boot', level: 85, type: 'Backend' },
    { name: 'Node.js', level: 85, type: 'Backend' },
    { name: 'Microsserviços', level: 80, type: 'Arquitetura' },
    { name: 'APIs RESTful', level: 95, type: 'Backend' },
    { name: 'React', level: 65, type: 'Frontend' },
    { name: 'JavaScript', level: 85, type: 'Frontend' },
    { name: 'HTML/CSS', level: 85, type: 'Frontend' },
    { name: 'MySQL/PostgreSQL', level: 85, type: 'Banco de Dados' },
    { name: 'MongoDB', level: 70, type: 'Banco de Dados' },
    { name: 'Git & Git Flow', level: 90, type: 'Ferramentas' },
    { name: 'Docker', level: 70, type: 'DevOps' },
    { name: 'Kubernetes', level: 50, type: 'DevOps' },
    { name: 'JUnit/Mockito', level: 70, type: 'Testes' },
    { name: 'Jest', level: 85, type: 'Testes' },
  ],
  certifications: [
    { title: "Desenvolvimento Java com Cloud", issuer: "Santander", year: 2024 },
    { title: "AWS - Fundamentos para Desenvolvedores", issuer: "AWS Training", year: 2024 },
    { title: "Backend com Java", issuer: "Santander Bootcamp", year: 2024 },
    { title: "Node.js do Zero à Maestria com Projetos", issuer: "Udemy", year: 2023 },
    { title: "Introdução à Análise Macroeconômica", issuer: "ANBIMA", year: 2022 },
  ],
  // PREENCHA COM SEUS PROJETOS
  projects: [
    {
      title: "API de E-commerce",
      description: "Desenvolvimento de uma API RESTful completa para uma plataforma de e-commerce, com gerenciamento de produtos, usuários e pedidos.",
      tags: ["Java", "Spring Boot", "MySQL", "Docker"],
      githubLink: "#",
      deployLink: null,
    },
    {
      title: "Sistema de Gerenciamento",
      description: "Aplicação web para gerenciamento interno de tarefas e projetos, utilizando arquitetura de microsserviços.",
      tags: ["Node.js", "React", "MongoDB", "JWT"],
      githubLink: "#",
      deployLink: "#",
    },
    {
      title: "Seu Próximo Projeto",
      description: "Este é um card modelo. Edite o array 'projects' no código para adicionar seus próprios projetos e mostrar seu trabalho.",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      githubLink: "#",
      deployLink: null,
    },
  ]
};

// Componente de Animação para Seções
const SectionWrapper = ({ children, id, className = '' }) => (
  <motion.section
    id={id}
    className={`py-20 md:py-28 px-4 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-6xl mx-auto">{children}</div>
  </motion.section>
);

// Componente de Título de Seção
const SectionTitle = ({ icon: Icon, children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 flex items-center justify-center gap-3">
    <Icon className="text-cyan-400" size={36} />
    {children}
  </h2>
);

// --- COMPONENTES PRINCIPAIS ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Tecnologias' },
    { href: '#projects', label: 'Projetos' },
    { href: '#certifications', label: 'Certificações' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            LV.dev
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-800 pb-4"
          >
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-center py-2 text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = ["Desenvolvedor Backend Java", "Desenvolvedor Full Stack", "Apaixonado por Soluções Escaláveis"];

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen bg-slate-900 flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(207, 250, 254, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(207, 250, 254, 0.1) 1px, transparent 1px)',
            backgroundSize: '2rem 2rem',
        }}></div>

      <motion.div 
        className="z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          {portfolioData.name}
        </h1>
        <div className="h-10 md:h-12 mt-4 text-xl md:text-2xl text-cyan-400 font-mono">
            <AnimatePresence mode="wait">
                <motion.p
                    key={subtitleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {subtitles[subtitleIndex]}
                </motion.p>
            </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all">
            <Linkedin className="text-white" />
          </a>
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all">
            <Github className="text-white" />
          </a>
          <a href="#contact" className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all">
            <Mail className="text-white" />
          </a>
        </div>
      </motion.div>
      <motion.div 
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="text-cyan-400 animate-pulse">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </a>
      </motion.div>
    </section>
  );
};


const About = () => (
  <SectionWrapper id="about" className="bg-slate-800">
    <SectionTitle icon={User}>Sobre Mim</SectionTitle>
    <div className="grid md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-3">
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          {portfolioData.about}
        </p>
        <a href="/path-to-your-cv.pdf" download className="inline-flex items-center gap-2 bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors">
          <Download size={20} />
          Download CV
        </a>
      </div>
      <div className="md:col-span-2 flex justify-center">
        <div className="w-64 h-64 rounded-full bg-slate-700 border-4 border-cyan-400 shadow-lg shadow-cyan-500/20 flex items-center justify-center">
            {/* Você pode adicionar uma foto aqui */}
            <User size={120} className="text-slate-500"/>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

const SkillsSkeleton = () => (
  <div className="animate-pulse">
    <div className="w-3/4 h-8 bg-slate-700 rounded-md mx-auto mb-12"></div>
    <div className="h-96 bg-slate-700 rounded-lg"></div>
    <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="h-80 bg-slate-700 rounded-lg"></div>
        <div className="h-80 bg-slate-700 rounded-lg"></div>
    </div>
  </div>
);

const Skills = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Simula o carregamento
    return () => clearTimeout(timer);
  }, []);
  
  const skillTypes = ['Backend', 'Frontend', 'Banco de Dados', 'Ferramentas', 'DevOps', 'Testes', 'Arquitetura'];
  const skillDataForRadar = skillTypes.map(type => {
      const skillsOfType = portfolioData.skills.filter(s => s.type === type);
      const average = skillsOfType.reduce((acc, s) => acc + s.level, 0) / (skillsOfType.length || 1);
      return { subject: type, A: average, fullMark: 100 };
  });

  if (loading) return (
    <SectionWrapper id="skills" className="bg-slate-900">
      <SkillsSkeleton />
    </SectionWrapper>
  );

  return (
    <SectionWrapper id="skills" className="bg-slate-900">
      <SectionTitle icon={Code}>Tecnologias e Stack</SectionTitle>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="h-96">
            <h3 className="text-xl font-bold text-slate-200 text-center mb-4">Visão Geral</h3>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillDataForRadar}>
                    <PolarGrid stroke="#475569" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'transparent' }} />
                    <Radar name="Nível" dataKey="A" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.6} />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
        <div className="h-96">
            <h3 className="text-xl font-bold text-slate-200 text-center mb-4">Nível de Proficiência</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={portfolioData.skills} layout="vertical" margin={{ top: 5, right: 20, left: 80, bottom: 5 }}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" width={100} tick={{ fill: '#cbd5e1' }} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{fill: 'rgba(71, 85, 105, 0.5)'}} contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                    <Legend />
                    <Bar dataKey="level" fill="#22d3ee" background={{ fill: '#334155' }} barSize={15} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-slate-800 rounded-lg overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20"
    whileHover="hover"
  >
    <div className="p-6 relative">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4 h-20">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">
            <Github size={24} />
          </a>
        )}
        {project.deployLink && (
          <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">
            <Server size={24} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <SectionWrapper id="projects" className="bg-slate-800">
    <SectionTitle icon={Briefcase}>Projetos</SectionTitle>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.projects.map((proj, i) => (
        <ProjectCard key={i} project={proj} />
      ))}
    </div>
  </SectionWrapper>
);

const Certifications = () => (
  <SectionWrapper id="certifications" className="bg-slate-900">
    <SectionTitle icon={Award}>Certificações</SectionTitle>
    <div className="space-y-6">
      {portfolioData.certifications.map((cert, i) => (
        <motion.div 
          key={i} 
          className="bg-slate-800 p-6 rounded-lg flex items-center justify-between shadow-md hover:shadow-cyan-500/10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div>
            <h3 className="font-bold text-lg text-cyan-400">{cert.title}</h3>
            <p className="text-slate-400">{cert.issuer}</p>
          </div>
          <span className="font-mono text-slate-500">{cert.year}</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

const Objective = () => (
    <SectionWrapper id="objective" className="bg-slate-800">
        <SectionTitle icon={Lightbulb}>Objetivo Profissional</SectionTitle>
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-slate-300 leading-loose border-l-4 border-cyan-400 pl-6 italic">
                {portfolioData.objective}
            </p>
        </div>
    </SectionWrapper>
);


const Contact = () => (
    <SectionWrapper id="contact" className="bg-slate-900">
        <SectionTitle icon={Mail}>Contato</SectionTitle>
        <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-slate-300 mb-8">
                Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-3 text-lg text-slate-200 hover:text-cyan-400 transition-colors">
                    <Mail />
                    {portfolioData.contact.email}
                </a>
                <a href={`tel:${portfolioData.contact.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-lg text-slate-200 hover:text-cyan-400 transition-colors">
                    <Smartphone />
                    {portfolioData.contact.phone}
                </a>
            </div>
            <div className="mt-12 flex justify-center gap-6">
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all shadow-lg">
                    <Linkedin size={28} className="text-white" />
                </a>
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all shadow-lg">
                    <Github size={28} className="text-white" />
                </a>
            </div>
        </div>
    </SectionWrapper>
);

const Footer = () => (
    <footer className="bg-slate-900 text-center py-6 border-t border-slate-800">
        <p className="text-slate-500">
            &copy; {new Date().getFullYear()} {portfolioData.name}. Desenvolvido com React e ❤️.
        </p>
    </footer>
);

export default function App() {
  return (
    <div className="bg-slate-900 text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Objective />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
