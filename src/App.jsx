import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Code2, Github, Linkedin,
  Menu, X, Globe2, Database, Layers3, Smartphone, Wrench, Mail,
  Terminal, GraduationCap, Languages, MapPin
} from 'lucide-react'
import kolithaImg from './Assets/kolitha.png';
import hopehub from './Assets/image.png';

const GITHUB = 'https://github.com/VimukthiKolitha'
const LINKEDIN = 'https://www.linkedin.com/in/vimukthi-kolitha-a53503329/'
const EMAIL = 'vimukthikolitah@gmail.com'

const skills = [
  { name: 'Languages', items: ['Java', 'C', 'C++', 'JavaScript', 'Python', 'PHP', 'Kotlin'], icon: Code2 },
  { name: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'], icon: Layers3 },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'PHP', 'REST APIs'], icon: Terminal },
  { name: 'Databases', items: ['MongoDB', 'MySQL', 'MS SQL Server', 'PostgreSQL'], icon: Database },
  { name: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Eclipse', 'Visual Studio', 'Android Studio', 'Dev C++', 'RStudio'], icon: Wrench },
]

const services = [
  { number: '01', title: 'Business websites', description: 'Responsive, polished websites that help businesses explain what they do and build trust online.', icon: Globe2 },
  { number: '02', title: 'Full-stack applications', description: 'Web applications with practical frontend experiences, backend APIs and database integration.', icon: Code2 },
  { number: '03', title: 'Mobile & website improvements', description: 'Android apps in Kotlin, plus responsive fixes, UI refinements and bug fixing for existing websites.', icon: Smartphone },
]

const projects = [
  {
    number: '01',
    category: 'ACADEMIC / RESEARCH PROJECT',
    title: 'HopeHub',
    description: 'An integrated recovery-support application concept focused on assessment, recovery check-ins and connecting users with support.',
    tags: ['Mobile', 'Backend integration', 'Research project'],
    status: 'Academic project',
    art: hopehub,
    caption: 'SUPPORT · RECOVERY · CONNECTION',
  },
  {
    number: '02',
    category: 'FULL-STACK WEB APP',
    title: 'Local Helaya',
    description: 'An online food delivery platform where customers browse menus, select items, place orders and pay securely, with their food delivered to their door.',
    tags: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Postman', 'EmailJS'],
    status: '2024',
    art: 'browser',
    caption: 'FOOD · ORDERS · PAYMENTS',
  },
  {
    number: '03',
    category: 'ANDROID APP',
    title: 'To-Do App',
    description: 'A productivity app for managing daily tasks: create tasks with a name, date and time, view them in an organized RecyclerView list, and edit or delete as priorities change.',
    tags: ['Kotlin', 'Android Studio'],
    status: '2024',
    art: 'dashboard',
    caption: 'TASKS · PRODUCTIVITY · MOBILE',
  },
  {
    number: '04',
    category: 'JAVA APPLICATION',
    title: 'Student Management',
    description: 'A system that helps educational institutions manage student information efficiently, simplifying administrative work and centralizing student data.',
    tags: ['Java', 'Eclipse IDE', 'MySQL'],
    status: '2024',
    art: 'dashboard',
    caption: 'STUDENTS · RECORDS · ADMIN',
  },
  {
    number: '05',
    category: 'WEB APPLICATION',
    title: 'Event Management',
    description: 'A platform that streamlines planning, organization and execution of events, improving coordination for organizers, attendees and stakeholders.',
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    status: '2023',
    art: 'browser',
    caption: 'EVENTS · PLANNING · COORDINATION',
  },
]

const education = [
  { years: '2023 — 2026', title: 'BSc (Hons) in Information Technology', place: 'SLIIT, Malabe', note: 'Undergraduate · Y4S2' },
  { years: '2021', title: 'G.C.E. Advanced Level', place: 'A/L', note: '' },
  { years: '2018', title: 'G.C.E. Ordinary Level', place: 'O/L', note: '' },
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

function ProjectArt({ type, number, caption, index }) {
  return (
    <div className={`project-art project-art-${(index % 3) + 1}`}>
      <div className="project-art-top"><span>PROJECT / {number}</span><span className="art-dot" /></div>
      {type === 'hope' ? <div className="hopehub-art"><span className="hope-mark">H</span><span>hopehub</span><small>RECOVERY SUPPORT</small></div> :
       type === 'browser' ? <div className="browser-art"><div /><div /><div /><div /></div> :
       <div className="dashboard-art"><div className="dash-side" /><div className="dash-main"><i /><i /><i /><i /></div></div>}
      <span className="art-caption">{caption}</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const nav = [
    ['About', '#about'], ['Skills', '#skills'], ['Services', '#services'],
    ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact'],
  ]

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Go to home">
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
            <p className="availability"><span className="availability-dot" /> Open to freelancer opportunities </p>
            <p className="hero-intro">Hello, I'm</p>
            <h1>G.R Vimukthi<br /><span>Kolitha.</span></h1>
            <h2 className="hero-role">Full-Stack Web Developer</h2>
            <p className="hero-description">
              Software engineering undergraduate at SLIIT. I build responsive web and
              mobile apps, from clean user interfaces to reliable backend systems.
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
                <p><span className="code-muted">04</span> &nbsp;stack: [</p>
                <p><span className="code-muted">05</span> &nbsp;&nbsp;<span className="code-orange">'React'</span>, <span className="code-orange">'Node.js'</span>,</p>
                <p><span className="code-muted">06</span> &nbsp;&nbsp;<span className="code-orange">'MongoDB'</span>, <span className="code-orange">'Kotlin'</span></p>
                <p><span className="code-muted">07</span> &nbsp;],</p>
                <p><span className="code-muted">08</span> &nbsp;seeking: <span className="code-blue">'IT internship'</span></p>
                <p><span className="code-muted">09</span> {'}'}</p>
                <p className="code-cursor"><span className="code-muted">10</span> <span className="cursor-block" /></p>
              </div>
              <div className="window-footer"><span><span className="footer-pulse" /> Available for internships</span><span>UTF-8&nbsp;&nbsp; JavaScript</span></div>
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
              <div>
                <img src={kolithaImg} alt="Vimukthi Kolitha"/>
              </div>
              <p className="body-copy">
                I'm a software engineering undergraduate pursuing a BSc (Hons) in Information Technology
                at SLIIT, Malabe. With a solid foundation in software development and a passion for
                problem-solving, I'm eager to apply what I've learned in a real-world IT environment,
                and to grow into a skilled, well-regarded IT professional.
              </p>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-link">Connect with me on LinkedIn <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-facts">
              <div className="fact-card"><span className="fact-number">01</span><div><strong>Undergraduate at SLIIT</strong><p>Y4S2 BSc (Hons) in IT Specializing in Information Technology</p></div></div>
              <div className="fact-card"><span className="fact-number">02</span><div><strong>Web, mobile & desktop</strong><p>Projects built with the MERN stack, PHP, Java and Kotlin.</p></div></div>
              <div className="fact-card"><span className="fact-number">03</span><div><strong>Based in Kegalle</strong><p>Sri Lanka · Fluent in Sinhala and English.</p></div></div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Technologies I <span className="text-gradient">work with.</span></>} detail="A growing toolkit for designing, developing and delivering web and mobile applications." />
          <div className="skill-grid">
            {skills.map(({ name, items, icon: Icon }, index) => (
              <motion.div className="skill-card" key={name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay: index * 0.08 }}>
                <div className="skill-icon"><Icon size={20} /></div>
                <h3>{name}</h3>
                <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.div>
            ))}
          </div>
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
            <SectionHeading eyebrow="SELECTED WORK" title={<>Projects that show<br /><span className="text-gradient">how I think.</span></>} detail="Academic and personal projects across web, mobile and desktop. More code and case studies are on my GitHub." />
            <a href={GITHUB} target="_blank" rel="noreferrer" className="text-link">View GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article className="project-card" key={project.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: (index % 3) * 0.08 }}>
                <ProjectArt art={project.art} number={project.number} caption={project.caption} index={index} />
                <div className="project-info">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-bottom">
                    <span>{project.status}</span>
                    <a className="project-placeholder" href={GITHUB} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="education section-wrap section-pad" id="education">
          <SectionHeading eyebrow="BACKGROUND" title={<>Where I've been <span className="text-gradient">learning.</span></>} />
          <div className="edu-grid">
            {education.map(({ years, title, place, note }) => (
              <div className="edu-card" key={years}>
                <p className="edu-years"><GraduationCap size={16} /> {years}</p>
                <h3>{title}</h3>
                <p>{place}{note && ` · ${note}`}</p>
              </div>
            ))}
          </div>
          <div className="language-row">
            <Languages size={18} />
            <strong>Languages</strong>
            <div className="skill-tags"><span>Sinhala (Native)</span><span>English</span></div>
          </div>
        </section>

        <section className="contact section-wrap section-pad" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <p className="eyebrow">LOOKING FOR AN INTERN?</p>
            <h2>Let's build something<br /><span className="text-gradient">meaningful.</span></h2>
            <p className="contact-description">I'm actively seeking an IT-related internship to grow my technical skills and contribute to your team. Have an opportunity or an idea? Let's talk.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${EMAIL}`}>Email me <Mail size={17} /></a>
              <a className="button button-secondary" href={LINKEDIN} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-socials">
              <a href={`mailto:${EMAIL}`}><Mail size={17} /> {EMAIL}</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.45rem' }}><MapPin size={17} /> Kegalle, Sri Lanka</span>
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