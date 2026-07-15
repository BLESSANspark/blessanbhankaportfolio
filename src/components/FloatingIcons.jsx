import { motion } from 'framer-motion'
import { FaReact, FaRobot, FaDatabase, FaCloud, FaCode } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'

const icons = [
  { Icon: FaReact, className: 'left-[8%] top-[20%] text-cyan-400', delay: 0 },
  { Icon: FaRobot, className: 'right-[10%] top-[18%] text-violet-400', delay: 0.8 },
  { Icon: FaDatabase, className: 'left-[15%] bottom-[24%] text-sky-300', delay: 1.2 },
  { Icon: FaCloud, className: 'right-[16%] bottom-[20%] text-fuchsia-400', delay: 1.6 },
  { Icon: SiJavascript, className: 'left-[45%] top-[12%] text-yellow-300', delay: 0.4 },
  { Icon: SiTailwindcss, className: 'right-[40%] bottom-[8%] text-cyan-300', delay: 1.1 },
  { Icon: FaCode, className: 'left-[35%] bottom-[12%] text-violet-300', delay: 0.7 },
]

const FloatingIcons = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map(({ Icon, className, delay }) => (
        <motion.div
          key={className}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: [0, -16, 0] }}
          transition={{ duration: 4.5, delay, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute ${className}`}
        >
          <Icon size={28} />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingIcons
