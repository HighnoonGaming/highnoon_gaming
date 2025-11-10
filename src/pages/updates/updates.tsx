import { useParams, useRouter } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { updates } from '@/data/updates'

function Updates() {
  const router = useRouter()
  const { updateId } = useParams({ from: '/updates/$updateId' })
  const update = updates.find((u) => u.id === updateId)

  if (!update) {
    return (
      <div className="flex h-screen items-center justify-center text-5xl uppercase font-bold">
        Article not found.
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen flex justify-center px-6 py-12">
      <article className="max-w-5xl w-full space-y-8">
        {/* HEADER IMAGE */}
        <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src={update.img}
            alt={update.tags.join(', ')}
            className="w-full h-full object-cover"
          />
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {update.tags.map((tag) => (
            <span
              key={tag}
              className="uppercase bg-cinnabar px-3 py-1 text-white rounded-md tracking-wider"
            >
              {tag}
            </span>
          ))}

          <p className="text-gray-400">{update.length} min read</p>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl uppercase font-bold tracking-wider leading-snug">
          {update.tags.includes('team')
            ? 'Team Spotlight'
            : update.tags.includes('events')
              ? 'Events'
              : 'Gaming News'}
        </h1>

        {/* ARTICLE TEXT */}
        <div className="mt-2 leading-relaxed">
          {update.text.split('\n\n').map((para, index) => (
            <p key={index} className="mb-6 ">
              {para}
            </p>
          ))}
        </div>

        {/* ARTICLE FOOTER */}
        <div className="pt-10 border-t border-gray-700 flex justify-between items-center">
          <button
            onClick={() => router.history.back()}
            className="text-cinnabar font-medium tracking-wide flex gap-2"
          >
            <ChevronLeft />
            Back to Updates
          </button>
          <p className="text-gray-500 text-sm">
            Published: {new Date().toLocaleDateString()}
          </p>
        </div>
      </article>
    </div>
  )
}

export default Updates
