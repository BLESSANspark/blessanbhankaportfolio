import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navItems } from '../data/portfolioData'

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? latest
    setHidden(latest > previous && latest > 120)
  })

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.45 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[0.3em] text-white">
          BLESSAN<span className="text-cyan-400">/</span>PORTFOLIO
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-sm transition ${active === item.id ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              {item.label}
              {active === item.id && <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-white" />}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/90 px-4 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-xl px-3 py-2 text-sm ${active === item.id ? 'bg-white/10 text-cyan-300' : 'text-slate-300'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  )
}

export default Navbar
