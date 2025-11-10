import { Link } from '@tanstack/react-router'
import { Calendar, MapPin } from 'lucide-react'
import { events } from '@/data/events'

function AllEvents() {
  return (
    <div className="min-h-screen px-6 py-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 text-center bg-linear-to-r from-amber to-cinnabar bg-clip-text text-transparent leading-none pb-3">
        Upcoming Events
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-10">
        {events.map((event) => (
          <Link
            key={event.id}
            to="/events/$eventId"
            params={{ eventId: event.id }}
            className="group relative block overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            {/* EVENT IMAGE */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* SHADER OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center">
              <h2 className="text-gray-200 text-xl md:text-2xl font-bold text-center px-4 pb-6 transition-all duration-500 group-hover:translate-y-10">
                {event.title}
              </h2>
            </div>

            {/* SLIDE UP PANEL */}
            <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 flex flex-col items-start space-y-2">
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="w-4 h-4 text-gamboge" /> {event.date}
              </p>

              <p className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-cinnabar" /> {event.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllEvents
