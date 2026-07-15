import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const messages = ['Loading Portfolio...', 'Initializing Projects...', 'Preparing Experience...', 'Welcome']

const Loader = ({ onFinish }) => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev === messages.length - 1) {
          clearInterval(timer)
          setTimeout(onFinish, 500)
          return prev
        }
        return prev + 1
      })
    }, 900)

    return () => clearInterval(timer)
  }, [onFinish])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#050816]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(139,92,246,0.2),_transparent_30%)]" />
        <div className="absolute inset-0 opacity-40">
          {[...Array(28)].map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-2 w-2 rounded-full bg-cyan-300/80"
              animate={{ x: [0, 80, -40, 0], y: [0, -60, 80, 0], opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 7 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ left: `${8 + index * 3}%`, top: `${10 + (index % 6) * 12}%` }}
            />
          ))}
        </div>
        <div className="relative flex flex-col items-center gap-6 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/50 shadow-[0_0_40px_rgba(6,182,212,0.5)]"
          >
            <div className="h-14 w-14 rounded-full border-4 border-transparent border-t-cyan-300 border-l-violet-400" />
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-semibold text-white"
            >
              BLESSAN BANKA
            </motion.h1>
            <motion.p
              key={messages[step]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-300"
            >
              {messages[step]}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Loader
