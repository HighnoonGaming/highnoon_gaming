import { useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from '@tanstack/react-router'
import { CalendarCheck, ChevronLeft, MapPin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { events } from '@/data/events'

gsap.registerPlugin(ScrollTrigger)

function Event() {
  const router = useRouter()
  const { eventId } = useParams({ from: '/events/$eventId' })
  const event = events.find((e) => e.id === eventId)

  const [loading, setLoading] = useState(true)

  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  // Fake loading animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loading && event) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(containerRef.current, { opacity: 0, duration: 0.8 })
        .from(imgRef.current, { scale: 1.2, opacity: 0, duration: 1 }, '-=0.3')
        .from(
          textRef.current?.children || [],
          { y: 40, opacity: 0, duration: 0.6, stagger: 0.2 },
          '-=0.4',
        )
    }
  }, [event, loading])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="relative flex flex-col gap-10 items-center justify-center p-5">
          <div className="w-24 h-24 border-4 border-amber border-t-transparent rounded-full animate-spin"></div>

          <p className=" text-sm font-semibold">Loading Event...</p>
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="flex h-screen items-center justify-center text-3xl uppercase font-bold">
        No Event found with ID {eventId}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col p-5 lg:flex-row items-center justify-center lg:gap-5 min-h-screen w-full overflow-hidden"
    >
      {/* EVENT IMAGE */}
      <div className="lg:w-1/2 h-64 md:h-full flex justify-center items-center">
        <img
          ref={imgRef}
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover rounded-2xl shadow-2xl"
        />
      </div>

      {/* EVENT DETAILS */}
      <div
        ref={textRef}
        className="relative flex flex-col justify-center items-start z-10 mt-5 lg:mt-0"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-amber to-cinnabar bg-clip-text text-transparent leading-none pb-2">
          {event.title}
        </h1>

        <p className="text-xl md:text-3xl lg:text-xl font-light flex items-center gap-3 mt-3">
          <MapPin className="h-4 w-4 text-gamboge" /> {event.location}
        </p>

        <p className="text-lg md:text-2xl lg:text-xl font-light mt-5 flex gap-2 items-center">
          <CalendarCheck className=" text-cinnabar" /> {event.date}
        </p>

        <p className="not-md:max-w-md lg:max-w-md leading-relaxed mt-2 text-lg">
          Get ready for an unforgettable experience filled with gaming, music,
          and community. Join players from across the island for epic showdowns,
          exclusive prizes, and a vibe you won’t forget!
        </p>

        <button
          onClick={() => router.history.back()}
          className="mt-10 text-cinnabar/80 hover:text-cinnabar text-lg font-semibold flex gap-2 items-center"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Events
        </button>
      </div>
    </div>
  )
}

export default Event
