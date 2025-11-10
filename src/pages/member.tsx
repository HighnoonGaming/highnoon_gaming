import { useEffect, useRef, useState } from 'react'
import { useParams } from '@tanstack/react-router'
import { Icon } from '@iconify-icon/react'
import gsap from 'gsap'
import { Gamepad2, Mail } from 'lucide-react'
import { ourTeamData } from '@/data/our-team'
import { useAppStore } from '@/store/store'

function Member() {
  const { memberId } = useParams({ from: '/team/$memberId' })
  const member = ourTeamData.find((m) => m.id === memberId)

  const theme = useAppStore((s) => s.theme)
  const [hovered, setHovered] = useState<string | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2.out' },
      })
      tl.from(imageRef.current, { opacity: 0, scale: 0.8, y: 30 })
      tl.from(textRef.current, { opacity: 0, y: 40 }, '-=0.4')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const switchTheme =
    theme === 'dark'
      ? 'border-white text-white'
      : 'border-oxfordBlue text-oxfordBlue'

  if (!member)
    return (
      <div className="text-center text-gray-400 mt-20">Member not found</div>
    )

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
    >
      {/* IMAGE */}
      <div
        ref={imageRef}
        className="w-40 h-40 md:h-52 md:w-52 rounded-full overflow-hidden border-4 border-cinnabar shadow-lg"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* NAME */}
      <div ref={textRef} className="text-center mt-8 max-w-3xl">
        <h1 className="text-4xl md:text-7xl uppercase font-bold tracking-tight">
          {member.name}
        </h1>

        {/* ROLE */}
        <p className="text-lg mt-4">{member.role}</p>

        {/* ALIASES */}
        <p className="text-lg mt-4">Aliases: {member.aliases.join(', ')}</p>

        {/* BIO */}
        <p className="mt-6 leading-relaxed md:text-lg">{member.description}</p>

        {/* FAVORITE GAMES */}
        <div className="mt-8">
          <div className="flex justify-center items-center gap-2 text-amber font-semibold uppercase tracking-wider">
            <Gamepad2 className="w-5 h-5" />
            <span className="md:text-lg">Favorite Games</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {member.favoriteGames.map((game) => (
              <div
                key={game}
                className="px-4 py-1 bg-gray-500 text-white/80 rounded-md text-sm md:text-[18px] backdrop-blur-sm"
              >
                {game}
              </div>
            ))}
          </div>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-center gap-5 mt-10">
          {member.socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(social.name)}
              onMouseLeave={() => setHovered(null)}
              className={`p-2 border-2 rounded-md flex justify-center items-center ${switchTheme}`}
              style={{
                backgroundColor:
                  hovered === social.name ? social.color : 'transparent',
                borderColor: hovered === social.name ? social.color : '',
              }}
            >
              <Icon icon={social.icon} className="h-5 w-5 relative top-0.5" />
            </a>
          ))}
        </div>

        {/* CONTACT */}
        <div className="mt-8 flex justify-center items-center gap-2 text-gray-400">
          <Mail className="w-5 h-5 text-gray-500" />
          <a
            href={`mailto:${member.contact}`}
            className="hover:text-white transition"
          >
            {member.contact}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Member
