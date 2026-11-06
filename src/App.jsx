import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github, Linkedin,
  Menu, X, Globe2, Database, Layers3, Smartphone, Wrench, Mail,
  Terminal, ExternalLink, CheckCircle2
} from 'lucide-react'

const GITHUB = 'https://github.com/VimukthiKolitha'
const LINKEDIN = 'https://www.linkedin.com/in/vimukthi-kolitha-a53503329/'

const skills = [
  { name: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'], icon: Layers3 },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'], icon: Terminal },
  { name: 'Database', items: ['MongoDB', 'Mongoose'], icon: Database },
  { name: 'Tools', items: ['Git', 'GitHub', 'Postman'], icon: Wrench },
]

const services = [
  { number: '01', title: 'Business websites', description: 'Responsive, polished websites that help businesses explain what they do and build trust online.', icon: Globe2 },
  { number: '02', title: 'Full-stack applications', description: 'Web applications with practical frontend experiences, backend APIs and database integration.', icon: Code2 },
  { number: '03', title: 'Website improvements', description: 'Responsive fixes, UI refinements, bug fixing and improvements to existing websites.', icon: Smartphone },
]

const projects = [
  {
    number: '01',
    category: 'ACADEMIC / RESEARCH PROJECT',
    title: 'HopeHub',
    description: 'An integrated recovery-support application concept focused on assessment, recovery check-ins and connecting users with support.',
    tags: ['Web / Mobile', 'Backend integration', 'Research project'],
    status: 'Project details to be added',
  },
  {
    number: '02',
    category: 'WEB DEVELOPMENT',
    title: 'Business website',
    description: 'A space for a responsive business website project. Replace this card with a completed project, screenshots and a live demo.',
    tags: ['React', 'Tailwind CSS', 'Responsive UI'],
    status: 'Add your project',
  },
  {
    number: '03',
    category: 'FULL-STACK DEVELOPMENT',
    title: 'Web application',
    description: 'A space for a full-stack application featuring authentication, API integration and database operations.',
    tags: ['React', 'Node.js', 'Database'],
    status: 'Add your project',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function SectionHeading({ eyebrow, title, detail }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {detail && <p className="section-detail">{detail}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const nav = [
    ['About', '#about'], ['Skills', '#skills'], ['Services', '#services'],
    ['Projects', '#projects'], ['Contact', '#contact'],
  ]

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Go to home">
          <span className="brand-mark">VK</span>
          <span>vimukthi<span className="brand-dot">.</span></span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
            <div className="availability"><span className="availability-dot" /> OPEN TO FREELANCE OPPORTUNITIES</div>
            <p className="hero-intro">Hello, I'm</p>
            <h1>G.R Vimukthi<br /><span>Kolitha.</span></h1>
            <h2 className="hero-role">Full-Stack Web Developer</h2>
            <p className="hero-description">
              I build modern, responsive web experiences — from clean user interfaces
              to functional applications powered by reliable backend systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Get in touch <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-socials">
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="visual-grid" />
            <div className="code-window">
              <div className="window-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>developer.js</span>
                <span className="window-lock">●</span>
              </div>
              <div className="code-content">
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {'{'}</p>
                <p><span className="code-muted">02</span> &nbsp;name: <span className="code-green">'Vimukthi'</span>,</p>
                <p><span className="code-muted">03</span> &nbsp;role: <span className="code-green">'Full-Stack Developer'</span>,</p>
                <p><span className="code-muted">04</span> &nbsp;focus: [</p>
                <p><span className="code-muted">05</span> &nbsp;&nbsp;<span className="code-orange">'Web Development'</span>,</p>
                <p><span className="code-muted">06</span> &nbsp;&nbsp;<span className="code-orange">'Problem Solving'</span></p>
                <p><span className="code-muted">07</span> &nbsp;],</p>
                <p><span className="code-muted">08</span> &nbsp;available: <span className="code-blue">true</span></p>
                <p><span className="code-muted">09</span> {'}'}</p>
                <p className="code-cursor"><span className="code-muted">10</span> <span className="cursor-block" /></p>
              </div>
              <div className="window-footer"><span><span className="footer-pulse" /> Available for new projects</span><span>UTF-8&nbsp;&nbsp; JavaScript</span></div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={15} /> Build with purpose</div>
            <div className="floating-chip chip-bottom"><span className="chip-spark">✳</span> Design · Develop · Deliver</div>
          </motion.div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Turning ideas into<br /><span className="text-gradient">digital experiences.</span></>} />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">I'm an aspiring full-stack developer and final-year university student who enjoys turning real-world problems into useful digital solutions.</p>
              <p className="body-copy">I work across frontend and backend development, with an interest in building clean interfaces, practical application features and reliable integrations. I'm currently growing my professional experience and looking forward to collaborating with people who have ideas worth building.</p>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-link">Connect with me on LinkedIn <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-facts">
              <div className="fact-card"><span className="fact-number">01</span><div><strong>Full-stack mindset</strong><p>From user interface to server-side logic.</p></div></div>
              <div className="fact-card"><span className="fact-number">02</span><div><strong>Always learning</strong><p>Improving through projects and practice.</p></div></div>
              <div className="fact-card"><span className="fact-number">03</span><div><strong>Collaborative</strong><p>Focused on communication and useful outcomes.</p></div></div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Technologies I <span className="text-gradient">work with.</span></>} detail="A growing toolkit for designing, developing and delivering web applications." />
          <div className="skill-grid">
            {skills.map(({ name, items, icon: Icon }, index) => (
              <motion.div className="skill-card" key={name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay: index * 0.08 }}>
                <div className="skill-icon"><Icon size={20} /></div>
                <h3>{name}</h3>
                <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.div>
            ))}
          </div>
          <p className="small-note">Only keep technologies here that you can confidently discuss and use. Add or remove items as your skills develop.</p>
        </section>

        <section className="services section-wrap section-pad" id="services">
          <SectionHeading eyebrow="WHAT I CAN HELP WITH" title={<>Services built around<br /><span className="text-gradient">your goals.</span></>} />
          <div className="service-list">
            {services.map(({ number, title, description, icon: Icon }) => (
              <div className="service-row" key={number}>
                <span className="service-number">{number}</span>
                <div className="service-icon"><Icon size={22} /></div>
                <div className="service-copy"><h3>{title}</h3><p>{description}</p></div>
                <ArrowUpRight className="service-arrow" size={20} />
              </div>
            ))}
          </div>
        </section>

        <section className="projects section-wrap section-pad" id="projects">
          <div className="projects-heading">
            <SectionHeading eyebrow="SELECTED WORK" title={<>Projects that show<br /><span className="text-gradient">how I think.</span></>} detail="A selection of work and project spaces. More detailed case studies will be added as each project is prepared for public viewing." />
            <a href={GITHUB} target="_blank" rel="noreferrer" className="text-link">View GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article className="project-card" key={project.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: index * 0.08 }}>
                <div className={`project-art project-art-${index + 1}`}>
                  <div className="project-art-top"><span>PROJECT / {project.number}</span><span className="art-dot" /></div>
                  {index === 0 ? <div className="hopehub-art"><span className="hope-mark">H</span><span>hopehub</span><small>RECOVERY SUPPORT</small></div> :
                   index === 1 ? <div className="browser-art"><div /><div /><div /><div /></div> :
                   <div className="dashboard-art"><div className="dash-side" /><div className="dash-main"><i /><i /><i /><i /></div></div>}
                  <span className="art-caption">{index === 0 ? 'SUPPORT · RECOVERY · CONNECTION' : index === 1 ? 'DESIGN · RESPONSIVE · WEB' : 'PRODUCT · DATA · EXPERIENCE'}</span>
                </div>
                <div className="project-info">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-bottom"><span>{project.status}</span><span className="project-placeholder"><ExternalLink size={14} /> Link to be added</span></div>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="project-disclaimer"><CheckCircle2 size={15} /> Portfolio starter content: replace placeholder project cards with verified project details, screenshots and links before publishing.</p>
        </section>

        <section className="contact section-wrap section-pad" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>Let's build something<br /><span className="text-gradient">meaningful.</span></h2>
            <p className="contact-description">Have an idea, a project or an opportunity to discuss? I'd be happy to connect and explore how I can help.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={LINKEDIN} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href={GITHUB} target="_blank" rel="noreferrer">Explore my GitHub <Github size={17} /></a>
            </div>
            <div className="contact-socials">
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a href="#home" className="brand"><span className="brand-mark">VK</span><span>vimukthi<span className="brand-dot">.</span></span></a>
        <p>Designed & built by G.R Vimukthi Kolitha</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App