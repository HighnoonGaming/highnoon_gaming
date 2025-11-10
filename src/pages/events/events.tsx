import { Calendar, MapPin } from 'lucide-react'
import { events } from '@/data/events'

function Events() {
  return (
    <div className="h-auto w-full flex flex-col gap-10 p-4 md:p-10">
      <div className="flex justify-between items-end">
        <h1 className="font-bold text-5xl lg:text-7xl uppercase">Events</h1>

        <button className="flex gap-2">
          <Calendar width={20} height={20} />
          <span className="text-sm font-bold mt-[0.19em]">All Events</span>
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {/* TOP LEFT GRID */}
        <div className="rounded-md h-80 lg:h-full overflow-hidden relative hover:cursor-pointer shadow-sm">
          {events.slice(0, 1).map((event, index) => (
            <div key={index} className="">
              {/* IMAGE */}
              <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="object-cover h-full w-full"
                />
              </div>

              {/* TITLE & LOCATION */}
              <div className="h-20 w-full bg-white absolute bottom-0 z-10 flex">
                <div className="w-[90%] flex flex-col gap-1 justify-center px-5">
                  <p className="text-oxfordBlue font-bold uppercase">
                    {event.title}
                  </p>

                  <span className="flex items-center gap-2">
                    <MapPin className="text-oxfordBlue h-5 w-5" />
                    <p className="text-oxfordBlue">{event.location}</p>
                  </span>
                </div>

                {/* DATE */}
                <div className="bg-cinnabar flex grow items-center justify-center">
                  <p className="max-w-20 lg:max-w-10 text-center uppercase font-bold text-md font-oswald">
                    {event.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TOP RIGHT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-rows-2 gap-7">
          {events.slice(1, 5).map((event, index) => (
            <div
              key={index}
              className="h-45 rounded-md relative overflow-hidden hover:cursor-pointer shadow-sm"
            >
              <div>
                {/* IMAGE */}
                <div className="absolute top-0 left-0 h-full w-full">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* TITLE & LOCATION */}
                <div className="h-15 w-full bg-white absolute bottom-0 z-10 flex">
                  <div className="w-[85%] flex flex-col gap-1 justify-center px-5">
                    <p className="text-oxfordBlue font-bold uppercase text-sm">
                      {event.title}
                    </p>

                    <span className="flex items-center gap-1">
                      <MapPin className="text-oxfordBlue h-4 w-4" />
                      <p className="text-oxfordBlue text-sm">
                        {event.location}
                      </p>
                    </span>
                  </div>

                  {/* DATE */}
                  <div className="bg-cinnabar flex grow items-center justify-center">
                    <p className="max-w-8 text-center uppercase font-bold text-sm font-oswald">
                      {event.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM LEFT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {events.slice(5, 7).map((event, index) => (
            <div
              key={index}
              className="rounded-md h-50 lg:h-auto relative overflow-hidden hover:cursor-pointer shadow-sm"
            >
              <div>
                {/* IMAGE */}
                <div className="absolute top-0 left-0 h-full w-full">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* TITLE & LOCATION */}
                <div className="h-15 w-full bg-white absolute bottom-0 z-10 flex">
                  <div className="w-[85%] flex flex-col gap-1 justify-center px-5">
                    <p className="text-oxfordBlue font-bold uppercase text-sm">
                      {event.title}
                    </p>

                    <span className="flex items-center gap-1">
                      <MapPin className="text-oxfordBlue h-4 w-4" />
                      <p className="text-oxfordBlue text-sm">
                        {event.location}
                      </p>
                    </span>
                  </div>

                  {/* DATE */}
                  <div className="bg-cinnabar flex grow items-center justify-center">
                    <p className="max-w-8 text-center uppercase font-bold text-sm font-oswald">
                      {event.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM RIGHT GRID */}
        <div className="rounded-md h-80 relative overflow-hidden hover:cursor-pointer shadow-sm">
          {events.slice(7, 8).map((event, index) => (
            <div key={index}>
              {/* IMAGE */}
              <div className="absolute top-0 left-0 h-full w-full">
                <img
                  src={event.img}
                  alt={event.title}
                  className="object-cover h-full w-full"
                />
              </div>

              {/* TITLE & LOCATION */}
              <div className="h-20 w-full bg-white absolute bottom-0 z-10 flex">
                <div className="w-[90%] flex flex-col gap-1 justify-center px-5">
                  <p className="text-oxfordBlue font-bold uppercase">
                    {event.title}
                  </p>

                  <span className="flex items-center gap-2">
                    <MapPin className="text-oxfordBlue h-5 w-5" />
                    <p className="text-oxfordBlue">{event.location}</p>
                  </span>
                </div>

                {/* DATE */}
                <div className="bg-cinnabar flex grow items-center justify-center">
                  <p className="max-w-10 text-center uppercase font-bold text-md font-oswald">
                    {event.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
