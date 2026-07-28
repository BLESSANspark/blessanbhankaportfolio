import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight, FiGithub, FiMail, FiSend, FiChevronDown, FiExternalLink, FiMoon, FiSun, FiArrowUp } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import AnimatedBackground from './components/AnimatedBackground'
import FloatingIcons from './components/FloatingIcons'
import SectionTitle from './components/SectionTitle'
import ProfileSample from './assets/Screenshot 2026-07-22 161548.png'
import { heroRoles, aboutStats, skillGroups, educationItems, projects, experienceItems, achievements, publications, contactInfo, navItems } from './data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/BLESSANspark', icon: FaGithub },
  { label: 'Email', href: 'mailto:sparkxmt@gmail.com', icon: FiMail },
]

const App = () => {
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [typedRole, setTypedRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const frame = requestAnimationFrame(raf)

    const onMove = (event) => setCursorGlow({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', onMove)

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      setScrollProgress(progress)
      setShowScrollTop(window.scrollY > 500)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const timer = window.setTimeout(() => {
      gsap.from('.hero-title', { y: 32, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' })
      gsap.from('.reveal-card', { y: 24, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '#about', start: 'top 80%' } })
    }, 60)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', onMove)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const currentRole = heroRoles[roleIndex % heroRoles.length]

    if (!isDeleting && typedRole === currentRole) {
      const timeout = window.setTimeout(() => setIsDeleting(true), 1400)
      return () => window.clearTimeout(timeout)
    }

    if (isDeleting && typedRole === '') {
      setIsDeleting(false)
      setRoleIndex((value) => (value + 1) % heroRoles.length)
      return undefined
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        setTypedRole(currentRole.slice(0, typedRole.length + 1))
      } else {
        setTypedRole(currentRole.slice(0, typedRole.length - 1))
      }
    }, isDeleting ? 45 : 90)

    return () => window.clearTimeout(timeout)
  }, [typedRole, isDeleting, roleIndex])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === 'All' || project.category === activeFilter
      const matchesSearch = [project.title, project.description, project.tags.join(' ')].join(' ').toLowerCase().includes(search.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, search])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    window.setTimeout(() => setSubmitted(false), 2600)
  }

  if (loading) return <Loader onFinish={() => setLoading(false)} />

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-[#030303] text-zinc-100' : 'min-h-screen bg-stone-50 text-stone-900'}>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <AnimatedBackground />
      <main>
        <section id="home" className="relative isolate overflow-hidden px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
          <FloatingIcons />
          <motion.div className="pointer-events-none fixed left-0 top-0 z-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" animate={{ x: cursorGlow.x, y: cursorGlow.y }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-sm uppercase tracking-[0.35em] text-stone-400">Hello, I&apos;m</p>
              <h1 className="hero-title mt-4 text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Blessan Bhanka
              </h1>
              <div className="mt-4 min-h-10 text-lg font-medium text-stone-300 sm:text-2xl">
                <span className="border-b border-white/20 pb-1">{typedRole}</span>
                <span className="ml-2 animate-pulse text-white">|</span>
              </div>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                I am a Diploma Final Year student passionate about Artificial Intelligence, software development, creative editing, and game design. I enjoy building modern digital experiences, developing AI-powered solutions, and continuously learning emerging technologies.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="group rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/30 hover:bg-white/15">
                  <span className="inline-flex items-center gap-2">
                    View Projects <FiArrowRight className="transition group-hover:translate-x-1" />
                  </span>
                </a>
                <a href="#contact" className="group rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/30 hover:bg-white/15">
                  <span className="inline-flex items-center gap-2">
                    Contact Me <FiMail className="transition group-hover:translate-y-0.5" />
                  </span>
                </a>
                <a href="/Blessan-Bhanka-Resume.txt" download className="group rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/30 hover:bg-white/15">
                  <span className="inline-flex items-center gap-2">
                    Download Resume <FiDownload className="transition group-hover:translate-y-0.5" />
                  </span>
                </a>
              </div>
              <div className="mt-8 flex gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative mx-auto flex w-full max-w-md items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-violet-400/20 to-transparent blur-3xl" />
              <div className="relative h-72 w-72 rounded-full border border-cyan-400/30 bg-slate-900/70 p-3 shadow-[0_0_80px_rgba(59,130,246,0.2)] backdrop-blur flex items-center justify-center overflow-hidden">
                <img src={ProfileSample} alt="Profile placeholder" className="h-full w-full rounded-full object-cover" />
              </div>
              <div className="absolute h-[20rem] w-[20rem] rounded-full border border-cyan-300/50" />
              <div className="absolute h-[22rem] w-[22rem] rounded-full border border-violet-400/30" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }} className="absolute h-[25rem] w-[25rem] rounded-full border border-dashed border-cyan-400/30" />
            </motion.div>
          </div>
          <div className="mx-auto mt-16 flex max-w-7xl justify-center text-slate-400">
            <a href="#about" className="flex flex-col items-center gap-2 text-sm uppercase tracking-[0.3em]">
              Scroll <FiChevronDown className="animate-bounce" />
            </a>
          </div>
        </section>

        <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="About" title="A premium blend of design, code, and strategy" description="I build polished products with a sharp eye for experience, a deep foundation in engineering, and a curiosity for emerging technology." />
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="reveal-card rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(255,255,255,0.05)] backdrop-blur">
                <h3 className="text-xl font-semibold text-white">Professional Summary</h3>
                <p className="mt-4 text-slate-400">I am a Diploma Final Year student from A.A.N.M. & V.V.R.S.R Polytechnic, based in Reddigudem, NTR District, Andhra Pradesh. My work blends AI development, professional editing, game design, and freelance execution into polished digital experiences.</p>
                <h3 className="mt-8 text-xl font-semibold text-white">Career Objective</h3>
                <p className="mt-4 text-slate-400">I am committed to building modern solutions with creativity, discipline, and continuous learning while creating meaningful impact through technology and design.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="reveal-card grid gap-4 sm:grid-cols-2">
                {[
                  ['Name', 'Blessan Bhanka'],
                  ['Email', 'sparkxmt@gmail.com'],
                  ['Phone', '+91 7382672411'],
                  ['Location', 'Reddigudem, NTR District, Andhra Pradesh, India'],
                  ['Degree', 'Diploma Final Year'],
                  ['College', 'A.A.N.M. & V.V.R.S.R Polytechnic'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{label}</p>
                    <p className="mt-2 font-medium text-white">{value}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {aboutStats.map((stat) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-6 text-center backdrop-blur">
                  <p className="text-4xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Skills" title="Crafted across product, design, and engineering" description="A versatile skill stack shaped for modern AI-enabled teams and ambitious digital products." />
            <div className="grid gap-6 xl:grid-cols-2">
              {skillGroups.map((group, index) => {
                const Icon = group.icon
                return (
                  <motion.div key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(59,130,246,0.08)]">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    </div>
                    <div className="mt-6 space-y-4">
                      {group.skills.map((skill) => {
                        const SkillIcon = skill.icon
                        return (
                          <div key={skill.name}>
                            <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                              <span className="inline-flex items-center gap-2"><SkillIcon size={14} /> {skill.name}</span>
                              <span className="text-white">{skill.level}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10">
                              <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${skill.level}%` }} />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Services" title="Creative and technical services tailored for modern digital needs" description="Combining design thinking, development expertise, and creative execution across multiple disciplines." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                ['AI Development', 'Building AI-driven tools and smart digital experiences.'],
                ['Web Development', 'Creating modern, responsive, and performance-focused websites.'],
                ['React Development', 'Designing interactive, fast, and scalable React-based interfaces.'],
                ['Game Designing', 'Crafting game concepts, mechanics, and creative experiences.'],
                ['Professional Editing', 'Editing visuals and content with a polished, professional touch.'],
                ['Freelancing', 'Delivering flexible, reliable creative and technical solutions.'],
              ].map(([title, desc]) => (
                <motion.div key={title} whileHover={{ y: -6, scale: 1.02 }} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
                  <div className="text-3xl text-cyan-300">✦</div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Education" title="Learning that continues to shape the work" description="A foundation rooted in rigorous academics and hands-on technical development." />
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <motion.div key={item.degree} initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{item.duration}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{item.degree}</h3>
                      <p className="mt-2 text-slate-400">{item.institution}</p>
                    </div>
                    <div className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">CGPA: {item.cgpa}</div>
                  </div>
                  <p className="mt-5 max-w-3xl text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Projects" title="Selected work with measurable impact" description="A portfolio of experiments, products, and research tools built with care and purpose." />
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-3">
                {['All', 'Web', 'AI', 'Mobile', 'Research'].map((filter) => (
                  <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-4 py-2 text-sm transition ${activeFilter === filter ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400 hover:text-white'}`}>
                    {filter}
                  </button>
                ))}
              </div>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects" className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none" />
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-[0_0_50px_rgba(59,130,246,0.08)]">
                  <div className="h-44 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.45),_transparent_35%),linear-gradient(135deg,_rgba(17,24,39,0.95),_rgba(3,7,18,0.95))]" />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">{project.category}</span>
                    </div>
                    <p className="mt-4 text-slate-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>)}
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-400">
                      {project.features.map((feature) => <li key={feature} className="flex items-center gap-2"><FiArrowRight size={14} className="text-cyan-300" />{feature}</li>)}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"><FiGithub size={15} /> GitHub</a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200 transition hover:bg-violet-500/20"><FiExternalLink size={15} /> Live Demo</a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Experience" title="Roles that shaped a product-minded engineering path" description="Experience spanning research, product craft, and high-quality front-end implementation." />
            <div className="space-y-8">
              {experienceItems.map((item, index) => (
                <motion.div key={item.company} initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{item.duration}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{item.position}</h3>
                      <p className="mt-2 text-slate-400">{item.company}</p>
                    </div>
                    <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">Certificate</div>
                  </div>
                  <ul className="mt-6 space-y-3 text-slate-400">
                    {item.responsibilities.map((responsibility) => <li key={responsibility} className="flex items-start gap-2"><FiArrowRight className="mt-1 text-cyan-300" />{responsibility}</li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">{tech}</span>)}
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                      <img src={item.certificate.image} alt={item.certificate.title} className="h-60 w-full max-w-[280px] rounded-2xl border border-white/10 object-cover shadow-lg" />
                      <div className="flex-1">
                        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Certificate Preview</p>
                        <h4 className="mt-2 text-xl font-semibold text-white">{item.certificate.title}</h4>
                        <p className="mt-3 text-sm leading-7 text-slate-400">{item.certificate.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Achievements" title="Recognition that keeps the momentum going" description="Milestones, awards, and community contributions that reflect a sustained commitment to excellence." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {achievements.map((achievement) => (
                <motion.button key={achievement.title} whileHover={{ scale: 1.03, y: -4 }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-6 text-left backdrop-blur">
                  <p className="text-3xl">{achievement.icon}</p>
                  <h3 className="mt-4 text-lg font-semibold text-white">{achievement.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{achievement.subtitle}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Publications" title="Research and writing that translate ideas into impact" description="Selected publications that explore how thoughtful interfaces and AI systems can work together." />
            <div className="grid gap-8 lg:grid-cols-2">
              {publications.map((publication) => (
                <motion.article key={publication.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 backdrop-blur">
                  <div className="flex items-center gap-3 text-cyan-300"><FiSend size={18} /> <span className="text-sm uppercase tracking-[0.2em]">Paper</span></div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{publication.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">{publication.journal || publication.conference} • {publication.date}</p>
                  <p className="mt-3 text-sm text-slate-400">DOI: {publication.doi}</p>
                  <p className="mt-4 text-slate-400">{publication.abstract}</p>
                  <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300">Read Paper <FiArrowRight /></a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Contact" title="Let’s build something extraordinary" description="Whether you need a launch-ready product, a polished portfolio, or an AI-powered experience, I’d love to hear about it." />
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 h-48 rounded-3xl border border-dashed border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.2),_transparent_40%)]" />
              </div>
              <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-[0_0_60px_rgba(59,130,246,0.08)]">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Your name" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
                  <input required type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="Your email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
                </div>
                <input required value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} placeholder="Subject" className="mt-5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
                <textarea required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} rows="6" placeholder="Tell me about your project" className="mt-5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" />
                <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/25">
                  {submitted ? 'Message Sent' : 'Send Message'} <FiSend />
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      {showScrollTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-40 rounded-full border border-cyan-400/40 bg-slate-950/80 p-3 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.25)] backdrop-blur">
          <FiArrowUp size={18} />
        </button>
      )}
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${scrollProgress}%` }} />
      </div>
      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.3em] text-white">BLESSAN<span className="text-cyan-400">/</span>PORTFOLIO</p>
            <p className="mt-2 text-sm text-slate-400">© 2026 Blessan Bhanka. All Rights Reserved.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            {navItems.map((item) => <a key={item.id} href={`#${item.id}`} className="transition hover:text-white">{item.label}</a>)}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
