import { Link } from '@tanstack/react-router'
import { useAppStore } from '@/store/store'
import { sponsors } from '@/data/sponsors'

function Partners() {
  const theme = useAppStore((s) => s.theme)

  const toggleTheme =
    theme === 'dark' ? 'bg-white text-oxfordBlue' : 'bg-oxfordBlue text-white'
  const toggleThemeReverse =
    theme === 'light' ? 'bg-white text-oxfordBlue' : 'bg-oxfordBlue text-white'

  return (
    <div className="flex flex-col">
      {/* BANNER */}
      <div id="banner" className="relative">
        {/* IMG */}
        <div className={`absolute top-0 left-0 h-50 lg:h-100 w-full `}>
          <img
            src={sponsors[0].logo}
            alt={`image of highnoon team`}
            className="h-full w-full object-cover"
          />
        </div>

        {/* MESSAGE & LINK */}
        <div
          className={`relative mt-25 lg:mt-75 flex flex-col gap-5 lg:gap-8 m-10 p-5 md:p-20 rounded-xl z-10 ${toggleTheme}`}
        >
          <h1 className="uppercase font-bold text-lg md:text-2xl text-cinnabar">
            Partnership Opportunities
          </h1>

          <h2 className="font-bold text-3xl md:text-5xl text-cinnabar">
            Partner With Highnoon
          </h2>

          <p className="text-sm md:text-lg lg:max-w-220">
            We are always looking for opportunities to grow our brand with
            partners and sponsors. As a Barbados-based esports organization,
            we’re dedicated to expanding the local gaming scene, supporting
            talented players, and creating meaningful collaborations that
            elevate Caribbean esports to the global stage. Join us and be part
            of the movement shaping the future of esports in the Caribbean.
          </p>

          <Link
            to="/become-a-partner"
            onClick={() => {}}
            className={`px-5 py-2.5 md:py-3 rounded-full self-start uppercase text-sm md:text-lg font-semibold ${toggleThemeReverse}`}
          >
            Partner with us
          </Link>
        </div>
      </div>

      {/* VIDEO */}
      <div className="p-5 flex items-center justify-center h-50 w-full md:h-100 lg:h-150">
        <iframe
          className="w-full lg:w-2/3 h-full"
          src="https://www.youtube.com/embed/xsrFnvW5BWI?si=s_VbkQkaS4CgyV9u"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* OUR PARTNER */}
      <div className="p-5 lg:mt-10">
        <div className="h-80 md:h-120 lg:h-50 w-full rounded-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* TOP */}
          <div
            className={`h-[40%] lg:h-full w-full lg:w-[30%] flex items-center justify-center bg-cinnabar `}
          >
            <p className="font-bold uppercase lg:normal-case text-2xl md:text-5xl lg:text-4xl">
              Our Partners
            </p>
          </div>

          {/* BOTTOM */}
          <div className="h-[60%] lg:h-full grow">
            <img
              src={sponsors[0].logo}
              alt=""
              className="h-full w-full grayscale-100 object-cover"
            />
          </div>
        </div>

        {/* PARTNERS */}
        <div className="flex flex-col mt-10 lg:mt-20 lg:px-80">
          {sponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex flex-col mb-20 border-b-[0.12rem] border-gray-500 pb-25 "
            >
              {/* LOGO */}
              <div className="h-20 w-full p-5 flex items-center justify-center">
                {/* <img
                  src={sponsor.logo}
                  alt={`logo for ${sponsor.name}`}
                  className="h-full w-full object-cover"
                /> */}
                <p className="uppercase font-bold text-3xl">{sponsor.name}</p>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-10 md:text-2xl md:text-center lg:text-start">
                {sponsor.description}
              </div>

              {/* BUTTON */}
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase text-sm md:text-[20px] lg:text-sm bg-cinnabar w-55 md:w-65 lg:w-55 h-10 md:h-15 lg:h-13 flex items-center justify-center rounded-full self-center mt-10"
              >
                Visit {sponsor.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners
