'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Award, Download, Menu, Moon, Send, Sun, X } from 'lucide-react'
import { useState, type FormEvent } from 'react'

const contact = {
  email: 'broujeanmarie697@gmail.com',
  phone: '+225 01 51 19 74 76',
  phoneRaw: '+2250151197476',
  linkedin: 'https://www.linkedin.com/in/jean-marie-brou-571022295/',
  linkedinLabel: 'linkedin.com/in/jean-marie-brou',
}

const awards = [
  { title: '2nd place — OUKAMI', event: 'YAKO Africa Hackathon · Life Insurance', detail: 'A PWA for life insurance subscription via mobile money, with OTP verification and electronic signature, built for the Innovastable team.' },
  { title: 'RoutePulse CI · AfriRoute IA', event: 'VIBEATHON 2026 · AI & Environment', detail: 'Two selected projects: a road incident reporting platform and a multimodal mobility concept for Abidjan.' },
]

const projects = [
  {
    title: 'Gestionas',
    category: 'Operations · SaaS',
    problem: 'Small teams track stock in spreadsheets that drift out of date and hide errors until an audit.',
    solution: 'A web dashboard for inbound/outbound stock, live inventory levels and reporting, with role-based access for daily operations.',
    stack: ['Next.js', 'PostgreSQL', 'Dashboard'],
    role: 'Full-stack development, deployment, demo environment',
    outcome: 'Deployed and testable live — a working product, not a mock-up.',
    live: 'https://gestionas.vercel.app',
  },
  {
    title: 'Atelier de Séduction',
    category: 'E-commerce · Retail',
    problem: 'An independent fashion retailer needed an online store that was easy to manage without technical staff.',
    solution: 'A complete storefront with product catalogue, size guide, admin area, payments and order tracking backed by Supabase.',
    stack: ['Next.js', 'Supabase', 'PostgreSQL'],
    role: 'End-to-end build, catalogue and admin workflows',
    outcome: 'Live in production with a self-service admin area for the owner.',
    live: 'https://atelierdeseduction.vercel.app',
  },
  {
    title: 'WAF Anoh Consulting',
    category: 'Corporate · Web',
    problem: 'A consulting firm needed a credible digital presence that clearly explains its services and makes contact easy.',
    solution: 'A clean, fast corporate site with structured service pages, activity overview and a simple contact path — built for clarity on every screen.',
    stack: ['Next.js', 'TypeScript', 'Responsive UI'],
    role: 'Design and development, from content structure to deployment',
    outcome: 'Live in production and maintained for the client.',
    live: 'https://waf-anoh-consulting.vercel.app',
  },
]

const skills = {
  Backend: ['PHP (Laravel, Symfony)', 'Node.js'],
  Frontend: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  Data: ['PostgreSQL', 'MySQL', 'Prisma', 'Supabase'],
  'Telephony / VoIP': ['Asterisk', 'FreeSWITCH', 'Yeastar', 'SIP trunking', 'IVR design'],
  'AI integration': ['LLM workflows (Anthropic Claude)', 'Voice agents', 'WhatsApp agents'],
  Infrastructure: ['Linux', 'Apache', 'PM2', 'Git', 'FortiGate', 'TCP/IP'],
}

