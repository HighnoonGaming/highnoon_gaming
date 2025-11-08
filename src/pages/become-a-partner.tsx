import { Link } from '@tanstack/react-router'

Link

function BecomeAPartner() {
  return (
    <div className="p-8">
      {/* BECOME A PARTNER BANNER */}
      <div className="w-full h-50 lg:h-60 rounded-2xl flex items-center justify-center md:justify-start p-8 md:pl-20 bg-cinnabar">
        <h1 className="font-bold text-[40px] md:text-[50px] lg:text-[60px]">
          Become a Partner
        </h1>
      </div>

      {/* MESSAGE */}
      <div className="mt-20 flex flex-col gap-5 px-5 lg:px-20 md:text-2xl lg:text-xl leading-relaxed">
        <p>
          At Highnoon Gaming, we’re dedicated to building strong partnerships
          with organizations and individuals who share our passion for advancing
          the gaming and esports landscape in Barbados and across the Caribbean.
          We believe in collaboration, innovation, and creating meaningful
          experiences that elevate the gaming community.
        </p>

        <p>
          If you’re interested in partnering with us, sponsoring an event, or
          learning more about what we do, we’d love to connect.
        </p>

        <p className="">
          Contact us at{' '}
          <Link to="/contact" className="border-b-[0.12rem]">
            our contact page
          </Link>{' '}
          or email us at{' '}
          <a
            href="mailto:info@highnoongaming.com"
            className="border-b-[0.12rem]"
          >
            info@highnoongaming.com
          </a>
          .
        </p>
      </div>

      {/* VIDEO */}
      <div className="w-full h-50 md:h-90 lg:h-150 mt-10 lg:px-30">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/wo-E8bJaUR4?si=EpyN_ngWmBGHvsqE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default BecomeAPartner
