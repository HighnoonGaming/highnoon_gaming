import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import NavModal from './NavModal'
import ThemeSwitchButton from './ThemeSwitchButton'
import { navLinks } from '@/data/links'

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      {/* LARGE SCREEN */}
      <header
        className="min-h-18 w-full items-center justify-between px-6 py-3 border-b hidden md:hidden lg:flex"
        style={{ borderColor: 'var(--accent-color)' }}
      >
        {/* Navigation Links (First 4) */}
        <div className="flex items-center gap-6">
          {navLinks.slice(0, 4).map((link, index) => (
            <Link key={index} to={link.href} className="">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <h1 className="uppercase text-center leading-tight self-start">
          <span className="font-bold text-2xl">Highnoon</span> <br />
          <span className="font-semibold text-sm  tracking-[0.4rem]">
            Gaming
          </span>
        </h1>

        {/* Navigation Links (Last 4) */}
        <div className="flex items-center gap-6">
          {navLinks.slice(4, 8).map((link, index) => (
            <Link key={index} to={link.href} className="">
              {link.name}
            </Link>
          ))}
          <ThemeSwitchButton />
        </div>
      </header>

      {/* MEDIUM & SMALL SCREEN */}
      <header
        className="min-h-18 w-full flex items-center justify-between px-6 py-3 border-b lg:hidden"
        style={{ borderColor: 'var(--accent-color)' }}
      >
        <h1 className="font-bold text-2xl uppercase">Highnoon Gaming</h1>

        <div className="flex gap-3">
          <button className="" onClick={() => setIsModalOpen(true)}>
            <Menu />
          </button>

          <ThemeSwitchButton />
        </div>
      </header>

      {isModalOpen && <NavModal closeModal={() => setIsModalOpen(false)} />}
    </>
  )
}

export default Navbar
