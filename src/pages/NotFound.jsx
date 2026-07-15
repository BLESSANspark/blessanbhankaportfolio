import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050816] px-4 text-center text-slate-200">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white sm:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-400">The page you are looking for does not exist or may have moved.</p>
      <Link to="/" className="mt-8 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-6 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/25">
        Return Home
      </Link>
    </div>
  )
}

export default NotFound
