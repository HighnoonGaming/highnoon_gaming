import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Icon } from '@iconify-icon/react'
import { contactInfo, socials } from '@/data/footer'
import { navLinks } from '@/data/links'

function Footer() {
  const [hovered, setHovered] = useState<string | null>(null)
  return (
    <div
      className={`h-[80vh] md:h-[60vh] w-full flex flex-col gap-5 p-5 md:p-15 bg-cinnabar overflow-hidden`}
    >
      {/* TOP */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 h-full">
        {/* SOCIALS */}
        <div className="h-full flex flex-col gap-5">
          <h1 className="uppercase text-center leading-tight md:self-start">
            <span className="font-bold text-5xl">Highnoon</span> <br />
            <span className="font-semibold text-sm  tracking-[0.4rem]">
              Gaming
            </span>
          </h1>

          <p>Follow our socials to stay up-to-date on all things Highnoon.</p>

          <div className="flex gap-5 items-center">
            {socials.map((social) => (
              <button
                key={social.name}
                onMouseEnter={() => setHovered(social.name)}
                onMouseLeave={() => setHovered(null)}
                className="p-2 border-2 text-white rounded-md flex justify-center items-center transition-all duration-500"
                style={{
                  backgroundColor:
                    hovered === social.name ? social.color : 'transparent',
                  borderColor: hovered === social.name ? social.color : 'white',
                }}
              >
                <Icon icon={social.icon} width={18} height={18} />
              </button>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div className="h-full flex justify-center">
          <div className="h-full w-full gap-2 md:gap-0 flex flex-wrap lg:flex-col md:justify-between">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="uppercase text-[13px] font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="h-full flex flex-col gap-6">
          <p className="text-lg uppercase font-semibold">Contact Information</p>

          <div className="flex flex-col gap-3">
            {contactInfo.map((info) => (
              <span className="flex gap-5 items-center">
                {<info.icon width={16} height={16} />}
                <p>{info.value}</p>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="gap-2 md:gap-0 flex flex-col md:flex-row justify-between mt-5 border-t py-5 items-center">
        <p>© 2025 Highnoon Gaming. All rights reserved.</p>

        <div className="flex gap-4 lg:gap-7">
          <button className="text-sm">Privacy Policy</button>
          <button className="text-sm">Terms of Service</button>
          <button className="text-sm">Support</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
