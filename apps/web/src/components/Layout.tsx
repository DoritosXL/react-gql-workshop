import { NavLink, Outlet } from 'react-router'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/users', label: 'Users' },
  { to: '/posts', label: 'Posts' },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-gray-800 bg-gray-900">
        <div className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-4">
          <span className="font-mono text-sm font-semibold tracking-tight text-emerald-400">
            react-gql-workshop
          </span>
          <div className="flex gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-400'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-100'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}
