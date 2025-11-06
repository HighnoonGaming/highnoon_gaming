import { useEffect, useRef, useState } from 'react'
import { ChevronRight, Play } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MainButton from '@/components/MainButton'
import VideoModal from '@/components/VideoModal'
import { ourFocusData } from '@/data/our-focus'
import { ourTeamData } from '@/data/our-team'
import { sponsors } from '@/data/sponsors'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [src, setSrc] = useState<string | undefined>(undefined)

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

  return (
    <>
      <div className="min-h-screen relative">
        <div className="px-3 md:px-10 lg:px-20 h-full">
          {/* BANNER & VIDEO SECTION */}
          <div className="flex flex-col min-h-[250vh] relative">
            <section
              id="banner"
              ref={bannerRef}
              className="sticky top-0 min-h-[80vh] lg:max-w-400 p-7 mx-auto flex justify-center items-center z-0"
            >
              <div className="text-center">
                <div className="m-4">
                  <p className="uppercase text-[0.7rem] text-center tracking-wider mb-0 mt-0">
                    Proudly made in Barbados
                  </p>
                </div>

                <div className="m-4">
                  <h2 className="uppercase font-bold text-2xl md:text-6xl lg:text-8xl text-center mb-0 mt-0">
                    Building the future of esports & gaming
                  </h2>
                </div>

                <p className="text-center not-lg:text-sm">
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
                src="https://player.twitch.tv/?channel=highnoongamingbb&parent=localhost"
                allowFullScreen
                className="w-full h-145 min-h-120"
              ></iframe>
            </section>
          </div>

          {/* ABOUT SECTION */}
          <section id="about" className="lg:mt-50 h-160 flex not-lg:flex-col">
            {/* TEXT CONTENT */}
            <div className="lg:w-1/2 h-full flex flex-col justify-center">
              <p className="uppercase">About Us</p>

              <h3 className="mt-4 text-4xl md:text-7xl font-bold uppercase">
                We are highnoon
              </h3>

              <p className="mt-6 text-[15px] md:text-[17px] lg:max-w-[85%]">
                Highnoon Gaming is a Barbadian gaming group co-founded by
                Nicholas Roach and Ricardo Knight, which began as a community
                college project and has grown into an event organizer and
                promoter of eSports in Barbados.
              </p>
            </div>

            {/* VIDEO CONTENT */}
            <div className="lg:w-1/2 h-full py-9 px-15">
              <div className="h-full md:h-[350px] lg:h-full w-full flex justify-center items-center bg-cinnabar">
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
          <section
            id="our-focus"
            className="mt-40 mb-60 lg:h-70 flex not-lg:flex-col"
          >
            {/* LEFT/TOP CONTENT */}
            <div className="h-full lg:w-[45%]">
              <h3 className="text-4xl md:text-7xl font-bold uppercase">
                Our Core Focus
              </h3>

              <p className="mt-3 text-sm md:text-[16px] lg:max-w-140">
                We are focused on building the local gaming and eSports
                community through organizing competitive gaming tournaments,
                hosting weekly gaming events, like "No More Boring Sundays" and
                providing gaming setups for events like AnimeKon.
              </p>

              <div className="mt-5">
                <MainButton
                  text="About Us"
                  onClick={() => {}}
                  textSize="text-[14px]"
                />
              </div>
            </div>

            {/* RIGHT/BOTTOM CONTENT */}
            <div className="not-lg:mt-5 h-full lg:w-[55%] grid grid-cols-2 grid-rows-2 gap-4">
              {ourFocusData.map((focus, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-lg md:text-2xl lg:text-4xl uppercase font-extrabold">
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

              <p className="max-w-180 text-sm md:text-lg">
                We are a local organization dedicated to fostering the growth of
                the gaming community in Barbados. Our team is passionate about
                esports and gaming, and we work tirelessly to create engaging
                events and opportunities for gamers of all levels.
              </p>
            </div>

            {/* PARALLAX SECTION */}
            <div className="relative min-h-[200vh] lg:min-h-[300vh] flex">
              {/* IMAGE */}
              <div className="sticky top-0 not-lg:mt-10 w-1/2 h-[50vh] lg:h-screen flex items-center justify-center">
                <div
                  ref={imageRef}
                  className="h-[65%] w-full md:h-[85%] md:w-[95%]"
                ></div>
              </div>

              <div className="w-1/2 flex flex-col not-lg:mt-10">
                {ourTeamData.map((member, index) => (
                  <div
                    key={index}
                    id={`member-${index}`}
                    className={`h-screen not-lg:gap-2 flex flex-col pl-10 justify-start lg:justify-center not-lg:pt-45`}
                  >
                    <p className="text-sm font-semibold uppercase">
                      {member.role}
                    </p>

                    <h4 className="text-sm md:text-7xl font-bold uppercase">
                      {member.name}
                    </h4>

                    <div className="mt-10">
                      <MainButton
                        text="Learn More"
                        onClick={() => {}}
                        textSize="text-[10px]"
                      />
                    </div>
                  </div>
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
              <p className="font-bold text-6xl md:text-7xl lg:text-8xl font-oswald uppercase">
                {sponsor.name}
              </p>
            </div>
          ))}
        </section>

        {/* HIGHNOON UPDATES */}
        <section id="updates" className="px-5 mb-30">
          <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase">
            Highnoon Updates
          </h3>

          <div className="flex flex-col md:flex-row justify-between items-center pr-20 my-2">
            <p>
              Stay up to date with press release, content, team updates and
              more.
            </p>

            <div className="mt-4 flex self-start">
              <MainButton
                text="View More"
                onClick={() => {}}
                textSize="text-[14px]"
              />
            </div>
          </div>

          {/* GRID */}
          <div className="w-full mt-10 gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="">
                <div className="h-60 lg:h-100 bg-cinnabar"></div>

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
        </section>
      </div>

      {isModalOpen && (
        <VideoModal closeModal={() => setIsModalOpen(false)} src={src} />
      )}
    </>
  )
}

export default App
