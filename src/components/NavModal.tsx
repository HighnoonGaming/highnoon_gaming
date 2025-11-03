import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import gsap from 'gsap'
import { Link } from '@tanstack/react-router'
import { useAppStore } from '@/store/store'
import { navLinks } from '@/data/links'

type navModalProps = {
  closeModal: () => void
}

function NavModal({ closeModal }: navModalProps) {
  const theme = useAppStore((s) => s.theme)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        },
      )
    }
  }, [])

  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: closeModal,
      })
    }
  }

  const switchTheme =
    theme === 'dark' ? 'bg-white text-oxfordBlue' : 'bg-oxfordBlue text-white'

  return (
    <div
      ref={modalRef}
      className={` ${switchTheme} fixed top-0 right-0 z-100 h-screen w-1/2 md:w-1/4 shadow-sm cursor-pointer`}
    >
      <X
        className="absolute top-5 right-5  cursor-pointer"
        onClick={handleClose}
      />

      <div className="h-full w-full flex flex-col items-center justify-center gap-3">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            onClick={handleClose}
            className="uppercase font-medium w-1/2 text-center"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavModal
