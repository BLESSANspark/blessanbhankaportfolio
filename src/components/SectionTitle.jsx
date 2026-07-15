import { motion } from 'framer-motion'

const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base text-zinc-400">{description}</p>
    </motion.div>
  )
}

export default SectionTitle
