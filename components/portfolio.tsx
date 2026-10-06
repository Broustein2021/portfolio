'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Award, Download, Mail, Menu, MessageCircle, Moon, Send, Sun, X } from 'lucide-react'
import { useState, type FormEvent } from 'react'

const contact = {
  email: 'broujanmarie697@gmail.com',
  phone: '+225 01 51 19 74 76',
  phoneRaw: '+2250151197476',
  linkedin: 'https://www.linkedin.com/in/jean-marie-brou-571022295/',
  linkedinLabel: 'linkedin.com/in/jean-marie-brou',
  github: 'https://github.com/Broustein2021',
}

const awards = [
  { title: 'OUKAMI — 2ᵉ place', event: 'YAKO Africa Hackathon', detail: 'PWA de souscription d’assurance vie via mobile money (OTP + signature électronique), pour le compte de l’équipe Innovastable.' },
  { title: 'RoutePulse CI · AfriRoute IA', event: 'VIBEATHON 2026 — IA & environnement', detail: 'Deux projets sélectionnés : plateforme de signalement d’incidents routiers et concept de mobilité multimodale pour Abidjan.' },
]

const projects = [
  { title: 'ATELIER DE SÉDUCTION', category: 'E-commerce', description: 'Boutique e-commerce en ligne : catalogue produits, espace admin, rubrique guide des tailles, paiements et suivi via Supabase.', stack: ['Next.js', 'Supabase', 'PostgreSQL'], live: 'https://atelierdeseduction.vercel.app', github: 'https://github.com/Broustein2021/atelierdeseduction' },
  { title: 'WAF ANOH CONSULTING', category: 'Web / Agency', description: 'Site vitrine de la société WAF Anoh Consulting — services, activité et prise de contact, déployé et en production.', stack: ['Next.js', 'TypeScript'], live: 'https://waf-anoh-consulting.vercel.app', github: 'https://github.com/Broustein2021/waf-anoh_consulting' },
  { title: 'GESTION ECOLE SAAS', category: 'Education / SaaS', description: 'Un système multi-établissements pour les écoles en Côte d\'Ivoire : élèves, facturation, cantine, personnel, portails parents.', stack: ['Next.js', 'PostgreSQL', 'Supabase'], live: 'https://gestion-scolaire-solutionniste.vercel.app', github: 'https://github.com/Broustein2021/gestiondesetablissements' },
  { title: 'GESTIONAS', category: 'Stock / SaaS', description: 'Logiciel de gestion de stock en ligne : suivi des entrées et sorties, inventaire et reporting. Déployé et testable en démo.', stack: ['SaaS', 'Stock', 'Dashboard'], live: 'https://gestionas.vercel.app' },
  { title: 'CRM MSG', category: 'Communications', description: 'A Symfony CRM that turns WhatsApp Business and Orange CI / MTN CI messaging into a focused client communication and campaign command center.', stack: ['Symfony', 'WhatsApp API', 'SMS'] },
  { title: 'SAV E-COMMERCE CALL CENTER', category: 'Telephony / SaaS', description: 'An after-sales platform for online sellers, with DNIS-based tenant routing, call center operations, and a Symfony/PWA front end.', stack: ['Asterisk', 'FreeSWITCH', 'Symfony'] },
  { title: 'AI AGENT FOR MEDICAL CLINICS', category: 'AI / Healthcare', description: 'Voice and WhatsApp agents that help private clinics book appointments. Shared patient data, Laravel webhooks, and a strict no-medical-advice safety boundary.', stack: ['Vapi', 'Laravel', 'WhatsApp'] },
  { title: 'RsiCodeQrApp', category: 'Civic / Operations', description: 'A monorepo for QR attendance and badging, pairing a reliable Node API with responsive React/Vite dashboards and terminal front ends.', stack: ['Node.js', 'Prisma', 'React'] },
  { title: 'RoutePulse CI', category: 'Civic Tech', award: 'VIBEATHON 2026', description: 'A hackathon-built road incident reporting platform that gives citizens a direct line to safer, more informed urban mobility.', stack: ['Next.js', 'Supabase', 'PostGIS'], github: 'https://github.com/Broustein2021/RoutePulse-Ci-Clone' },
  { title: 'AfriRoute IA', category: 'Mobility / AI', award: 'VIBEATHON 2026', description: 'A multimodal mobility concept for Abidjan\'s informal transport network, designed and shipped solo across web and mobile surfaces.', stack: ['Node.js', 'React', 'Flutter'] },
  { title: 'OUKAMI', category: 'InsurTech', award: '2ᵉ — YAKO Africa', description: 'A life insurance subscription PWA built around mobile money, OTP verification, and electronic signature. Placed 2nd at the YAKO Africa hackathon.', stack: ['React', 'Prisma', 'Twilio'], github: 'https://github.com/Broustein2021/Oukami' },
  { title: 'BGFI BANK CALL CENTER TOOLING', category: 'Financial Services', description: 'Debugged and extended an outbound calling platform for a bank campaign, then built reporting utilities for clearer call analytics.', stack: ['PHP', 'PostgreSQL', 'Reporting'] },
]