const marqueeItems = ['PHP', 'Laravel', 'Symfony', 'Node.js', 'TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Prisma', 'Supabase', 'Asterisk', 'FreeSWITCH', 'VoIP', 'IVR', 'FortiGate', 'LLM workflows', 'Voice agents', 'WhatsApp agents', 'Linux']

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const sendMail = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project enquiry — ${form.name}`)
    const body = encodeURIComponent(`Hi Jean-Marie,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return <div className={dark ? 'portfolio dark' : 'portfolio'}>
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Jean-Marie Brou — home">Jean-Marie Brou<span className="brand-dot">.</span></a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#how" onClick={() => setMenuOpen(false)}>Process</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <span className="availability-badge"><span className="status-dot" /> Available for remote contracts · UTC+0</span>
        <div className="header-actions">
          <a className="hire-btn" href="#contact">Book a call <ArrowUpRight size={14} /></a>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="menu-button icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="eyebrow"><span className="status-dot" /> Full-Stack Developer · AI Integration · VoIP</span>
            <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}>
              <p className="kicker">Remote <span>/</span> European teams <span>/</span> UTC+0</p>
              <h1 className="hero-title">Reliable software for<br />call centers, SaaS and<br /><em>AI agents</em><span className="dot">.</span></h1>
              <p className="hero-copy">I'm Jean-Marie Brou, a full-stack developer with 6+ years of production experience. I build and run the systems behind customer operations: telephony, CRMs, back offices and AI assistants. I work remotely with European teams, in your time zone.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">View projects <ArrowUpRight size={15} /></a>
                <a className="btn btn-ghost" href="/CV_Jean-Marie_Brou_EN.pdf" target="_blank" rel="noreferrer">Download CV <Download size={15} /></a>
                <a className="cv-link" href="#contact">Book a call <ArrowUpRight size={13} /></a>
              </div>
            </motion.div>
          </div>
          <div className="portrait-wrap">
            <img className="portrait" src="/avatar-v2.jpg" alt="Jean-Marie Brou, full-stack developer specialising in call center systems and AI agents" />
            <span className="portrait-tag">fig. 01 — the developer behind the systems</span>
          </div>
        </div>
        <div className="hero-facts">
          <div className="fact"><b>Experience</b><span>6+ years in production</span></div>
          <div className="fact"><b>Focus</b><span>Call center · SaaS · AI agents</span></div>
          <div className="fact"><b>Time zone</b><span>UTC+0 (close to CET)</span></div>
          <div className="fact"><b>Availability</b><span>Remote contracts</span></div>
        </div>
        <div className="hero-meta"><span>Est. 2019 — today</span><span><span className="accent">↘</span> Scroll to explore <span className="accent">↓</span></span></div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => marqueeItems.map((item, i) => <span key={`${copy}-${i}`}>{item}{i < marqueeItems.length - 1 && <i>✦</i>}</span>))}
        </div>
      </div>

      <section className="section about-section" id="about">
        <div className="sec-label"><b>01</b><span>/</span> Profile<span className="hr" /><span className="sec-tag">who I am</span></div>
        <div className="about-grid">
          <div>
            <h2 className="h-sec">Technical depth,<br /><em>delivered end to end.</em></h2>
            <p className="about-lead">From databases to deployment, I own the whole chain.</p>
          </div>
          <div className="about-text">
            <p>I started as a web developer and grew into IT manager and full-stack engineer at a call center group. I work across the whole chain: PostgreSQL databases, PHP and TypeScript back ends, VoIP infrastructure (Asterisk, FreeSWITCH), network security and AI integration.</p>
            <p>My clients are banks, microfinance and pharmaceutical companies. What I bring: I debug live production systems, ship quickly, and explain technical choices in plain language.</p>
            <p>Alongside client work I build my own SaaS products, and I placed 2nd at the YAKO Africa hackathon.</p>
            <div className="about-meta">
              <span><b>Languages</b> — French (native) <span className="accent">·</span> English (intermediate, improving) <span className="accent">·</span> Spanish (academic)</span>
              <span><b>Based in</b> — Abidjan, Côte d'Ivoire <span className="accent">·</span> Working remotely</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="sec-label"><b>02</b><span>/</span> Capabilities<span className="hr" /><span className="sec-tag">by outcome</span></div>
        <h2 className="h-sec">The tools behind <em>the systems.</em></h2>
        <div style={{ marginTop: 46 }}>
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-row" key={group}>
              <h3>{group}</h3>
              <div className="skill-items">{items.map(item => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="sec-label"><b>03</b><span>/</span> Career<span className="hr" /><span className="sec-tag">the timeline</span></div>
        <h2 className="h-sec">Doing the work, <em>for real.</em></h2>
        <div style={{ marginTop: 46 }}>
          <div className="exp-row"><div className="exp-date">2021 — Now</div><div><h3>CALL ME CI <span style={{ color: 'var(--muted)', fontSize: 18, fontWeight: 500 }}>/ Groupe Chaka</span></h3><p className="exp-role">IT Manager &amp; Full-Stack Developer <span className="sep">—</span> Abidjan</p></div><p className="exp-detail">Running production call center platforms and PostgreSQL databases for banking, microfinance and pharmaceutical clients. Fixed critical issues on live systems, rebuilt IVR routing with Asterisk and FreeSWITCH, developed a Symfony CRM with WhatsApp and SMS delivery, and evaluated AI tools for client use cases. Also manage network and security (FortiGate, LAN redesign).</p></div>
          <div className="exp-row"><div className="exp-date">Sep 2020 — Feb 2021</div><div><h3>BLESS EXPRESS FRET</h3><p className="exp-role">Web Developer <span className="sep">—</span> Abidjan</p></div><p className="exp-detail">Built the company website, managed the client database and maintained the IT toolset.</p></div>
          <div className="exp-row"><div className="exp-date">Oct 2019 — Apr 2020</div><div><h3>PYRAMIDE SERVICES</h3><p className="exp-role">IT Assistant <span className="sep">—</span> Abidjan</p></div><p className="exp-detail">Built the company website and an equipment tracking application; maintained the IT fleet.</p></div>
          <div className="exp-row"><div className="exp-date">2017 — 2019</div><div><h3>ESMIT, Abidjan</h3><p className="exp-role">BTS Computer Science — Application Development</p></div><p className="exp-detail">Higher diploma in Information Technology, Marketing and Application Development.</p></div>
        </div>

        <div className="awards">
          <div className="sec-label"><b></b><span>Distinctions &amp; Hackathons</span><span className="hr" /></div>
          <div className="awards-grid">
            {awards.map((a, i) => (
              <motion.div className="award-card" key={a.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={reveal} transition={{ duration: .5, delay: i * .1 }}>
                <div className="award-event"><Award size={12} style={{ verticalAlign: -2, marginRight: 7 }} />{a.event}</div>
                <h3>{a.title}</h3>
                <p>{a.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-section" id="projects">
        <div className="sec-label"><b>04</b><span>/</span> Selected Work<span className="hr" /><span className="sec-tag">live demos</span></div>
        <div className="work-head"><h2 className="h-sec">Three products, <em>built and shipped.</em></h2><p className="work-sub">A closer look at the problems, the decisions and the systems behind each one. All three are live — you can try them.</p></div>
        <div className="case-grid">
          {projects.map((project, i) => (
            <article className="case-card" data-project key={project.title}>
              <div className="case-top">
                <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="live-pill"><span className="live-dot" /> Live</span>
              </div>
              <span className="project-cat">{project.category}</span>
              <h3>{project.title}</h3>
              <dl className="case-body">
                <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                <div><dt>Solution</dt><dd>{project.solution}</dd></div>
                <div><dt>My role</dt><dd>{project.role}</dd></div>
                <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>
              </dl>
              <div className="project-stack">{project.stack.join(' · ')}</div>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer">Open live demo <ArrowUpRight size={13} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section section-pad" id="contact">
        <div className="sec-label"><b>05</b><span>/</span> Contact<span className="hr" /><span className="sec-tag">let's work together</span></div>
        <div className="contact-grid">
          <div>
            <h2 className="h-sec">Let's work<br /><em>together.</em></h2>
            <p className="contact-intro">I take on remote contracts with European teams: call center and VoIP systems, SaaS back ends, and AI agents. I usually reply within 48 hours.</p>
            <a className="huge-mail" href={`mailto:${contact.email}`}>{contact.email}</a>
            <div className="social-row">
              <a href={contact.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn — {contact.linkedinLabel}</span><ArrowUpRight size={13} /></a>
              <a href="/CV_Jean-Marie_Brou_EN.pdf" target="_blank" rel="noreferrer"><span>Download CV (PDF)</span><Download size={13} /></a>
              <a href={`https://wa.me/${contact.phoneRaw}`} target="_blank" rel="noreferrer"><span>WhatsApp — {contact.phone}</span><ArrowUpRight size={13} /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={sendMail}>
            <label>Name<input required name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
            <label>Email<input required type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label>
            <label>Company<input name="company" placeholder="Company (optional)" /></label>
            <label>Project description<textarea required name="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about the project..." /></label>
            <button className="btn btn-primary" type="submit">{sent ? 'Email prepared' : 'Send message'} <Send size={15} /></button>
            {sent && <p className="form-note">Your email app is opening with the message ready to send. Please check it and hit send.</p>}
          </form>
        </div>
      </section>

      <section className="section how-section" id="how">
        <div className="sec-label"><b>06</b><span>/</span> How I work<span className="hr" /><span className="sec-tag">no surprises</span></div>
        <h2 className="h-sec">A clear process, <em>start to finish.</em></h2>
        <div className="how-grid">
          <div className="how-step"><span>01</span><h3>Scope call</h3><p>A short call to understand the problem, the constraints and what success looks like.</p></div>
          <div className="how-step"><span>02</span><h3>Fixed milestones</h3><p>Agreed milestones with weekly demos, so you see progress and can steer early.</p></div>
          <div className="how-step"><span>03</span><h3>Clean handover</h3><p>Documented code, a README in English and a walkthrough so your team owns it.</p></div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">Jean-Marie Brou<span className="brand-dot">.</span></div>
        <p>© {new Date().getFullYear()} Jean-Marie Brou — Full-Stack Developer &amp; AI Integration</p>
        <p className="footer-location">Based in Abidjan · Working remotely with European teams · UTC+0</p>
        <div className="footer-links"><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${contact.email}`}>Email</a><a href="/CV_Jean-Marie_Brou_EN.pdf" target="_blank" rel="noreferrer">CV (PDF)</a><a href="#top">Back to top ↑</a></div>
      </div>
      <div className="footer-ghost" aria-hidden="true">BROU</div>
    </footer>
  </div>
}