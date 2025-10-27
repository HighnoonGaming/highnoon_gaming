import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useAppStore } from '@/store/store'
import Footer from '@/components/Footer'
import ThemeSwitchButton from '@/components/ThemeSwitchButton'
import MainButton from '@/components/MainButton'
import VideoModal from '@/components/VideoModal'
import { ourFocusData } from '@/data/our-focus'
import { ourTeamData } from '@/data/our-team'
import { sponsors } from '@/data/sponsors'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [src, setSrc] = useState<string | undefined>(undefined)

  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const theme = useAppStore((s) => s.theme)

  const bannerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const ourTeamRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const sponsorRef = useRef<HTMLDivElement>(null)

  // GSAP
  useEffect(() => {
    if (!bannerRef.current) return

    const elements = bannerRef.current.querySelectorAll('div')

    gsap.to(elements, {
      scrollTrigger: {
        trigger: bannerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
      transform: 'scale3d(0.95, 0.95, 1)',
      transformStyle: 'preserve-3d',
      transformOrigin: 'center center',
      ease: 'none',
    })
  }, [])

  useEffect(() => {
    if (!bannerRef.current || !videoRef.current) return

    gsap.to(videoRef.current, {
      yPercent: -10,
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      ourTeamData.forEach((member, index) => {
        const trigger = ourTeamRef.current?.querySelector(`#member-${index}`)

        ScrollTrigger.create({
          trigger,
          start: 'top center',
          end: 'bottom center',
          onEnter: () =>
            gsap.to(imageRef.current, {
              backgroundColor: member.color,
              duration: 0.8,
            }),
          onEnterBack: () =>
            gsap.to(imageRef.current, {
              backgroundColor: member.color,
              duration: 0.8,
            }),
        })
      })
    }, ourTeamRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!sponsorRef.current) return

    const container = sponsorRef.current
    let allSponsors = container.querySelectorAll('div')

    const moveAll = () => {
      const firstSponsor = allSponsors[0]
      const firstWidth = firstSponsor.offsetWidth

      gsap.to(allSponsors, {
        x: `-=${firstWidth}`,
        duration: 5,
        ease: 'linear',
        onComplete: () => {
          container.appendChild(firstSponsor)

          allSponsors = container.querySelectorAll('div')

          allSponsors.forEach((sponsor) => {
            const currentX = gsap.getProperty(sponsor, 'x') as number
            gsap.set(sponsor, { x: currentX + firstWidth })
          })

          moveAll()
        },
      })
    }

    moveAll()
  }, [])

  // CAROUSEL
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 3 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 3 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <>
      <div className="min-h-screen relative">
        <ThemeSwitchButton />

        <div className="px-20 h-full">
          {/* BANNER & VIDEO SECTION */}
          <div className="flex flex-col min-h-[250vh] relative">
            <section
              id="banner"
              ref={bannerRef}
              className="sticky top-0 min-h-[80vh] max-w-400 p-7 mx-auto flex justify-center items-center z-0"
            >
              <div className="text-center">
                <div className="m-4">
                  <p className="uppercase text-[0.7rem] text-center tracking-wider mb-0 mt-0">
                    Proudly made in Barbados
                  </p>
                </div>

                <div className="m-4">
                  <h2 className="uppercase font-bold text-8xl text-center mb-0 mt-0">
                    Building the future of esports & gaming
                  </h2>
                </div>

                <p className="text-center">
                  A Barbadian group focused on building the local gaming and
                  eSports community through events and organization.
                </p>
              </div>
            </section>

            <section
              id="video"
              ref={videoRef}
              className="h-screen w-full sticky top-[10vh] z-10 flex flex-col justify-center items-center"
            >
              <iframe
                className="w-full h-[80vh]"
                src="https://www.youtube.com/embed/NGlgn8E043c?si=-OmQhXg15Y7zxDvE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </section>
          </div>

          {/* ABOUT SECTION */}
          <section id="about" className="mt-50 h-160 flex">
            {/* LEFT CONTENT */}
            <div className="w-1/2 h-full flex flex-col justify-center">
              <p className="uppercase">About Us</p>

              <h3 className="mt-4 text-7xl font-bold uppercase">
                We are highnoon
              </h3>

              <p className="mt-6 text-[17px] max-w-[85%]">
                Highnoon Gaming is a Barbadian gaming group co-founded by
                Nicholas Roach and Ricardo Knight, which began as a community
                college project and has grown into an event organizer and
                promoter of eSports in Barbados.
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-1/2 h-full py-9 px-15">
              <div className="h-full w-full flex justify-center items-center bg-cinnabar">
                <button
                  onClick={() => {
                    setIsModalOpen(true)
                    setSrc(
                      'https://www.youtube.com/embed/wo-E8bJaUR4?si=EpyN_ngWmBGHvsqE',
                    )
                  }}
                >
                  <Play className="text-white w-16 h-16 m-10" />
                </button>
              </div>
            </div>
          </section>

          {/* OUR FOCUS SECTION */}
          <section id="our-focus" className="mt-40 mb-60 h-70 flex">
            {/* LEFT CONTENT */}
            <div className="h-full w-[45%]">
              <h3 className="text-7xl font-bold uppercase">Our Core Focus</h3>

              <p className="mt-3 max-w-140">
                We are focused on building the local gaming and eSports
                community through organizing competitive gaming tournaments,
                hosting weekly gaming events, like "No More Boring Sundays" and
                providing gaming setups for events like AnimeKon.
              </p>

              <div className="mt-5">
                <MainButton text="About Us" onClick={() => {}} />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="h-full w-[55%] grid grid-cols-2 grid-rows-2 gap-4">
              {ourFocusData.map((focus, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-4xl uppercase font-extrabold">
                    {focus.title}
                  </h3>

                  <p className="text-sm mt-2">{focus.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* OUR TEAM SECTION */}
          <section
            ref={ourTeamRef}
            id="our-teams"
            className="my-40 h-auto flex flex-col"
          >
            {/* HEADER */}
            <div className="flex flex-col gap-5">
              <h3 className="text-7xl font-bold uppercase">Our Team</h3>

              <p className="max-w-180">
                We are a local organization dedicated to fostering the growth of
                the gaming community in Barbados. Our team is passionate about
                esports and gaming, and we work tirelessly to create engaging
                events and opportunities for gamers of all levels.
              </p>
            </div>

            {/* PARALLAX SECTION */}
            <div className="relative min-h-[300vh] flex">
              {/* IMAGE */}
              <div className="sticky top-0 w-1/2 h-screen flex items-center ">
                <div ref={imageRef} className="h-[85%] w-[95%] "></div>
              </div>

              <div className="w-1/2 flex flex-col justify-start">
                {ourTeamData.map((member, index) => (
                  <div
                    key={index}
                    id={`member-${index}`}
                    className="h-screen flex flex-col justify-center pl-10"
                  >
                    {/* <div className="flex flex-col gap-2 pl-10"> */}
                    <p className="text-sm font-semibold uppercase">
                      {member.role}
                    </p>

                    <h4 className="text-7xl font-bold uppercase">
                      {member.name}
                    </h4>

                    <div className="mt-10">
                      <MainButton text="Learn More" onClick={() => {}} />
                    </div>
                  </div>
                  // </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* SPONSORS */}
        <section
          id="sponsors"
          ref={sponsorRef}
          className="h-80 my-40 flex overflow-hidden"
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="min-w-200 h-full flex justify-center items-center"
            >
              <p className="font-bold text-8xl font-oswald uppercase">
                {sponsor}
              </p>
            </div>
          ))}
        </section>

        {/* HIGHNOON UPDATES */}
        <section id="updates" className="h-screen pl-20 mb-10">
          <h3 className="text-7xl font-bold uppercase">Highnoon Updates</h3>

          <div className="flex justify-between items-center pr-20 my-2">
            <p>
              Stay up to date with press release, content, team updates and
              more.
            </p>

            <MainButton text="View More" onClick={() => {}} />
          </div>

          <div className="relative h-[70vh] mt-10 flex overflow-hidden ">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col absolute w-[25%] transition-transform duration-500"
                style={{
                  left: `${index * 30}%`,
                  transform: `translateX(-${currentSlide * 120}%)`,
                }}
              >
                <div className="min-h-65 min-w-95 bg-cinnabar"></div>

                <div className="flex gap-5 mt-5 mb-3 items-center">
                  <span className="uppercase text-[12px] bg-gray-500 py-1 px-2 text-white">
                    News
                  </span>

                  <p className="uppercase text-[12px]">5 min read</p>
                </div>

                <h4 className="text-4xl font-bold line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos natus eum, excepturi autem aspernatur quo
                  blanditiis expedita nobis in eaque reprehenderit quae eius
                  repudiandae, rerum quasi magni laborum? Quisquam, tempore.
                </h4>

                <button className="mt-7 flex gap-2 items-center">
                  Read More <ChevronRight />
                </button>
              </div>
            ))}
          </div>

          {/* NAVIGATION */}
          <div className="controls px-20 w-full flex justify-between">
            {/* INDICATORS */}
            <div className="flex gap-2 items-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full ${
                    index === currentSlide
                      ? theme === 'light'
                        ? 'bg-oxfordBlue'
                        : 'bg-white'
                      : 'bg-gray-500'
                  }`}
                ></button>
              ))}
            </div>

            {/* NAVIGATION BUTTONS */}
            <div className="flex gap-3 items-center">
              <button
                onClick={prevSlide}
                className={`p-2 rounded-full ${theme === 'light' ? 'bg-oxfordBlue' : 'bg-white'}`}
              >
                <ChevronLeft
                  className={`${theme === 'dark' ? 'text-oxfordBlue' : 'text-white'}`}
                />
              </button>

              <button
                onClick={nextSlide}
                className={`p-2 rounded-full ${theme === 'light' ? 'bg-oxfordBlue' : 'bg-white'}`}
              >
                <ChevronRight
                  className={`${theme === 'dark' ? 'text-oxfordBlue' : 'text-white'}`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>

      {isModalOpen && (
        <VideoModal closeModal={() => setIsModalOpen(false)} src={src} />
      )}
    </>
  )
}

export default App
