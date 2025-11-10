import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { updates } from '@/data/updates'
import SearchBar from '@/hooks/searchBar'

function UpdatesIndex() {
  const [query, setQuery] = useState('')

  const filteredUpdates = updates.filter((update) => {
    const lowerQuery = query.toLowerCase()
    return (
      update.text.toLowerCase().includes(lowerQuery) ||
      update.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    )
  })

  return (
    <div className="min-h-screen w-ful px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* HEADER */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            Latest Updates
          </h1>

          <p className="text-gray-400 mt-5">
            Stay informed with the latest team highlights, esports news, and
            events.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="flex justify-center w-full">
          <div className="w-full sm:w-[70%] md:w-[50%]">
            <SearchBar
              placeholder="Search articles or tags..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              showIcon
              padding="p-1"
            />
          </div>
        </div>

        {/* ARTICLE GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
          {filteredUpdates.length > 0 ? (
            filteredUpdates.map((update) => (
              <Link
                key={update.id}
                to="/updates/$updateId"
                params={{ updateId: update.id }}
                className="group flex flex-col bg-neutral-900 rounded-2xl overflow-hidden shadow-md hover:shadow-cinnabar/40 transition duration-300"
              >
                {/* IMAGE */}
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src={update.img}
                    alt={update.tags.join(', ')}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    {update.tags.map((tag) => (
                      <span
                        key={tag}
                        className="uppercase text-[11px] bg-cinnabar text-white px-2 py-1 rounded-md tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                    <p className="text-[11px] text-gray-400 uppercase ml-auto">
                      {update.length} min read
                    </p>
                  </div>

                  <p className="line-clamp-4 text-gray-300 text-sm leading-relaxed">
                    {update.text}
                  </p>

                  <div className="flex items-center text-cinnabar font-medium mt-4">
                    Read More
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-10 font-bold uppercase">
              No articles found for “{query}”.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UpdatesIndex