const skills = {
  Backend: ['PHP', 'Laravel', 'Symfony', 'Node.js'],
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  Database: ['PostgreSQL', 'MySQL', 'Prisma', 'Supabase'],
  'Telephony / VoIP': ['Asterisk', 'FreeSWITCH', 'Yeastar', 'SIP trunking', 'IVR design'],
  'Infrastructure / Network': ['FortiGate', 'Firewall / DMZ', 'TCP/IP', 'Apache'],
  'AI Integration': ['Voice agents', 'WhatsApp agents', 'LLM workflows'],
  'Tooling / Ops': ['Git', 'PM2', 'Linux'],
  Languages: ['Français — courant', 'Anglais — académique', 'Español — académique'],
}

const marqueeItems = ['PHP', 'Laravel', 'Symfony', 'Node.js', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Supabase', 'Asterisk', 'FreeSWITCH', 'VoIP', 'IVR', 'FortiGate', 'AI agents', 'WhatsApp', 'Vapi', 'Linux']

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const askAbout = (title: string) =>
    `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(`Hi Broustein, I'd like to know more about your project: ${title}.`)}`

  const sendMail = (e: FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`Bonjour Broustein, je m'appelle ${form.name} (${form.email}).\n\n${form.message}`)
    window.location.href = `https://wa.me/${contact.phoneRaw}?text=${text}`
    setSent(true)
  }

  return <div className={dark ? 'portfolio dark' : 'portfolio'}>
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Broustein home">Broustein<span className="brand-dot">.</span></a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a><a href="#experience" onClick={() => setMenuOpen(false)}>Career</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="header-actions">
          <a className="hire-btn" href="#contact">Let’s talk <ArrowUpRight size={14} /></a>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="menu-button icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="eyebrow"><span className="status-dot" /> Available for remote / international</span>
            <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}>
              <p className="kicker">IT Manager<span>/</span>Full-Stack Developer<span>/</span>AI Integration</p>
              <h1 className="hero-title">Software that<br />makes work <em>flow</em><span className="dot">.</span></h1>
              <p className="hero-copy">I'm Broustein — I help companies in Côte d'Ivoire build SaaS platforms, call-center systems and AI-driven tools that people actually use.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#work">View work <ArrowUpRight size={15} /></a>
                <a className="btn btn-ghost" href="#contact">Say hello <Mail size={15} /></a>
                <a className="cv-link" href="/cv-brou-broustein.pdf" target="_blank" rel="noreferrer">CV <ArrowUpRight size={13} /></a>
              </div>
            </motion.div>
          </div>
          <div className="portrait-wrap">
            <img className="portrait" src="/avatar-v2.jpg" alt="Portrait de Jean-Marie Brou — Broustein" />
            <span className="portrait-tag">fig. 01 — the human behind the stack</span>
          </div>
        </div>
        <div className="hero-facts">
          <div className="fact"><b>Location</b><span>Abidjan, 🇨🇮</span></div>
          <div className="fact"><b>Experience</b><span>6+ years</span></div>
          <div className="fact"><b>Focus</b><span>SaaS · Call center · AI</span></div>
          <div className="fact"><b>Open to</b><span>Remote & relocation</span></div>
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
            <h2 className="h-sec">Technical depth.<br /><em>Human context.</em></h2>
            <p className="about-lead">For 6+ years I've worked where product thinking meets production reality.</p>
          </div>
          <div className="about-text">
            <p>I'm Jean-Marie Ephrem Ghislain BROU — Broustein. At CALL ME CI (Groupe Chaka), I move between full-stack development, network &amp; infrastructure management, and the client-facing work that makes technical delivery stick.</p>
            <p>Independently, I build SaaS products that solve specific problems for people and businesses in Africa. My work spans PHP and TypeScript, VoIP infrastructure, AI agents, and the connective tissue between them.</p>
            <div className="about-meta">
              <span><b>Currently</b> — IT Manager &amp; Full-Stack @ CALL ME CI, Abidjan</span>
              <span><b>Languages</b> — Français <span className="accent">·</span> English <span className="accent">·</span> Español</span>
              <span><b>Based in</b> — Abidjan, Côte d'Ivoire <span className="accent">·</span> open to remote</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="sec-label"><b>02</b><span>/</span> Capabilities<span className="hr" /><span className="sec-tag">what I use</span></div>
        <h2 className="h-sec">A stack that <em>covers the whole map.</em></h2>
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
          <div className="exp-row"><div className="exp-date">2021 — Now</div><div><h3>CALL ME CI <span style={{ color: 'var(--muted)', fontSize: 18, fontWeight: 500 }}>/ Groupe Chaka</span></h3><p className="exp-role">IT Manager &amp; Full-Stack Developer <span className="sep">—</span> Abidjan</p></div><p className="exp-detail">App dev, infrastructure &amp; network (FortiGate), VoIP (Asterisk / FreeSWITCH), AI integration, and commercial delivery: BGFI BANK, CREDIT ACCESS, PROMONOVA, IIT.</p></div>
          <div className="exp-row"><div className="exp-date">Sep 2020 — Feb 2021</div><div><h3>BLESS EXPRESS FRET</h3><p className="exp-role">Développeur Web <span className="sep">—</span> Abidjan</p></div><p className="exp-detail">Company website, client database management, and maintenance of all IT tools.</p></div>
          <div className="exp-row"><div className="exp-date">Oct 2019 — Apr 2020</div><div><h3>PYRAMIDE SERVICES</h3><p className="exp-role">Assistant Informatique <span className="sep">—</span> Abidjan</p></div><p className="exp-detail">Company website, equipment tracking software, and IT fleet maintenance.</p></div>
          <div className="exp-row"><div className="exp-date">2017 — 2019</div><div><h3>ESMIT, Abidjan</h3><p className="exp-role">BTS Informatique — Développement d'Applications</p></div><p className="exp-detail">Enseignement Supérieur du Marketing de l'Information et de la Technologie.</p></div>
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

      <section className="section work-section" id="work">
        <div className="sec-label"><b>04</b><span>/</span> Selected Work<span className="hr" /><span className="sec-tag">click around — some are live</span></div>
        <div className="work-head"><h2 className="h-sec">Shipped things, <em>proof included.</em></h2><p className="work-sub">Products, platforms and experiments built with intention — a few are running live, you can poke them.</p></div>
        <div style={{ marginTop: 38 }}>
          {projects.map((project, i) => (
            <article className="project-row" data-project key={project.title}>
              <div className="project-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <span className="project-cat">{project.category}{project.award && <span className="award-tag"><Award size={11} /> {project.award}</span>}</span>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
              <div className="project-meta">
                {project.live && <span className="live-pill"><span className="live-dot" /> Live &amp; testable</span>}
                <div className="project-stack">{project.stack.join(' · ')}</div>
                <div className="project-links">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live <ArrowUpRight size={13} /></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer">Source <ArrowUpRight size={13} /></a>}
                  <a href={askAbout(project.title)} target="_blank" rel="noreferrer">Discuss <MessageCircle size={13} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className="more-link" href="https://github.com/Broustein2021" target="_blank" rel="noreferrer">More work on GitHub <ArrowUpRight size={15} /></a>
      </section>

      <section className="section contact-section section-pad" id="contact">
        <div className="sec-label"><b>05</b><span>/</span> Contact<span className="hr" /><span className="sec-tag">let's build</span></div>
        <div className="contact-grid">
          <div>
            <h2 className="h-sec">Let's build<br /><em>what's next.</em></h2>
            <p className="contact-intro">Have a product in mind, a system to untangle, or a collaboration to propose? I'm always open to a good technical conversation — I usually reply within 48h.</p>
            <a className="huge-mail" href={`mailto:${contact.email}`}>{contact.email}</a>
            <div className="social-row">
              <a href={`https://wa.me/${contact.phoneRaw}`} target="_blank" rel="noreferrer"><span>WhatsApp — {contact.phone}</span><ArrowUpRight size={13} /></a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn — {contact.linkedinLabel}</span><ArrowUpRight size={13} /></a>
              <a href={contact.github} target="_blank" rel="noreferrer"><span>GitHub — Broustein2021</span><ArrowUpRight size={13} /></a>
              <a href="/cv-brou-broustein.pdf" target="_blank" rel="noreferrer"><span>Télécharger le CV (PDF)</span><Download size={13} /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={sendMail}>
            <label>Name<input required name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
            <label>Email<input required type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label>
            <label>Message<textarea required name="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about the project..." /></label>
            <button className="btn btn-primary" type="submit">{sent ? 'Email prepared' : 'Send message'} <Send size={15} /></button>
            {sent && <p className="form-note">WhatsApp s'ouvre avec votre message pré-rempli — vérifiez et envoyez.</p>}
          </form>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">Broustein<span className="brand-dot">.</span></div>
        <p>© {new Date().getFullYear()} Broustein — IT Manager &amp; Full-Stack Developer</p>
        <div className="footer-links"><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={contact.github} target="_blank" rel="noreferrer">GitHub</a><a href={`mailto:${contact.email}`}>Email</a><a href="#top">Back to top ↑</a></div>
      </div>
      <div className="footer-ghost" aria-hidden="true">BROUSTEIN</div>
    </footer>
  </div>
}